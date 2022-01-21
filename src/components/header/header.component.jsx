import React from "react";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";

// firebase
import { auth } from "../../firebase/firebase.utils";

// components
import CartIcon from "../cart-icon/cart-icon.component";

// css
import './header.styles.scss';

// assets
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
          <Logo className="logo"/>
      </Link>
      <div
        className="options"
      >
          <Link
            to="/shop"
            className="option"
          >
              SHOP
          </Link>
          <Link
            to="/shop"
            className="option"
          >
            CONTACT
          </Link>
          {
            currentUser ?
            (
            <div
              className="option"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
            )
            :
            (
            <Link
              className="option"
              to="/signin">
              SIGN IN
            </Link>
            )
          }
          <CartIcon />
        </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStatetoProps)(Header);
