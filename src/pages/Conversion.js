import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConvertTime from '../components/ConvertTime'
import ConvertPressure from '../components/ConvertPressure'
import ConvertTemp from '../components/ConvertTemp'
import styled from 'styled-components'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const Conversion = () => {
	const [showPressure, setShowPressure] = useState(false)
	const [showTemp, setShowTemp] = useState(false)
	const [showTime, setShowTime] = useState(false)

	return (
		<div>
			<ExpandBoxStyles
				onClick={() => {
					setShowPressure(!showPressure)
				}}
			>
				<h3>
					Pressure{' '}
					<span>{showPressure ? <BiChevronUp /> : <BiChevronDown />}</span>
				</h3>
				{showPressure && <ConvertPressure />}
			</ExpandBoxStyles>
			<ExpandBoxStyles
				onClick={() => {
					setShowTemp(!showTemp)
				}}
			>
				<h3>
					Temperature{' '}
					<span>{showTemp ? <BiChevronUp /> : <BiChevronDown />}</span>
				</h3>
			</ExpandBoxStyles>
			{showTemp && <ConvertTemp />}
			<ExpandBoxStyles
				onClick={() => {
					setShowTime(!showTime)
				}}
			>
				<h3>
					Time <span>{showTime ? <BiChevronUp /> : <BiChevronDown />}</span>
				</h3>
			</ExpandBoxStyles>
			{showTime && <ConvertTime />}
		</div>
	)
}

const ExpandBoxStyles = styled.div`
	position: relative;
	border: 1px solid #b1b1b1;
	font-size: 1.2rem;
	text-align: center;
	z-index: 10;
	border-radius: 10px;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
	background: rgb(2, 32, 47);
	background: linear-gradient(
		0deg,
		rgba(2, 32, 47, 1) 0%,
		rgba(0, 107, 161, 1) 100%
	);
`

export default Conversion
