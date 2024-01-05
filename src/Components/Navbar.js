import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  AiOutlineShoppingCart,
  AiTwotoneHome,
  AiOutlineLogout,
} from "react-icons/ai";
import { GiFruitBowl } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const { cart } = useSelector((state) => state.Cart);
  const navigate = useNavigate();

  //searchBar
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchproducts/${searchInput}`);
    console.log(searchInput);
  };

  //logout
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/login");
  }, [logout]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
    toast.warning("Logged Out");
  };
  return (
    <>
      {/* Navbar */}
      <div className="py-3">
        <div className="container row mx-auto">
          <img src="logo1.png" style={{ width: "60px" }} alt="" />
          <div
            className="col name fw-bold"
            style={{ fontSize: "25px", color: "aqua" }}
          >
            Shopify
          </div>
          <form
            onSubmit={handleSearchSubmit}
            className="border d-flex flex-nowrap col-5 p-0 rounded"
          >
            <input
              type="search"
              className="form-control shadow-none border-0"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="btn"
              style={{ backgroundColor: "aqua" }}
              type="submit"
            >
              <AiOutlineSearch />
            </button>
          </form>
          <div className="col d-flex justify-content-center">
            <span
              onClick={() => navigate("/home")}
              style={{
                color: "aqua",
                fontSize: "25px",
                paddingRight: "20px",
                cursor: "pointer",
              }}
            >
              <AiTwotoneHome />
            </span>

            <span
              onClick={() => navigate("/allproducts")}
              style={{
                color: "aqua",
                fontSize: "25px",
                paddingRight: "20px",
                cursor: "pointer",
              }}
            >
              <GiFruitBowl />
            </span>

            <span
              onClick={handleLogout}
              style={{
                color: "aqua",
                paddingRight: "20px",
                fontSize: "25px",
                cursor: "pointer",
              }}
            >
              <AiOutlineLogout />
            </span>

            <Link to="/addtocart" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "aqua",
                  fontSize: "25px",
                }}
              >
                <AiOutlineShoppingCart />
              </span>
              <span
                style={{
                  position: "absolute",
                  color: "black",
                  backgroundColor: "aqua",
                  borderRadius: "50%",
                  padding: "0 5px",
                }}
              >
                {cart?.length}
              </span>
              <span
                style={{
                  position: "absolute",
                  color: "aqua",
                  backgroundColor: "#F5C32C",
                  borderRadius: "50%",
                  padding: "0 5px",
                }}
              ></span>
            </Link>
            <span style={{ color: "red" }}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
