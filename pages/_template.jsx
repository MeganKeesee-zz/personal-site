import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/global'

module.exports = React.createClass({

  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    const FontFaceObserver = require('fontfaceobserver');

    // Observe loading of Sectra
    const sectra = new FontFaceObserver('GT Sectra Display', {});

    // When Sectra is loaded, add a font-family using Open Sans to the body
    sectra.load().then(() => {
      document.body.classList.add('wfLoadedSectra');
    }, () => {
      document.body.classList.remove('wfLoadedSectra');
    });

    return (
      <div>
        <Container>
          {this.props.children}
        </Container>
      </div>
    )
  },
})
