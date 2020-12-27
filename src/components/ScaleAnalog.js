import React, { useState } from 'react'
import styled from 'styled-components'
import { ComponentWrapper, HR } from '../styles/GlobalStyles'

const ScaleAnalog = () => {
	const [values, setValues] = useState({
		EUMax: 4000,
		EUMin: 0,
		EUCurrent: 2000,
		maMax: 20,
		maMin: 4,
		maCurrent: 12,
		percents: {
			current: 0.5,
			p100: 4000,
			p75: 3000,
			p50: 2000,
			p25: 1000,
			p0: 0,
		},
	})

	const recalc = (e) => {
		let newValues = { ...values }
		let EURange = newValues.EUMax - newValues.EUMin
		let maRange = newValues.maMax - newValues.maMin
		let recalcEU = false
		let recalcMa = false

		switch (e.currentTarget.name) {
			case 'EUMax':
				newValues.EUMax = Number(e.currentTarget.value)
				EURange = newValues.EUMax - newValues.EUMin
				recalcEU = true
				break
			case 'EUMin':
				newValues.EUMin = Number(e.currentTarget.value)
				EURange = newValues.EUMax - newValues.EUMin
				recalcEU = true
				break
			case 'maMax':
				newValues.maMax = Number(e.currentTarget.value)
				maRange = newValues.maMax - newValues.maMin
				recalcMa = true
				break
			case 'maMin':
				newValues.maMin = Number(e.currentTarget.value)
				maRange = newValues.maMax - newValues.maMin
				recalcMa = true
				break
			case 'EUCurrent':
				newValues.EUCurrent = Number(e.currentTarget.value)
				recalcEU = true
				break
			case 'maCurrent':
				newValues.maCurrent = Number(e.currentTarget.value)
				recalcMa = true
				break
			default:
		}

		if (recalcEU) {
			newValues.percents.current = getPercent(
				newValues.EUCurrent - newValues.EUMin,
				EURange,
			)
			newValues.maCurrent =
				newValues.percents.current * maRange + newValues.maMin
		} else if (recalcMa) {
			newValues.percents.current = getPercent(
				newValues.maCurrent - newValues.maMin,
				maRange,
			)
			newValues.EUCurrent =
				newValues.percents.current * EURange + newValues.EUMin
		}
		let percentRange = newValues.EUMax - newValues.EUMin
		newValues.percents.p0 = newValues.EUMin
		newValues.percents.p25 = 0.25 * percentRange + Number(newValues.EUMin)
		newValues.percents.p50 = 0.5 * percentRange + Number(newValues.EUMin)
		newValues.percents.p75 = 0.75 * percentRange + Number(newValues.EUMin)
		newValues.percents.p100 = newValues.EUMax

		setValues({ ...newValues })
	}

	function getPercent(val, max) {
		return val / max
	}

	return (
		<ComponentWrapper>
			<FormStyles>
				<div>
					<label>Device Min</label>
					<input
						name='EUMin'
						value={values.EUMin}
						type='number'
						onChange={recalc}
					/>
				</div>
				<div>
					<label>Device Max</label>
					<input
						name='EUMax'
						value={values.EUMax}
						type='number'
						onChange={recalc}
					/>
				</div>

				<div>
					<label>Raw Min</label>
					<input
						name='maMin'
						value={values.maMin}
						type='number'
						onChange={recalc}
					/>
				</div>
				<div>
					<label>Raw Max</label>
					<input
						name='maMax'
						value={values.maMax}
						type='number'
						onChange={recalc}
					/>
				</div>

				<div>
					<label>Device Current</label>
					<input
						name='EUCurrent'
						value={values.EUCurrent}
						type='number'
						onChange={recalc}
					/>
				</div>
				<div>
					<label>Raw Current</label>
					<input
						name='maCurrent'
						value={values.maCurrent}
						type='number'
						onChange={recalc}
					/>
				</div>
			</FormStyles>
			<HR></HR>
			<PercentStyles>
				<h3>Current %: {(values.percents.current * 100).toFixed(4)}</h3>
				<div className='percents'>
					<h4>100%: {values.percents.p100}</h4>
					<h4>75%: {values.percents.p75}</h4>
					<h4>50%: {values.percents.p50}</h4>
					<h4>25%: {values.percents.p25}</h4>
					<h4>0%: {values.percents.p0}</h4>
				</div>
			</PercentStyles>
		</ComponentWrapper>
	)
}

const FormStyles = styled.form`
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4rem;
	label {
		display: block;
		width: 100%;
		margin-bottom: 1rem;
	}
	input {
		display: block;
		width: 100%;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
	}

	@media (max-width: 500px) {
		width: 90%;
		gap: 1.8rem;
		grid-template-columns: 1fr;
		div {
			width: 100%;
			display: block;
		}
		label {
			margin-bottom: 0.5rem;
			font-size: 1.4rem;
			display: inline-block;
			width: 50%;
		}
		input {
			font-size: 1.5rem;
			display: inline-block;
			width: 50%;
		}
	}
`

const PercentStyles = styled.div`
	text-align: center;
	margin: 0 auto;
	width: 80%;
	.percents {
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		justify-content: space-around;
	}

	@media (max-width: 500px) {
		width: 90%;
		h3 {
			font-size: 1.4rem;
		}
		h4 {
			font-size: 1.2rem;
		}
		.percents {
			gap: 1.5rem;
		}
	}
`

export default ScaleAnalog
