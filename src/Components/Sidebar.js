import React, {useState} from 'react';
import {ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import sidebarBg from '../assets/sidebarBg.jpg';
import {FaUserPlus} from 'react-icons/fa';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import 'react-pro-sidebar/dist/css/styles.css';

const SideMenu = ({weather,location})=>{
    const loc = location?.data?.[0];
    const city = loc? loc.name : null;
    const country = loc? loc.country: null;
    const weatherData = weather?.data;
    const [userData, setUserData] = useState({
      username:"",
      email:"",
      remember: false
    });
    const [login, setLogin] = useState([])
    const [modal, setModal] = useState({
      isModalOpen : false
    });

    function toFar(kelvin){
          return(
            Math.round((( kelvin - 273.15) * 9/5) + 32)
          );
    }

    function toggleModal(){
        setModal({...modal , isModalOpen : !modal?.isModalOpen})
    }

    function handleUserData(e){
      let name = e.target.name;
      let value = e.target.value;
      let checked = e.target.checked;
      
      if(name === "username"){
        setUserData({...userData, username: value})
      }
      if(name === "email"){
        setUserData({...userData, email: value})
      }
      if(name === "remember"){
        setUserData({...userData, remember: checked})
      }
        e.preventDefault();

    }

    function handleLogin(e){
      toggleModal();
      setLogin({userData});
      console.log({login})
      e.preventDefault();      
    }

    function WeatherCard(){
      if(loc && weatherData){
        let iconUrl = `https://openweathermap.org/img/wn/${weatherData?.current?.weather[0].icon}@2x.png`
		return (     
			<div id="weather-data">
        <br></br>
        <br></br> 
            <p id="location">
                {city}, &nbsp;
                {country} 
            <div className="row">
              <div className="col"><h2>Current</h2></div>
              <div className="col"><img src={iconUrl} alt="weather icon"></img></div>
            </div> 
               <h2> {toFar(weatherData.current.temp)} °F</h2>
            </p>
            <p>Conditions: {weatherData.current.weather[0].main} - {weatherData.current.weather[0].description}</p>
            <p>Temperature: {toFar(weatherData.current.temp)} °F</p>
            <p>Feels like: {toFar(weatherData.current.feels_like)} °F</p>
            <p>Pressure: {weatherData.current.pressure} hpa</p>
            <p>Humidity: {weatherData.current.humidity} %</p>
            <p></p>
            <br></br>
            <br></br>
            <br></br>
                   
        </div>
        )  
      }
      else{
        return(<div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>)
      }      
    }

    return(
      
      <React.Fragment>
       <ProSidebar
       image={sidebarBg}
       >
        <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
          Weather App
        </div>
      </SidebarHeader>
      <SidebarContent>
      <Menu iconShape="circle">
          <MenuItem icon={<FaUserPlus/>} onClick={()=>toggleModal()}>
              Login
          </MenuItem>
          <br></br>
          <MenuItem>{(login?.length !== 0)?"Welcome, "+login?.userData?.username:""}</MenuItem>
        </Menu>
        <Menu iconShape="round">
          {WeatherCard()}
        </Menu>
      </SidebarContent>
      <SidebarFooter/>
      </ProSidebar>
      <Modal isOpen= {modal.isModalOpen} toggle={()=>toggleModal()}>
              <ModalHeader toggle={()=>toggleModal()}>User Information</ModalHeader>
                <ModalBody>
                   <Form onSubmit={(e)=>handleLogin(e)}>
                       <FormGroup>
                           <Label htmlFor="username">User Name</Label>
                           <Input type="text" id="username" name="username" onChange={(e)=>handleUserData(e)}/>
                       </FormGroup>                                      
                       <FormGroup>
                           <Label htmlFor="email">Email</Label>
                           <Input type="email" id="email" name="email" onChange={(e)=>handleUserData(e)}/>
                       </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="remember" onChange={(e)=>handleUserData(e)}/>
                            Remember me?
                        </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" className="bg-primary">Login</Button>
                    </Form>
                </ModalBody>
        </Modal>
      </React.Fragment>
      
    );
}

export default SideMenu;