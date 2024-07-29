"use client";

import { addToCart, removeFromCart } from "@/store/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const { Button } = require("../ui/button");

function AddToCartButton({ productItem }) {
  const { cart } = useSelector((state) => state);
  console.log(cart?.cartItem);
  const dispatch = useDispatch();

    function handleAddToCart(){
        dispatch(addToCart(productItem))
    }

    function handleRemoveFromCart(){
        dispatch(removeFromCart(productItem?.id))
    }

  return (
    <div className="mt-5">
      <Button
        type="submit"
        onClick={
          cart?.cartItem.some((item) => item.id === productItem.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }
      >
        {cart?.cartItem.some((item) => item.id === productItem.id)
          ? "Remove From Cart"
          : "Add to Cart"}
      </Button>
    </div>
  );
}

export default AddToCartButton;
