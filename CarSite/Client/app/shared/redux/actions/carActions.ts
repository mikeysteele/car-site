import { Injectable } from '@angular/core';
import {ApiService} from '../../api.service';

@Injectable()
export class CarActions {
    public static readonly FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
    public static readonly FETCH_CARS_LOADING = 'FETCH_CARS_LOADING';
    public static readonly FETCH_CARS_FAILED = 'FETCH_CARS_FAILED';

    constructor(
        private apiService: ApiService
    ) { }

    public getCars() {
        return (dispatch) => {
            dispatch({ type: CarActions.FETCH_CARS_LOADING });
            this.apiService.getCars()
                .subscribe(
                (data) => dispatch(this.fetchCarsSuccess(data.json())),
                () => {
                    dispatch({ type: CarActions.FETCH_CARS_FAILED });

                });
        }

    }
    private fetchCarsSuccess(cars) {
        console.log(cars);
        return {
            type: CarActions.FETCH_CARS_SUCCESS,
            cars
        };
    };

}