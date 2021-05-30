import {ActionTypes} from '../Constants/ActionTypes';

export const setLocation = (location) =>{
    return {
        type : ActionTypes.SET_LOCATION,
        payload : location,
    };
};

export const setWeather = (Weather) =>{
    return {
        type : ActionTypes.SET_WEATHER,
        payload : Weather,
    };
};

export const setClick = (click) =>{
    return {
        type : ActionTypes.SET_CLICK,
        payload : click,
    };
};

export const setLoading = (loading) =>{
    return {
        type : ActionTypes.SET_LOADING,
        payload : loading,
    };
};