import React from 'react';

import s from './index.module.css';

const Spark = () =>
<svg className={`${s.spark}`} xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 22 22" version="1.1"><defs><linearGradient x1="50%" y1="11.3809772%" x2="100%" y2="100%" id="gradient1"><stop stopColor="#9792FA" offset="0%"/><stop stopColor="#F683F4" offset="100%"/></linearGradient></defs><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-300.000000, -1496.000000)" fill="url(#gradient1)"><path d="M311.629736 1511.3467L310.2497 1517.66628 308.869762 1511.3467C308.526282 1509.77398 307.307353 1508.53873 305.737272 1508.17237L299.9997 1506.83329 305.737272 1505.4943C307.307353 1505.12785 308.526282 1503.8926 308.869762 1502.31988L310.2497 1496.0004 311.629736 1502.31988C311.973118 1503.8926 313.192047 1505.12785 314.762128 1505.4943L320.4997 1506.83329 314.762128 1508.17237C313.192047 1508.53873 311.973118 1509.77398 311.629736 1511.3467" id="Fill-1"/></g></g></svg>



export default class Sparkle extends React.Component {

  render () {

    const {className, children, ...props } = this.props;

    return (
      <span className={`${s.container}`}>
        {children}


        <span className={`${s.sparks}`}>
          <Spark />
          <Spark />
          <Spark />
          <Spark />
          <Spark />
        </span>
      </span>
    )
  }
}