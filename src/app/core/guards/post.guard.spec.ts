import { PostGuard } from './post.guard';
import { of } from 'rxjs';

describe('PostGuard', () => {
	let guard: PostGuard;
	let mockStore;

	beforeEach(() => {
		mockStore = jasmine.createSpyObj([ 'select', 'dispatch' ]);
		guard = new PostGuard(mockStore);
	});

	describe('canActivate', () => {
		let route;

		beforeEach(() => {
			route = {
				paramMap: new Map().set('id', '2')
			};
		});

		it('should return observable of false when we dont have any post', () => {
			mockStore.select.and.returnValue(of(null));
			console.log(route);
			guard.canActivate(route).subscribe((value) => expect(value).toBeFalsy());
		});

		it('should return a observable of false when we have a post with different id', () => {
			mockStore.select.and.returnValue(of({ id: 3 }));

			guard.canActivate(route).subscribe((value) => expect(value).toBeFalsy());
		});

		it('should return a observable of true when we have a correctly post', () => {
			mockStore.select.and.returnValue(of({ id: 2 }));

			guard.canActivate(route).subscribe((value) => expect(value).toBeTruthy());
		});
	});
});
