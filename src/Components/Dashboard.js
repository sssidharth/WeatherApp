import React, { useState } from "react";
import Weather from './WeatherComponent';
import {Container, Row, Col} from 'react-grid';


function Dashboard() {
  const [location, setLocation] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;
  async function locationData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${form.city},${form.country}&limit=1&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) =>  setLocation({data}))     
      console.log({location});
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };

  return (
      <Container fluid="true">
      <Row>        
      <Col md={4}>
        <Weather location={location}/>
      </Col>              
      <Col md={5} style={{
        height:"80px"
      }}>
      <form>
      <div class="input-group">
           <input type="text"
            placeholder="City"
            name="city"
            onChange={(e) => handleChange(e)}/>
           <input type="text"
            placeholder="Country"
            name="country"
            onChange={(e) => handleChange(e)}/>
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" onClick={(e) => locationData(e)}>Search</button>
            </div>
      </div>    
      </form>      
    </Col>
    </Row>  
    </Container>   
  );
}

export default Dashboard;