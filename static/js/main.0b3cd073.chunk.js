(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{123:function(e,t,a){},172:function(e,t,a){e.exports=a.p+"static/media/gradient.0ea22c18.jpg"},173:function(e,t,a){e.exports=a.p+"static/media/loading_doggo.81ba7ef8.gif"},174:function(e,t,a){e.exports=a.p+"static/media/confirmation_doggo.703d2e7e.gif"},176:function(e,t,a){e.exports=a.p+"static/media/about_image.8700eee7.jpg"},186:function(e,t,a){e.exports=a(349)},194:function(e,t,a){e.exports=a.p+"static/media/doggopic.8401eb48.jpg"},349:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),o=a(26),i=a(38),m=(a(122),a(123),a(43));var u=function(){var e={color:"#414b5a"};return l.a.createElement("nav",null,l.a.createElement(o.b,{style:e,to:"/Doggo_Mart"},l.a.createElement("img",{src:a(194),className:"logo",alt:"doggo"})),l.a.createElement("ul",{className:"nav-links"},l.a.createElement(o.b,{style:e,to:"/cart"},l.a.createElement("li",null,l.a.createElement(m.a,{name:"add to cart",size:"small"}),l.a.createElement("span",null," Shopping Cart \xa0"))),l.a.createElement(o.b,{style:e,to:"/favorite"},l.a.createElement("li",null,l.a.createElement(m.a,{name:"heart",size:"small"}),l.a.createElement("span",null," Favorite \xa0"))),l.a.createElement(o.b,{style:e,to:"/about"},l.a.createElement("li",null,l.a.createElement(m.a,{name:"smile outline",size:"small"}),l.a.createElement("span",null," About \xa0"))),l.a.createElement(o.b,{style:e,to:"/contact"},l.a.createElement("li",null,l.a.createElement(m.a,{name:"mail",size:"small"}),l.a.createElement("span",null," Contact \xa0")))))},s=a(21),d=function(){var e=localStorage.cartItems;if(e)try{var t=JSON.parse(e);if(Array.isArray(t)&&t.length>0&&t[0].id)return t}catch(a){}return[]},E=a(358),g=a(359),f=a(360),p=a(361),h=a(362),v=function(e){return"$"+e.toFixed(2).toLocaleString()},b=function(){return function(e){localStorage.cartItems=JSON.stringify(e),console.log(localStorage.cartItems,"localstorage cart items")}},y=function(){var e=Object(n.useState)(d()),t=Object(s.a)(e,2),a=t[0],r=t[1];console.log(a,"loading from cart.js");var c=b(),i=function(e){r(e),c(e)};return l.a.createElement(E.a,null,l.a.createElement(g.a,{className:"overall-page_height"},l.a.createElement(f.a,{xs:7},l.a.createElement(o.b,{to:"/Doggo_Mart"},l.a.createElement(p.a,{className:"cart__page-left-title"},"\u2190 Back to Browsing")),0===a.length?"Doggo Basket is empty":l.a.createElement("h3",null," ","You have ",a.length,a.length>1?"different doggos":" doggo"," to pet in the Doggo Basket."),l.a.createElement("div",{className:"cart__cart-list"},a.length>0&&l.a.createElement(l.a.Fragment,null,a.map((function(e){return l.a.createElement("div",{className:"cart__line-item"},l.a.createElement("div",{className:"cart-item-content-container"},l.a.createElement("div",{className:"cart__product-image-container"},l.a.createElement("img",{className:"cart__img",src:"".concat("/Doggo_Mart","/products/").concat(e.sku,".jpg"),alt:e.title})),l.a.createElement("div",{className:"cart__line-item-info-container"},l.a.createElement("div",{className:"cart__line-item-info-heading"},l.a.createElement("span",{key:e.id,className:"cart__line-item-info-title"},l.a.createElement("b",null,e.title)," X ",e.count," = $"," ",e.price*e.count),l.a.createElement("div",null,l.a.createElement(p.a,{className:"button_primary-color cart__line-item-x-button",onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e.id}));i(t)}(e)}},"X"))))))}))))),l.a.createElement(f.a,{xs:4},l.a.createElement("div",{className:"order_summary_container"},l.a.createElement("div",{id:"order-details"},l.a.createElement(h.a,{className:"order-summary"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"2"},"Order Summary")),l.a.createElement("tr",null,l.a.createElement("td",null," Total"),l.a.createElement("td",null,v(a.reduce((function(e,t){return e+t.price*t.count}),0)))),l.a.createElement("tr",null,l.a.createElement("td",null," Shipping"),l.a.createElement("td",null,"FREE")),l.a.createElement("tr",{className:"order-summary__total"},l.a.createElement("td",null," Subtotal"),l.a.createElement("td",null,v(a.reduce((function(e,t){return e+t.price*t.count}),0))))))),0===a.length?l.a.createElement(l.a.Fragment,null):l.a.createElement(o.b,{to:"/confirmation"},l.a.createElement(p.a,{className:"button_primary-color checkout__order-button",onClick:function(){i([])}},"Continue to Checkout"))))))},_=a(63),N=function(){var e=localStorage.favItems;if(e)try{var t=JSON.parse(e);if(Array.isArray(t)&&t.length>0&&t[0].id)return t}catch(a){}return[]},S=function(){return function(e){localStorage.favItems=JSON.stringify(e),console.log(localStorage.favItems,"localstorage fav items")}},O=function(){var e=Object(n.useState)(N()),t=Object(s.a)(e,2),a=t[0],r=t[1];console.log(a,"loading from favorite.js");var c=S(),o=function(e){var t=a.find((function(t){return t.id===e.id})),n=Object(_.a)(a);if(t)t.favorited="no",n=a.filter((function(t){return t.id!==e.id}));else{var l=e;l.favorited="yes",n=a.concat(l)}!function(e){r(e),c(e)}(n)};return l.a.createElement(E.a,null,l.a.createElement(g.a,{className:"overall-page_height"},l.a.createElement(f.a,{xs:9},0===a.length?"You don't have any favorite doggos yet. Please give them some love <3":l.a.createElement("h3",null,"Woohoo, you favorited ",a.length,a.length>1?"different doggos":"doggo","! :)"),l.a.createElement("div",{className:"cart__cart-list"},a.length>0&&l.a.createElement(l.a.Fragment,null,a.map((function(e){return l.a.createElement("div",{className:"cart__line-item"},l.a.createElement("div",{className:"cart-item-content-container"},l.a.createElement("div",{className:"cart__product-image-container"},l.a.createElement("img",{className:"cart__img",src:"".concat("/Doggo_Mart","/products/").concat(e.sku,".jpg"),alt:e.title})),l.a.createElement("div",{className:"cart__line-item-info-container"},l.a.createElement("div",{className:"cart__line-item-info-heading"},l.a.createElement("span",{key:e.id,className:"cart__line-item-info-title"},e.title),l.a.createElement(p.a,{className:"button_primary-color",onClick:function(){o(e)}},"yes"===e.favorited?l.a.createElement("p",null,"remove"):l.a.createElement(m.a,{name:"heart outline",size:"large"}))))))})))))))},j=a(114),k=a.n(j),C=a(169),x=a(367),w=a(365),I=a(350);var T=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1],o=e.product;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{key:o.id},l.a.createElement(x.a.Img,{className:"card-img-top",src:"".concat("/Doggo_Mart","/products/").concat(o.sku,".jpg"),alt:o.title,onClick:function(){c(!0)}}),l.a.createElement(x.a.Body,null,l.a.createElement(x.a.Title,null,l.a.createElement("b",null,v(o.price))),l.a.createElement(x.a.Title,null,o.title),l.a.createElement("div",{className:"product_card-container"},l.a.createElement(x.a.Text,null,l.a.createElement(I.a,{className:"button_primary-color pet-button",onClick:function(){return e.handleAddToCart(o)}},l.a.createElement(m.a,{name:"add to cart"})," Add to cart"),l.a.createElement(I.a,{className:"fav_button",onClick:function(){e.handleAddToFav(o)}},"yes"===o.favorited?l.a.createElement(m.a,{name:"heart",size:"large"}):l.a.createElement(m.a,{name:"heart outline",size:"large"})))))),l.a.createElement(w.a,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:r,onHide:function(){return c(!1)}},l.a.createElement(w.a.Header,{closeButton:!0},l.a.createElement(w.a.Title,{id:"contained-modal-title-vcenter"},o.title)),l.a.createElement(w.a.Body,null,l.a.createElement("h4",null,o.id),l.a.createElement("img",{className:"card-img-top",src:"/Doggo_Mart"+"/products/".concat(o.sku,".jpg"),alt:o.title}),l.a.createElement("p",null,o.price),l.a.createElement("p",null,"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."))))};var F=function(e){var t=e.products.map((function(t){return l.a.createElement(T,{key:t.id,product:t,handleAddToCart:e.handleAddToCart,handleAddToFav:e.handleAddToFav})}));return l.a.createElement("ul",{id:"list"},t)},A=a(172),z=a.n(A),D=function(){return l.a.createElement("div",{className:"banner-sizing",style:{backgroundImage:"url(".concat(z.a,")")}},l.a.createElement("div",{className:"banner-content"},l.a.createElement("h1",null,"Which doggo would you like to pet? "),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna ante, mollis quis felis bibendum.")))},B=function(e){return l.a.createElement(g.a,{className:"homepage-result"},l.a.createElement(f.a,{md:4},l.a.createElement("div",null," ",l.a.createElement("label",null,"Order by : ")),l.a.createElement("select",{value:e.sortValue,onChange:e.handleChangeSort},l.a.createElement("option",{value:"ascending"},"Lowest to Highest"),l.a.createElement("option",{value:"descending"},"Highest to Lowest"))),l.a.createElement(f.a,{md:4},l.a.createElement("div",null,l.a.createElement("label",null,"Filter by Size: ")),l.a.createElement("select",{value:e.filterValue,onChange:e.handleChangeSize},l.a.createElement("option",{value:""},"All"),l.a.createElement("option",{value:"xs"},"XS"),l.a.createElement("option",{value:"s"},"S"),l.a.createElement("option",{value:"m"},"M"),l.a.createElement("option",{value:"l"},"L"),l.a.createElement("option",{value:"xl"},"XL"),l.a.createElement("option",{value:"xxl"},"XXL"))),l.a.createElement(f.a,{md:4},e.count<=1?l.a.createElement(l.a.Fragment,null,e.count," doggo found."):l.a.createElement(l.a.Fragment,null,e.count," doggos found.")))},M=a(363),L=function(e){return l.a.createElement(M.a,{variant:"secondary"},0===e.cartItems.length?"Doggo Basket is empty":l.a.createElement("div",null,l.a.createElement("h3",null," ","You have ",e.cartItems.length," different"," ",e.cartItems.length>1?"doggos":"doggo"," to pet in the Doggo Basket.")),e.cartItems.length>0&&l.a.createElement("div",null,l.a.createElement("ul",{className:"basket_list"},e.cartItems.map((function(t){return l.a.createElement("li",{key:t.id,className:"basket_list-padding"},l.a.createElement("span",null,l.a.createElement("b",null,t.title)," X ",t.count," = $ ",v(t.price*t.count)),l.a.createElement(p.a,{className:"button_primary-color remove-button",onClick:function(){return e.handleRemoveFromCart(t)}},"X"))}))),"Total:"," ",v(e.cartItems.reduce((function(e,t){return e+t.price*t.count}),0))))},W=a(364),X=function(e){return l.a.createElement(W.a,{value:e.search,action:{icon:"search"},placeholder:"Search...",onChange:function(t){return e.handleChangeSearch(t)},type:"text"})};var H=function(e,t){var a=e;return"ascending"===t&&(a=e.sort((function(e,t){return e.price-t.price}))),"descending"===t&&(a=e.sort((function(e,t){return t.price-e.price}))),a},V=function(e,t){return t?e.filter((function(e){return e.availableSizes.indexOf(t.toUpperCase())>=0})):e},J=function(e,t){return t?e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})):e},R=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(d()),o=Object(s.a)(c,2),m=o[0],u=o[1],p=Object(n.useState)("ascending"),h=Object(s.a)(p,2),v=h[0],O=h[1],j=Object(n.useState)(""),x=Object(s.a)(j,2),w=x[0],I=x[1],T=Object(n.useState)(N()),A=Object(s.a)(T,2),z=A[0],M=A[1],W=Object(n.useState)(""),R=Object(s.a)(W,2),q=R[0],P=R[1];Object(n.useEffect)((function(){(function(){var e=Object(C.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./db.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.products);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var U=b(),Y=S(),$=function(e){u(e),U(e)},G=function(e){var t=m.filter((function(t){return t.id!==e.id}));$(t)},Q=J(a,q),K=H(Q,v),Z=V(K,w);return l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(E.a,null,l.a.createElement(g.a,null,l.a.createElement(f.a,{md:{span:4,offset:9}},l.a.createElement(X,{handleChangeSearch:function(e){var t=e.target.value;P(t)},search:q,xf:!0}))),l.a.createElement("h1",{className:"homepage-title"},"Meet the World's Cutest Doggos"),l.a.createElement(g.a,null,l.a.createElement(f.a,{md:9},l.a.createElement(B,{sortValue:v,handleChangeSort:function(e){var t=e.target.value;O(t)},filterValue:w,handleChangeSize:function(e){var t=e.target.value;I(t)},count:Z.length}),l.a.createElement("hr",null),l.a.createElement(F,{products:Z,favItems:z,setFavItems:M,handleAddToCart:function(e){var t=m.find((function(t){return t.id===e.id})),a=Object(_.a)(m);if(t)t.count+=1;else{var n=e;n.count=1,a=m.concat(n)}$(a),Object.preventExtensions(t)},handleAddToFav:function(e){var t=z.find((function(t){return t.id===e.id})),a=Object(_.a)(z);if(t)t.favorited="no",a=z.filter((function(t){return t.id!==e.id}));else{var n=e;n.favorited="yes",a=z.concat(n)}!function(e){M(e),Y(e)}(a)}})),l.a.createElement(f.a,null,l.a.createElement(L,{cartItems:m,handleRemoveFromCart:G})))),l.a.createElement(i.a,{path:"/cart",render:function(){return l.a.createElement(y,{cartItems:m,handleRemoveFromCart:G})}}))},q={background:"#ffffff",color:"#414b5a",padding:"10px 0px 10px 0px",fontSize:"14px",letterSpacing:"0.015em",position:"absolute",right:"0px",left:"0px"},P=function(){return l.a.createElement("footer",{style:q},l.a.createElement(E.a,null,l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement("h5",null,"Doggo INC."),l.a.createElement("ul",null,l.a.createElement("li",null,"Our Story"),l.a.createElement("li",null,"Our Team"),l.a.createElement("li",null,"Contact Us"),l.a.createElement("li",null,"Privacy Policy"),l.a.createElement("li",null,"Terms of Services"))),l.a.createElement(f.a,null,l.a.createElement("h5",null,"LEARN MORE"),l.a.createElement("ul",null,l.a.createElement("li",null,"How It Works"),l.a.createElement("li",null,"Help/FAQs"),l.a.createElement("li",null,"Our Values"),l.a.createElement("li",null,"#petdoggo Blog"))),l.a.createElement(f.a,null,l.a.createElement("h5",null,"CONNECT WITH US"),l.a.createElement(m.a,{name:"facebook square"}),l.a.createElement(m.a,{name:"twitter square"}),l.a.createElement(m.a,{name:"instagram"}),l.a.createElement(m.a,{name:"youtube square"})),l.a.createElement(f.a,null,l.a.createElement("h5",null,"\xa9 Created by Vicky W ",l.a.createElement(m.a,{name:"heart",size:"small"}))))))},U=a(173),Y=a.n(U),$=a(174),G=a.n($),Q=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){r(!1)}),2500);return function(){return clearTimeout(e)}}),[]),l.a.createElement(E.a,{fluid:"md"},l.a.createElement(g.a,{className:"overall-page_height"},l.a.createElement(f.a,null,a?l.a.createElement("div",{className:"loading-container"},l.a.createElement("img",{src:Y.a}),l.a.createElement("h1",null,"Processing...")):l.a.createElement("div",{className:"confirmation-container"},l.a.createElement("h1",null,"Thank you for your order!"),l.a.createElement("div",{className:"confirmation-icon-container"},l.a.createElement(m.a,{name:"check circle",size:"huge"})),l.a.createElement("img",{src:G.a})))))},K=a(175),Z=a(176),ee=a.n(Z),te=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(K.Animated,{animationIn:"fadeIn",animationOut:"fadeOut",animationInDuration:1200,animationOutDuration:1200,isVisible:!0},l.a.createElement(E.a,null,l.a.createElement(g.a,{className:"overall-page_height"},l.a.createElement(f.a,null,l.a.createElement("div",{className:"split-main-div"},l.a.createElement("img",{src:ee.a,className:"about-image"}))),l.a.createElement(f.a,null,l.a.createElement("div",{className:"about-div-headline"},l.a.createElement("h2",{className:"about-headline"},"henlo hooman")),l.a.createElement("div",{className:"about-content"},l.a.createElement("h4",null,"Our Story"),l.a.createElement("p",null,"The hooman who created this shop is a true doggo lover. We (doggos) understand how much hoomans with or without their own doggos would want to pet me and all my friends. So our founder started talking to more hoomans and discovered that they all experienced sadness when they can't find a doggo to pet. They shared their stories with us about how they would even cry sometimes thinking about it!"),l.a.createElement("p",null,"Then, this page was born! We have a 100% Satisfaction Guranteed policy. Every single doggo that is available for pets and cuddles is good doggo.")))))))};var ae=function(){return l.a.createElement(o.a,null,l.a.createElement(u,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/Doggo_Mart",exact:!0,component:R}),l.a.createElement(i.a,{path:"/cart",component:y}),l.a.createElement(i.a,{path:"/favorite",component:O}),l.a.createElement(i.a,{path:"/confirmation",component:Q}),l.a.createElement(i.a,{path:"/about",component:te})),l.a.createElement(P,null))};c.a.render(l.a.createElement(ae,null),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.0b3cd073.chunk.js.map