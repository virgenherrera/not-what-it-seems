export class Company {
    name: string;
    profile: string;
  
    constructor({ name, profile }: Company|any) {
      this.name = name;
      this.profile = profile;
    }
  }