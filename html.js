import React from 'react';
import Helmet from "react-helmet";
import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({

  propTypes () {
    return {
      body: React.PropTypes.string,
    }
  },

  render () {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://megankesee.com" />
          <meta property="og:title" content="Megan Keesee, Communications Manager" />
          <meta property="og:image" content="https://megankeesee.com/facebook.jpg" />
          <meta property="og:description" content="Megan Keesee is a communications manager based in San Francisco, California." />
          <meta property="og:site_name" content="Megan Keesee, Communications Manager" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@megankesee" />
          <meta name="twitter:creator" content="@megankesee" />
          <meta name="twitter:url" content="https://megankesee.com" />
          <meta name="twitter:title" content="Megan Keesee, Communications Manager" />
          <meta name="twitter:description" content="Megan Keesee is a communications manager based in San Francisco, California." />
          <meta name="twitter:image" content="https://megankeesee.com/twitter.jpg" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f683f4" />
          <meta name="theme-color" content="#f683f4" />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}

        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />  
          <script>
            !function(m,e,g,a,n){m.GoogleAnalyticsObject=g;m[g]||(m[g]=function(){
            (m[g].q=m[g].q||[]).push(arguments)});m[g].l=+new Date;a=e.createElement('script');
            n=e.scripts[0];a.src='//www.google-analytics.com/analytics.js';
            n.parentNode.insertBefore(a,n)}(window,document,'ga');

            ga('create', 'UA-97193950-1', 'auto');
            ga('send', 'pageview');
          </script>
        </body>
      </html>
    )
  },
})
