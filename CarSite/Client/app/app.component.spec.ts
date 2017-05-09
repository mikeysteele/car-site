import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';

import { ApiService } from './shared';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';

import {CarListModule} from './car-list/car-list.module';
import {CarDetailModule} from './car-detail/car-detail.module';
describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule, CarListModule, CarDetailModule],
        declarations: [AppComponent, HomeComponent, AboutComponent],
        providers: [ApiService, provideRoutes([]), { provide: APP_BASE_HREF, useValue: '/' }]
    });
  });

  it('should have an url', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.componentInstance.title).toEqual('Car Site');
  });

});
