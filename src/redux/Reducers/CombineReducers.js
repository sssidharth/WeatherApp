import {combineReducers} from 'redux';
import {clickReducer, loadingReducer, locationReducer, weatherReducer} from './WeatherReducer';

const reducers = combineReducers({
    location : locationReducer,
    weather : weatherReducer,
    loading : loadingReducer,
    click : clickReducer
});

export default reducers;