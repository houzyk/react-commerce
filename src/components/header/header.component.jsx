import React from "react";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
// firebase
import { auth } from "../../firebase/firebase.utils";

// components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// css
import './header.styles.scss';

// assets
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden }) => {
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
        {
          hidden ? null:
          <CartDropdown />
        }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
