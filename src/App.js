import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadForecast } from './redux/actions'
import WeatherContainer from './components/WeatherContainer'
import WeatherOverview from './components/WeatherOverview'
import WeatherList from './components/WeatherList'
import WeatherListItem from './components/WeatherListItem'

function App({ loadForecast }) {
  const [weather] =  useState({ city: 'Kyiv', temperature: '+3', date: '24.02.2020' })
  const [weatherList] = useState([
    { id: '1', city: 'Kyiv', temperature: '+1', date: '25.02.2020' }, 
    { id: '2', city: 'Kyiv', temperature: '+4', date: '26.02.2020' }
  ])

  useEffect(() => {
    loadForecast('https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b6907d289e10d714a6e88b30761fae22')
  }, [ loadForecast ])


  return (
    <div className="App">
      <WeatherContainer
        renderOverview={
          <WeatherOverview weather={ weather } />
        }
        renderList={
          <WeatherList items={ weatherList } >
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

export default connect(
  null,
  mapDispatchToProps
)(App);
