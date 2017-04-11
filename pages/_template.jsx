import React from 'react';
import { Container } from 'react-responsive-grid';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Headroom from 'react-headroom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import '../css/global';

module.exports = React.createClass({

  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    const FontFaceObserver = require('fontfaceobserver');

    // Observe loading of Sectra Display
    const sectraDisplay = new FontFaceObserver('GT Sectra Display', {});
    // Observe loading of Sectra
    const sectra = new FontFaceObserver('GT Sectra', {});
    // Observe loading of Proxima Soft
    const proximaSoft = new FontFaceObserver('Proxima Soft', {});

    // When Sectra is loaded, add a font-family using Open Sans to the body
    sectraDisplay.load().then(() => {
      document.body.classList.add('wfLoadedSectraDisplay');
    }, () => {
      document.body.classList.remove('wfLoadedSectraDisplay');
    });

    // When Sectra is loaded, add a font-family using Open Sans to the body
    sectra.load().then(() => {
      document.body.classList.add('wfLoadedSectra');
    }, () => {
      document.body.classList.remove('wfLoadedSectra');
    });

    // When Sectra is loaded, add a font-family using Open Sans to the body
    proximaSoft.load().then(() => {
      document.body.classList.add('wfLoadedProximaSoft');
    }, () => {
      document.body.classList.remove('wfLoadedProximaSoft');
    });

    return (
      <div>
          {this.props.children}
      </div>
    )
  },

})

