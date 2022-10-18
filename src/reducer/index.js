import { combineReducers } from 'redux';
import {
    ADD_MOVIES,
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    SET_SHOW_FAVOURITES,
    ADD_MOVIE_TO_LIST,
    ADD_MOVIE_TO_SEARCH
} from '../actions';


const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false,

}

export function movies(state = initialMovieState, action) {
    // if(action.type===ADD_MOVIES){
    //     return{
    //     ...state,
    //     list:action.movies
    //     }
    // }
    // return state;
    // }



    // console.log(action);

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]

            }
        case REMOVE_FROM_FAVOURITES:

            const filteredArray = state.favourites.filter(movie => movie.Title !== action.movie.Title)

            return {
                ...state,
                favourites: filteredArray

            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]


            }

        default:
            return state;
    }



}

const initialSearchState = {
    result: {},
    showSearchResults: false

}

export function search(state = initialSearchState, action) {

    switch (action.type) {

        case ADD_MOVIE_TO_SEARCH:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true,


            }
            case ADD_MOVIE_TO_LIST:
                return {
                    ...state,
                    showSearchResults: false,
    
    
                }


        default:
            return state;

    }

}














const initiaRootState = {
    movies: initialMovieState,
    search: initialSearchState
}

// export default function rootReducer(state=initiaRootState,action){
// return{
//     movies:movies(state.movies,action),
//     search:search(state.search,action)
// }
// }
// above function writes it but after that we know redux created for us rootreducer which is also 
// known as combineReducer it gives object as a argument and dont write function keyword before function name

export default combineReducers(
    {
        // movies:movies,  movies is a state which is handled by movies reducer
        // search:search   search is a state which is handled by search reducer

        movies, // we are using shorthand property
        search
    }
)