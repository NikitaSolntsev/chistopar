import { createStore, combineReducers } from 'redux';
import { bathsReducer } from './bathsReducer';
import { specialistsReducer } from './specialistsReducer';

const rootReducer = combineReducers({
	baths: bathsReducer,
	specialists: specialistsReducer,
});

export const store = createStore(rootReducer);