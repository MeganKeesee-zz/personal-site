import React from 'react';

import imageBlob from '../../assets/images/blob.svg';
import imageSplat from '../../assets/images/splat.svg';
import imageSplash from '../../assets/images/splash.svg';

import s from './index.module.css';

export default class ParallaxShapes extends React.Component {
  render () {

    const {children, ...props } = this.props;

    return (
      <div className={`${s.container}`}>
          {children}

          <div className={`${s.first} ${s.shape}`}>
            <img src={imageBlob} />
          </div>

          <div className={`${s.second} ${s.shape}`}>
            <img src={imageSplat} />
          </div>

          <div className={`${s.third} ${s.shape}`}>
            <img src={imageSplash} />
          </div>
      </div>
    )
  }
}
