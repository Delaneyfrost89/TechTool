import React, { useState } from 'react'
import styled from 'styled-components'
import { ComponentWrapper, HR } from '../styles/GlobalStyles'
import { motion } from 'framer-motion'
import { DropdownButton, Dropdown } from 'react-bootstrap'

const ConvertTemp = () => {
	const [temps, setTemps] = useState({
		tempOneVal: 10,
		tempOneType: 'CELSIUS',
		tempTwoVal: 50,
		tempTwoType: 'FAHRENHEIT',
	})

	const changeType = (e) => {
		let newValues = { ...temps }
		if (e.currentTarget.parentNode.parentNode.className.includes('type-one')) {
			newValues.tempOneType = e.currentTarget.innerHTML
			tempConvert({ newValues }, 'a')
		} else if (
			e.currentTarget.parentNode.parentNode.className.includes('type-two')
		) {
			newValues.tempTwoType = e.currentTarget.innerHTML
			tempConvert({ newValues }, 'b')
		}
	}

	const changeTempVal = (e) => {
		const numberRegex = /^[-.0-9]+$/
		const negDecimalRegex = /^[-.\\]$/
		let newValues = { ...temps }
		let changedTemp

		if (e.currentTarget.value === '') {
			newValues.tempOneVal = ''
			newValues.tempTwoVal = ''
			setTemps({ ...newValues })
		} else {
			if (negDecimalRegex.test(e.currentTarget.value)) {
				if (e.currentTarget.name === 'tempOne') {
					newValues.tempOneVal = e.currentTarget.value
					newValues.tempTwoVal = e.currentTarget.value
				}
				if (e.currentTarget.name === 'tempTwo') {
					newValues.tempTwoVal = e.currentTarget.value
					newValues.tempOneVal = e.currentTarget.value
				}
				setTemps({ ...newValues })
			}
			if (numberRegex.test(Number(e.currentTarget.value))) {
				if (e.currentTarget.name === 'tempOne') {
					newValues.tempOneVal = Number(e.currentTarget.value)
					changedTemp = 'a'
				}
				if (e.currentTarget.name === 'tempTwo') {
					newValues.tempTwoVal = Number(e.currentTarget.value)
					changedTemp = 'b'
				}
				tempConvert({ newValues }, changedTemp)
			}
		}
	}

	const tempConvert = ({ newValues }, changedTemp = 'a') => {
		let typeA
		let tempA
		let typeB
		let tempB

		if (changedTemp === 'a') {
			typeA = newValues.tempOneType
			tempA = newValues.tempOneVal
			typeB = newValues.tempTwoType
			tempB = newValues.tempTwoVal
		} else {
			typeA = newValues.tempTwoType
			tempA = newValues.tempTwoVal
			typeB = newValues.tempOneType
			tempB = newValues.tempOneVal
		}

		let tempAToCelsius
		switch (typeA) {
			case 'CELSIUS':
				tempAToCelsius = tempA
				break
			case 'FAHRENHEIT':
				tempAToCelsius = (tempA - 32) * (5 / 9)
				break
			case 'KELVIN':
				tempAToCelsius = tempA - 273.15
				break
			default:
				console.error('ERROR')
		}

		switch (typeB) {
			case 'CELSIUS':
				tempB = tempAToCelsius
				break
			case 'FAHRENHEIT':
				tempB = tempAToCelsius * (9 / 5) + 32
				break
			case 'KELVIN':
				tempB = tempAToCelsius + 273.15
				break
			default:
				console.error('ERROR')
		}
		changedTemp === 'a'
			? (newValues.tempTwoVal = tempB)
			: (newValues.tempOneVal = tempB)
		setTemps({ ...newValues })
	}

	return (
		<TemperatureStyles>
			<div>
				<input
					type='text'
					name='tempOne'
					value={temps.tempOneVal}
					onChange={changeTempVal}
				/>
				<DropdownButton
					id='dropdown-basic-button'
					className='dropdown type-one'
					title={temps.tempOneType}
				>
					<Dropdown.Item onClick={changeType}>CELSIUS</Dropdown.Item>
					<Dropdown.Item onClick={changeType}>FAHRENHEIT</Dropdown.Item>
					<Dropdown.Item onClick={changeType}>KELVIN</Dropdown.Item>
				</DropdownButton>
			</div>
			<HR />
			<div>
				<input
					type='text'
					name='tempTwo'
					value={temps.tempTwoVal}
					onChange={changeTempVal}
				/>
				<DropdownButton
					id='dropdown-basic-button'
					drop='up'
					className='dropdown type-two btn-secondary'
					title={temps.tempTwoType}
				>
					<Dropdown.Item onClick={changeType}>CELSIUS</Dropdown.Item>
					<Dropdown.Item onClick={changeType}>FAHRENHEIT</Dropdown.Item>
					<Dropdown.Item onClick={changeType}>KELVIN</Dropdown.Item>
				</DropdownButton>
			</div>
		</TemperatureStyles>
	)
}

const TemperatureStyles = styled(ComponentWrapper)`
	transition: all ease-in-out 3s;
	display: grid;
	grid-template-rows: 1fr auto 1fr;
	width: 80%;
	input {
		width: 70%;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
	}
	.dropdown {
		display: inline-block;
		width: 30%;
		margin: 0;
		button {
			margin-top: -4px;
			padding: 0.3rem;
			border-radius: 0 4px 4px 0;
			font-size: 1rem;
			width: 100%;
			box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
		}
	}

	@media (max-width: 500px) {
		width: 90%;
		gap: 2rem;
		input {
			width: 100%;
			font-size: 1.5rem;
		}
		.dropdown {
			display: block;
			width: 100%;
			button {
				border-radius: 0 0 4px 4px;
				font-size: 1.2rem;
			}
		}
	}
`

export default ConvertTemp
