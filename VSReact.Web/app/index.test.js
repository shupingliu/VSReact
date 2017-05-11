import expect from 'expect';

describe('Our first test', () => {
	it('should pass', () => {
		expect(true).toEqual(true);
	});
});

describe('Our 2nd test', () => {
	it('should fail', () => {
		expect(false).toEqual(true);
	});
});