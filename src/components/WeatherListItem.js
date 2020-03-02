import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.section`
  text-align: center;
  padding: 5px;
  border: 1px solid #878787;
  font-size: 13px;
`

function WeatherListItem(props) {
  return (
    <Wrapper>
      <div>
        вт
      </div>
      <div>
        5
      </div>
    </Wrapper>
  )
}

WeatherListItem.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    date: PropTypes.string,
    temperature: PropTypes.string,
  })
}

export default WeatherListItem