import {ActionTypes} from '../Constants/ActionTypes';

const initialState = {
    Location : [],
    Weather : [],
    Click : false,
    Loading : false
}

export const locationReducer = (state = initialState.Location, {type, payload}) =>{

  switch(type){
      case ActionTypes.SET_LOCATION:
          return {...state, location : payload}
      default:
          return state;
  };

};

export const weatherReducer = (state = initialState.Weather, {type,payload}) =>{

    switch(type){
        case ActionTypes.SET_WEATHER:
            return{...state, weather : payload}
        default:
            return state;
    };
};

export const clickReducer = (state = initialState.Click, {type,payload}) =>{

    switch(type){
        case ActionTypes.SET_CLICK:
            return{...state, click : payload}
        default:
            return state;
    };
};

export const loadingReducer = (state = initialState.Loading, {type,payload}) =>{

    switch(type){
        case ActionTypes.SET_LOADING:
            return{...state, loading : payload}
        default:
            return state;
    };
};