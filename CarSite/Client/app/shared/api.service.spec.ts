import { inject, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';

describe('Api Service', () => {
    let service: ApiService = null;
    let backend: MockBackend = null;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
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
            imports: [HttpModule]
        });
    });
    beforeEach(inject([ApiService, MockBackend], (apiService: ApiService, mockBackend: MockBackend) => {
        service = apiService;
        backend = mockBackend;

    }));
    it('should ...', inject([ApiService], (api) => {
        expect(api).toBeTruthy();
    }));
    it('#getCars should call endpoint and return it\'s result', (done) => {
        backend.connections.subscribe((connection: MockConnection) => {
            let options = new ResponseOptions({
                body: JSON.stringify({ success: true })
            });
            connection.mockRespond(new Response(options));
        });
  
        service
            .getCars()
            .subscribe((response) => {
                expect(response.json()).toEqual({ success: true });
                done();
            });
    });
});
