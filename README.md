# Weather App 

To run -

- Enter City and country name.

- To get the forecast graph, select units(°C/°F) and range (hourly, Daily).

- Click on login to Enter a user.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Implementation

- I have implemented this application majory using hooks. As I have not worked with hooks much before and majorly worked with
  class components, it was a good learning exercise for me.

- I've also employed Redux with the use of hooks.

- Used CanvasJs class to implement the graph. The library seemed simple enough to use and had multiple easy to use configurations.

- I have used "Geocoding Api" from OpenWeatherMap. The response from this Api generates the Latitude and Longitude of the searched place and these are then passed on as parameters to get the weather data from OpenWeatherMap Api "one-call". The goal was to demonstrate how Coordinates can be passed on.
  Google's geolocation api can be used similarly to obtain current location coordinates and the weather.

- The app will not scale to a mobile device currently. Working on the grid design for that.

- Instead of routing, I have used Modal to display a Login popup and hence have a single Login button.

- Used inline styling where neccesary.

- Yet to complete the testing part and UI component to display the list of cities.


# libraries used 

  # Side Bar
    
    Used react-pro-sidebar to create the left section which displays thr current temprature and the login button.

    url= `https://www.npmjs.com/package/react-pro-sidebar`

  # Graph 
    
    CanvasJS classes to implement the graph

    url= `https://canvasjs.com/react-charts/`

  # Temprature Cards, Login screen

    ReactStrap cards
    ReactStrap Modal
  
  # Grid Design, forms, buttons

    Grid - react-grid

    url-`https://www.npmjs.com/package/react-grid`

    Forms,buttons - react-bootstrap


    
