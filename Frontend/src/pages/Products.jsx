import React from "react";
import { Helmet } from "react-helmet";

const Products = () => {
  return (
    <>
      {" "}
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Products</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
      <div>Products</div>
    </>
  );
};

export default Products;
