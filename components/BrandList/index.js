import React from 'react';

import g from '../../utils/grid.module.css';
import s from './index.module.css';

// Brand Images
import facebook from '../../assets/images/client-facebook.svg';
import box from '../../assets/images/client-box.svg';
import amazon from '../../assets/images/client-amazon.svg';
import starship from '../../assets/images/client-starship.svg';
import jawbone from '../../assets/images/client-jawbone.svg';
import walmart from '../../assets/images/client-walmart.svg';
import dooap from '../../assets/images/client-dooap.svg';
import wire from '../../assets/images/client-wire.svg';

const Client = (client) => (
  <img src={client} />
)

export default class BrandList extends React.Component {

  render () {
    const clients = [facebook, box, amazon, starship, dooap, walmart,jawbone, wire];

    const {children, ...props } = this.props;

    return (
      <div className={`${g.spaceBetween} ${g.flexWrap} ${s.container}`}>
        {clients.map(function(name, index){
            return (
              <div key={index}>
                <img src={name} />
              </div>
            );
        })}
        <div className={`${g.flexChildHack}`}/>
      </div>
    )
  }
}
