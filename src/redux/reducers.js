import { ADD_FORECAST } from "./actionTypes"

const initialState = {
  city: {},
  forecasts: [],
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FORECAST: {
      return {
        city: payload.city,
        forecasts: payload.list,
      }
    }
    default:
      return state
  }
}