import React , {useState, useEffect} from 'react';
import {Row} from 'react-bootstrap';
import CityCard from './CityCards';

const CityCards = ({weather, location}) =>{

    const loc = location?.data?.[0];
    const city = loc? loc.name : null;
    const weatherData = weather?.data?.current;
    const [place, setCity] = useState([]);
    
    useEffect(()=>{
        if(city && weatherData)
        {   if(place.length > 6){
            place.pop()
        }
            setCity({
                cityName : city,
                temprature : weatherData?.temp
            })
        }
    },[city])

    function getCards(){
        return(
            place?.data?.map((e,index)=>            
            <CityCard reading={e} key={index}/>                       
            )
        )
    }

    return(
        <div className="container" style={{
            width: "850px",
            height: "100px"
        }}>
        <h5 className="display-5">Weather Forecast</h5>
          <Row lg="auto" className="justify-content-center">  
            {getCards()}            
          </Row>
        </div>
    )
}

export default CityCards;