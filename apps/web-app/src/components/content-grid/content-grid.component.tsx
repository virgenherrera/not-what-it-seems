import React from "react";
import { UseAppContext } from "../../context/app.context";
import { ProductDetail } from "../product-detail/product-detail.component";
import { RelatedProducts } from "../related-products/related-products.component";
import "./content-grid.scss";

export function ContentGrid() {
  const appCtx = UseAppContext();

  return (
    <div className="content-grid">
      <ProductDetail />
      <RelatedProducts />
      <pre>{JSON.stringify(appCtx.clickAction.state, null, 2)}</pre>
    </div>
  );
}
