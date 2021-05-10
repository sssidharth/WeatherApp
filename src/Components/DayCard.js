import React from 'react';
import moment from 'moment';
import {Card,CardBody,CardTitle} from 'reactstrap';

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  function toFar(kelvin){
    return(
      Math.round((( kelvin - 273.15) * 9/5) + 32)
    );
   }

  const iconUrl = `https://openweathermap.org/img/wn/${reading?.weather[0].icon}@2x.png`

  return (
    <div className="col-sm-2">
      <Card style={{
          backgroundColor:"white",
          width:"120px",
          height:"180px"}}>
        <CardBody className="text-center">{moment(newDate).format('ddd, Do')}
        <img className = "justify-center" src={iconUrl} alt="weather icon"></img>
        <p>{Math.round(toFar(reading.temp.min))+"/"+Math.round(toFar(reading.temp.max))} °F</p>
        </CardBody>
        {/* <p className="text-muted">{moment(newDate).format('MMMM Do,h:mm a')}</p> */}
      </Card>
    </div>
  )
}

export default DayCard;