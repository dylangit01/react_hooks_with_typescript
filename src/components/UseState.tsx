import React, { useState } from 'react'

const UseState = () => {
	const [arr, setArr] = useState<number[]>([]);
	const [name, setName] = useState<string | null>(null)
	return (
		<div>
			<div>
				<button onClick={() => setArr([...arr, arr.length + 1])}>Add to Array</button>
				{JSON.stringify(arr)}
			</div>

			<div>
				<button onClick={() => setName('Dylan')}>Set name</button>
				{JSON.stringify(name)}
			</div>

		</div>
	);
}

export default UseState
