import { ProductDetail } from "./product-detail.mode";
import { RelatedProduct } from "./related-product.model";

export class GetProductState {
  loading: boolean;
  productDetail: ProductDetail | null;
  relatedProducts: RelatedProduct[];

  constructor({
    loading = true,
    productDetail = null,
    relatedProducts = [],
  }: Partial<GetProductState> = {}) {
    this.loading = loading;
    this.productDetail = productDetail;
    this.relatedProducts = relatedProducts;
  }
}
