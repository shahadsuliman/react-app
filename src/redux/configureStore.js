import {createStore} from 'redux';
import { Reducer, initialState } from './reducer'


//I have applied the same way here https://www.coursera.org/learn/front-end-react/supplement/OyUO4/exercise-instructions-introduction-to-redux
// But it causes  "TypeError: Object(...) is not a function" error so I removed  the export from the initilization statment 
function ConfigureStore()  {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}

export default ConfigureStore;