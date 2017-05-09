import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
const API_URI = '/api/cars';
@Injectable()
export class ApiService {

    constructor(private http: Http) { }
    getCars() {
        return this.http.get(API_URI);
    }
}
