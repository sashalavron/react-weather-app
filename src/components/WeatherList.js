import React from 'react'
import Grid from '@material-ui/core/Grid'

function WeatherList(props) {
  const list = props.items.map(item => 
    <Grid item xs={ 2 } key={ item.id }>
      { props.children(item) }
    </Grid>
  )
  return (
    <Grid container>
      { list }
    </Grid>
  )
}

export default WeatherList