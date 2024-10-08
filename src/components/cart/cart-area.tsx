import Link from "next/link";
import React, { useState } from "react";

// cart product
const cart_product = [
  {
    id: 1,
    img: "/assets/img/shop/shop-02.jpg",
    name: "Master Web Design in Adobe XD",
    price: "130.00",
  },
  // {
  //   id: 2,
  //   img: "/assets/img/shop/shop-01.jpg",
  //   name: "How to Write Great Web Content",
  //   price: "120.50",
  // },
  
];
const CartArea = () => {

    const [product, setProduct] = useState(1)
    const plus = () => {
        setProduct(prev => prev + 1)
    }
    const minus = () => {
        if (product >= 1) {
          setProduct((prev) => prev - 1);
      }
    };
  return (
    <>
      <section
        className="cart-area pt-130 pb-120"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={e => e.preventDefault()}>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Courses</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart_product.map((item) => (
                        <tr key={item.id}>
                          <td className="product-thumbnail">
                            <Link href="/shop-details">
                              <img src={item.img} alt="" />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link href="/shop-details">{item.name}</Link>
                          </td>
                          <td className="product-price">
                            <span className="amount">${item.price}</span>
                          </td>
                          <td className="product-quantity">
                            <span onClick={minus} className="cart-minus">
                              -
                            </span>
                            <input
                              className="cart-input"
                              type="text"
                              // value="1"
                              placeholder={product.toString()}
                            />
                            <span onClick={plus} className="cart-plus">
                              +
                            </span>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">${item.price}</span>
                          </td>
                          <td className="product-remove">
                            <a href="#">
                              <i className="fa fa-times"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <input
                          id="coupon_code"
                          className="input-text"
                          name="coupon_code"
                          // value=""
                          placeholder="Coupon code"
                          type="text"
                        />
                        <button
                          className="tp-btn"
                          name="apply_coupon"
                          type="submit"
                        >
                          Apply coupon
                        </button>
                      </div>
                      <div className="coupon2">
                        <button
                          className="tp-btn"
                          name="update_cart"
                          type="submit"
                        >
                          Update cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-5 ">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>$130.00</span>
                        </li>
                        <li>
                          Total <span>$130.00</span>
                        </li>
                      </ul>
                      <button className="tp-btn">Proceed to checkout</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartArea;
