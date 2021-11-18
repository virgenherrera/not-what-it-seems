import React from "react";
import { UseAppContext } from "../../context/app.context";
import { ProductDetailMeta } from "../product-detail-meta/product-detail-meta.component";
import "./product-detail.scss";

export function ProductDetail() {
  const appCtx = UseAppContext();
  const productDetail = appCtx.productDetail.state;

  return (
    <div className="product-detail-wrapper">
      <div className="product-highlight">
        <div className="product-image">Image Here!</div>

        <div className="product-header">
          <div className="product-title">{productDetail?.name}</div>
          <div className="product-subtitle">{productDetail?.createdBy}</div>
        </div>

        <div className="product-description">{productDetail?.description}</div>
      </div>

      <ProductDetailMeta />
    </div>
  );
}
