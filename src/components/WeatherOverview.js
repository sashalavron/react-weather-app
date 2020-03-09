import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    width: 'auto',
    margin: '0 auto',
  }
})

function WeatherOverview({ city, forecast }) {
  const classes = useStyles()
  
  if (!city.id || !forecast.dt) {
    return null
  }

  return (
    <Card className={ classes.container }>
      <CardContent>
        <div>
          { `${city.name}, ${city.country}` }
        </div>
        <div>
          { forecast.dt }
        </div>
        <div>
          { forecast.main.tempddd }
        </div>
        <div>
          { `Min: ${forecast.main.temp_max}` }
        </div>
        <div>
          { `Max: ${forecast.main.temp_min}` }
        </div>
      </CardContent>
    </Card>
  )
}

WeatherOverview.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
  }),

  forecast: PropTypes.shape({
    datetime: PropTypes.number,
    temperature: PropTypes.number,
    temperatureMax: PropTypes.number,
    temperatureMin: PropTypes.number,
  })
}

WeatherOverview.defaultProps = {
  forecast: {},
  city: {},
}

export default WeatherOverview