// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>App React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'

import DashBoardContainer from "./containers/dashboard.jsx";

const store = createStore(rootReducer);

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DashBoardContainer />
    );
  }
}

console.log('Initial state');
console.log('store',store.getState());
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
});
