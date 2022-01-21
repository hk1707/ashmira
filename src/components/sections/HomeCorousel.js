import React, { Component } from "react";
import Slider from "react-slick";
import Link from 'next/link';

const Product_Carousel = ({ data, productItem }) => {

  console.log(data);

  const settings = {
    dots: false,
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
          {productItem?.map(function (item, idx) {
            return (
              <div className="product_item" key={idx} >
                <Link href={`product/${item?.slug && (item?.slug) ? item?.slug : "#"}`}>
                  <a>
                    <div className="product_item_img">
                      {
                        item.image?.sourceUrl && (<img src={item.image?.sourceUrl} />)
                      }
                    </div>
                    <h2 className="product-title">{item.name}</h2>
                    <p className="product-attr">500ml</p>
                    <p className="product-price">{item.price}</p>
                  </a>
                </Link>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
};

export default Product_Carousel;