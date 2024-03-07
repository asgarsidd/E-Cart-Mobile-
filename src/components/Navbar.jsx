import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { IoCartSharp } from 'react-icons/io5';


const Navbar = ({ setData, cart }) => {
  console.log(useLocation());
  const location = useLocation();

  const navigate = useNavigate();
  const [search, setSearch] = useState("")
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category)
    // console.log(element);
    setData(element);
  }
  const filterByPrice = (price) => {
    const priceData = items.filter((product) => product.price >= price)
    setData(priceData);
  }
  // const filterByPriceless = (price) => {
  //   const priceData = items.filter((product) => product.price <= price)
  //   console.log(priceData);
  //   setData(priceData);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`)

  }
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar ">
          <Link to={'/'} className="brand">E-Cart</Link>

          <form onSubmit={handleSubmit}
            className="search-bar">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search products"
            />
          </form>

          <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <IoCartSharp style={{ fontSize: '1.5rem' }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {
          location.pathname == '/' && (
            <div className="navbar-wrapper">
              <div
                className="items">Filter By {">"}</div>
              <div onClick={() => setData(items)}
                className="items"><a href="">All Acessories</a></div>
              <div onClick={() => filterByCategory('mobiles')}
                className="items"><a href="">Mobiles</a></div>
              <div onClick={() => filterByCategory('laptops')}
                className="items"><a href="">Laptop</a></div>
              <div onClick={() => filterByCategory('tablets')}
                className="items"><a href="">Tablets</a></div>
              <div onClick={() => filterByPrice(2999)}

                className="items"><a href="">29999{<sup>++</sup>}</a> </div>
              <div onClick={() => filterByPrice(4999)} className="items"><a href="">49999{<sup>++</sup>}</a></div>
              <div onClick={() => filterByPrice(6999)} className="items"><a href="">69999{<sup>++</sup>}</a></div>
              <div onClick={() => filterByPrice(89999)} className="items"><a href="">89999{<sup>++</sup>}</a></div>
            </div>
          )
        }

      </header>
    </>
  );
};

export default Navbar;
