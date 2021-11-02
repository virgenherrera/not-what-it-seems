import { Company } from "./company.model";
import { Country } from "./country.model";

export class RelatedProduct {
  company: Company;
  country: Country;
  created: string;
  eid: string;
  status: string;

  constructor(args: RelatedProduct | any) {
    this.company = new Company(args.company);
    this.country = new Country(args.country);
    this.created = args.created;
    this.eid = args.eid;
    this.status = args.status;
  }
}
