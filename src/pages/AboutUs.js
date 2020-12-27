import styled from 'styled-components'
import { PageWrapper } from '../styles/GlobalStyles'

const AboutUs = () => {
	return (
		<AboutUsStyles>
			<h2>About Us</h2>
			<p>
				Convergence Controls and Engineering delivers solutions that are
				innovative and cost-effective for our clients. Leveraging cutting-edge
				tools and methodologies we combine lifecycle service with holistic and
				forward-thinking strategies to ensure high-quality deliverables that
				increase our client's profitability and ensure maximum up-time of their
				systems. Convergence succeeds through empowering our people to build
				lasting relationships, and to always do what is right for the client.
			</p>
			<h4>
				For more information about Convergence Controls and Engineering please
				visit our website.
			</h4>
			<a
				href='https://convergence-ce.com/'
				target='_blank'
				rel='noreferrer noopener'
			>
				Visit Our Website
			</a>
		</AboutUsStyles>
	)
}

export default AboutUs

const AboutUsStyles = styled(PageWrapper)`
	width: 90vw;
	margin: 6rem auto;
	h2 {
		margin-top: 2rem;
		padding-top: 2rem;
	}
	p {
		margin-top: 1rem;
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
		text-align: center;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
		background: white;
		transition: all 0.4s ease-in-out;
	}
	a:hover {
		font-size: 1.65rem;
		padding: 1.1rem;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
	}
`
