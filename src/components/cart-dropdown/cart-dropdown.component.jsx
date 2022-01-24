// redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import React from 'react';

// components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

// css
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>

        {
          cartItems.length ?
          cartItems.map(i => 
            <CartItem key={i.id} item={i}/>
          )
          :
          <span className="empty-message">Your cart is empty</span>
        }

      </div>
      <CustomButton>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => {
  return (
    {
      cartItems: selectCartItems(state)
    }
  );
}

export default connect(mapStateToProps)(CartDropdown);
