import { Category } from './category';
import { omit } from 'lodash';
import { validate as uuidValidate } from  'uuid';

describe("Category Tests", () => {
    test('constructor of category', () => {
        //Triple AAA - Arrange Act Assert
        

        let category = new Category({name: 'Movie'});
        let props = omit(category.props, 'created_at');
        expect(props).toStrictEqual({
            name: "Movie",
            description: null,
            is_active: true
        });


        let created_at = new Date();
        category = new Category({
            name: "Movie",
            description: "Some description",
            is_active: false
        });
        expect(category.props).toStrictEqual({
            name: "Movie",
            description: "Some description",
            is_active: false,
            created_at
        });


        category = new Category({
            name: "Movie",
            description: "other description",
        });
        expect(category.props).toMatchObject({
            name: "Movie",
            description: "other description",
        });


        category = new Category({
            name: "Movie",
            is_active: true
        });
        expect(category.props).toMatchObject({
            name: "Movie",
            is_active: true
        });


        created_at = new Date();
        category = new Category({
            name: "Movie",
            created_at
        });
        expect(category.props).toMatchObject({
            name: "Movie",
            created_at
        });
        

    });
    
    test('id field', () => {
        let category = new Category({ name: 'Movie'});
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeTruthy();

        category = new Category({ name: 'Movie'}, null);
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeTruthy();

        category = new Category({ name: 'Movie'}, undefined);
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeTruthy();

        category = new Category({ name: 'Movie'}, 'f8918b61-d777-471d-b269-54e3bc25166a');
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeTruthy();
    });

    test('getter of name prop', () => {
        const category = new Category({name: 'Movie'});
        expect(category.name).toBe('Movie');
    });

    test('getter and setter of description prop', () => {
        let category = new Category({name: 'Movie'});
        expect(category.description).toBeNull();

        category = new Category({name: 'Movie', description: 'some description'});
        expect(category.description).toBe('some description');

        category = new Category({
            name: 'Movie',
        });


        category['description'] = 'other description';
        expect(category.description).toBe('other description');

        category['description'] = undefined;
        expect(category.description).toBeNull();

        category['description'] = null;
        expect(category.description).toBeNull();
    });

    test('getter and setter of is_active prop', () => {
        let category = new Category({
            name: 'Movie',
        });

        expect(category.is_active).toBeTruthy();

        category = new Category({
            name: 'Movie',
            is_active: true,
        });

        expect(category.is_active).toBeTruthy();

        category = new Category({
            name: 'Movie',
            is_active: false,
        });

        expect(category.is_active).toBeFalsy();
    });

    test('getter and setter of created_at', () => {
        let category = new Category({
            name: 'Movie',
        });

        expect(category.created_at).toBeInstanceOf(Date);

        let created_at = new Date();
        category = new Category({
            name: 'Movie',
            created_at,
        });

        expect(category.created_at).toBe(created_at);
    })

});