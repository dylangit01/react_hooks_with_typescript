import React, {useState, useEffect} from 'react'

const UseEffect = () => {
	const [val, setVal] = useState(1)
	useEffect(() => {
		const timer = setInterval(() => {
			setVal(prev => prev + 1)
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	return (
		<div>
			{val}
		</div>
	)
}

export default UseEffect
