import React, { Component } from "react";
import Slider from "react-slick";


const Product_Carousel = ({ data }) => {

  console.log(data);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=" padding-common container product_list_main mx-auto my-4 px-4 xl:px-0">
      <div className="product_list_heading text-center">
        {
          data?.commonSectionIcon?.mediaItemUrl && data?.bestSellersTitle &&
          (<>
            <img src={data?.commonSectionIcon?.mediaItemUrl} />
            <h3>{data?.bestSellersTitle}</h3>
          </>)
        }
        
      </div>
      <div className="product_list_in">
        <Slider {...settings}>
          <div className="product_item">
            <div className="product_item_img">
              <img src="https://www.ashmirabotanica.com/wp-content/uploads/2021/06/Refreshing-skin-cleanser-500ml-345x503.png" />
            </div>
            <h2 className="product-title">Purifying Skin Spritz 100ml</h2>
            <p className="product-attr">500ml</p>
            <p className="product-price">£18.00</p>
          </div>
          <div className="product_item">
            <div className="product_item_img">
              <img src="https://www.ashmirabotanica.com/wp-content/uploads/2021/06/Refreshing-skin-cleanser-500ml-345x503.png" />
            </div>
            <h2 className="product-title">Replenishing Body Lotion 240ml</h2>
            <p className="product-attr">500ml</p>
            <p className="product-price">£20.00</p>
          </div>
          <div className="product_item">
            <div className="product_item_img">
              <img src="https://www.ashmirabotanica.com/wp-content/uploads/2021/06/Refreshing-skin-cleanser-500ml-345x503.png" />
            </div>
            <h2 className="product-title">Replenishing Body Lotion 500ml</h2>
            <p className="product-attr">500ml</p>
            <p className="product-price">£28.00</p>
          </div>
          <div className="product_item">
            <div className="product_item_img">
              <img src="https://www.ashmirabotanica.com/wp-content/uploads/2021/06/Refreshing-skin-cleanser-500ml-345x503.png" />
            </div>
            <h2 className="product-title">Clay Gift Set Fire</h2>
            <p className="product-attr">500ml</p>
            <p className="product-price">£30.00</p>
          </div>
          <div className="product_item">
            <div className="product_item_img">
              <img src="https://www.ashmirabotanica.com/wp-content/uploads/2021/06/Refreshing-skin-cleanser-500ml-345x503.png" />
            </div>
            <h2 className="product-title">Replenishing Body Lotion 500ml</h2>
            <p className="product-attr">500ml</p>
            <p className="product-price">£25.00</p>
          </div>
          <div className="product_item">
            <div className="product_item_img">
              <img src="https://www.ashmirabotanica.com/wp-content/uploads/2021/06/Refreshing-skin-cleanser-500ml-345x503.png" />
            </div>
            <h2 className="product-title">Clay Gift Set Fire 1</h2>
            <p className="product-attr">500ml</p>
            <p className="product-price">£30.00</p>
          </div>
          <div className="product_item">
            <div className="product_item_img">
              <img src="https://www.ashmirabotanica.com/wp-content/uploads/2021/06/Refreshing-skin-cleanser-500ml-345x503.png" />
            </div>
            <h2 className="product-title">Clay Gift Set Fire 3</h2>
            <p className="product-attr">500ml</p>
            <p className="product-price">£24.00</p>
          </div>
        </Slider>
      </div>
    </div>
  )
};

export default Product_Carousel;