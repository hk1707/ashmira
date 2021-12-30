(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{4141:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return he},default:function(){return ve}});var i,r=t(2040),a=t(266),o=t(6311),l=t(2809),s=t(809),c=t.n(s),d=t(7294),u=t(6829),p=t(4184),m=t.n(p),h=t(5893),v=function(e){var n=e.item;return(0,h.jsxs)("tr",{className:"woo-next-cart-item",children:[(0,h.jsx)("td",{className:"woo-next-cart-element",children:(0,h.jsx)("img",{width:"64",src:n.image.sourceUrl,srcSet:n.image.srcSet,alt:n.image.title})}),(0,h.jsx)("td",{className:"woo-next-cart-element",children:n.name}),(0,h.jsx)("td",{className:"woo-next-cart-element",children:n.totalPrice})]},n.productId)},g=function(e){var n=e.cart;return(0,h.jsx)(d.Fragment,{children:n?(0,h.jsx)(d.Fragment,{children:(0,h.jsxs)("table",{className:"checkout-cart table table-hover w-full mb-10",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{className:"woo-next-cart-head-container text-left",children:[(0,h.jsx)("th",{className:"woo-next-cart-heading-el",scope:"col"}),(0,h.jsx)("th",{className:"woo-next-cart-heading-el",scope:"col",children:"Product"}),(0,h.jsx)("th",{className:"woo-next-cart-heading-el",scope:"col",children:"Total"})]})}),(0,h.jsxs)("tbody",{children:[n.products.length&&n.products.map((function(e){return(0,h.jsx)(v,{item:e},e.productId)})),(0,h.jsxs)("tr",{className:"bg-gray-200",children:[(0,h.jsx)("td",{className:""}),(0,h.jsx)("td",{className:"woo-next-checkout-total font-normal text-xl",children:"Subtotal"}),(0,h.jsx)("td",{className:"woo-next-checkout-total font-bold text-xl",children:n.totalProductsPrice})]})]})]})}):""})},f=function(e){var n=e.errors,t=e.fieldName;return n&&n.hasOwnProperty(t)?(0,h.jsx)("div",{className:"invalid-feedback d-block text-red-500",children:n[t]}):""},x=function(e){var n=e.input,t=e.handleOnChange,i=n||{},r=i.errors,a=i.paymentMethod;return(0,h.jsxs)("div",{className:"mt-3",children:[(0,h.jsx)(f,{errors:r,fieldName:"paymentMethod"}),(0,h.jsx)("div",{className:"form-check woo-next-payment-input-container mt-2",children:(0,h.jsxs)("label",{className:"form-check-label",children:[(0,h.jsx)("input",{onChange:t,value:"bacs",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"bacs"===a}),(0,h.jsx)("span",{className:"woo-next-payment-content",children:"Direct Bank Transfer"})]})}),(0,h.jsx)("div",{className:"form-check woo-next-payment-input-container mt-2",children:(0,h.jsxs)("label",{className:"form-check-label",children:[(0,h.jsx)("input",{onChange:t,value:"paypal",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"paypal"===a}),(0,h.jsx)("span",{className:"woo-next-payment-content",children:"Pay with Paypal"})]})}),(0,h.jsx)("div",{className:"form-check woo-next-payment-input-container mt-2",children:(0,h.jsxs)("label",{className:"form-check-label",children:[(0,h.jsx)("input",{onChange:t,value:"cheque",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"cheque"===a}),(0,h.jsx)("span",{className:"woo-next-payment-content",children:"Check Payments"})]})}),(0,h.jsx)("div",{className:"form-check woo-next-payment-input-container mt-2",children:(0,h.jsxs)("label",{className:"form-check-label",children:[(0,h.jsx)("input",{onChange:t,value:"cod",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"cod"===a}),(0,h.jsx)("span",{className:"woo-next-payment-content",children:"Cash on Delivery"})]})}),(0,h.jsx)("div",{className:"form-check woo-next-payment-input-container mt-2",children:(0,h.jsxs)("label",{className:"form-check-label",children:[(0,h.jsx)("input",{onChange:t,value:"jccpaymentgatewayredirect",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"jccpaymentgatewayredirect"===a}),(0,h.jsx)("span",{className:"woo-next-payment-content",children:"JCC"})]})}),(0,h.jsx)("div",{className:"form-check woo-next-payment-input-container mt-2",children:(0,h.jsxs)("label",{className:"form-check-label",children:[(0,h.jsx)("input",{onChange:t,value:"ccavenue",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"ccavenue"===a}),(0,h.jsx)("span",{className:"woo-next-payment-content",children:"CC Avenue"})]})}),(0,h.jsx)("div",{className:"form-check woo-next-payment-input-container mt-2",children:(0,h.jsxs)("label",{className:"form-check-label",children:[(0,h.jsx)("input",{onChange:t,value:"stripe-mode",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"stripe-mode"===a}),(0,h.jsx)("span",{className:"woo-next-payment-content",children:"Stripe"})]})}),(0,h.jsx)("div",{className:"woo-next-checkout-payment-instructions mt-2",children:"Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."})]})},y=t(8316),b=t(8966),j=t.n(b),N=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},w=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t={},i={};e.firstName=N(e.firstName)?"":e.firstName,e.lastName=N(e.lastName)?"":e.lastName,e.company=N(e.company)?"":e.company,e.country=N(e.country)?"":e.country,e.address1=N(e.address1)?"":e.address1,e.address2=N(e.address2)?"":e.address2,e.city=N(e.city)?"":e.city,e.state=N(e.state)?"":e.state,e.postcode=N(e.postcode)?"":e.postcode,e.phone=N(e.phone)?"":e.phone,e.email=N(e.email)?"":e.email,e.createAccount=N(e.createAccount)?"":e.createAccount,e.orderNotes=N(e.orderNotes)?"":e.orderNotes;var r=function(n,r,a,o){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5?arguments[5]:void 0;j().isLength(e[n],{min:a,max:o})||(t[n]="".concat(r," must be ").concat(a," to ").concat(o," characters")),"email"!==l||j().isEmail(e[n])||(t[n]="".concat(r," is not valid")),"phone"!==l||j().isMobilePhone(e[n])||(t[n]="".concat(r," is not valid")),s&&j().isEmpty(e[n])&&(t[n]="".concat(r," is required")),t[n]||(i[n]=j().trim(e[n]),i[n]="email"===l?j().normalizeEmail(i[n]):i[n],i[n]=j().escape(i[n]))};return r("firstName","First name",2,35,"string",!0),r("lastName","Last name",2,35,"string",!0),r("company","Company Name",0,35,"string",!1),r("country","Country name",2,55,"string",!0),r("address1","Street address line 1",12,100,"string",!0),r("address2","",0,254,"string",!1),r("city","City field",3,25,"string",!0),r("state","State/County",0,254,"string",n),r("postcode","Post code",2,10,"postcode",!0),r("phone","Phone number",10,15,"phone",!0),r("email","Email",11,254,"email",!0),i.createAccount=e.createAccount,r("orderNotes","",0,254,"string",!1),{sanitizedData:i,errors:t,isValid:N(t)}},C=t(5853),S=function(e){var n=e.response;if(!n)return null;var t=n.checkout;return window.location.href=t.redirect,(0,h.jsx)("div",{className:"container",children:"success"===t.result?(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:["Order no: ",t.order.orderNumber," "]}),(0,h.jsxs)("p",{children:["Status : ",t.order.status]})]}):""})},k=t(955),O=t(2209),P=t(1439),T=(0,P.Ps)(i||(i=(0,O.Z)(["\nmutation CHECKOUT_MUTATION( $input: CheckoutInput! ) {\n  checkout(input: $input) {\n    clientMutationId\n    order {\n      id\n      orderKey\n      orderNumber\n      status\n      refunds {\n        nodes {\n          amount\n        }\n      }\n    }\n    result\n    redirect\n  }\n}\n"]))),_=t(6486),q=function(e){return e.required?(0,h.jsx)("abbr",{className:"text-red-500",style:{textDecoration:"none"},title:"required",children:"*"}):null};q.defaultProps={required:!1};var I=q,Z=t(245),D=function(e){var n=e.input,t=e.handleOnChange,i=e.countries,r=e.isShipping,a=n||{},o=a.country,l=a.errors,s="country-".concat(r?"shipping":"billing");return(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsxs)("label",{className:"leading-7 text-sm text-gray-700",htmlFor:s,children:["Country",(0,h.jsx)(I,{required:!0})]}),(0,h.jsxs)("div",{className:"relative w-full border-none",children:[(0,h.jsxs)("select",{onChange:t,value:o,name:"country",className:"bg-gray-100 bg-opacity-50 border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full",id:s,children:[(0,h.jsx)("option",{value:"",children:"Select a country..."}),!(0,_.isEmpty)(i)&&(0,_.map)(i,(function(e){return(0,h.jsx)("option",{"data-countrycode":null===e||void 0===e?void 0:e.countryCode,value:null===e||void 0===e?void 0:e.countryCode,children:null===e||void 0===e?void 0:e.countryName},null===e||void 0===e?void 0:e.countryCode)}))]}),(0,h.jsx)("span",{className:"absolute right-0 mr-1 text-gray-500",style:{top:"25%"},children:(0,h.jsx)(Z.Z,{width:24,height:24,className:"fill-current"})})]}),(0,h.jsx)(f,{errors:l,fieldName:"country"})]})},E=function(e){var n=e.handleOnChange,t=e.input,i=e.states,r=e.isFetchingStates,a=e.isShipping,o=t||{},l=o.state,s=o.errors,c="state-".concat(a?"shipping":"billing");return r?(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsxs)("label",{className:"leading-7 text-sm text-gray-700",children:["State/County",(0,h.jsx)(I,{required:!0})]}),(0,h.jsx)("div",{className:"relative w-full border-none",children:(0,h.jsx)("select",{disabled:!0,value:"",name:"state",className:"opacity-50 bg-gray-100 bg-opacity-50 border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full",children:(0,h.jsx)("option",{value:"",children:"Loading..."})})})]}):i.length?(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsxs)("label",{className:"leading-7 text-sm text-gray-600",htmlFor:c,children:["State/County",(0,h.jsx)(I,{required:!0})]}),(0,h.jsx)("div",{className:"relative w-full border-none",children:(0,h.jsxs)("select",{disabled:r,onChange:n,value:l,name:"state",className:m()("bg-gray-100 bg-opacity-50 border border-gray-400 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full",{"opacity-50":r}),id:c,children:[(0,h.jsx)("option",{value:"",children:"Select a state..."}),i.map((function(e,n){var t,i;return(0,h.jsx)("option",{value:null!==(i=null===e||void 0===e?void 0:e.stateName)&&void 0!==i?i:"",children:null===e||void 0===e?void 0:e.stateName},null!==(t=null===e||void 0===e?void 0:e.stateCode)&&void 0!==t?t:n)}))]})}),(0,h.jsx)(f,{errors:s,fieldName:"state"})]}):null};E.defaultProps={handleOnChange:function(){return null},input:{},states:[],isFetchingStates:!1,isShipping:!0};var F=(0,d.memo)(E),A=function(e){var n=e.handleOnChange,t=e.inputValue,i=e.name,r=e.type,a=e.label,o=e.errors,l=e.placeholder,s=e.required,c=e.containerClassNames,d=e.isShipping,u="".concat(i,"-").concat(d?"shipping":"");return(0,h.jsxs)("div",{className:c,children:[(0,h.jsxs)("label",{className:"leading-7 text-sm text-gray-700",htmlFor:u,children:[a||"",(0,h.jsx)(I,{required:s})]}),(0,h.jsx)("input",{onChange:n,value:t,placeholder:l,type:r,name:i,className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",id:u}),(0,h.jsx)(f,{errors:o,fieldName:i})]})};A.defaultProps={handleOnChange:function(){return null},inputValue:"",name:"",type:"text",label:"",placeholder:"",errors:{},required:!1,containerClassNames:""};var M=A,V=function(e){var n=e.input,t=e.countries,i=e.states,r=e.handleOnChange,a=e.isFetchingStates,o=e.isShipping,l=(n||{}).errors;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"flex flex-wrap overflow-hidden sm:-mx-3",children:[(0,h.jsx)(M,{name:"firstName",inputValue:null===n||void 0===n?void 0:n.firstName,required:!0,handleOnChange:r,label:"First name",errors:l,isShipping:o,containerClassNames:"w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"}),(0,h.jsx)(M,{name:"lastName",inputValue:null===n||void 0===n?void 0:n.lastName,required:!0,handleOnChange:r,label:"Last name",errors:l,isShipping:o,containerClassNames:"w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"})]}),(0,h.jsx)(M,{name:"company",inputValue:null===n||void 0===n?void 0:n.company,handleOnChange:r,label:"Company Name (Optional)",errors:l,isShipping:o,containerClassNames:"mb-4"}),(0,h.jsx)(D,{input:n,handleOnChange:r,countries:t,isShipping:o}),(0,h.jsx)(M,{name:"address1",inputValue:null===n||void 0===n?void 0:n.address1,required:!0,handleOnChange:r,label:"Street address",placeholder:"House number and street name",errors:l,isShipping:o,containerClassNames:"mb-4"}),(0,h.jsx)(M,{name:"address2",inputValue:null===n||void 0===n?void 0:n.address2,handleOnChange:r,label:"Street address line two",placeholder:"Apartment floor unit building floor etc(optional)",errors:l,isShipping:o,containerClassNames:"mb-4"}),(0,h.jsx)(M,{name:"city",required:!0,inputValue:null===n||void 0===n?void 0:n.city,handleOnChange:r,label:"Town/City",errors:l,isShipping:o,containerClassNames:"mb-4"}),(0,h.jsx)(F,{input:n,handleOnChange:r,states:i,isShipping:o,isFetchingStates:a}),(0,h.jsxs)("div",{className:"flex flex-wrap overflow-hidden sm:-mx-3",children:[(0,h.jsx)(M,{name:"postcode",inputValue:null===n||void 0===n?void 0:n.postcode,required:!0,handleOnChange:r,label:"Post code",errors:l,isShipping:o,containerClassNames:"w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"}),(0,h.jsx)(M,{name:"phone",inputValue:null===n||void 0===n?void 0:n.phone,required:!0,handleOnChange:r,label:"Phone",errors:l,isShipping:o,containerClassNames:"w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"})]}),(0,h.jsx)(M,{name:"email",type:"email",inputValue:null===n||void 0===n?void 0:n.email,required:!0,handleOnChange:r,label:"Email",errors:l,isShipping:o,containerClassNames:"mb-4"})]})};V.defaultProps={input:{},countries:[],handleOnChange:function(){return null},isFetchingStates:!1,isShipping:!1};var U,K=V,J=t(9698),L=t(6804),$=t(4465),B=(0,P.Ps)(U||(U=(0,O.Z)(["query GET_STATES($countryCode: String!) {\n  wooStates(countryCode: $countryCode) {\n    states {\n      stateCode\n      stateName\n    }\n  }\n}"]))),R=function(e){return(0,_.isEmpty)(e)||!(0,_.isArray)(e)?[]:(console.log("products",e),null===e||void 0===e?void 0:e.map((function(e){var n=e.productId;return{quantity:e.qty,product_id:n}})))},H=function(e,n){var t,i,r,a,o,l,s,c,d,u,p,m=e.billingDifferentThanShipping?e.billing:e.shipping;return{shipping:{first_name:null===e||void 0===e||null===(t=e.shipping)||void 0===t?void 0:t.firstName,last_name:null===e||void 0===e||null===(i=e.shipping)||void 0===i?void 0:i.lastName,address_1:null===e||void 0===e||null===(r=e.shipping)||void 0===r?void 0:r.address1,address_2:null===e||void 0===e||null===(a=e.shipping)||void 0===a?void 0:a.address2,city:null===e||void 0===e||null===(o=e.shipping)||void 0===o?void 0:o.city,country:null===e||void 0===e||null===(l=e.shipping)||void 0===l?void 0:l.country,state:null===e||void 0===e||null===(s=e.shipping)||void 0===s?void 0:s.state,postcode:null===e||void 0===e||null===(c=e.shipping)||void 0===c?void 0:c.postcode,email:null===e||void 0===e||null===(d=e.shipping)||void 0===d?void 0:d.email,phone:null===e||void 0===e||null===(u=e.shipping)||void 0===u?void 0:u.phone,company:null===e||void 0===e||null===(p=e.shipping)||void 0===p?void 0:p.company},billing:{first_name:null===m||void 0===m?void 0:m.firstName,last_name:null===m||void 0===m?void 0:m.lastName,address_1:null===m||void 0===m?void 0:m.address1,address_2:null===m||void 0===m?void 0:m.address2,city:null===m||void 0===m?void 0:m.city,country:null===m||void 0===m?void 0:m.country,state:null===m||void 0===m?void 0:m.state,postcode:null===m||void 0===m?void 0:m.postcode,email:null===m||void 0===m?void 0:m.email,phone:null===m||void 0===m?void 0:m.phone,company:null===m||void 0===m?void 0:m.company},payment_method:"stripe",payment_method_title:"Stripe",line_items:R(n)}},W=function(){var e=(0,a.Z)(c().mark((function e(n,t,i){var r,a,o,l,s,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={orderId:null,total:"",currency:"",error:""},!i){e.next=4;break}return r.error=i,e.abrupt("return",r);case 4:return t(""),e.prev=5,e.next=8,fetch("/api/create-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 8:return s=e.sent,e.next=11,s.json();case 11:(d=e.sent).error&&(r.error=d.error,t("Something went wrong. Order creation failed. Please try again")),r.orderId=null!==(a=null===d||void 0===d?void 0:d.orderId)&&void 0!==a?a:"",r.total=null!==(o=d.total)&&void 0!==o?o:"",r.currency=null!==(l=d.currency)&&void 0!==l?l:"",e.next=21;break;case 18:e.prev=18,e.t0=e.catch(5),console.warn("Handle create order error",null===e.t0||void 0===e.t0?void 0:e.t0.message);case 21:return e.abrupt("return",r);case 22:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(n,t,i){return e.apply(this,arguments)}}(),z=t(4586),G=function(){var e=(0,a.Z)(c().mark((function e(n,t){var i,r,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i={cartCleared:!1,error:""},!t){e.next=4;break}return i.error=t,e.abrupt("return",i);case 4:return e.prev=4,e.next=7,n({variables:{input:{clientMutationId:(0,z.Z)(),all:!0}}});case 7:a=e.sent,o=a.data,i.cartCleared=null===o||void 0===o||null===(r=o.removeItemsFromCart)||void 0===r?void 0:r.cartItems.length,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),i.error=e.t0.message;case 15:return e.abrupt("return",i);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(n,t){return e.apply(this,arguments)}}();function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Y=function(){var e=(0,a.Z)(c().mark((function e(n){var t,i,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.ZP.query({query:B,variables:{countryCode:n||""}});case 2:return r=e.sent,a=r.data,e.abrupt("return",null!==(t=null===a||void 0===a||null===(i=a.wooStates)||void 0===i?void 0:i.states)&&void 0!==t?t:[]);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ee=function(){var e=(0,a.Z)(c().mark((function e(n,t,i){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("country"!==n.name){e.next=8;break}return i(!0),r=n[n.selectedIndex].getAttribute("data-countrycode"),e.next=5,Y(r);case 5:a=e.sent,t(a||[]),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(n,t,i){return e.apply(this,arguments)}}(),ne=function(e,n,t){n(X(X({},e),{},(0,l.Z)({},t.name,!e.billingDifferentThanShipping)))},te=function(e,n,t){n(X(X({},e),{},(0,l.Z)({},t.name,!e.createAccount)))},ie=function(){var e=(0,a.Z)(c().mark((function e(n,t,i,r,a,o){var l,s,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),l=H(n,t),e.next=4,W(l,i,"");case 4:return s=e.sent,e.next=7,G(r,null===s||void 0===s?void 0:s.error);case 7:if(d=e.sent,a(!1),!((0,_.isEmpty)(null===s||void 0===s?void 0:s.orderId)||null!==d&&void 0!==d&&d.error)){e.next=13;break}return console.log("came in"),i("Clear cart failed"),e.abrupt("return",null);case 13:return o(s),e.next=16,re(t,n,null===s||void 0===s?void 0:s.orderId);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),e)})));return function(n,t,i,r,a,o){return e.apply(this,arguments)}}(),re=function(){var e=(0,a.Z)(c().mark((function e(n,t,i){var r,a,o,l,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={success_url:window.location.origin+"/thank-you?session_id={CHECKOUT_SESSION_ID}&order_id=".concat(i),cancel_url:window.location.href,customer_email:t.billingDifferentThanShipping?null===t||void 0===t||null===(r=t.billing)||void 0===r?void 0:r.email:null===t||void 0===t||null===(a=t.shipping)||void 0===a?void 0:a.email,line_items:ae(n),metadata:oe(t,i),payment_method_types:["card"],mode:"payment"},e.next=3,(0,L.createCheckoutSession)(o);case 3:return l=e.sent,e.prev=4,e.next=7,(0,$.J)("pk_test_xxx");case 7:(s=e.sent)&&s.redirectToCheckout({sessionId:l.id}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n,t,i){return e.apply(this,arguments)}}(),ae=function(e){return(0,_.isEmpty)(e)&&!(0,_.isArray)(e)?[]:e.map((function(e){var n,t,i,r;return{quantity:null!==(n=null===e||void 0===e?void 0:e.qty)&&void 0!==n?n:0,name:null!==(t=null===e||void 0===e?void 0:e.name)&&void 0!==t?t:"",images:[null!==(i=null===e||void 0===e||null===(r=e.image)||void 0===r?void 0:r.sourceUrl)&&void 0!==i?i:""],amount:Math.round(100*(null===e||void 0===e?void 0:e.price)),currency:"usd"}}))},oe=function(e,n){var t,i;return{billing:JSON.stringify(null===e||void 0===e?void 0:e.billing),shipping:JSON.stringify(e.billingDifferentThanShipping?null===e||void 0===e||null===(t=e.billing)||void 0===t?void 0:t.email:null===e||void 0===e||null===(i=e.shipping)||void 0===i?void 0:i.email),orderId:n}},le=function(e){var n=e.handleOnChange,t=e.checked,i=e.name,r=e.label,a=e.placeholder,o=e.containerClassNames;return(0,h.jsx)("div",{className:o,children:(0,h.jsxs)("label",{className:"leading-7 text-md text-gray-700 flex items-center cursor-pointer",htmlFor:i,children:[(0,h.jsx)("input",{onChange:n,placeholder:a,type:"checkbox",checked:t,name:i,id:i}),(0,h.jsx)("span",{className:"ml-2",children:r||""})]})})};le.defaultProps={handleOnChange:function(){return null},checked:!1,name:"",label:"",placeholder:"",errors:{},containerClassNames:""};var se=le,ce=t(4923);function de(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?de(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var pe={firstName:"",lastName:"",address1:"",address2:"",city:"",country:"",state:"",postcode:"",email:"",phone:"",company:"",errors:null},me=function(e){var n=e.countriesData||{},t=n.billingCountries,i=n.shippingCountries,r={billing:ue({},pe),shipping:ue({},pe),createAccount:!1,orderNotes:"",billingDifferentThanShipping:!1,paymentMethod:"cod"},s=(0,d.useContext)(y.I),p=s[0],v=s[1],f=(0,d.useState)(r),b=f[0],j=f[1],N=(0,d.useState)(null),O=N[0],P=N[1],_=(0,d.useState)(null),q=_[0],I=_[1],Z=(0,d.useState)([]),D=Z[0],E=Z[1],F=(0,d.useState)(!1),A=F[0],M=F[1],V=(0,d.useState)([]),U=V[0],J=V[1],L=(0,d.useState)(!1),$=L[0],B=L[1],R=(0,d.useState)(!1),H=R[0],W=R[1],z=(0,d.useState)({}),G=(z[0],z[1]),Q=(0,u.useQuery)(k.Z,{notifyOnNetworkStatusChange:!0,onCompleted:function(){var e=(0,C.W3)(Q);localStorage.setItem("woo-next-cart",JSON.stringify(e)),v(e)}}).data,X=(0,u.useMutation)(T,{variables:{input:O},onError:function(e){var n,t,i;e&&I(null!==(n=null===e||void 0===e||null===(t=e.graphQLErrors)||void 0===t||null===(i=t[0])||void 0===i?void 0:i.message)&&void 0!==n?n:"")}}),Y=(0,o.Z)(X,2),re=Y[0],ae=Y[1],oe=ae.data,le=ae.loading,de=(0,u.useMutation)(ce.Z),me=(0,o.Z)(de,1)[0],he=function(){var e=(0,a.Z)(c().mark((function e(n){var t,i,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t=null!==b&&void 0!==b&&b.billingDifferentThanShipping?w(null===b||void 0===b?void 0:b.billing,null===U||void 0===U?void 0:U.length):{errors:null,isValid:!0},(i=w(null===b||void 0===b?void 0:b.shipping,null===D||void 0===D?void 0:D.length)).isValid&&t.isValid){e.next=6;break}return j(ue(ue({},b),{},{billing:ue(ue({},b.billing),{},{errors:t.errors}),shipping:ue(ue({},b.shipping),{},{errors:i.errors})})),e.abrupt("return");case 6:if("stripe-mode"!==b.paymentMethod){e.next=11;break}return e.next=9,ie(b,null===p||void 0===p?void 0:p.products,I,me,W,G);case 9:return e.sent,e.abrupt("return",null);case 11:r=(0,C.Wj)(b),I(null),P(r);case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ve=function(){var e=(0,a.Z)(c().mark((function e(n){var t,i,r,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>1&&void 0!==o[1]&&o[1],i=o.length>2&&void 0!==o[2]&&o[2],"createAccount"!==(r=(n||{}).target).name){e.next=7;break}te(b,j,r),e.next=23;break;case 7:if("billingDifferentThanShipping"!==r.name){e.next=11;break}ne(b,j,r),e.next=23;break;case 11:if(!i){e.next=21;break}if(!t){e.next=17;break}return e.next=15,ge(r);case 15:e.next=19;break;case 17:return e.next=19,fe(r);case 19:e.next=23;break;case 21:a=ue(ue({},b),{},(0,l.Z)({},r.name,r.value)),j(a);case 23:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ge=function(){var e=(0,a.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ue(ue({},b),{},{shipping:ue(ue({},null===b||void 0===b?void 0:b.shipping),{},(0,l.Z)({},n.name,n.value))}),j(t),e.next=4,ee(n,E,M);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),fe=function(){var e=(0,a.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ue(ue({},b),{},{billing:ue(ue({},null===b||void 0===b?void 0:b.billing),{},(0,l.Z)({},n.name,n.value))}),j(t),e.next=4,ee(n,J,B);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,d.useEffect)((0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===O){e.next=3;break}return e.next=3,re();case 3:case"end":return e.stop()}}),e)}))),[O]);var xe=le||H;return(0,h.jsxs)(h.Fragment,{children:[p?(0,h.jsx)("form",{onSubmit:he,className:"woo-next-checkout-form",children:(0,h.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-20",children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"billing-details",children:[(0,h.jsx)("h2",{className:"text-xl font-medium mb-4",children:"Shipping Details"}),(0,h.jsx)(K,{states:D,countries:i,input:null===b||void 0===b?void 0:b.shipping,handleOnChange:function(e){return ve(e,!0,!0)},isFetchingStates:A,isShipping:!0,isBillingOrShipping:!0})]}),(0,h.jsx)("div",{children:(0,h.jsx)(se,{name:"billingDifferentThanShipping",type:"checkbox",checked:null===b||void 0===b?void 0:b.billingDifferentThanShipping,handleOnChange:ve,label:"Billing different than shipping",containerClassNames:"mb-4 pt-4"})}),null!==b&&void 0!==b&&b.billingDifferentThanShipping?(0,h.jsxs)("div",{className:"billing-details",children:[(0,h.jsx)("h2",{className:"text-xl font-medium mb-4",children:"Billing Details"}),(0,h.jsx)(K,{states:U,countries:t,input:null===b||void 0===b?void 0:b.billing,handleOnChange:function(e){return ve(e,!1,!0)},isFetchingStates:$,isShipping:!1,isBillingOrShipping:!0})]}):null]}),(0,h.jsxs)("div",{className:"your-orders",children:[(0,h.jsx)("h2",{className:"text-xl font-medium mb-4",children:"Your Order"}),(0,h.jsx)(g,{cart:p}),(0,h.jsx)(x,{input:b,handleOnChange:ve}),(0,h.jsx)("div",{className:"woo-next-place-order-btn-wrap mt-5",children:(0,h.jsx)("button",{disabled:xe,className:m()("bg-purple-600 text-white px-5 py-3 rounded-sm w-auto xl:w-full",{"opacity-50":xe}),type:"submit",children:"Place Order"})}),xe&&(0,h.jsx)("p",{children:"Processing Order..."}),q&&(0,h.jsxs)("p",{children:["Error : ",q," :( Please try again"]})]})]})}):null,(0,h.jsx)(S,{response:oe})]})},he=!0,ve=function(e){var n,t=e.data;return(0,h.jsx)(r.Z,{children:(0,h.jsxs)("div",{className:"checkout container mx-auto my-32 px-4 xl:px-0",children:[(0,h.jsx)("h1",{className:"mb-5 text-2xl uppercase",children:"Checkout Page"}),(0,h.jsx)(me,{countriesData:null!==(n=null===t||void 0===t?void 0:t.wooCountries)&&void 0!==n?n:{}})]})})}},5853:function(e,n,t){"use strict";t.d(n,{W3:function(){return a},Wj:function(){return o},zn:function(){return l}});var i=t(4586),r=(t(6486),function(e){var n=e.match(/[+-]?\d+(\.\d+)?/g)[0];return null!==n?parseFloat(parseFloat(n).toFixed(2)):""}),a=function(e){var n,t,i=null;if(void 0===e||!e.cart.contents.nodes.length)return i;var a=e.cart.contents.nodes;(i={}).products=[];for(var o=0,l=0;l<a.length;l++){var s,c,d,u,p,m,h,v,g,f,x,y,b,j,N,w,C,S,k=null===a||void 0===a||null===(s=a[l])||void 0===s||null===(c=s.product)||void 0===c?void 0:c.node,O={},P=r(a[l].total);O.productId=null!==(d=null===k||void 0===k?void 0:k.productId)&&void 0!==d?d:"",O.cartKey=null!==(u=null===a||void 0===a||null===(p=a[l])||void 0===p?void 0:p.key)&&void 0!==u?u:"",O.name=null!==(m=null===k||void 0===k?void 0:k.name)&&void 0!==m?m:"",O.qty=null===a||void 0===a||null===(h=a[l])||void 0===h?void 0:h.quantity,O.price=P/(null===O||void 0===O?void 0:O.qty),O.totalPrice=null!==(v=null===a||void 0===a||null===(g=a[l])||void 0===g?void 0:g.total)&&void 0!==v?v:"",O.image={sourceUrl:null!==(f=null===k||void 0===k||null===(x=k.image)||void 0===x?void 0:x.sourceUrl)&&void 0!==f?f:"",srcSet:null!==(y=null===k||void 0===k||null===(b=k.image)||void 0===b?void 0:b.srcSet)&&void 0!==y?y:"",title:null!==(j=null===k||void 0===k||null===(N=k.image)||void 0===N?void 0:N.title)&&void 0!==j?j:"",altText:null!==(w=null===k||void 0===k||null===(C=k.image)||void 0===C?void 0:C.altText)&&void 0!==w?w:""},o+=null===a||void 0===a||null===(S=a[l])||void 0===S?void 0:S.quantity,i.products.push(O)}return i.totalProductsCount=o,i.totalProductsPrice=null!==(n=null===e||void 0===e||null===(t=e.cart)||void 0===t?void 0:t.total)&&void 0!==n?n:"",i},o=function(e){var n,t,r,a,o,l,s,c,d,u,p,m=e.billingDifferentThanShipping?e.billing:e.shipping,h={clientMutationId:(0,i.Z)(),shipping:{firstName:null===e||void 0===e||null===(n=e.shipping)||void 0===n?void 0:n.firstName,lastName:null===e||void 0===e||null===(t=e.shipping)||void 0===t?void 0:t.lastName,address1:null===e||void 0===e||null===(r=e.shipping)||void 0===r?void 0:r.address1,address2:null===e||void 0===e||null===(a=e.shipping)||void 0===a?void 0:a.address2,city:null===e||void 0===e||null===(o=e.shipping)||void 0===o?void 0:o.city,country:null===e||void 0===e||null===(l=e.shipping)||void 0===l?void 0:l.country,state:null===e||void 0===e||null===(s=e.shipping)||void 0===s?void 0:s.state,postcode:null===e||void 0===e||null===(c=e.shipping)||void 0===c?void 0:c.postcode,email:null===e||void 0===e||null===(d=e.shipping)||void 0===d?void 0:d.email,phone:null===e||void 0===e||null===(u=e.shipping)||void 0===u?void 0:u.phone,company:null===e||void 0===e||null===(p=e.shipping)||void 0===p?void 0:p.company},billing:{firstName:null===m||void 0===m?void 0:m.firstName,lastName:null===m||void 0===m?void 0:m.lastName,address1:null===m||void 0===m?void 0:m.address1,address2:null===m||void 0===m?void 0:m.address2,city:null===m||void 0===m?void 0:m.city,country:null===m||void 0===m?void 0:m.country,state:null===m||void 0===m?void 0:m.state,postcode:null===m||void 0===m?void 0:m.postcode,email:null===m||void 0===m?void 0:m.email,phone:null===m||void 0===m?void 0:m.phone,company:null===m||void 0===m?void 0:m.company},shipToDifferentAddress:e.billingDifferentThanShipping,paymentMethod:e.paymentMethod,isPaid:!1};return e.createAccount&&(h.account={username:e.username,password:e.password}),h},l=function(e,n,t){var i=[];return e.map((function(e){e.cartKey===t?i.push({key:e.cartKey,quantity:parseInt(n)}):i.push({key:e.cartKey,quantity:e.qty})})),i}},4923:function(e,n,t){"use strict";var i,r=t(2209),a=(0,t(1439).Ps)(i||(i=(0,r.Z)(["\nmutation CLEAR_CART_MUTATION( $input: RemoveItemsFromCartInput! ) {\n  removeItemsFromCart(input: $input) {\n    cartItems {\n      quantity\n    }\n  }\n}\n"])));n.Z=a},955:function(e,n,t){"use strict";var i,r=t(2209),a=(0,t(1439).Ps)(i||(i=(0,r.Z)(["\nquery GET_CART {\n  cart {\n    contents {\n      nodes {\n        key\n        product {\n          node {\n            id\n            productId: databaseId\n            name\n            description\n            type\n            onSale\n            slug\n            averageRating\n            reviewCount\n            image {\n              id\n              sourceUrl\n              srcSet\n              altText\n              title\n            }\n            galleryImages {\n              nodes {\n                id\n                sourceUrl\n                srcSet\n                altText\n                title\n              }\n            }\n          }\n        }\n        variation {\n          node {\n            id\n            variationId: databaseId\n            name\n            description\n            type\n            onSale\n            price\n            regularPrice\n            salePrice\n            image {\n              id\n              sourceUrl\n              srcSet\n              altText\n              title\n            }\n          }\n          attributes {\n            id\n            name\n            value\n          }\n        }\n        quantity\n        total\n        subtotal\n        subtotalTax\n      }\n    }\n    appliedCoupons {\n      code\n      discountAmount\n      discountTax\n    }\n    subtotal\n    subtotalTax\n    shippingTax\n    shippingTotal\n    total\n    totalTax\n    feeTax\n    feeTotal\n    discountTax\n    discountTotal\n  }\n}\n"])));n.Z=a},354:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return t(4141)}])}},function(e){e.O(0,[662,583,781,40,774,888,179],(function(){return n=354,e(e.s=n);var n}));var n=e.O();_N_E=n}]);