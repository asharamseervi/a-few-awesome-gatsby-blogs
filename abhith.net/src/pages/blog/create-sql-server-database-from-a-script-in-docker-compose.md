---
templateKey: blog-post
title: Create SQL Server Database From a Script in Docker-Compose
description: >-
  Run a SQL Server container with database initialized from a script using docker-compose.
author: Abhith Rajan
authorURL: 'https://twitter.com/abhithrajan'
date: 2019-05-21T14:55:00.000Z
image: /img/chuttersnap-255210-unsplash.jpg
tags:
  - docker
  - sql-server
---

In one of our project which using **Microsoft Orleans**, We used ADO.NET clustering with **SQL Server**. When we tried to containerize the application suite, we need a SQL Server instance in a container (for development environment) with a **database initialized** with some tables and all.

> Note: The below setup is not recommended for a **PRODUCTION** environment.

For that solution, our **docker-compose.yml** looks like below,

```yml
version: '3.4'

services:
  other.service:
    ...
    environment:
      - ConnectionString=Data Source=CONTAINER_NAME_OF_db;Initial Catalog=DB_NAME;User Id=sa;Password=Your_password123;Pooling=False;Max Pool Size=200;MultipleActiveResultSets=True
    depends_on:
      - db
  db:
    image: my/db/image/name
    build:
      context: .
      dockerfile: data/Dockerfile
    # ports:
    #   - "1444:1433"
    volumes:
     - mssqldata:/var/opt/mssql

volumes:
  mssqldata:

```

In the above, the **other.service** can be anything (WEB App/Console App etc) that requires the sql server db instance. We marked the dependency between these services properly using [depends_on](https://docs.docker.com/compose/compose-file/#depends_on) in the **docker-compose.yml**.

The **volumes** is specified in the **docker-compose.yml** in-order to [persist](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-configure-docker?view=sql-server-2017#persist) the SQL Server data.

In the same directory where **docker-compose.yml** is, there is a **data** folder which contains following,

- Dockerfile
- entrypoint.sh
- setup.sql

**Dockerfile** Which basically get the latest image of `mcr.microsoft.com/mssql/server` (linux) and configures the SQL Server container.

```yml
FROM mcr.microsoft.com/mssql/server

ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=Your_password123

COPY ./data /

ENTRYPOINT [ "/bin/bash", "entrypoint.sh" ]
CMD [ "/opt/mssql/bin/sqlservr" ]
```

Entry point in the **Dockerfile** is pointed to a custom shell `entrypoint.sh` which is,

```sh
#!/bin/bash
set -e

if [ "$1" = '/opt/mssql/bin/sqlservr' ]; then
  # If this is the container's first run, initialize the application database
  if [ ! -f /tmp/app-initialized ]; then
    # Initialize the application database asynchronously in a background process. This allows a) the SQL Server process to be the main process in the container, which allows graceful shutdown and other goodies, and b) us to only start the SQL Server process once, as opposed to starting, stopping, then starting it again.
    function initialize_app_database() {
      # Wait a bit for SQL Server to start. SQL Server's process doesn't provide a clever way to check if it's up or not, and it needs to be up before we can import the application database
      sleep 15s

      #run the setup script to create the DB and the schema in the DB
      /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Your_password123 -d master -i setup.sql

      # Note that the container has been initialized so future starts won't wipe changes to the data
      touch /tmp/app-initialized
    }
    initialize_app_database &
  fi
fi

exec "$@"
```

And the **setup.sql** contains all the SQL statements to generate the DB and all. An example given below,

```sql
CREATE DATABASE DB_NAME;
GO
USE DB_NAME;

...
```