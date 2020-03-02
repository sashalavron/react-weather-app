import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'

function WeatherContainer(props) {
  return (
    <Container>
      <Grid container>
        <Grid item xs={4}>
        { props.renderOverview }
        </Grid>
      </Grid>

      <div>
        { props.renderList }
      </div>
    </Container>
  )
}

WeatherContainer.propTypes = {
  renderOverview: PropTypes.element.isRequired,
  renderList: PropTypes.element.isRequired
}

export default WeatherContainer