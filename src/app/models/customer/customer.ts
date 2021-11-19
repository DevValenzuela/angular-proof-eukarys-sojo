export class Customer {
    CustomerId!: number;
    Name!: string;
    EmailAddress!: string;

    build(content: any): Customer {
        Object.assign(this, content);

        return this;
    }
}
