import React from 'react';
import moment from 'moment';
import LinkExternal from '../LinkExternal';

import s from './index.module.css';
import g from '../../utils/grid.module.css';

import articles from '../../data/articles.json';

let chronologicalArticles = articles.sort(function(a, b){
    var keyA = new Date(a.date),
        keyB = new Date(b.date);
    // Compare the 2 dates
    if(keyA < keyB) return 1;
    if(keyA > keyB) return -1;
    return 0;
});

const WritingItem = ({publisher, date, title, url}) => (
  <li className={`${s.writingItem}`}>
    <LinkExternal href={url} unstyled >
      <p className={`${s.byline}`}>
        <span className={`${s.border}`}>{publisher}</span> on <span className={`${g.noOrphan}`}>{date}</span>
      </p>
      <h3 className={`${g.marginTopSmallest}`}>{title}</h3>
    </LinkExternal>
  </li>
);

export default class WritingList extends React.Component {
  render () {

    const {children, ...props } = this.props;

    return (
      <ul>
        {articles.slice(0, 5).map((article, index) =>
          <WritingItem key={index} url={article.url} publisher={article.publisher} title={article.title} date={moment(article.date).format('MMMM DD, YYYY')} />
        )}
      </ul>
    )
  }
}
