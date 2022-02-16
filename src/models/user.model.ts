export class UserModel {
  public userId: string;
  public username: string;
  public firstName: string;
  public lastName: string;
  public phoneNo: string;
  public email: string;
  public dateJoined: Date;
  public lastLogin: Date;
  public isSeller: boolean;
  public isBuyer: boolean;
  public isAdmin: boolean;
  public isActive: boolean;

  constructor(
    userId: string,
    username: string,
    firstName: string,
    lastName: string,
    phoneNo: string,
    email: string,
    dateJoined: Date,
    lastLogin: Date,
    isSeller: boolean,
    isBuyer: boolean,
    isAdmin: boolean,
    isActive: boolean
  ) {
    this.userId = userId;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNo = phoneNo;
    this.email = email;
    this.dateJoined = dateJoined;
    this.lastLogin = lastLogin;
    this.isSeller = isSeller;
    this.isBuyer = isBuyer;
    this.isAdmin = isAdmin;
    this.isActive = isActive;
  }
}
