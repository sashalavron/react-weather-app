import axios from 'axios'
import { ADD_FORECAST } from './actionTypes'

const addForecast = (payload) => ({
  type: ADD_FORECAST,
  payload,
})

export function loadForecast(url) {
  return async function(dispatch) {
    const resp = await axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    console.log('resp', resp)
    return dispatch(addForecast(resp))
  }
}