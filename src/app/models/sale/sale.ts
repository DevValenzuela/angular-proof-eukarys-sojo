export class Sale {
  SaleID!: number;
  CustomerId!: number;
  Lines!:[
    {
      ProductId: number,
      Units: number
    }
  ]

  build(content: any): Sale {
    Object.assign(this, content);

    return this;
  }
}
