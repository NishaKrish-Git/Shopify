import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  initCart,
} from "../Components/Redux/CartSlice";

const AddToCart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.Cart
  );

  const handleCheckout = () => {
    dispatch(initCart());
    toast.success("Your Order Placed Successfully");
    setTimeout(() => navigate("/home"), 2000);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <Fragment>
      <Navbar />
      {cart.length < 1 ? (
        <Fragment>
          <div className="min-h-450px">
            <div
              className="container my-5 p-5"
              style={{ backgroundColor: "aqua" }}
            >
              <h6 className="text-center mb-3 mt-4">Your Cart is Empty</h6>
              <h6 className="text-center mb-4">
                <span
                  style={{
                    backgroundColor: "white",
                    color: "aqua",
                    fontWeight: "bold",
                  }}
                  className="btn"
                  onClick={() => navigate("/allproducts")}
                >
                  {" "}
                  Continue Shopping
                </span>
              </h6>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="min-h-450px">
            <div className="container row mx-auto row-cols-1 row-cols-md-2 border p-2 h-100">
              <div className="col col-md-8 mx-auto row">
                <div className="col-11 mx-auto pb-3">
                  <h3
                    className="shadow py-2 ps-4"
                    style={{ backgroundColor: "aqua" }}
                  >
                    Cart - {cart?.length} items
                  </h3>
                  {cart?.map((item, i) => {
                    return (
                      <Fragment key={i}>
                        <div className="mb-3 shadow-sm py-2 mt-2">
                          <div className="row-cols-sm-2 row-cols-1 row mx-auto">
                            <div className="col col-sm-4 mx-auto text-center">
                              <img
                                className="mx-auto"
                                src={item?.thumbnail}
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  maxWidth: "100px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <div className="col col-sm-8 mb-3 row row-cols-1 row-cols-sm-2 px-2 mx-auto">
                              <div className="col col-sm-5 p-0 d-flex justify-content-center">
                                <h6 className="mt-2 fw-bold">{item?.title}</h6>
                              </div>
                              <div className="col col-sm-7 p-0 d-flex justify-content-center">
                                <div className="">
                                  <h6 className="text-center mt-sm-2 m-0 mb-2">
                                    Rs. {item?.price * item?.quantity}
                                  </h6>
                                  <h6 className="d-flex mb-2">
                                    <span
                                      style={{ backgroundColor: "aqua" }}
                                      className="btn m-0 px-2 py-0 fs-5"
                                      onClick={() =>
                                        dispatch(decreaseItemQuantity(item.id))
                                      }
                                    >
                                      -
                                    </span>
                                    <span className="border px-4 pt-1 mx-3">
                                      {item?.quantity}
                                    </span>
                                    <span
                                      style={{ backgroundColor: "aqua" }}
                                      className="btn m-0 px-2 py-0 fs-5"
                                      onClick={() =>
                                        dispatch(increaseItemQuantity(item.id))
                                      }
                                    >
                                      +
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center">
                            <div className="mt-2">
                              <span
                                className="btn btn-danger py-1 mx-2"
                                onClick={() => dispatch(removeItem(item.id))}
                              >
                                <AiOutlineDelete />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div className="col col-md-4 ">
                <div className="">
                  <h3
                    className="mb-3 text-center"
                    style={{ backgroundColor: "aqua" }}
                  >
                    Summary
                  </h3>
                  <div className="">
                    <h6 className="d-flex ">
                      <span className="col text-center">Total Product</span>
                      <span className="col text-center">{totalQuantity}</span>
                    </h6>
                    <h6 className="d-flex">
                      <span className="col text-center">Shipping</span>
                      <span
                        className="col text-center fw-bold"
                        style={{ color: "aqua", fontSize: "20px" }}
                      >
                        Free
                      </span>
                    </h6>
                    <h6 className="d-flex ">
                      <span className="col text-center">Total Amount</span>
                      <span className="col text-center fw-bold">
                        Rs. {totalPrice}
                      </span>
                    </h6>

                    <h6 className="d-flex justify-content-end mt-4">
                      <span
                        className="btn py-1 me-4"
                        onClick={handleCheckout}
                        style={{ backgroundColor: "aqua" }}
                      >
                        Go To Chcekout
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AddToCart;
