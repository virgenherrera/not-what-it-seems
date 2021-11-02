export class Country {
  name: string;
  code: string;

  constructor({ name, code }: Country|any) {
    this.name = name;
    this.code = code;
  }
}
