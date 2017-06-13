import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                { id: 'test-course-id1', firstName: 'Writer1', lastName: 'LastName1' },
                { id: 'test-course-id2', firstName: 'Writer2', lastName: 'LastName2' }
            ];

            const expected = [
                { value: 'test-course-id1', text: 'Writer1 LastName1' },
                { value: 'test-course-id2', text: 'Writer2 LastName2' }
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        })
    });
});