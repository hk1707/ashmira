(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1479:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return m},default:function(){return h}});var n=r(2040),l=r(6411),i=r(7205),s=r(6486),o=r(1664),a=r(7294),c=r(5893),d=function(e){var t,r,n,l=e.heroCarousel;if((0,s.isEmpty)(l)||!(0,s.isArray)(l))return null;var i=(0,a.useRef)({activeIndex:0}),d=(0,a.useRef)(0),u=(0,a.useState)(0),m=(u[0],u[1]),h=(0,a.useState)(0),x=h[0],v=h[1],p=i.current.activeIndex,f=function(){if(1===l.length)return null;i.current.activeIndex===l.length-1?(i.current.activeIndex=0,v(x+1)):i.current.activeIndex=i.current.activeIndex+1,d.current=d.current+1,m(d.current)};return(0,a.useEffect)((function(){var e=setInterval((function(){return f()}),2e3);return function(){return clearInterval(e)}}),[]),(0,c.jsxs)("div",{className:"banner flex flex-col sm:flex-row justify-between overflow-hidden",children:[(0,c.jsxs)("div",{className:"banner-img sm:w-8/12",children:[l.map((function(e,t){var r,n,i=p===t||1===l.length?"opacity-100":"opacity-0";return(0,c.jsx)("div",{className:"".concat(i," banner-img-container absolute top-0 left-0"),children:(0,c.jsx)("img",{src:null===e||void 0===e||null===(r=e.image)||void 0===r?void 0:r.sourceUrl,srcSet:null===e||void 0===e||null===(n=e.image)||void 0===n?void 0:n.srcSet,loading:"lazy"})},null===e||void 0===e?void 0:e.id)})),(0,c.jsxs)("div",{className:"slider-button",children:[(0,c.jsx)("button",{className:"focus:outline-none",onClick:f,children:(0,c.jsx)("svg",{width:"25px",className:"inline-block mr-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16l-4-4m0 0l4-4m-4 4h18"})})}),(0,c.jsx)("button",{className:"focus:outline-none",onClick:f,children:(0,c.jsx)("svg",{width:"25px",className:"inline-block",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})})]})]}),(0,c.jsxs)("div",{className:"banner-content pt-10 sm:pt-0 px-10 sm:w-4/12",children:[(0,c.jsx)("h2",{className:"banner-content__title text-base md:text-4xl uppercase",children:null===(t=l[p])||void 0===t?void 0:t.name}),(0,c.jsx)("p",{className:"banner-content__description text-base md:text-2xl text-gray-700",children:null===(r=l[p])||void 0===r?void 0:r.description}),(0,c.jsx)(o.default,{href:"/category/".concat(null===(n=l[p])||void 0===n?void 0:n.slug,"/"),children:(0,c.jsx)("a",{className:"banner-content__link text-gray-700",children:"+ Explore"})})]})]})},u=function(){return(0,c.jsx)("div",{className:"ashima-hero-banner",style:{backgroundImage:"url(https://www.ashmirabotanica.com/wp-content/uploads/2021/07/homepage-slider-bg3.jpg)",width:"100%",height:"100%"},children:(0,c.jsxs)("div",{className:"ashima-hero-banner-inner",children:[(0,c.jsx)(o.default,{href:"/",children:(0,c.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",children:(0,c.jsx)("h1",{children:"Luxury Wax and Skincare"})})}),(0,c.jsx)(o.default,{href:"/",children:(0,c.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",children:(0,c.jsx)("button",{class:"px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current hover:bg-purple-600 hover:text-white hover:border-purple-600",children:"Shop Now"})})})]})})},m=!0;function h(e){var t=e||{},r=t.products,s=t.productCategories,o=t.heroCarousel;return(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(u,{}),(0,c.jsx)(d,{heroCarousel:o}),(0,c.jsxs)("div",{className:"product-categories-container container mx-auto my-32 px-4 xl:px-0",children:[(0,c.jsx)("h2",{className:"main-title text-xl mb-5 uppercase",children:(0,c.jsx)("span",{className:"main-title-inner",children:"Categories"})}),(0,c.jsx)(i.Z,{productCategories:s})]}),(0,c.jsxs)("div",{className:"products container mx-auto my-32 px-4 xl:px-0",children:[(0,c.jsx)("h2",{className:"products-main-title main-title mb-5 text-xl uppercase",children:(0,c.jsx)("span",{className:"main-title-inner",children:"Products"})}),(0,c.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4",children:r.length?r.map((function(e){return(0,c.jsx)(l.Z,{product:e},e.id)})):""})]})]})}},6411:function(e,t,r){"use strict";var n=r(1664),l=r(5551),i=r(607),s=r(6131),o=r(9459),a=r(5893);t.Z=function(e){var t,r,c,d,u=e.product;return void 0!==u&&"GroupProduct"!==u.__typename?(0,a.jsxs)("div",{className:"product mb-5",children:[(0,a.jsx)(n.default,{href:"/product/".concat(null===u||void 0===u?void 0:u.slug),children:(0,a.jsx)("a",{children:(0,a.jsx)(s.Z,{className:"object-cover bg-gray-100",width:"308",height:"308",loading:"lazy",sourceUrl:null!==(t=null===u||void 0===u||null===(r=u.image)||void 0===r?void 0:r.sourceUrl)&&void 0!==t?t:"",defaultImgUrl:o.zY,altText:null!==(c=null===u||void 0===u||null===(d=u.image)||void 0===d?void 0:d.altText)&&void 0!==c?c:null===u||void 0===u?void 0:u.slug})})}),(0,a.jsxs)("div",{className:"product-info",children:[(0,a.jsx)("h3",{className:"product-title mt-3 font-medium text-gray-800",children:u.name?u.name:""}),(0,a.jsx)("div",{className:"product-description text-sm text-gray-700",dangerouslySetInnerHTML:{__html:null===u||void 0===u?void 0:u.description}}),(0,a.jsx)(i.Z,{salesPrice:null===u||void 0===u?void 0:u.price,regularPrice:null===u||void 0===u?void 0:u.regularPrice}),(0,a.jsx)(l.Z,{product:u})]})]}):""}},7205:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(1664),l=r(6131),i=r(9459),s=r(5893),o=function(e){var t,r,o,a,c=e.category;return(0,s.jsx)("div",{className:"product mb-5",children:(0,s.jsx)(n.default,{href:"/category/".concat(null===c||void 0===c?void 0:c.slug),children:(0,s.jsxs)("a",{children:[(0,s.jsx)(l.Z,{className:"object-cover h-40 md:h-64",layout:"fill",containerClassNames:"w-96 h-56",sourceUrl:null!==(t=null===c||void 0===c||null===(r=c.image)||void 0===r?void 0:r.sourceUrl)&&void 0!==t?t:"",defaultImgUrl:i.a1,altText:null!==(o=null===c||void 0===c||null===(a=c.image)||void 0===a?void 0:a.altText)&&void 0!==o?o:c.slug}),(0,s.jsxs)("div",{className:"product-title-container p-3",children:[(0,s.jsx)("h3",{className:"product-title text-lg font-medium",children:null===c||void 0===c?void 0:c.name}),(0,s.jsx)("span",{className:"shop-now text-sm",children:"+ Explore"})]})]})})})},a=function(e){var t=(e||{}).productCategories;return(0,s.jsx)("div",{className:"product-categories grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4",children:t.length?t.map((function(e,t){var r;return(0,s.jsx)(o,{category:e},null!==(r=null===e||void 0===e?void 0:e.id)&&void 0!==r?r:t)})):null})}},9459:function(e,t,r){"use strict";r.d(t,{fX:function(){return n},a1:function(){return l},zY:function(){return i}});var n="https://via.placeholder.com/400x225",l="https://via.placeholder.com/416x224",i="https://via.placeholder.com/308x308"},6131:function(e,t,r){"use strict";var n=r(2809),l=r(219),i=r(5675),s=r(4184),o=r.n(s),a=r(9459),c=r(5893),d=["altText","title","width","height","sourceUrl","className","layout","objectFit","containerClassNames","showDefault","defaultImgUrl"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t=e.altText,r=e.title,n=e.width,s=e.height,u=e.sourceUrl,h=e.className,x=e.layout,v=(e.objectFit,e.containerClassNames),p=e.showDefault,f=e.defaultImgUrl,g=(0,l.Z)(e,d);if(!u&&!p)return null;if("fill"===x){var j=m({alt:t||r,src:u||(p?f||a.fX:""),layout:"fill",className:o()("object-cover",h)},g);return(0,c.jsx)("div",{className:o()("relative",v),children:(0,c.jsx)(i.default,m({},j))})}var b=m({alt:t||r,src:u||(p?a.fX:""),width:n||"auto",height:s||"auto",className:h},g);return(0,c.jsx)(i.default,m({},b))};h.defaultProps={altText:"",title:"",sourceUrl:"",showDefault:!0,defaultImgUrl:"",containerClassNames:"",className:"post__image"},t.Z=h},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1479)}])}},function(e){e.O(0,[662,583,960,40,799,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);