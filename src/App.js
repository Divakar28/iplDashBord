import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import './App.css'

import TeamMatches from './components/TeamMatches'

import NotFound from './components/NotFound'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
