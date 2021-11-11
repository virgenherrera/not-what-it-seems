import { GetProductState } from "../../models/get-product-state.model";
import { RelatedProductRows } from "../related-product-rows/related-product-rows.component";
import "./related-products.scss";

export interface RelatedProductsProps {
  relatedProducts: GetProductState["relatedProducts"];
}

export function RelatedProducts({ relatedProducts }: RelatedProductsProps) {
  return (
    <div className="related-products">
      <div className="related-products-header">
        <h3>Related Products</h3>
        <button type="button">Save Selection</button>
      </div>

      <div className="related-products-grid">
        <div className="related-products-row">
          <div className="related-products-cell first"></div>
          <div className="related-products-cell title">EID</div>
          <div className="related-products-cell title">Country</div>
          <div className="related-products-cell title-blue">Date & Status</div>
          <div className="related-products-cell title">Company</div>
          <div className="related-products-cell title">Status</div>
          <div className="related-products-cell title last">Action</div>
        </div>

        <RelatedProductRows relatedProducts={relatedProducts} />
      </div>
    </div>
  );
}
