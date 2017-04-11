import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config';
import ParallaxShapes from '../components/ParallaxShapes';
import LinkExternal from '../components/LinkExternal';
import Email from '../components/Email';
import BrandList from '../components/BrandList';
import Button from '../components/Button';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';
import WritingList from '../components/WritingList';

// Uses CSS Modules
import s from './index.module.css';
import g from '../utils/grid.module.css';

import resume from '../assets/files/resume.pdf';

export default class Index extends React.Component {
  render () {
    return (
      <ParallaxShapes>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Megan Keesee is a communications professional in San Francisco, California that focuses on startups, institutions, and governments."},
            {"name": "keywords", "content": "Communications, marketing, thought leadership, growth hacking, digital media, san francisco"},
          ]}
        />

        <section className={`${s.topSection} ${g.maxWidth}`}>
          <h1 className={`${s.homename} ${g.g6s}`}>
            <span className={`${s.given}`}>Megan</span>
            <span className={`${s.surname} ${g.noMarginTop}`}>Keesee</span>
          </h1>
          
          <div className={`${g.marginTopLarge}`}>
            <h2 className={`${g.g9m} ${g.g7l}`}>{config.tagline}</h2>
          
            <div className={`${g.spaceBetween} ${g.flexEnd} ${g.flexWrap}`}>
              <Email />
              <SocialIcons className={`${g.marginTopSmall}`} />
            </div>
          </div>
        </section>

        <section className={`${g.maxWidth} ${g.spaceBetween} ${g.flexWrap}`}>
          <div className={`${g.g6m}`}>
            <h2 className="h4">About</h2>
            
            <p>Communications manager based in San Francisco, Ca. Currently at Liberty Communications helping international early-stage startups enter the US market. Previously at The Outcast Agency, where I helped launch two companies out of stealth.</p>

            <p>Also serving on the Board of Directors for the US National Committee for United Nations Women.</p>

            <p className={`${g.marginTopSmall}`}><Button href={resume}>Download Resume</Button></p>
          </div>

          <div className={`${g.g6m} ${g.marginTopLargeM}`}>
           <h2 className="h4">Latest Writing</h2>
           <WritingList />
          </div>
        </section>

        <section className={`${g.maxWidth}`}>
         <h2 className="h4">Brands I've Worked With</h2>
         <BrandList />
        </section>

        <Footer className={`${g.maxWidth}`}/>
      </ParallaxShapes>
    )
  }
}
