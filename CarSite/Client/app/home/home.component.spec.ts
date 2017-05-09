import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { NgReduxModule } from '@angular-redux/store';
import { RouterTestingModule } from '@angular/router/testing';
import {CarListModule} from '../car-list/car-list.module';
import {CarDetailModule} from '../car-detail/car-detail.module';
import {APP_BASE_HREF} from '@angular/common';
import { StoreModule } from '../shared/redux/store.module';
import { Http, BaseRequestOptions} from '@angular/http';
import { MockBackend} from '@angular/http/testing';
import { AboutComponent } from '../about/about.component';
import {ApiService} from '../shared/api.service';
describe('Home Component', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, AboutComponent],
            imports: [
                RouterTestingModule,
                NgReduxModule,
                CarListModule,
                CarDetailModule,
                StoreModule
                
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                ApiService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backendInstance, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});