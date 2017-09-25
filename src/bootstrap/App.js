import React from 'react'
import Disputes from '../containers/Disputes'
import Contracts from '../containers/Contracts'
import { Provider } from 'react-redux'
import generateStore from './generateStore'
import registerServiceWorker from './registerServiceWorker'
import Layout from '../components/Layout'
import './index.css'

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

const store = generateStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Layout>
        <Route exact path='/disputes' component={Disputes} />
        <Route exact path='/contracts' component={Contracts} />
        <Redirect from='*' to='/disputes' />
        </Layout>
      </Switch>
    </Router>
  </Provider>
)

registerServiceWorker()

export default App