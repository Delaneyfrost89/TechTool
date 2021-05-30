import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { ComponentWrapper, HR } from '../styles/GlobalStyles'

const ConvertPressure = () => {
  const [pressures, setPressures] = useState({
    pressureOneVal: 10,
    pressureOneType: 'PSI',
    pressureTwoVal: 160,
    pressureTwoType: 'OZ',
  })

  const changeType = (e) => {
    let newValues = { ...pressures }
    if (e.currentTarget.parentNode.parentNode.className.includes('type-one')) {
      newValues.pressureOneType = e.currentTarget.innerHTML
      pressureConvert({ newValues }, 'a')
    } else if (
      e.currentTarget.parentNode.parentNode.className.includes('type-two')
    ) {
      newValues.pressureTwoType = e.currentTarget.innerHTML
      pressureConvert({ newValues }, 'b')
    }
  }

  const changePressureVal = (e) => {
    const numberRegex = /^-?\d{0,12}\.?\d{0,10}$/
    const decimalEndRegex = /^-?\d{0,12}\.$/
    const negDecimalRegex = /^[-.\\]$/
    let newValues = { ...pressures }
    let changedPressure

    if (e.currentTarget.value === '') {
      newValues.pressureOneVal = ''
      newValues.pressureTwoVal = ''
      setPressures({ ...newValues })
    } else {
      if (negDecimalRegex.test(e.currentTarget.value)) {
        if (e.currentTarget.name === 'pressureOne') {
          newValues.pressureOneVal = e.currentTarget.value
          newValues.pressureTwoVal = e.currentTarget.value
        }
        if (e.currentTarget.name === 'pressureTwo') {
          newValues.pressureTwoVal = e.currentTarget.value
          newValues.pressureOneVal = e.currentTarget.value
        }
        setPressures({ ...newValues })
      } else if (decimalEndRegex.test(e.currentTarget.value)) {
        if (e.currentTarget.name === 'pressureOne') {
          newValues.pressureOneVal = e.currentTarget.value
        }
        if (e.currentTarget.name === 'pressureTwo') {
          newValues.pressureTwoVal = e.currentTarget.value
        }
        setPressures({ ...newValues })
      } else if (numberRegex.test(Number(e.currentTarget.value))) {
        if (e.currentTarget.name === 'pressureOne') {
          newValues.pressureOneVal = Number(e.currentTarget.value)
          changedPressure = 'a'
        }
        if (e.currentTarget.name === 'pressureTwo') {
          newValues.pressureTwoVal = Number(e.currentTarget.value)
          changedPressure = 'b'
        }
        pressureConvert({ newValues }, changedPressure)
      }
    }
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
      case 'BAR':
        pressureAToPSI = pressureA * 14.5038
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
      case 'BAR':
        pressureB = pressureA / 14.5038
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
    <PressureStyles>
      <div>
        <input
          type='text'
          name='pressureOne'
          value={pressures.pressureOneVal}
          onChange={changePressureVal}
        />
        <DropdownButton
          id='dropdown-basic-button'
          className='dropdown type-one'
          title={pressures.pressureOneType}
        >
          <Dropdown.Item onClick={changeType}>PSI</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>OZ</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>IN/H2O</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>BAR</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>KPA</Dropdown.Item>
        </DropdownButton>
      </div>
      <HR />
      <div>
        <input
          type='text'
          name='pressureTwo'
          value={pressures.pressureTwoVal}
          onChange={changePressureVal}
        />
        <DropdownButton
          id='dropdown-basic-button'
          drop='up'
          className='dropdown type-two btn-secondary'
          title={pressures.pressureTwoType}
        >
          <Dropdown.Item onClick={changeType}>PSI</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>OZ</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>IN/H2O</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>BAR</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>KPA</Dropdown.Item>
        </DropdownButton>
      </div>
    </PressureStyles>
  )
}

const PressureStyles = styled(ComponentWrapper)`
  transition: all ease-in-out 3s;
  width: 80%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  input {
    width: 80%;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  }
  .dropdown {
    display: inline-block;
    width: 20%;
    margin: 0;

    button {
      margin-top: -4px;
      padding: 0.3rem;
      border-radius: 0 4px 4px 0;
      font-size: 1rem;
      width: 100%;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
      z-index: 10099;
    }
  }

  @media (max-width: 500px) {
    width: 90%;
    gap: 2rem;
    margin: 2.5rem auto 6rem;
    label {
      margin-bottom: 0.5rem;
    }
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

export default ConvertPressure
