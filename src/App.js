import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavComponent from './components/Nav'
import Home from './pages/Home'
import Scaling from './pages/Scaling'
import Conversion from './pages/Conversion'
import { Layout } from './styles/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	return (
		<Layout>
			<Router>
				<NavComponent />
				<Switch>
					<Route path='/scaling'>
						<Scaling />
					</Route>
					<Route path='/conversion'>
						<Conversion />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</Layout>
	)
}

export default App
