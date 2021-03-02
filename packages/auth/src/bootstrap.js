import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App'

// mount function to start up the application
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });
  if(onNavigate) {
    history.listen(onNavigate)
  }
  
  ReactDOM.render(
    <App signIn={onSignIn} history={history} />,
    el
  )
  return {
    onParentNavigate: function({ pathname: nextPathName}) {
      console.log(nextPathName)
      const { pathname } = history.location
      if(pathname !== nextPathName) {
        history.push(nextPathName)
      }
    }
  }
}

// if we are development and isolation
// call mount immediately
if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root')
  if(devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// we are running through container
// and we should export the mount function
export { mount }
