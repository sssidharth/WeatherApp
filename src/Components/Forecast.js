import React from 'react';
import DayCard from './DayCard';
import {Row} from 'react-grid';

const ForeCast = ({weather, location}) =>{
    const loc = location?.data?.[0];
    const city = loc? loc.name : null;
    const weatherData = weather?.data?.daily;

    function formatDayCards(){
        return(
            weatherData?weatherData.slice(0,6).map((e,index)=>
            
            <DayCard reading={e} key={index}/>
                       
        ):<div></div>
        )
    }

    return(
        <div className="container" style={{
            width: "850px",
            height: "100px"
        }}>
        <h5 className="display-5">{city}</h5>
          <Row lg="auto" className="justify-content-center">  
            {formatDayCards()}  
          </Row>
        </div>
    )
}

export default ForeCast;