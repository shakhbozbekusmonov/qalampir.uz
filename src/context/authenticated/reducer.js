import { IS_AUTHENTICATED } from "./types";

export const reducer = (state, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.payload,
            };
        default:
            return state;
    }
};
