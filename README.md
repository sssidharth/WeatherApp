# Weather App 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Implementation

- I have implemented this application majory using hooks. As I have not worked with hooks much before and majorly worked with
  class components, it was a good learning exercise for me.

- Also I wanted to explore the capabilities of hooks I decided to use them instead of Redux.

- Used CanvasJs class to implement the graph. The library seemed simple enough to use and had multiple easy to use configurations.

- Although the requirement was to display the weahter by capturing the current location but I couldn't procure an Api key from
  Google Geolocation which would have returned coordinates. Instead I have used "Geocoding Api" from OpenWeatherMap. The response from this Api generates the Latitude and Longitude of the searched place and these are then passed on as parameters to get the weather data from OpenWeatherMap Api "one-call". The goal was to demonstrate how Coordinates can be passed on.

- The app will not scale to a mobile device currently.

- Instead of routing, I have used Modal to display a Login popup and hence have a single Login button.

- Yet to complete the testing part and UI component to display the list of cities.S


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


    
