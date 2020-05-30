import React from 'react';

import HomePage from './Page/Homepage/homepage.component';

import {Route, Switch } from 'react-router-dom';

import ShopPage from './Page/Shop/Shop.component';

import './App.css';

import Header from './Component/Header/Header.component';

import SignInAndSignUpPage from './Page/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log("snapshot",snapShot);
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          );
        });
      }
      this.setState({ currentUser: userAuth });
      console.log("user data",userAuth);
    });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {/*path is used for url and exact is working like target(by default exact is true. ) 
          <Route exact path='/hats' component={ Hats } /> 
          <Route exact path='/jackets' component={ Jackets } /> 
          <Route exact path='/sneakers' component={ Sneakers } /> 
          <Route exact path='/womens' component={ Womens } /> 
          <Route exact path='/mens' component={ Mens } /> 
         */} 

          <Route exact path='/' component={ HomePage } /> 
          <Route path='/shop' component={ ShopPage } />
          <Route path='/signin' component={ SignInAndSignUpPage } />
        </Switch>
      </div>
    );
  }
}

export default App;