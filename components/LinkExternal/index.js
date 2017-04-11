import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import s from './index.module.css';

let cx = classNames.bind(s);

export default class LinkExternal extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    unstyled: PropTypes.bool
  };

  static defaultProps = {
    unstyled: false
  };

  render () {

    let className = cx({
      className,
      external: !this.props.unstyled,
    });

    const {children, classname, href, ...props } = this.props;

    return (
      <a href={href} target="_blank" rel="noopener" className={className}>
        {children}
      </a>
    )
  }
}
