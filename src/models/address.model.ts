export class AddressModel {
  public addressID: string;
  public userID: string;
  public addressLine1: string;
  public addressLine2: string;
  public addressLine3: string;
  public city: string;
  public state: string;
  public pincode: string;
  public latitude: number;
  public longitude: number;

  constructor(
    addressID: string,
    userID: string,
    addressLine1: string,
    addressLine2: string,
    addressLine3: string,
    city: string,
    state: string,
    pincode: string,
    latitude: number,
    longitude: number
  ) {
    this.addressID = addressID;
    this.userID = userID;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.addressLine3 = addressLine3;
    this.city = city;
    this.state = state;
    this.pincode = pincode;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
