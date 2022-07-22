export class Category {
    constructor(
        public name: string, 
        public description?: string, 
        public is_active?: boolean, 
        public created_at?: Date
    ) {}
}

//TDD - Kent Beck
//Tests - Fail - Success - Refactor