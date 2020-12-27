import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import Logo from '../assets/CCE_Logo.jpg'

const NavComponent = ({ click, handleClick, closeMobileMenu }) => {
	return (
		<NavbarStyles>
			<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
				<img src={Logo} alt='CCE Logo' />
			</Link>
			<div className='menu-icon' onClick={handleClick}>
				<span>{click ? <IoMdClose /> : <BiMenu />}</span>
			</div>

			<ul className={click ? 'nav-menu active ' : 'nav-menu '}>
				<li className='nav-item'>
					<Link to='/' className='nav-links' onClick={closeMobileMenu}>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						to='/Conversion'
						className='nav-links'
						onClick={closeMobileMenu}
					>
						Conversions
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/Scaling' className='nav-links' onClick={closeMobileMenu}>
						Scaling
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
						About Us
					</Link>
				</li>
			</ul>
		</NavbarStyles>
	)
}

export default NavComponent

const NavbarStyles = styled.nav`
	position: fixed;
	background: #fff;
	height: 6rem;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.2rem;
	color: #333;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
	z-index: 900;
	width: 100vw;

	.navbar-logo {
		cursor: pointer;
		margin-top: -10px;
		margin-left: 0.6rem;
		img {
			width: 280px;
		}
	}

	.nav-menu {
		display: grid;
		grid-template-columns: repeat(4, auto);
		gap: 1.6rem;
		list-style: none;
		text-align: center;
		width: 50vw;
		justify-content: end;
		margin-right: 2rem;
	}

	.nav-item {
		display: flex;
		align-items: center;
		height: 80px;
	}

	.nav-links {
		color: #333;
		text-decoration: none;
		font-size: 1.2rem;
	}

	.nav-links:hover {
		transition: all 0.4s ease-out;
		/* font-size: 1.25rem; */
		color: rgb(0, 107, 161);
	}

	.nav-links-mobile {
		display: none;
	}

	.menu-icon {
		display: none;
	}

	@media screen and (max-width: 960px) {
		.nav-menu {
			position: absolute;
			z-index: 1;
			display: flex;
			flex-direction: column;
			width: 40vw;
			height: auto;
			margin-right: 0;
			top: 6rem;
			right: -100vh;
			opacity: 0;
			transition: all 0.5s ease;
			box-shadow: 4px 4px 8px 1px rgba(-1, 0, 0, 0.4);
		}

		.nav-menu.active {
			position: absolute;
			z-index: 1;
			background: #fff;
			width: 40vw;
			height: auto;
			padding: 1rem 0;
			top: 6rem;
			right: 0;
			opacity: 1;
			transition: all 0.5s ease;
		}

		.nav-links {
			text-align: center;
			padding: 2rem;
			width: 100%;
			height: auto;
		}

		.nav-links:hover {
			transition: all 0.4s ease-out;
			font-size: 1.3rem;
			color: #000;
		}

		.navbar-logo {
		}

		.menu-icon {
			display: block;
			font-size: 2rem;
			margin-right: 1.4rem;
			cursor: pointer;
			z-index: 1000;
		}

		.nav-links-mobile {
			display: block;
			text-align: center;
			padding: 1.5rem;
			margin: 2rem auto;
			border-radius: 4px;
			width: 80%;
			background: #1888ff;
			text-decoration: none;
			color: #fff;
			font-size: 1.5rem;
			z-index: 1;
		}

		.nav-links-mobile:hover {
			background: #fff;
			color: #1888ff;
			transition: 250ms;
		}
	}
`
