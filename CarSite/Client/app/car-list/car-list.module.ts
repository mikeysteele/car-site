import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarListComponent} from './car-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { routing } from '../app.routing';
import { NgReduxModule } from '@angular-redux/store';

@NgModule({
    imports: [
        CommonModule,
        NgxPaginationModule,
        FormsModule,
        routing,
        NgReduxModule
    ],
    exports: [CarListComponent],
    declarations: [CarListComponent],
})
export class CarListModule { }
