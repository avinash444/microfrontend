import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SignIn from '../src/components/Signin';
import SignUp from '../src/components/Signup';
const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
});

export default ({ signIn, history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn onSignIn={signIn}/>
            </Route>
            <Route path="/auth/signup">
              <SignUp onSignIn={signIn}/>  
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
