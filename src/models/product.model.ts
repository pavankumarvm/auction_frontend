export class ProductModel {
  public id: string;
  public categoryId: string;
  public name: string;
  public imagePath: string;
  public desc: string;
  public minPrice: number;
  public recentBid: string;
  public bidCount: number;
  public startsAt: Date;
  public expiresAt: Date;

  constructor(
    id: string,
    categoryId: string,
    name: string,
    imagePath: string,
    desc: string,
    minPrice: number,
    recentBid: string,
    bidCount: number,
    startsAt: Date,
    expiresAt: Date
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.imagePath = imagePath;
    this.desc = desc;
    this.minPrice = minPrice;
    this.recentBid = recentBid;
    this.bidCount = bidCount;
    this.startsAt = startsAt;
    this.expiresAt = expiresAt;
  }
}
