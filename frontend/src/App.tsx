import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout, PrivateRoute } from './components'
import {
  HomeScreen,
  SignupScreen,
  LoginScreen,
  GiftCreateScreen,
} from './screens'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomeScreen />
          </Route>
          <Route path='/login'>
            <LoginScreen />
          </Route>
          <Route path='/signup'>
            <SignupScreen />
          </Route>
          <PrivateRoute path='/product/create'>
            <GiftCreateScreen />
          </PrivateRoute>
          <Route path='*'>
            <h1 className='text-4xl font-bold text-gray-700'>
              You're lost go back to home route
            </h1>
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
