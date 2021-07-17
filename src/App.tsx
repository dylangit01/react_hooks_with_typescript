import React from 'react';
import UseEffect from './components/UseEffect';
import UseState from './components/UseState';
import UseContext from './components/UseContext'

function App() {

  return (
		<div>
			<h1>useState</h1>
			<UseState />
			<h1>useEffect</h1>
			<UseEffect />
			<h1>useContext</h1>
			<UseContext />
		</div>
	);
}

export default App;
