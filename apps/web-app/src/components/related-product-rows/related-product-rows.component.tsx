import React from "react";
import { UseAppContext } from "../../context/app.context";
import { StateClickOption } from "../../store/click-option.reducer";
import edit from "../../svg/edit.svg";
import junk from "../../svg/junk.svg";
import settings from "../../svg/settings.svg";

export function RelatedProductRows() {
  const appCtx = UseAppContext();

  return (
    <>
      {appCtx.relatedProduct.state.map((relatedProduct) => (
        <div
          className="related-products-row data-row"
          key={`related-product-${relatedProduct.eid}`}
        >
          <div className="related-products-cell first"></div>
          <div className="related-products-cell">{relatedProduct.eid}</div>
          <div className="related-products-cell country-cell">
            <p>{relatedProduct.country.name}</p>
            <p>Code: {relatedProduct.country.code}</p>
          </div>
          <div className="related-products-cell status-cell">
            <p>{relatedProduct.created}</p>
            <p>{relatedProduct.status}</p>
          </div>
          <div className="related-products-cell country-cell">
            <p>{relatedProduct.company.name}</p>
            <p>{relatedProduct.company.profile}</p>
          </div>
          <div className="related-products-cell">
            <div
              className={
                "badge " +
                relatedProduct.status.toLocaleLowerCase().replace(/\s/g, "-")
              }
            >
              {relatedProduct.status}
            </div>
          </div>
          <div className="related-products-cell row-options">
            <div
              className="option"
              onClick={() =>
                appCtx.clickAction.dispatch({
                  type: StateClickOption.add,
                  payload: relatedProduct.eid,
                })
              }
            >
              <object
                className="icon"
                data={settings}
                type="image/svg+xml"
                aria-label="settings"
              ></object>
            </div>
            <div
              className="option"
              onClick={() =>
                appCtx.clickAction.dispatch({
                  type: StateClickOption.edit,
                  payload: relatedProduct.eid,
                })
              }
            >
              <object
                data={edit}
                type="image/svg+xml"
                className="icon"
                aria-label="edit"
              ></object>
            </div>
            <div
              className="option"
              onClick={() =>
                appCtx.clickAction.dispatch({
                  type: StateClickOption.delete,
                  payload: relatedProduct.eid,
                })
              }
            >
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
    </>
  );
}
