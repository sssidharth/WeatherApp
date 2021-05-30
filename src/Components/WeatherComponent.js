import React, { useEffect } from "react"
import SideBar from './Sidebar';
import ForeCast from './Forecast';
import ForeCastGraph from './ForeCastGraph';
import {Container, Row, Col} from 'react-grid';
import {useSelector,useDispatch} from 'react-redux';
import {setWeather} from '../redux/Actions/WeatherActions';

const Weather=()=>{
    const location = useSelector((state) => state.location);
    const weather = useSelector((state) => state.weather);
    const dispatch = useDispatch();
    const loc = location?.location?.[0];
    const latitide = loc? loc.lat : null;
    const longitide = loc? loc.lon : null;
    const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(()=>{
      if(latitide !=null && longitide !=null){fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitide}&lon=${longitide}&exclude={part}&appid=${APIKEY}`
    )
    .then(res => res.json())
    .then(data => dispatch(setWeather(data)))
    console.log(weather);
       }
    },[location])
    

  return(
      
     <Container fluid="true">
       <Row lg={{
         cols : "8"
       }}>
       <Col lg={4}>
       <SideBar/>
       </Col>
       <Col sm={3}></Col>
       <Col lg={4}>
       <br></br><br></br>      
       <ForeCast/>      
       <br></br><br></br><br></br><br></br><br></br><br></br>
       <ForeCastGraph/>
       </Col> 
       </Row>
     </Container>
            
      )
  }
export default Weather;