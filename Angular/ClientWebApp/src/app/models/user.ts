export class User {
  public username: string = "";
  public email: string = "";

  constructor(usrName: string, emailId: string) {
    this.username = usrName;
    this.email = emailId;
  }
}
