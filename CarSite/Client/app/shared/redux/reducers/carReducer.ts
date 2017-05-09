import {CarActions} from '../actions/carActions';
const FETCH_CARS_LOADING = CarActions.FETCH_CARS_LOADING;
const FETCH_CARS_FAILED = CarActions.FETCH_CARS_FAILED;
const FETCH_CARS_SUCCESS = CarActions.FETCH_CARS_SUCCESS;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CARS_LOADING:
            return Object.assign({}, state, { loading: true, error: false });
        case FETCH_CARS_FAILED:
            return Object.assign({}, state, { error: true, loading: false });
        case FETCH_CARS_SUCCESS:
            return Object.assign({}, state, { data: action.cars, loading: false, loaded: true });
        default:
            return state;
    }
};