import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, FETCH_RESET } from "../types/common";

const INITIAL_STATE = {
    loading: false,
    actionComplete: false,
    error: {
        type: 200,
        message: "",
    },
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case FETCH_START: {
            return {
                ...state,
                actionComplete: false,
                loading: true,
            };
        }
        case FETCH_SUCCESS: {
            const { actionComplete } = action;
            return {
                ...state,
                actionComplete,
                loading: false,
            };
        }
        case FETCH_ERROR: {
            return {
                ...state,
                loading: false,
            };
        }
        case FETCH_RESET: {
            return {
                actionComplete: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
