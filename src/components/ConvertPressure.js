import React, { useState } from 'react'
import styled from 'styled-components'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { ComponentWrapper, HR } from '../styles/GlobalStyles'
import { useSpring, useTransition, animated } from 'react-spring'

const ConvertPressure = () => {
	const animationProps = useSpring({
		config: { duration: 10, mass: 1, tension: 200, friction: 8 },
		to: { bottom: 0 },
		from: { bottom: 360 },
	})

	const [pressures, setPressures] = useState({
		pressureOneVal: 0,
		pressureOneType: 'PSI',
		pressureTwoVal: 0,
		pressureTwoType: 'OZ',
	})

	const changeType = (e) => {
		let newValues = { ...pressures }
		if (e.currentTarget.parentNode.parentNode.className.includes('type-one')) {
			console.log('change 1 to ' + e.currentTarget.innerHTML)
			newValues.pressureOneType = e.currentTarget.innerHTML
			pressureConvert({ newValues }, 'a')
		} else if (
			e.currentTarget.parentNode.parentNode.className.includes('type-two')
		) {
			console.log('change 2 to ' + e.currentTarget.innerHTML)
			newValues.pressureTwoType = e.currentTarget.innerHTML
			pressureConvert({ newValues }, 'b')
		}
	}

	const changePressureVal = (e) => {
		let newValues = { ...pressures }
		let changedPressure
		if (e.currentTarget.name === 'pressureOne') {
			newValues.pressureOneVal = e.currentTarget.value
			changedPressure = 'a'
		}
		if (e.currentTarget.name === 'pressureTwo') {
			newValues.pressureTwoVal = e.currentTarget.value
			changedPressure = 'b'
		}
		pressureConvert({ newValues }, changedPressure)
	}

	const pressureConvert = ({ newValues }, changedPressure = 'a') => {
		let typeA
		let pressureA
		let typeB
		let pressureB

		if (changedPressure === 'a') {
			typeA = newValues.pressureOneType
			pressureA = newValues.pressureOneVal
			typeB = newValues.pressureTwoType
			pressureB = newValues.pressureTwoVal
		} else {
			typeA = newValues.pressureTwoType
			pressureA = newValues.pressureTwoVal
			typeB = newValues.pressureOneType
			pressureB = newValues.pressureOneVal
		}

		let pressureAToPSI
		switch (typeA) {
			case 'PSI':
				pressureAToPSI = pressureA
				break
			case 'OZ':
				pressureAToPSI = pressureA / 16
				break
			case 'IN/H2O':
				pressureAToPSI = pressureA / 27.7076
				break
			case 'KPA':
				pressureAToPSI = pressureA / 6.89476
				break
			default:
				console.error('ERROR')
		}

		switch (typeB) {
			case 'PSI':
				pressureB = pressureAToPSI
				break
			case 'OZ':
				pressureB = pressureAToPSI * 16
				break
			case 'IN/H2O':
				pressureB = pressureAToPSI * 27.7076
				break
			case 'KPA':
				pressureB = pressureAToPSI * 6.89476
				break
			default:
				console.error('ERROR')
		}
		changedPressure === 'a'
			? (newValues.pressureTwoVal = pressureB)
			: (newValues.pressureOneVal = pressureB)
		setPressures({ ...newValues })
	}

	return (
		<PressureStyles style={animationProps}>
			<div>
				<input
					type='number'
					name='pressureOne'
					value={pressures.pressureOneVal}
					onChange={changePressureVal}
				/>
				<DropdownButton
					id='dropdown-basic-button'
					className='type-one'
					title={pressures.pressureOneType}
				>
					<Dropdown.Item onClick={changeType}>PSI</Dropdown.Item>
					<Dropdown.Item onClick={changeType}>OZ</Dropdown.Item>
					<Dropdown.Item onClick={changeType}>IN/H2O</Dropdown.Item>
					<Dropdown.Item onClick={changeType}>KPA</Dropdown.Item>
				</DropdownButton>
			</div>
			<HR />
			<div>
				<input
					type='number'
					name='pressureTwo'
					value={pressures.pressureTwoVal}
					onChange={changePressureVal}
				/>
				<DropdownButton
					id='dropdown-basic-button'
					className='type-two'
					title={pressures.pressureTwoType}
				>
					<Dropdown.Item onClick={changeType}>PSI</Dropdown.Item>
					<Dropdown.Item onClick={changeType}>OZ</Dropdown.Item>
					<Dropdown.Item onClick={changeType}>IN/H2O</Dropdown.Item>
					<Dropdown.Item onClick={changeType}>KPA</Dropdown.Item>
				</DropdownButton>
			</div>
		</PressureStyles>
	)
}

const PressureStyles = styled(animated(ComponentWrapper))`
	position: relative;
	transition: all ease-in-out 3s;
	z-index: 0;
	bottom: 0;
`

export default ConvertPressure
