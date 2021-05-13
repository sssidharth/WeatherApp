import React,{useState, useEffect} from 'react';
import CanvasJSReact from './canvasjs.react';
import {Row, Col} from 'react-grid';
import moment from 'moment';

const ForeCastGraph = ({weather})=>{
     let CanvasJSChart = CanvasJSReact.CanvasJSChart;
     const dailyWeather = weather?.data?.daily;
     const hourlyWeather = weather?.data?.hourly;
     const heading = weather?.data? "Weather Graph":"";
     const [options, setOptions] = useState([])
     const [type, setType] = useState({
         range : "",
         units : ""
     });
     
    useEffect(()=>{
        let dataPoints = [];
        if(dailyWeather && hourlyWeather){
            if(type.range === "hourly"){
            for(let i=0;i<hourlyWeather?.length-30;i++){
              let temp = type.units === "cel"?toCelsius(hourlyWeather?.[i].temp): toFar(hourlyWeather?.[i].temp);
              let newTime = new Date();
              let time = (hourlyWeather?.[i].dt) * 1000;
              newTime.setTime(time);
              let formattedTime = moment(newTime).format('hh:mm')
                dataPoints.push({
                    label: formattedTime,
                    y: temp
                })
            } 
           } 
          else if(type.range === "daily"){
            for(let i=0;i<dailyWeather?.length-1;i++){
              let temp = type.units === "cel"?toCelsius(dailyWeather?.[i].temp.day): toFar(dailyWeather?.[i].temp.day);
              let newDate = new Date();
              let weekday = (dailyWeather?.[i].dt) * 1000;
              newDate.setTime(weekday);
              let formattedDate = moment(newDate).format('ddd, Do')
                dataPoints.push({
                    label: formattedDate,
                    y: temp
                })
            } 
           }                           
         }
         setOptions({
                theme: "light2",
                height: 270,
                axisY: {
                    suffix: type.units === "far"? "°F":"°C"
                },
                data: [{
                    type: "line",
                    xValueFormatString: type.range === "hourly"?"hh:mm":"ddd, Do",
                    yValueFormatString: type.units === "far"?"#°F":"#°C",
                    dataPoints: dataPoints
                }]
            
         })

    },[type])

    function toFar(kelvin){
        return(
          Math.round((( kelvin - 273.15) * 9/5) + 32)
        );
       }

    function toCelsius(kelvin){
        return(
        Math.round(kelvin-273.15)
        );
    }

     function handleChange(e){
        let selection = e.target.name;
        let value = e.target.value;
    
        if (selection === "range") {
          setType({ ...type, range: value });
        }
        if (selection === "units") {
          setType({ ...type, units: value });
        }
     }


     function showComponent(){
         if(weather?.data){
            return(
                <div>
                <h5 className="display-5">{heading}</h5>
            <Row>
                <Col>
               <form>
                   <label>
                       Celsius
                       <input
                       style={{
                        margin: "0 10px 0 10px"
                       }}
                       type="radio"
                       value="cel"
                       name="units"
                       checked={type.units === "cel"}
                       onChange={(e)=>handleChange(e)}
                       ></input>
                   </label>
                   <label>
                       Fahrenheit
                       <input
                        style={{
                            margin: "0 10px 0 10px"
                        }}
                       type="radio"
                       value="far"
                       name="units"
                       checked={type.units === "far"}
                       onChange={(e)=>handleChange(e)}
                       ></input>
                   </label>
               </form>
               </Col>
               <Col>
               <form>
                   <label>
                       Hourly
                       <input
                       style={{
                        margin: "0 10px 0 10px"
                       }}
                       type="radio"
                       value="hourly"
                       name="range"
                       checked={type.range === "hourly"}
                       onChange={(e)=>handleChange(e)}
                       ></input>
                   </label>
                   <label>
                       Daily
                       <input
                        style={{
                         margin: "0 10px 0 10px"
                        }}
                       type="radio"
                       value="daily"
                       name="range"
                       checked={type.range === "daily"}
                       onChange={(e)=>handleChange(e)}
                       ></input>
                   </label>
               </form>
               </Col>
               </Row>  
               <div>
               <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
               </div>
               </div>
            )
         }
            else{
                return(<div></div>);
            }
         }

     return(
        <div className="container" style={{
            width: "850px",           
        }}>
        {showComponent()}
        </div>
     );
}

export default ForeCastGraph;