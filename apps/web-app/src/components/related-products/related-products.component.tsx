import { GetProductState } from "../../models/get-product-state.model";
import edit from "../../svg/edit.svg";
import junk from "../../svg/junk.svg";
import settings from "../../svg/settings.svg";
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

        {relatedProducts.map((row) => (
          <div className="related-products-row data-row">
            <div className="related-products-cell first"></div>
            <div className="related-products-cell">{row.eid}</div>
            <div className="related-products-cell country-cell">
              <p>{row.country.name}</p>
              <p>Code: {row.country.code}</p>
            </div>
            <div className="related-products-cell status-cell">
              <p>{row.created}</p>
              <p>{row.status}</p>
            </div>
            <div className="related-products-cell country-cell">
              <p>{row.company.name}</p>
              <p>{row.company.profile}</p>
            </div>
            <div className="related-products-cell">
              <div
                className={
                  "badge " + row.status.toLocaleLowerCase().replace(/\s/g, "-")
                }
              >
                {row.status}
              </div>
            </div>
            <div className="related-products-cell row-options">
              <div className="option">
                <object
                  className="icon"
                  data={settings}
                  type="image/svg+xml"
                  aria-label="settings"
                ></object>
              </div>
              <div className="option">
                <object
                  data={edit}
                  type="image/svg+xml"
                  className="icon"
                  aria-label="edit"
                ></object>
              </div>
              <div className="option">
                <object
                  data={junk}
                  type="image/svg+xml"
                  className="icon"
                  aria-label="delete"
                ></object>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
