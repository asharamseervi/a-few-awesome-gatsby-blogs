import React from "react";
import PropTypes from "prop-types";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import TagImage from "./TagImage";

import Tags from "./Tags";
import { truncate } from "lodash";

const StoriesRoll = props => {
  const { posts } = props;

  return (
    <>
      {posts &&
        posts.map(({ node: post }) => (
          <div
            className="mb-5 d-flex justify-content-between main-loop-card"
            key={post.id}
          >
            <div className="col-9 pr-3">
              <h2 className="mb-1 h4 font-weight-bold">
                <OutboundLink
                  className="text-dark"
                  target="_blank"
                  href={post.url}
                >
                  {post.title}
                </OutboundLink>
              </h2>
              <p className="excerpt">
                {truncate(post.description, { length: 186 })}
              </p>
              <small className="d-block text-muted">
                In <Tags tags={post.tags} />
              </small>
              <small className="text-muted">{post.date}</small>
            </div>
            <div className="col-3 pr-0 text-right">
              <OutboundLink href={post.url} target="_blank">
                <TagImage tagSlug={post.tags[0]} />
              </OutboundLink>
            </div>
          </div>
        ))}
    </>
  );
};
StoriesRoll.propTypes = {
  posts: PropTypes.array.isRequired
};

export default StoriesRoll;
