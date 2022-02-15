export class CategoryModel {
  public id: string;
  public name: string;
  public code: string;
  public product_count: number;

  constructor(id: string, name: string, code: string, product_cnt: number) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.product_count = product_cnt;
  }
}
