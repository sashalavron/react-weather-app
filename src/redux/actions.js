import axios from 'axios'
import { ADD_FORECAST } from './actionTypes'

const addForecast = (payload) => ({
  type: ADD_FORECAST,
  payload,
})

export function loadForecast(url) {
  return async function(dispatch) {
    const { data } = await axios.get(url)
    return dispatch(addForecast(data))
  }
}