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

function WeatherOverview(props) {
  const classes = useStyles()
  return (
    <Card className={ classes.container }>
      <CardContent>
        <div>
          { props.weather.city }
        </div>
        <div>
          { props.weather.date }
        </div>
        <div>
          { props.weather.temperature }
        </div>
      </CardContent>
    </Card>
  )
}

WeatherOverview.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    date: PropTypes.string,
    temperature: PropTypes.string,
  })
}

export default WeatherOverview