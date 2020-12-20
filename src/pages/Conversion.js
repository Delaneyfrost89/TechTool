import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConvertTime from '../components/ConvertTime'
import ConvertPressure from '../components/ConvertPressure'
import ConvertTemp from '../components/ConvertTemp'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
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
			</ExpandBoxStyles>
			<AnimatePresence>
				{showPressure && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<ConvertPressure />
					</motion.div>
				)}
			</AnimatePresence>
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
			<AnimatePresence>
				{showTemp && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<ConvertTemp />
					</motion.div>
				)}
			</AnimatePresence>
			<ExpandBoxStyles
				onClick={() => {
					setShowTime(!showTime)
				}}
			>
				<h3>
					Time <span>{showTime ? <BiChevronUp /> : <BiChevronDown />}</span>
				</h3>
			</ExpandBoxStyles>
			<AnimatePresence>
				{showTime && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<ConvertTime />
					</motion.div>
				)}
			</AnimatePresence>
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
