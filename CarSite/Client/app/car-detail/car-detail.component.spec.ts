import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarDetailComponent } from './car-detail.component';
import { NgReduxModule } from '@angular-redux/store';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '../shared/redux/store.module';
import {APP_BASE_HREF} from '@angular/common';
import { ApiService } from '../shared';
import { Http, BaseRequestOptions} from '@angular/http';
import { MockBackend} from '@angular/http/testing';
describe('CarDetailComponent', () => {
    let component: CarDetailComponent;
    let fixture: ComponentFixture<CarDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CarDetailComponent],
            imports: [
                RouterTestingModule,
                NgReduxModule,
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
        fixture = TestBed.createComponent(CarDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});