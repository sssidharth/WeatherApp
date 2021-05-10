import React, { useState, useEffect } from "react"
import SideBar from './Sidebar';
import ForeCast from './Forecast';
import ForeCastGraph from './ForeCastGraph';
import {Container, Row, Col} from 'react-grid';

const Weather=({location, loading, click})=>{
    const loc = location?.data?.[0];
    const latitide = loc? loc.lat : null;
    const longitide = loc? loc.lon : null;
    const [weather, setWeather] = useState([]);
    const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(()=>{
      if(latitide !=null && longitide !=null){fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitide}&lon=${longitide}&exclude={part}&appid=${APIKEY}`
    )
    .then(res => res.json())
    .then(data => setWeather({data}))
    console.log({weather});
       }
    },[location])
    

  return(
      
     <Container fluid="true">
       <Row lg={{
         cols : "8"
       }}>
       <Col lg={4}>
       <SideBar weather={weather} location={location} loading={loading} click={click}/>
       </Col>
       <Col sm={3}></Col>
       <Col lg={4}>
         <br></br><br></br>      
       <ForeCast weather={weather} location={location} loading={loading} click={click}/>      
       <br></br><br></br><br></br><br></br><br></br><br></br>
       <ForeCastGraph weather={weather}/>
       </Col> 
       </Row>
     </Container>
        
    
      )
  }
export default Weather;