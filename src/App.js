import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

// page components
import HomePage from "../src/pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";

// firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// css
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/shop' element={<ShopPage />} />
          <Route exact path='/signin' element={<SignInUp />} />
        </Routes>
      </>
    );
  }
}

export default App;
