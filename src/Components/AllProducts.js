import React, { Fragment, useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import { LoadSpinner } from "./LoadSpinner";
import Navbar from "./Navbar";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  //fetch product data
  const fetchUserData = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data?.products);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Fragment>
      <Navbar />
      {loading ? (
        <div>
          <LoadSpinner></LoadSpinner>
        </div>
      ) : (
        <Fragment>
          <div className="container p-0">
            {!products ? (
              <Fragment>
                <div className="py-5 my-5 bg-white shadow h-300">
                  <div className="d-flex justify-content-center h-100 align-items-center">
                    <div className="link-danger">Check your internet</div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 px-3 px-sm-0 mx-auto">
                  {products &&
                    products.map((el, i) => {
                      return (
                        <div
                          className="col p-2 bg-white position-relative"
                          key={i}
                        >
                          <CardComponent {...el} />
                        </div>
                      );
                    })}
                </div>
              </Fragment>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AllProducts;
