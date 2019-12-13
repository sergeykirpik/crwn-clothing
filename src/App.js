import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsibscribeFromAuth = null;

  componentDidMount() {
    this.unsibscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        this.setState({
          currentUser: null
        });
        return;
      }

      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot => {
        this.setState({
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
        });
      });
    });
  }

  componentWillUnmount() {
    this.unsibscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
