export class ContactInfo {
  constructor(
    public firstName: string,
    public lastName: string,
    public emailAddress: string,
    public queryType: boolean,
    public message: string,
    public consent: boolean,
  ) {}
}
