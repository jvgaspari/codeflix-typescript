import { Category } from './category';

describe("Categoty Tests", () => {
    test('constructor of category', () => {
        const category = new Category('Movie');
        expect(category.name).toBe('Movie');
    }); 
});