import React from 'react';
import styles from './Content.module.scss';

const Content = ({ body, title, readingTime }) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <h3 className={styles['content__meta']} >{readingTime}</h3>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
