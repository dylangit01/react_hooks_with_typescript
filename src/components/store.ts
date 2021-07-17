import { createContext } from 'react';

const initialState = {
	first: 'Dylan',
	last: 'Du',
};

export type UserState = typeof initialState

const context = createContext<typeof initialState>(initialState);

export default context
