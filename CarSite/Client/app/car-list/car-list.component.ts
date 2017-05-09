import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../shared/redux/IAppState';
import { CarActions } from '../shared/redux/actions/carActions';
@Component({
    selector: 'app-car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

    public filters = {
        Price: null,
        Type: "0"
    }
    public data: any[];
    public cars: any[];
    public types = {
        1: 'Dealer',
        2: 'Private',
    }
    public loading = false;
    public loadingError = false;
    constructor(private ngRedux: NgRedux<IAppState>, private carActions: CarActions) {

    }

    public ngOnInit() {
        this.ngRedux.select((state) => state.cars).subscribe(
            (cars) => {
                console.log(cars);
                this.loading = cars['loading'];
                this.loadingError = cars['error'];
                if (!cars.loaded && !cars.loading) {
                    this.loading = true;
                    this.ngRedux.dispatch(<any>this.carActions.getCars());
                } else {
                    this.data = this.cars = cars["data"];
                } 
            },
            (err) => console.log(err)
        );

    }

    public applyFilter() {
        this.data = this.cars.filter((car) => {
            return (car.type === parseInt(this.filters.Type)) || !parseInt(this.filters.Type);
        })
    }
}