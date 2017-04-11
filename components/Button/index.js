import React, { PropTypes } from 'react';
import cx from 'classnames';
import Sparkle from '../Sparkle';

// Uses CSS Modules
import s from './index.module.css';

export default class Button extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
  };

  render () {

    const {className, children, href} = this.props;

    return (
      <Sparkle>
        <a className={cx(s.button, className) + ``} href={href}  target="_blank">
          <span className={`${s.inside}`}>{children}</span>
        </a>
      </Sparkle>
    )
  }
}
