import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavComponent from './components/Nav'
import Home from './pages/Home'
import Scaling from './pages/Scaling'
import Conversion from './pages/Conversion'
import AboutUs from './pages/AboutUs'
import { Layout } from './styles/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	const closeMobileMenu = () => setClick(false)
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)
	return (
		<Layout
			onClick={() => {
				if (click) {
					closeMobileMenu()
				}
			}}
		>
			<Router>
				<NavComponent
					click={click}
					handleClick={handleClick}
					closeMobileMenu={closeMobileMenu}
				/>
				<Switch>
					<Route path='/scaling'>
						<Scaling />
					</Route>
					<Route path='/conversion'>
						<Conversion />
					</Route>
					<Route path='/AboutUs'>
						<AboutUs />
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
