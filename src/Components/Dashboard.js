import React, { useState } from "react";
import Weather from './WeatherComponent';
import {Container, Row, Col} from 'react-grid';
import { useDispatch, useSelector } from "react-redux";
import {setLocation, setLoading, setClick} from '../redux/Actions/WeatherActions';


function Dashboard() {
  const location = useSelector((state)=>state.location);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = process.env.REACT_APP_WEATHER_API_KEY;
  async function locationData(e) {
    dispatch(setClick(true));
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${form.city},${form.country}&limit=1&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) =>  dispatch(setLocation(data)))     
      console.log(location);       
        dispatch(setLoading(true))
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
        <Weather/>
      </Col>              
      <Col md={5} style={{
        height:"80px"
      }}>
      <form>
      <div className="input-group">
           <input type="text"
            placeholder="City"
            name="city"
            onChange={(e) => handleChange(e)}/>
           <input type="text"
            placeholder="Country"
            name="country"
            onChange={(e) => handleChange(e)}/>
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={(e) => locationData(e)}>Search</button>
            </div>
      </div>    
      </form>      
    </Col>
    </Row>  
    </Container>   
  );
}

export default Dashboard;