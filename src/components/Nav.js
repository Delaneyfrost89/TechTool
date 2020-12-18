import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const NavComponent = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand>
				<Link to={'/'}>CCE TechTool</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Link>
						<Link to={'/'}>Home</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to={'/conversion'}>Conversion</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to={'/scaling'}>Scaling</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavComponent
