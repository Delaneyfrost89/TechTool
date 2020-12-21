import React, { useState } from 'react'
import styled from 'styled-components'
import { ComponentWrapper, HR } from '../styles/GlobalStyles'

const ConvertTime = () => {
	const [times, setTimes] = useState({
		milliseconds: 36610000,
		hours: 10,
		minutes: 10,
		seconds: 10,
		ms: 0,
	})

	const convertTimes = (e) => {
		let newTimes = { ...times }

		switch (e.currentTarget.name) {
			case 'milliseconds':
				newTimes.milliseconds = Number(e.currentTarget.value)
				calcTimes({ newTimes })
				break
			case 'hours':
				newTimes.hours = Number(e.currentTarget.value)
				newTimes.milliseconds = calcMilliseconds({ newTimes })
				calcTimes({ newTimes })
				break
			case 'minutes':
				newTimes.minutes = Number(e.currentTarget.value)
				newTimes.milliseconds = calcMilliseconds({ newTimes })
				calcTimes({ newTimes })
				break
			case 'seconds':
				newTimes.seconds = Number(e.currentTarget.value)
				newTimes.milliseconds = calcMilliseconds({ newTimes })
				calcTimes({ newTimes })
				break
			case 'ms':
				newTimes.ms = Number(e.currentTarget.value)
				newTimes.milliseconds = calcMilliseconds({ newTimes })
				calcTimes({ newTimes })
				break
			default:
				console.error('ERROR')
		}
		setTimes({ ...newTimes })
	}

	const calcTimes = ({ newTimes }) => {
		newTimes.ms = newTimes.milliseconds % 1000
		newTimes.hours = Math.floor(newTimes.milliseconds / 3600000)
		newTimes.minutes = Math.floor((newTimes.milliseconds % 3600000) / 60000)
		newTimes.seconds = Math.floor(
			((newTimes.milliseconds % 3600000) % 60000) / 1000,
		)
		return { newTimes }
	}

	const calcMilliseconds = ({ newTimes }) => {
		let hourMs = newTimes.hours * 3600000
		let minMs = newTimes.minutes * 60000
		let secMs = newTimes.seconds * 1000
		let ms = newTimes.ms + hourMs + minMs + secMs
		return ms
	}

	return (
		<ConvertTimeStyles>
			<div>
				<label>Milliseconds</label>
				<input
					name='milliseconds'
					value={times.milliseconds}
					type='number'
					onChange={convertTimes}
				/>
			</div>
			<HR />
			<div>
				<div>
					<label>Hours</label>
					<input
						name='hours'
						value={times.hours}
						type='text'
						onChange={convertTimes}
					/>
				</div>
				<div>
					<label>Minutes</label>
					<input
						name='minutes'
						value={times.minutes}
						type='text'
						onChange={convertTimes}
					/>
				</div>
				<div>
					<label>Seconds</label>
					<input
						name='seconds'
						value={times.seconds}
						type='text'
						onChange={convertTimes}
					/>
				</div>
				<div>
					<label>Milliseconds</label>
					<input
						name='ms'
						value={times.ms}
						type='text'
						onChange={convertTimes}
					/>
				</div>
			</div>
		</ConvertTimeStyles>
	)
}

const ConvertTimeStyles = styled(ComponentWrapper)`
	width: 80%;
	margin: 0 auto;
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
		gap: 2rem;
		label {
			margin-bottom: 0.5rem;
			font-size: 1.5rem;
		}
		input {
			width: 100%;
			font-size: 1.5rem;
		}
	}
`

export default ConvertTime
