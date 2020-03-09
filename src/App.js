import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadForecast } from './redux/actions'
import WeatherContainer from './components/WeatherContainer'
import WeatherOverview from './components/WeatherOverview'
import WeatherList from './components/WeatherList'
import WeatherListItem from './components/WeatherListItem'

const API_KEY = '1a2a92ea8638bd68647f4c22d6ab9243'
const CITY_ID = '703448'
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${API_KEY}&units=metric&cnt=7`

function App({ loadForecast, city, forecasts }) {
  useEffect(() => {
    loadForecast(API_URL)
  }, [ loadForecast ])

  const [currentForecast, ...nextForecasts] = forecasts

  return (
    <div className="App">
      <WeatherContainer
        renderOverview={
          <WeatherOverview city={ city } forecast={ currentForecast } />
        }
        renderList={
          <WeatherList items={ nextForecasts } >
            { item => 
                <WeatherListItem item={ item }
                />
            }
          </WeatherList>
        }
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  loadForecast: url => dispatch(loadForecast(url))
})

const mapStateToProps = ({ city, forecasts }) => ({
  city,
  forecasts,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
