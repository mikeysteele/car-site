import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarListComponent } from './car-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgReduxModule } from '@angular-redux/store';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '../shared/redux/store.module';
import {APP_BASE_HREF} from '@angular/common';
import { ApiService } from '../shared';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend} from '@angular/http/testing';
describe('CarlistComponent', () => {
    let component: CarListComponent;
    let fixture: ComponentFixture<CarListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CarListComponent],
            imports: [
                NgxPaginationModule,
                FormsModule,
                NgReduxModule,
                RouterTestingModule,
                StoreModule,
                
            ],
            providers: [
                ApiService,
                { provide: APP_BASE_HREF, useValue: '/' },
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backendInstance, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CarListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});