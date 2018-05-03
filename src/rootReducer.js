import * as ACTIONS from './actionTypes';
import { SEARCH_BY, SORT_BY } from './app/app.config';

const initialState = {
    movies: [],
    movie: {},
    searchBy: SEARCH_BY.TITLE.value,
    filter: '',
    sortBy: SORT_BY.RELEASE_DATE.value,
    appliedFilter: null
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.RECEIVE_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };

        case ACTIONS.RECEIVE_MOVIE:
            return {
                ...state,
                movie: action.payload,
            };

        case ACTIONS.APPLY_FILTER:
            return {
                ...state,
                appliedFilter: state.filter
            };
        
        case ACTIONS.SET_SEARCH_BY:
            return {
                ...state,
                searchBy: action.payload
            };
        
        case ACTIONS.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        
        case ACTIONS.SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            };

        default:
            return state;
    }
}