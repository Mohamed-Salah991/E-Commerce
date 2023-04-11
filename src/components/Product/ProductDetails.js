import React, { useEffect, useState } from "react";
import classes from "./ProductDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/Cart";
import { wishListActions } from "../../store/Whish-List";
import { FaCheck } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import sliderStyle from "./imageSlider.module.css";

function ProductDetails(props) {
  const { productItem } = props;
  const [existingInWishList, setExistingInWishList] = useState();
  const [existingInCart, setExistingItem] = useState();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const wishListItems = useSelector((store) => store.wishList.items);

  // / set Existing InWishList
  useEffect(() => {
    let InCart = cartItems.find((item) => item.id === productItem.id);
    setExistingItem(InCart);
    let inWhishList = wishListItems.find((item) => item.id === productItem.id);
    setExistingInWishList(inWhishList);
  }, [
    existingInCart,
    cartItems,
    productItem.id,
    existingInWishList,
    wishListItems,
  ]);

  console.log(productItem);

  function addToWishList() {
    setExistingInWishList((prev) => !prev);

    if (existingInWishList) {
      const id = productItem.id;
      dispatch(wishListActions.delete({ id }));
    } else
      dispatch(
        wishListActions.add({
          id: productItem.id,
          title: productItem.title,
          price: productItem.price,
          image: productItem.images[0],
        })
      );
  }

  function addToCart() {
    if (existingInCart) {
      const id = productItem.id;
      dispatch(cartActions.delete({ id }));
    } else
      dispatch(
        cartActions.add({
          id: productItem.id,
          title: productItem.title,
          price: productItem.price,
          image: productItem.images[0],
        })
      );
  }

  return (
    <div className={classes["product-details"]}>
      <div className={classes.content}>
        <div className={classes.up}>
          <div className={classes["images"]}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className={sliderStyle.swiper}
            >
              {productItem.images?.map((img, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className={sliderStyle["swiper-slide"]}
                  >
                    <div className={classes.image}>
                      <img src={img} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={classes["info"]}>
            <div className={classes.title}>
              <h1>{productItem.title}</h1>
              <span className={classes.brand}>
                Brand: <span>{productItem.brand}</span>
              </span>
            </div>
            <div className={classes.rate}>
              <span>Rated:</span>
              {Array.from({ length: parseInt(productItem.rating) }).map(
                (_, index) => (
                  <AiFillStar key={index} className={`${classes.star}`} />
                )
              )}
              {Array.from({ length: 5 - parseInt(productItem.rating) }).map(
                (_, index) => (
                  <AiFillStar
                    key={index}
                    className={`${classes.star} ${classes.blur}`}
                  />
                )
              )}
              <span>({parseInt(productItem.rating)})</span>
            </div>
            <div className={classes.price}>
              <h4>{productItem.price}$</h4>
              <span>Stock Available</span>
            </div>
            <div className={classes.cart}>
              {existingInCart && (
                <button onClick={addToCart}>
                  In Cart
                  <span className={classes["in-cart-icon"]}>
                    <FaCheck />
                  </span>
                </button>
              )}
              {!existingInCart && (
                <button onClick={addToCart}>Add To Cart</button>
              )}

              <span>
                <HiOutlineHeart
                  onClick={addToWishList}
                  className={existingInWishList ? classes.active : undefined}
                />
              </span>
            </div>
          </div>
        </div>
        <div className={classes.down}>
          {props.quickView || (
            <div className={classes.description}>
              <h3>Description</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                nisi reprehenderit cum reiciendis repellendus, aspernatur odit
                officiis maiores saepe blanditiis sint ipsam, nesciunt impedit
                dolores. Aliquam explicabo a obcaecati. Perferendis?
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
