import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { ComponentWrapper, HR } from '../styles/GlobalStyles'

const VolumeFlowRateConversion = () => {
  const [flowRates, setFlowRates] = useState({
    flowRateOneVal: 10,
    flowRateOneType: 'Oil Barrel',
    flowRateOnePeriod: 'HR',
    flowRateTwoVal: 160,
    flowRateTwoType: 'Gallon',
    flowRateTwoPeriod: 'SEC',
  })

  const changeType = (e) => {
    let newValues = { ...flowRates }
    if (e.currentTarget.parentNode.parentNode.className.includes('type-one')) {
      newValues.flowRateOneType = e.currentTarget.innerHTML
      flowRateConvert({ newValues }, 'a')
    } else if (
      e.currentTarget.parentNode.parentNode.className.includes('type-two')
    ) {
      newValues.flowRateTwoType = e.currentTarget.innerHTML
      flowRateConvert({ newValues }, 'b')
    }
  }

  const changeFlowRateVal = (e) => {
    const numberRegex = /^-?\d{0,8}\.?\d{0,8}$/
    const decimalEndRegex = /^-?\d{0,8}\.$/
    const negDecimalRegex = /^[-.\\]$/
    let newValues = { ...flowRates }
    let changedFlowRate

    if (e.currentTarget.value === '') {
      newValues.flowRateOneVal = ''
      newValues.flowRateTwoVal = ''
      setFlowRates({ ...newValues })
    } else {
      if (negDecimalRegex.test(e.currentTarget.value)) {
        if (e.currentTarget.name === 'flowRateOne') {
          newValues.flowRateOneVal = e.currentTarget.value
          newValues.flowRateTwoVal = e.currentTarget.value
        }
        if (e.currentTarget.name === 'flowRateTwo') {
          newValues.flowRateTwoVal = e.currentTarget.value
          newValues.flowRateOneVal = e.currentTarget.value
        }
        setFlowRates({ ...newValues })
      } else if (decimalEndRegex.test(e.currentTarget.value)) {
        if (e.currentTarget.name === 'flowRateOne') {
          newValues.flowRateOneVal = e.currentTarget.value
        }
        if (e.currentTarget.name === 'flowRateTwo') {
          newValues.flowRateTwoVal = e.currentTarget.value
        }
        setFlowRates({ ...newValues })
      } else if (numberRegex.test(Number(e.currentTarget.value))) {
        if (e.currentTarget.name === 'flowRateOne') {
          newValues.flowRateOneVal = Number(e.currentTarget.value)
          changedFlowRate = 'a'
        }
        if (e.currentTarget.name === 'flowRateTwo') {
          newValues.flowRateTwoVal = Number(e.currentTarget.value)
          changedFlowRate = 'b'
        }
        flowRateConvert({ newValues }, changedFlowRate)
      }
    }
  }

  const flowRateConvert = ({ newValues }, changedFlowRate = 'a') => {
    let typeA
    let flowRateA
    let periodA
    let typeB
    let flowRateB
    let periodB

    if (changedFlowRate === 'a') {
      typeA = newValues.flowRateOneType
      flowRateA = newValues.flowRateOneVal
      periodA = newValues.flowRateOnePeriod
      typeB = newValues.flowRateTwoType
      flowRateB = newValues.flowRateTwoVal
      periodB = newValues.flowRateTwoPeriod
    } else {
      typeA = newValues.flowRateTwoType
      flowRateA = newValues.flowRateTwoVal
      periodA = newValues.flowRateTwoPeriod
      typeB = newValues.flowRateOneType
      flowRateB = newValues.flowRateOneVal
      periodB = newValues.flowRateOnePeriod
    }

    let flowRateAToBBL
    switch (typeA) {
      case 'Oil Barrel':
        flowRateAToBBL = flowRateA
        break
      case 'Gallon':
        flowRateAToBBL = flowRateA / 31.500000001
        break
      case 'Cubic Centimeter':
        flowRateAToBBL = flowRateA / 119240.4712
        break
      case 'Million Cubic Foot':
        flowRateAToBBL = flowRateA / 0.0000042109374395
        break
      case 'Liter':
        flowRateAToBBL = flowRateA / 119.2404712
        break
      default:
        console.error('ERROR')
    }

    switch (typeB) {
      case 'Oil Barrel':
        flowRateB = flowRateAToBBL
        break
      case 'Gallon':
        flowRateB = flowRateAToBBL * 31.500000001
        break
      case 'Cubic Centimeter':
        flowRateB = flowRateAToBBL * 119240.4712
        break
      case 'Million Cubic Foot':
        flowRateB = flowRateAToBBL * 0.0000042109374395
        break
      case 'Liter':
        flowRateB = flowRateAToBBL * 119.2404712
        break
      default:
        console.error('ERROR')
    }
    changedFlowRate === 'a'
      ? (newValues.flowRateTwoVal = flowRateB)
      : (newValues.flowRateOneVal = flowRateB)
    setFlowRates({ ...newValues })
  }

  return (
    <FlowRateStyles>
      <div>
        <input
          type='text'
          name='flowRateOne'
          value={flowRates.flowRateOneVal}
          onChange={changeFlowRateVal}
        />
        <DropdownButton
          id='dropdown-basic-button'
          className='dropdown type-one'
          title={flowRates.flowRateOneType}
        >
          <Dropdown.Item onClick={changeType}>Oil Barrel</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>Gallon</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>Cubic Centimeter</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>Million Cubic Foot</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>Liter</Dropdown.Item>
        </DropdownButton>
      </div>
      <HR />
      <div>
        <input
          type='text'
          name='flowRateTwo'
          value={flowRates.flowRateTwoVal}
          onChange={changeFlowRateVal}
        />
        <DropdownButton
          id='dropdown-basic-button'
          drop='up'
          className='dropdown type-two btn-secondary'
          title={flowRates.flowRateTwoType}
        >
          <Dropdown.Item onClick={changeType}>Oil Barrel</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>Gallon</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>Cubic Centimeter</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>Million Cubic Foot</Dropdown.Item>
          <Dropdown.Item onClick={changeType}>Liter</Dropdown.Item>
        </DropdownButton>
      </div>
    </FlowRateStyles>
  )
}

const FlowRateStyles = styled(ComponentWrapper)`
  transition: all ease-in-out 3s;
  width: 80%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  input {
    width: 80%;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    height: 2.3rem;
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

  @media (max-width: 1000px) {
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

export default VolumeFlowRateConversion
