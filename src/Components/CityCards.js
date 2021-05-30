import React from 'react';
import {Card,CardBody} from 'reactstrap';

const CityCard = ({ reading }) => {
  const city = reading?.cityName;
  const temprature = reading?.temprature;
  const iconUrl = `https://openweathermap.org/img/wn/${reading?.weather[0]?.icon}@2x.png`
  function toFar(kelvin){
    return(
      Math.round((( kelvin - 273.15) * 9/5) + 32)
    );
   }

  return (
    <div className="col-sm-2">
      <Card style={{
          backgroundColor:"white",
          width:"120px",
          height:"160px"}}>
        <CardBody className="text-center">{city}
        <img style={{
          width:"70px",
          height:"70px"}}
         src={iconUrl} alt="weather icon"></img>
        <p>{Math.round(toFar(temprature.temp))} °F</p>
        </CardBody>
        {/* <p className="text-muted">{moment(newDate).format('MMMM Do,h:mm a')}</p> */}
      </Card>
    </div>
  )
}

export default CityCard;