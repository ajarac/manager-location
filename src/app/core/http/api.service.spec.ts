import { ApiService } from '@core/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
	let httpTestingController: HttpTestingController;
	let service: ApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ],
			providers: [
				ApiService,
				{
					provide: 'API_URL',
					useValue: 'www.domain.com'
				}
			]
		});
		httpTestingController = TestBed.get(HttpTestingController);
		service = TestBed.get(ApiService);
	});

	it('should make GET method', () => {
		service.get('users').subscribe();

		httpTestingController.expectOne({ url: 'www.domain.com/users', method: 'GET' });
		httpTestingController.verify();
	});

	it('should make POST method', () => {
		service.post('users', 'testing').subscribe();

		httpTestingController.expectOne({ url: 'www.domain.com/users', method: 'POST' });
		httpTestingController.verify();
	});

	it('should make PUT method', () => {
		service.put('users', 'testing').subscribe();

		httpTestingController.expectOne({ url: 'www.domain.com/users', method: 'PUT' });
		httpTestingController.verify();
	});

	it('should make DELETE method', () => {
		service.del('users').subscribe();

		httpTestingController.expectOne({ url: 'www.domain.com/users', method: 'DELETE' });
		httpTestingController.verify();
	});
});
