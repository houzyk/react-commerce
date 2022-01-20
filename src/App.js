import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

// page components
import HomePage from "../src/pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";

// firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// redux
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions';

// css
import './App.css';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount () {

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <>
        <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/shop' element={<ShopPage />} />
          <Route exact path='/signin' element={<SignInUp />} />
        </Routes>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
