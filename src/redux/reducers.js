import { ADD_FORECAST } from "./actionTypes"

const initialState = {
  city: null,
  forecasts: [],
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FORECAST: {
      return state
    }
    default:
      return state
  }
}