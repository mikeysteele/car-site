import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarDetailComponent} from './car-detail.component';
import { routing } from '../app.routing';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    exports: [CarDetailComponent],
    declarations: [CarDetailComponent],
})
export class CarDetailModule { }
