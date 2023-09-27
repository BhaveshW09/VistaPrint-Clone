import React from "react";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { quantityUpdateAsync, removeItemAsync } from "../Redux/Cart/CartSlice";

export function Cart() {
  const cart = useSelector((state) => state.carts.cart);
  const dispatch = useDispatch();
  console.log("cart", cart);

  // Price Calculation
  const totalPrice = cart.reduce(
    (amount, item) => item.quantity * item.price + amount,
    0
  );

  // Total quantitiy Calculation
  const totalQuantitiy = cart.reduce((num, item) => item.quantity + num, 0);

  // Discount
  const discount = cart.reduce(
    (num, item) => Math.floor(item.discountPercentage + num),
    0
  );

  // Total Amount
  const totalAmount = cart.reduce(
    (amount, item) => Math.floor((totalPrice * discount) / 100 + amount),
    0
  );

  const handleQuantity = (e, product) => {
    dispatch(quantityUpdateAsync({ quantity: e.target.value, id: product.id }));
  };

  // RemoveItem
  const handleRemoveItem = (id) => {
    dispatch(removeItemAsync(id));
  };

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul role="list" className="divide-y divide-gray-200">
              {cart?.map((product) => (
                <div key={product.id} className=" p-4">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a
                                href={product.href}
                                className="font-semibold text-black"
                              >
                                {product.title}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-sm text-gray-500">
                              {product.color}
                            </p>
                            {product.size ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                {product.size}
                              </p>
                            ) : null}
                          </div>
                          <div className="mt-1 flex items-end">
                            <p className="text-xs font-medium text-gray-500 line-through">
                              {product.originalPrice}
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              Price : {product.price}
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-sm font-medium text-green-500">
                              {product.discountPercentage + "%"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="mb-2 flex">
                    <div className="text-gray-500">
                      <label
                        htmlFor="quantity"
                        className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                      >
                        Qty
                      </label>
                      <select
                        onChange={(e) => handleQuantity(e, product)}
                        value={product.quantity}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="ml-6 flex text-sm">
                      <button
                        onClick={() => handleRemoveItem(product.id)}
                        type="button"
                        className="flex items-center space-x-1 px-2 py-1 pl-0"
                      >
                        <Trash size={12} className="text-red-500" />
                        <span className="text-xs font-medium text-red-500">
                          Remove
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">
                    Price ({totalQuantitiy})
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {totalPrice}
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">
                    {discount + "%"}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    {totalAmount}
                  </dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ 3,431 on this order
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
