import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.component.jsx'

const cartIcon = () => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon'/>
      <span className='icon-count'></span>
    </div>
  );
}

export default cartIcon;
