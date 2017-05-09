import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {CarDetailComponent} from './car-detail/car-detail.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'car/:id', component: CarDetailComponent }

];

export const routing = RouterModule.forRoot(routes);
