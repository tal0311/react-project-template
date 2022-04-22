// ROUTER
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// ALL COMPONENTS GOES HERE
import { AppNav } from './components/AppNav'

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>This is a rect project template</h1>
        <h2>it contains:</h2>
        <ul>
          <li>rect router and rect router dom 5</li>
          <li>it has redux and store</li>
          <li>it has services for back and front end</li>
          <li>connected to font awesome CDN</li>
        </ul>

        <section>
          <div>routes goes here:</div>
          <AppNav />
          <Switch>
            {/* all app routes */}
            {/* <Route path='/signup' component={component name} />
            <Route path='/contact/edit/:id?' component={component name} />
            <Route path='/contact/:id' component={component name} />
            <Route path='/contact' component={component name} />
            <Route path='/' component={component name} /> */}
          </Switch>
        </section>
      </div>
    </Router>
  )
}

export default App
