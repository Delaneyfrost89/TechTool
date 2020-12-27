import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageWrapper } from '../styles/GlobalStyles'

const Home = () => {
	return (
		<HomeStyles>
			<h2>Convergence Controls Tech Tool</h2>
			<p>
				This is a tool to assist you while working on automation and controls
				systems. Supplying conversions for various pressures, temperatures, and
				flow rates along with a scaling calculator to check any 4-20mA or 1-5V
				transmitters.
			</p>
			<div>
				<Link to='/Conversion'>Conversion Calculator</Link>
				<Link to='/scaling'>Scaling Calculator</Link>
			</div>
			<h4>
				For more information about Convergence Controls and Engineering please
				visit our website.
			</h4>
			<div>
				<a href='https://convergence-ce.com/' target='_blank' rel='noopener'>
					Visit Our Website
				</a>
			</div>
		</HomeStyles>
	)
}

export default Home

const HomeStyles = styled(PageWrapper)`
	width: 90vw;
	margin: 6rem auto;
	h2 {
		margin-top: 2rem;
		padding-top: 2rem;
	}
	p {
		margin: 1rem 0 1rem 0;
		font-size: 1.2rem;
	}
	h4 {
		margin-top: 2rem;
		margin-bottom: 4rem;
	}
	a {
		color: rgb(2, 32, 47);
		font-weight: 500;
		font-size: 1.6rem;
		padding: 1rem;
		margin: 2rem;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
		background: white;
		transition: all 0.4s ease-in-out;
		justify-content: center;
		align-content: center;
	}
	a:hover {
		font-size: 1.65rem;
		padding: 1.1rem;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
	}
	div {
		margin: 2rem auto;
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		justify-content: space-evenly;
		text-align: center;
	}

	@media (max-width: 500px) {
		a {
			width: 100%;
		}
		div {
			gap: 2rem;
		}
	}
`
