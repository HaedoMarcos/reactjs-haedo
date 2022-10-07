import React from "react";
import "./itemlistcontainer.css";

function ItemListContainer() {
  return (
    <div class="photo container">
      <div class="nike">
        <a href="/NikeDetail">
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/62b8e4d1-1387-43f6-867f-10190268d791/calzado-air-max-270-Pgb94t.png"
            class="img-responsive foto"
            alt="nike"
          />
        </a>

        <div class="info">
          <div class="row">
            <div class="price-details col-md-6">
              <h1>Nike AirMax</h1>
              <span class="price-new">$UYU 5990</span>
            </div>
          </div>
        </div>
      </div>

      <div class="adidas">
        <a href="/AdidasDetail">
          <img
            src="https://www.fayerwayer.com/resizer/NOuFMpN6BJ5fFvMfFI-wk4ovlRc=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/TDPOR5GHCBGJ5D3PGDO7XXUVXU.jpg"
            class="img-responsive foto"
            alt="adidas"
          />
        </a>

        <div class="info">
          <div class="row">
            <div class="price-details col-md-6">
              <h1>Adidas BB</h1>
              <span class="price-new">$UYU 7590</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
