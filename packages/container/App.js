import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/progress';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const MarketLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})
export default () => {
  const [signIn, setSignedIn] = useState(false);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
      <div>        
        <Header onSignOut={() => setSignedIn(false)} signedIn={signIn} />
        <Suspense fallback={<Progress/>}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setSignedIn(true)}/>
            </Route>
            <Route path="/" component={MarketLazy}/>
          </Switch>     
        </Suspense>
           
      </div>
    </BrowserRouter>  
    </StylesProvider>
      
  )
}
