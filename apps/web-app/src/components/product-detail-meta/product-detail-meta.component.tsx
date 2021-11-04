import React from "react";
import { GetProductState } from "../../models/get-product-state.model";
import "./product-detail-meta.scss";

export interface ProductDetailMetaProps {
  productDetail: GetProductState["productDetail"];
}

export function ProductDetailMeta({ productDetail }: ProductDetailMetaProps) {
  return (
    <div className="product-meta-table">
      <div className="product-meta-body">
        <div className="product-meta-row">
          <div className="product-meta-cell">CPN</div>
          <div className="product-meta-cell">EID</div>
          <div className="product-meta-cell">Revision</div>
          <div className="product-meta-cell">Created</div>
          <div className="product-meta-cell">Created By</div>
          <div className="product-meta-cell">Modified</div>
        </div>
        <div className="product-meta-row">
          <div className="product-meta-cell">{productDetail.cpn}</div>
          <div className="product-meta-cell">{productDetail.eid}</div>
          <div className="product-meta-cell">{productDetail.revision}</div>
          <div className="product-meta-cell">{productDetail.created}</div>
          <div className="product-meta-cell">{productDetail.createdBy}</div>
          <div className="product-meta-cell">{productDetail.modified}</div>
        </div>
      </div>
    </div>
  );
}
