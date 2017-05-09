import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../shared/redux/IAppState';
import { ActivatedRoute } from '@angular/router';
import { CarActions } from '../shared/redux/actions/carActions';

@Component({
    selector: 'app-car-detail',
    templateUrl: './car-detail.component.html',
    styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
    public subs = [];
    public id: number;
    public car: any;
    public loading = false;
    public loadingError = false;
    public types = {
        1: 'Dealer',
        2: 'Private',
    }
    constructor(
        private route: ActivatedRoute,
        private ngRedux: NgRedux<IAppState>,
        private carActions: CarActions)
    { }

    public ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id']; 
            console.log(this.id);
        });
        this.ngRedux.select((state) => state.cars).subscribe(
            (cars) => {
                console.log(cars);
                this.loading = cars['loading'];
                this.loadingError = cars['error'];
                if (!cars.loaded && !cars.loading) {
                    this.loading = true;
                    this.ngRedux.dispatch(<any>this.carActions.getCars());
                } else {
                    if (!cars.data) {
                        this.loadingError = true;
                        this.loading = false;
                    } else {
                        this.car = cars.data.filter((car) => car.id == this.id)[0]
                    }
                }
            },
            (err) => console.log(err)
        );
        
    }
}