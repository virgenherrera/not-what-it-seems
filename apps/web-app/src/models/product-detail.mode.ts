export class ProductDetail {
  company: string;
  cpn: string;
  created: string;
  createdBy: string;
  description: string;
  eid: string;
  modified: string;
  name: string;
  revision: number;

  constructor(args: ProductDetail | any) {
    this.company = args.company;
    this.cpn = args.cpn;
    this.created = `${args.created}`.substring(0, 10);
    this.createdBy = args.createdBy;
    this.description = args.description;
    this.eid = args.eid;
    this.modified = `${args.modified}`.substring(0, 10);
    this.name = args.name;
    this.revision = args.revision;
  }
}
