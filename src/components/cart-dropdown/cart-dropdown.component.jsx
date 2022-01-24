// redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import React from 'react';

// components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

// css
import './cart-dropdown.styles.scss';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();

    return (
      <Component
        history={history}
        {...props}
        />
    );
  };

  return Wrapper;
};

const CartDropdown = ({ cartItems, history, dispatch }) => {
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
      <CustomButton onClick={() => {
        history('/checkout')
        dispatch(toggleCartHidden())
      }
      }>
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

export default withRouter(connect(mapStateToProps)(CartDropdown));
