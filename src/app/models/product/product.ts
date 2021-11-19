export class Product {
    ProductId!: number;
    Name!: string;
    Price!: number;
    Weight!: number;

    build(content: any): Product {
        Object.assign(this, content);

        return this;
    }
}
