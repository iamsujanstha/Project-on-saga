import { 
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS ,
  FETCH_RESET
} from "../types/common"



export const fetchStart = () => ({
  type: FETCH_START
})

export const fetchSuccess = (actionComplete = false) => ({
  type: FETCH_SUCCESS,
  actionComplete
})

export const fetchError = () => ({
  type: FETCH_ERROR
})

export const fetchReset = () => ({
  type: FETCH_RESET
})