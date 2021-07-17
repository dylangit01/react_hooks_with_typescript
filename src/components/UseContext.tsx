import {useState, useContext} from 'react'
import UserContext, { UserState } from './store';

const ConsumerComponent = () => {
	const user = useContext(UserContext)

	return (
		<div>
			<div>First: {user.first}</div>
			<div>last: {user.last}</div>
		</div>
	)
}

const UseContext = () => {
	const [user, setUser] = useState<UserState>({
		first: 'Sienna',
		last: 'Hui'
	});
	return (
		<UserContext.Provider value={user}>
			<ConsumerComponent />
		</UserContext.Provider>
	)
}

export default UseContext
