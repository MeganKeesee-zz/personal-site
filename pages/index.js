import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

// Uses CSS Modules
import s from './index.module.css'
import portrait from '../assets/images/portrait.jpg'

const flex = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center"
}

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Megan Keesee is a communications professional in San Francisco, California that focuses on startups, institutions, and governments."},
            {"name": "keywords", "content": "Communications, marketing, thought leadership, growth hacking, digital media, san francisco"},
          ]}
        />
        <div style={flex}>
          <h1 className={`${s.homename}`}>
            <span className={`${s.given}`}>Megan</span>  
            <span className={`${s.surname}`}>Keesee</span>
          </h1>

          <img src={portrait} className={`${s.portrait}`} />
        </div>
      </div>
    )
  }
}
