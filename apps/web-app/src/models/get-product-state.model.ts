import { ProductDetail } from "./product-detail.mode";
import { RelatedProduct } from "./related-product.model";

export class GetProductState {
  loading: boolean;
  productDetail: Partial<ProductDetail>;
  relatedProducts: RelatedProduct[];

  constructor({
    loading = true,
    productDetail = {},
    relatedProducts = [],
  }: Partial<GetProductState> = {}) {
    this.loading = loading;
    this.productDetail = productDetail;
    this.relatedProducts = relatedProducts;
  }
}
