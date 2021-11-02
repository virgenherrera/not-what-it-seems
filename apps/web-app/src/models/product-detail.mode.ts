import { RelatedProduct } from "./related-product.model";

export class ProductDetail {
  company: string;
  cpn: string;
  created: Date;
  createdBy: string;
  description: string;
  eid: string;
  modified: string;
  name: string;
  revision: number;
  related: RelatedProduct[];

  constructor(args: ProductDetail|any) {
    this.company = args.company;
    this.cpn = args.cpn;
    this.created = new Date(args.created);
    this.createdBy = args.createdBy;
    this.description = args.description;
    this.eid = args.eid;
    this.modified = args.modified;
    this.name = args.name;
    this.revision = args.revision;
    this.related = args.related.map((v:any) => new RelatedProduct(v));
  }
}
