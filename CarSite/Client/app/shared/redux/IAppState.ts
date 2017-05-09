//import {Car} from '../models/Car';

export interface IAppState {
    cars?: {
        loading?: boolean,
        loaded?: boolean,
        data?: any;
    }
}