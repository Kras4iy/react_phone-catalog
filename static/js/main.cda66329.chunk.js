(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{31:function(e,t,c){},44:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s,a=c(24),i=c.n(a),n=c(22),r=c(7),l=c(17),o=c(10),j="favourite",u=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):[]},m={favorites:u(j)},d=Object(l.b)({name:"favorite",initialState:m,reducers:{addFavourite:function(e,t){!function(e,t){var c=u(e);"string"===typeof t?c.push(t):t.forEach((function(e){return c.push(e)})),localStorage.setItem(e,JSON.stringify(c))}(j,t.payload),e.favorites=[].concat(Object(o.a)(e.favorites),[t.payload])},removeFavourite:function(e,t){!function(e,t){var c=u(e);localStorage.setItem(e,JSON.stringify(c.filter((function(e){return e!==t}))))}(j,t.payload),e.favorites=e.favorites.filter((function(e){return e!==t.payload}))}}}),b=d.actions,_=b.addFavourite,h=b.removeFavourite,O=d.reducer,p=c(8),x=c(11),g="withdraw",f=function(){var e=localStorage.getItem(g);return e?JSON.parse(e):{}},v=function(e){localStorage.setItem(g,JSON.stringify(e))},N={withdraw:f()},w=Object(l.b)({name:g,initialState:N,reducers:{addWithdraw:function(e,t){Object.prototype.hasOwnProperty.call(f(),t.payload.id)||(e.withdraw=Object(x.a)(Object(x.a)({},e.withdraw),{},Object(p.a)({},t.payload.id,Object(x.a)(Object(x.a)({},t.payload),{},{amount:1})))),v(e.withdraw)},encreaseAmount:function(e,t){Object.prototype.hasOwnProperty.call(f(),t.payload[1])&&(e.withdraw[t.payload[1]].amount+=t.payload[0],v(e.withdraw))},decreaseAmount:function(e,t){Object.prototype.hasOwnProperty.call(f(),t.payload[1])&&e.withdraw[t.payload[1]].amount-t.payload[0]>0&&(e.withdraw[t.payload[1]].amount-=t.payload[0],v(e.withdraw))},deleteWithdraw:function(e,t){delete e.withdraw[t.payload],v(e.withdraw)}}}),y=w.actions,P=y.addWithdraw,C=y.decreaseAmount,k=y.deleteWithdraw,S=y.encreaseAmount,M=w.reducer,E=Object(l.a)({reducer:{favorite:O,withdraw:M}}),A=c(4),F=c(1),I=c.n(F),B=c(3),T=(c(44),c(31),c(6)),V=c.n(T),W=function(){return Object(n.b)()},L=n.c,R=c(0),H=function(){var e=L((function(e){return e.favorite.favorites})).length,t=L((function(e){return e.withdraw.withdraw})),c=Object(F.useMemo)((function(){var e=0;return Object.keys(t).forEach((function(c){e+=t[c].amount})),e}),[t]);return Object(R.jsx)("header",{className:"header",children:Object(R.jsxs)("div",{className:"header__content",children:[Object(R.jsxs)("div",{className:"header__right",children:[Object(R.jsx)("div",{className:"logo",children:Object(R.jsx)(r.c,{to:"/home",className:"logo__link",children:Object(R.jsx)("img",{src:"./img/header/logo.svg",alt:"logo",className:"logo__img"})})}),Object(R.jsx)("nav",{className:"nav",children:Object(R.jsxs)("ul",{className:"nav__list",children:[Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(r.c,{to:"/home",className:function(e){var t=e.isActive;return V()("nav__link",{"is-active":t})},children:"Home"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(r.c,{to:"/phones",className:function(e){var t=e.isActive;return V()("nav__link",{"is-active":t})},children:"Phones"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(r.c,{to:"/tablets",className:function(e){var t=e.isActive;return V()("nav__link",{"is-active":t})},children:"Tablets"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(r.c,{to:"/accessories",className:function(e){var t=e.isActive;return V()("nav__link",{"is-active":t})},children:"Accessories"})})]})})]}),Object(R.jsxs)("div",{className:"header__left",children:[Object(R.jsxs)(r.c,{to:"/favourites",className:function(e){var t=e.isActive;return V()("header__icon",{"is-active":t})},children:[e>0&&Object(R.jsx)("p",{className:"header__ellipse",children:e}),Object(R.jsx)("img",{src:"./img/header/favorite(Stroke).svg",alt:"Favorite"})]}),Object(R.jsxs)(r.c,{to:"/withdraw",className:function(e){var t=e.isActive;return V()("header__icon",{"is-active":t})},children:[c>0&&Object(R.jsx)("p",{className:"header__ellipse",children:c}),Object(R.jsx)("img",{src:"./img/header/withdraw.svg",alt:"Withdraw"})]})]})]})})},J=(c(47),function(){return Object(R.jsx)("footer",{className:"footer",children:Object(R.jsxs)("div",{className:"container footer__content",children:[Object(R.jsx)("div",{className:"footer__logo",children:Object(R.jsx)("a",{href:"/",className:"footer__link",children:Object(R.jsx)("img",{src:"./img/header/logo.svg",alt:"logo"})})}),Object(R.jsx)("div",{className:"footer__contacts",children:Object(R.jsx)("nav",{className:"nav",children:Object(R.jsxs)("ul",{className:"nav__list",children:[Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(r.c,{to:"/",className:"nav__link",children:"Github"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(r.c,{to:"/",className:"nav__link",children:"Contacts"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(r.c,{to:"/",className:"nav__link",children:"Rights"})})]})})}),Object(R.jsxs)("button",{type:"button",className:"footer__to-top",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:[Object(R.jsx)("h3",{className:"footer__to-top-text",children:"Back to top"}),Object(R.jsx)("div",{className:"footer__to-top-button"})]})]})})}),U="https://mate-academy.github.io/react_phone-catalog",D="https://mate-academy.github.io/react_phone-catalog/api/products",$=function(){return fetch("".concat(D,".json")).then((function(e){if(!e.ok)throw new Error;return e.json()}))},G=(c(48),function(e){var t=e.item,c=L((function(e){return e.favorite.favorites})),s=L((function(e){return e.withdraw.withdraw})),a=W(),i=Object(F.useMemo)((function(){return Object.keys(s).includes(t.id)}),[s]),n=Object(F.useMemo)((function(){return c.includes(t.id)}),[c]),l=function(e){"favorite"===e?a(n?h(t.id):_(t.id)):"withdraw"===e&&a(i?k(t.id):P(t))};return Object(R.jsxs)("div",{className:"item",children:[Object(R.jsxs)(r.b,{className:"item__header",to:"/".concat(t.type,"s/").concat(t.id),children:[Object(R.jsx)("div",{className:"item__photo-container",children:Object(R.jsx)("img",{src:"".concat(U,"/").concat(t.imageUrl),alt:t.id,className:"item__photo"})}),Object(R.jsx)("h2",{className:"item__title",children:t.name})]}),Object(R.jsxs)("div",{className:"item__body",children:[Object(R.jsx)("div",{className:"item__price",children:t.discount?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("p",{className:"item__counted",children:Math.ceil(t.price*((100-t.discount)/100))}),Object(R.jsx)("p",{className:"item__initial-price",children:t.price})]}):Object(R.jsx)("p",{className:"item__counted",children:t.price})}),Object(R.jsx)("div",{className:"item__specs specs",children:Object(R.jsxs)("ul",{className:"item__specs specs__list",children:[Object(R.jsxs)("li",{className:"specs__item",children:[Object(R.jsx)("p",{className:"specs__name",children:"Screen"}),Object(R.jsx)("p",{className:"specs__value",children:t.screen})]}),Object(R.jsxs)("li",{className:"specs__item",children:[Object(R.jsx)("p",{className:"specs__name",children:"Capacity"}),Object(R.jsx)("p",{className:"specs__value",children:t.capacity})]}),Object(R.jsxs)("li",{className:"specs__item",children:[Object(R.jsx)("p",{className:"specs__name",children:"RAM"}),Object(R.jsx)("p",{className:"specs__value",children:t.ram})]})]})}),Object(R.jsxs)("div",{className:"item__buttons",children:[Object(R.jsx)("button",{type:"button",className:V()("item__buy",{"item__buy--selected":i}),onClick:function(){return l("withdraw")},children:i?"Added to cart":"Add to cart"}),Object(R.jsx)("button",{type:"button","aria-label":"favorite",className:V()("item__favorite",{"item__favorite--active":n}),onClick:function(){return l("favorite")}})]})]})]})}),z=(c(49),function(e){var t=e.pathElems,c=e.pathBoldElems,s=Object(F.useMemo)((function(){return t.map((function(e){return e[0].toUpperCase()+e.slice(1)}))}),[t]),a=Object(F.useMemo)((function(){return c.map((function(e){return e[0].toUpperCase()+e.slice(1)}))}),[c]);return Object(R.jsxs)("div",{className:"path",children:[Object(R.jsx)(r.b,{to:"/home",className:"path__link"}),Object(R.jsx)("div",{className:"path__arrow"}),s.map((function(e,t,s){return s.length-1>t?Object(R.jsxs)(I.a.Fragment,{children:[Object(R.jsx)(r.b,{to:"/".concat(e),className:V()("path__text",{path__bold:a.includes(e)}),children:e},e),Object(R.jsx)("div",{className:"path__arrow"})]},e):Object(R.jsx)("p",{className:V()("path__text",{path__bold:c.includes(e)}),children:e},e)}))]})}),X=(c(50),function(){var e=Object(F.useState)([]),t=Object(A.a)(e,2),c=t[0],s=t[1],a=function(){var e=window.location.hash.slice(2);return e[0].toUpperCase()+e.slice(1)},i=L((function(e){return e.favorite.favorites}));return Object(F.useEffect)((function(){$().then((function(e){i.forEach((function(t){var c=e.find((function(e){return e.id===t}));c&&s((function(e){return[].concat(Object(o.a)(e),[c])}))}))}))}),[i]),Object(R.jsxs)("section",{className:"favourites",children:[Object(R.jsx)(z,{pathElems:[a()],pathBoldElems:[]}),Object(R.jsx)("h1",{className:"favourites__title",children:a()}),Object(R.jsx)("h3",{className:"favourites__subtitle",children:"".concat(i.length," items")}),Object(R.jsx)("div",{className:"favourites__body",children:c.map((function(e){return Object(R.jsx)(G,{item:e},e.id)}))})]})}),q=(c(51),c(52),c(53),function(){var e=W(),t=L((function(e){return e.withdraw.withdraw})),c=Object(F.useMemo)((function(){return Object.values(t).reduce((function(e,t){return e+Math.ceil(t.amount*t.price*((100-t.discount)/100))}),0)}),[t]),s=function(t,c){"add"===t?e(S([1,c])):"remove"===t&&e(C([1,c]))};return Object(R.jsxs)("section",{className:"withdraw",children:[Object(R.jsx)(z,{pathElems:[function(){var e=window.location.hash.slice(2);return e[0].toUpperCase()+e.slice(1)}()],pathBoldElems:[]}),Object(R.jsx)("h1",{className:"withdraw__title",children:"Cart"}),Object(R.jsxs)("div",{className:"grid",children:[Object(R.jsx)("div",{className:"grid__item grid__item-1-16",children:Object(R.jsx)("ul",{children:Object.values(t).map((function(t){return Object(R.jsxs)("li",{className:"withdraw__item",children:[Object(R.jsxs)("div",{className:"withdraw__item-info",children:[Object(R.jsx)("button",{type:"button","aria-label":"delete",className:"withdraw__cross",onClick:function(){return c=t.id,void e(k(c));var c}}),Object(R.jsx)("img",{src:"".concat(U,"/").concat(t.imageUrl),alt:t.id,className:"withdraw__img"}),Object(R.jsx)("p",{className:"withdraw__text",children:t.name})]}),Object(R.jsxs)("div",{className:"withdraw__item-price",children:[Object(R.jsxs)("div",{className:"withdraw__counter",children:[Object(R.jsx)("button",{type:"button",className:V()("withdraw__itembtn",{"withdraw__itembtn--active":t.amount>1}),onClick:function(){return s("remove",t.id)},children:"-"}),Object(R.jsx)("div",{className:"withdraw__container",children:Object(R.jsx)("p",{className:"withdraw__amount",children:t.amount})}),Object(R.jsx)("button",{type:"button",className:"withdraw__itembtn withdraw__itembtn--active",onClick:function(){return s("add",t.id)},children:"+"})]}),Object(R.jsx)("p",{className:"withdraw__price",children:"$".concat(Math.ceil(t.amount*t.price*((100-t.discount)/100)))})]})]},t.id)}))})}),Object(R.jsxs)("div",{className:"grid__item grid__item-17-24 withdraw__checkout",children:[Object(R.jsx)("p",{className:"withdraw__total-price",children:"$".concat(c)}),Object(R.jsx)("p",{className:"withdraw__inner-text",children:"Total for ".concat(Object.keys(t).length," items")}),Object(R.jsx)("button",{type:"button",className:"withdraw__button",children:"Checkout"})]})]})]})}),K=(c(54),function(e){var t=e.title,c=e.items,s=Object(F.useState)(0),a=Object(A.a)(s,2),i=a[0],n=a[1],r=Object(F.useMemo)((function(){return c?Math.ceil(c.length/4):0}),[c]),l=function(e){"next"===e&&i<r-1?n((function(e){return e+1})):"prev"===e&&i>0&&n((function(e){return e-1}))};return Object(R.jsxs)("div",{className:"itemCarousel",children:[Object(R.jsxs)("div",{className:"itemCarousel__header",children:[Object(R.jsx)("h2",{className:"itemCarousel__title",children:t}),Object(R.jsxs)("div",{className:"itemCarousel__buttons",children:[Object(R.jsx)("button",{disabled:0===i,"aria-label":"prev",className:V()("itemCarousel__button","itemCarousel__button--reversed",{"itemCarousel__button--disabled":0===i}),type:"button",onClick:function(){return l("prev")}}),Object(R.jsx)("button",{disabled:i===r-1,"aria-label":"next",className:V()("itemCarousel__button",{"itemCarousel__button--disabled":i===r-1}),type:"button",onClick:function(){return l("next")}})]})]}),Object(R.jsx)("div",{className:"itemCarousel__body",children:Object(R.jsx)("div",{className:"itemCarousel__wrapper",style:{transform:"translateX(".concat(1156*-i,"px)")},children:null===c||void 0===c?void 0:c.map((function(e){return Object(R.jsx)(G,{item:e},e.id)}))})})]})}),Q=(c(55),["#FCDBC1","#5F7170","#4C4C4C","#F0F0F0"]),Y=[64,256,512],Z=function(){var e=Object(F.useState)(),t=Object(A.a)(e,2),c=t[0],s=t[1],a=Object(F.useState)(),i=Object(A.a)(a,2),n=i[0],l=i[1],o=Object(F.useState)(Q[0]),j=Object(A.a)(o,2),u=j[0],m=j[1],d=Object(F.useState)(Y[0]),b=Object(A.a)(d,2),O=b[0],p=b[1],g=Object(F.useState)({prevVal:0,currVal:0}),f=Object(A.a)(g,2),v=f[0],N=f[1],w=Object(F.useState)([]),y=Object(A.a)(w,2),C=y[0],S=y[1],M=window.location.hash.slice(2).split("/"),E=W(),I=L((function(e){return e.favorite.favorites})),B=L((function(e){return e.withdraw.withdraw})),T=Object(F.useMemo)((function(){return!!n&&Object.keys(B).includes(n.id)}),[B,n]),H=Object(F.useMemo)((function(){return!!n&&I.includes(n.id)}),[I,n]),J=function(e){n&&("favorite"===e?E(H?h(n.id):_(n.id)):"withdraw"===e&&E(T?k(n.id):P(n)))};Object(F.useEffect)((function(){var e;(e=M[1],fetch("".concat(D,"/").concat(e,".json")).then((function(e){if(!e.ok)throw new Error;return e.json()}))).then((function(e){return s(e)})),$().then((function(e){l(e.find((function(e){return e.id===M[1]}))),S(e.slice(5,10))}))}),[]);return Object(R.jsx)("section",{className:"itemPage",children:c&&n&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(z,{pathElems:M,pathBoldElems:M.slice(0,-1)}),Object(R.jsxs)(r.b,{to:"/".concat(M[0]),className:"itemPage__back",children:[Object(R.jsx)("div",{className:"itemPage__back-img"}),"Back"]}),Object(R.jsx)("h1",{className:"itemPage__title",children:c.name}),Object(R.jsxs)("div",{className:"grid itemPage__section",children:[Object(R.jsx)("div",{className:"grid__item grid__item-1-2 itemPage__photos",children:c.images.map((function(e,t){return Object(R.jsx)("img",{src:"".concat(U,"/").concat(e),className:V()("itemPage__secondaryPhoto",{"itemPage__secondaryPhoto--active":t===v.currVal}),alt:"photos",onClick:function(){return function(e){N({prevVal:e,currVal:e})}(t)},onMouseEnter:function(){return function(e){N((function(t){return Object(x.a)(Object(x.a)({},t),{},{currVal:e})}))}(t)},onMouseLeave:function(){N((function(e){return Object(x.a)(Object(x.a)({},e),{},{currVal:e.prevVal})}))}},e)}))}),Object(R.jsx)("div",{className:" grid__item grid__item-3-12 itemPage__activePhotoContainer",children:Object(R.jsx)("img",{className:"itemPage__activePhoto",src:c.images[v.currVal],alt:"selected"})}),Object(R.jsxs)("div",{className:"grid__item grid__item-14-21 itemPage__main-specs",children:[Object(R.jsxs)("div",{className:"itemPage__colors",children:[Object(R.jsx)("p",{className:"itemPage__colors-text",children:"Available colors"}),Q.map((function(e){return Object(R.jsx)("div",{className:V()("itemPage__colors-wrapper",{"itemPage__colors-wrapper--active":e===u}),children:Object(R.jsx)("button",{type:"button",className:"itemPage__colors-btn","aria-label":"color",style:{backgroundColor:e},onClick:function(){return function(e){m(e)}(e)}})},e)}))]}),Object(R.jsxs)("div",{className:"itemPage__capacity",children:[Object(R.jsx)("p",{className:"itemPage__capacity-text",children:"Select capacity"}),Y.map((function(e){return Object(R.jsx)("button",{type:"button",className:V()("itemPage__capacity-value",{"itemPage__capacity-value--active":e===O}),"aria-label":"color",onClick:function(){return function(e){p(e)}(e)},children:"".concat(e," GB")},e)}))]}),Object(R.jsxs)("div",{className:"itemPage__price",children:[Object(R.jsx)("p",{className:"itemPage__price-current",children:"$".concat(Math.ceil(n.price*((100-n.discount)/100)))}),n.discount>0&&Object(R.jsx)("p",{className:"itemPage__price-original",children:"$".concat(n.price)})]}),Object(R.jsxs)("div",{className:"itemPage__buttons",children:[Object(R.jsx)("button",{type:"button",className:V()("itemPage__buttons-buy",{"itemPage__buttons-buy--selected":T}),onClick:function(){return J("withdraw")},children:T?"Added to cart":"Add to cart"}),Object(R.jsx)("button",{"aria-label":"favourite",type:"button",className:V()("itemPage__buttons-favourite",{"itemPage__buttons-favourite--active":H}),onClick:function(){return J("favorite")}})]}),Object(R.jsxs)("ul",{className:"itemPage__specs-list",children:[Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"Screen"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.display.screenSize})]}),Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"Resolution"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.display.screenResolution})]}),Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"Processor"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.hardware.cpu})]}),Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"RAM"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.storage.ram})]})]})]}),Object(R.jsx)("div",{className:"grid__item grid__item-23-24",children:Object(R.jsx)("p",{className:"itemPage__id",children:"ID:".concat(c.id)})})]}),Object(R.jsxs)("div",{className:"grid itemPage__section",children:[Object(R.jsxs)("div",{className:"grid__item grid__item-1-12 itemPage__about",children:[Object(R.jsx)("p",{className:"itemPage__about-title",children:"About"}),Object(R.jsx)("p",{className:"itemPage__about-text",children:c.description})]}),Object(R.jsxs)("div",{className:"grid__item grid__item-14-24 itemPage__specs",children:[Object(R.jsx)("p",{className:"itemPage__specs-title",children:"Tech specs"}),Object(R.jsxs)("ul",{className:"itemPage__specs-list",children:[Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"Screen"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.display.screenSize})]}),Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"Resolution"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.display.screenResolution})]}),Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"Processor"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.hardware.cpu})]}),Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"RAM"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.storage.ram})]}),Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"Built in memory"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:"".concat(O," GB")})]}),Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"Camera"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.camera.primary})]}),Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"Ceil"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.connectivity.cell})]}),Object(R.jsxs)("li",{className:"itemPage__specs-item",children:[Object(R.jsx)("p",{className:"itemPage__specs-item-title",children:"OS"}),Object(R.jsx)("p",{className:"itemPage__specs-item-value",children:c.android.os})]})]})]})]}),Object(R.jsx)("div",{className:"itemPage__similarPhones",children:Object(R.jsx)(K,{title:"Hot prices",items:C})})]})})};c(56);!function(e){e[e.Newest=0]="Newest",e[e.Low=1]="Low",e[e.High=2]="High"}(s||(s={}));var ee=[5,10,16,20,"all"],te=function(e){var t=e.items,c=e.category,a=Object(F.useState)(0),i=Object(A.a)(a,2),n=i[0],r=i[1],l=Object(F.useState)(ee[0]),o=Object(A.a)(l,2),j=o[0],u=o[1],m=Object(F.useState)(0),d=Object(A.a)(m,2),b=d[0],_=d[1],h=Object(F.useState)(s.Newest),O=Object(A.a)(h,2),p=O[0],x=O[1],g=Object(F.useState)(1),f=Object(A.a)(g,2),v=f[0],N=f[1],w=Object(F.useMemo)((function(){var e=t.filter((function(e){return e.type===c}));return r(e.length),e}),[t,c]);Object(F.useEffect)((function(){u(ee[0]),_(Number.isNaN(+j)?n:Math.ceil(n/+j)),N(1)}),[c]),Object(F.useEffect)((function(){_(Number.isNaN(+j)?n:Math.ceil(n/+j))}),[]);var y=Object(F.useMemo)((function(){return w.sort((function(e,t){switch(p){case s.Low:return e.price-(100-e.discount)/100-(t.price-(100-t.discount)/100);case s.High:return t.price-(100-t.discount)/100-(e.price-(100-e.discount)/100);default:return e.age-t.age}})),w}),[p,t,c]),P=function(e){if("string"===typeof e)switch(e){case"next":N((function(e){return e+1}));break;case"prev":v>1&&N((function(e){return e-1}))}else N(e);window.scrollTo({top:0,behavior:"smooth"})};return Object(R.jsxs)("section",{className:"categoryPage",children:[Object(R.jsx)(z,{pathElems:[c],pathBoldElems:[]}),Object(R.jsx)("h1",{className:"categoryPage__title",children:c[0].toUpperCase()+c.slice(1)}),Object(R.jsx)("p",{className:"categoryPage__amount",children:"".concat(n," models")}),Object(R.jsxs)("div",{className:"categoryPage__sort-prop",children:[Object(R.jsxs)("div",{className:"categoryPage__sortType",children:[Object(R.jsx)("p",{className:"categoryPage__sort-text",children:"Sort by"}),Object(R.jsxs)("select",{className:"categoryPage__sortSelect categoryPage__sortType-type",name:"sortType",id:"sortType",defaultValue:j,onChange:function(e){return t=+e.target.value,void x(t);var t},children:[Object(R.jsx)("option",{value:s.Newest,children:"Newest"}),Object(R.jsx)("option",{value:s.Low,children:"Price:Low to High"}),Object(R.jsx)("option",{value:s.High,children:"Price: Hight to Low"})]})]}),Object(R.jsxs)("div",{className:"categoryPage__sortAmount",children:[Object(R.jsx)("p",{className:"categoryPage__sort-text",children:"Items on Page"}),Object(R.jsx)("select",{className:"categoryPage__sortSelect categoryPage__sortType-amount",name:"amountOnPage",id:"AmountOnPage",defaultValue:j,onChange:function(e){var t;t=e.target.value,N(1),Number.isNaN(+t)?(u(t),_(1)):(u(+t),_(Math.ceil(n/+t)))},children:ee.map((function(e){return Object(R.jsx)("option",{value:e,children:e},e)}))})]})]}),Object(R.jsx)("div",{className:"categoryPage__body",children:("number"===typeof j?y.slice((v-1)*j,v*j):y).map((function(e){return Object(R.jsx)(G,{item:e},e.id)}))}),b>1&&Object(R.jsxs)("div",{className:"categoryPage__selector",children:[Object(R.jsx)("button",{type:"button","aria-label":"prev",className:"categoryPage__button categoryPage__button--reversed",onClick:function(){return P("prev")}}),new Array(b).fill(0).map((function(e,t){return Object(R.jsx)("button",{type:"button","aria-label":"page",className:V()("categoryPage__unit",{"categoryPage__unit--active":v===t+1}),onClick:function(){return P(t+1)},children:t+1},"button_".concat(t))})),Object(R.jsx)("button",{type:"button","aria-label":"next",className:"categoryPage__button",onClick:function(){return P("next")}})]})]})},ce=(c(57),function(){return Object(R.jsxs)("section",{className:"category",children:[Object(R.jsx)("h2",{className:"category__title",children:"Shop by category"}),Object(R.jsxs)("ul",{className:"category__list",children:[Object(R.jsx)("li",{className:"category__item",children:Object(R.jsxs)(r.b,{to:"/phones",children:[Object(R.jsx)("div",{className:"category__photo--phones category__photo"}),Object(R.jsx)("h2",{className:"category__name",children:"Mobile phones"}),Object(R.jsx)("p",{className:"category__amount",children:"amount"})]})}),Object(R.jsx)("li",{className:"category__item",children:Object(R.jsxs)(r.b,{to:"/tablets",children:[Object(R.jsx)("div",{className:"category__photo--tablets category__photo"}),Object(R.jsx)("h2",{className:"category__name",children:"Tabets"}),Object(R.jsx)("p",{className:"category__amount",children:"amount"})]})}),Object(R.jsx)("li",{className:"category__item",children:Object(R.jsxs)(r.b,{to:"accessories",children:[Object(R.jsx)("div",{className:"category__photo--accessories category__photo"}),Object(R.jsx)("h2",{className:"category__name",children:"Accessories"}),Object(R.jsx)("p",{className:"category__amount",children:"amount"})]})})]})]})}),se=(c(58),function(e){var t=e.products,c=Object(F.useMemo)((function(){return t.sort((function(e,t){return t.discount-e.discount})).filter((function(e){return e.discount>0}))}),[t]);return Object(R.jsx)("section",{className:"hotPrice",children:c&&Object(R.jsx)(K,{title:"Hot prices",items:c})})}),ae=(c(59),function(e){var t=e.products,c=Object(F.useMemo)((function(){return t.filter((function(e){return e.age<10})).sort((function(e,t){return e.age-t.age}))}),[t]);return Object(R.jsx)("section",{className:"newModels",children:c&&Object(R.jsx)(K,{title:"Brand new models",items:c})})}),ie=(c(60),c(61),function(e){var t=e.imgs,c=Object(F.useRef)(null),s=Object(F.useRef)(null),a=Object(F.useState)(1),i=Object(A.a)(a,2),n=i[0],r=i[1],l=Object(F.useState)(0),j=Object(A.a)(l,2),u=j[0],m=j[1],d=Object(F.useMemo)((function(){if(t.length>1){var e=t.map((function(e){return Object(R.jsx)("li",{className:"carousel__slide",children:Object(R.jsx)("img",{src:e.path,alt:e.desc})},e.id)}));return[Object(R.jsx)("li",{className:"carousel__slide",children:Object(R.jsx)("img",{src:"".concat(t[t.length-1].path),alt:t[t.length-1].desc})},t[0].id-1)].concat(Object(o.a)(e),[Object(R.jsx)("li",{className:"carousel__slide",children:Object(R.jsx)("img",{src:"".concat(t[0].path),alt:t[0].desc})},t[t.length-1].id+1)])}return Object(R.jsx)("li",{className:"carousel__slide",children:t[0]})}),[t]),b=Object(F.useCallback)((function(e){c.current&&(c.current.style.transitionDuration="400ms","prev"===e?n<=1?(m(0),r(t.length)):(m(c.current.clientWidth*(n-1)),r((function(e){return e-1}))):"next"===e&&(n>=t.length?(m(c.current.clientWidth*(t.length+1)),r(1)):(m(c.current.clientWidth*(n+1)),r((function(e){return e+1})))))}),[n,t]);return Object(F.useEffect)((function(){var e=function(){c.current&&(n<=1&&(c.current.style.transitionDuration="0ms",m(c.current.clientWidth*n)),n>=t.length&&(c.current.style.transitionDuration="0ms",m(c.current.clientWidth*t.length)))};return document.addEventListener("transitionend",e),function(){document.removeEventListener("transitionend",e)}}),[n,t]),Object(F.useLayoutEffect)((function(){c.current&&m(c.current.clientWidth*n)}),[]),Object(F.useEffect)((function(){return s.current&&clearInterval(s.current),s.current=setInterval((function(){b("next")}),5e3),function(){s.current&&clearInterval(s.current)}}),[b]),Object(R.jsxs)("div",{className:"carousel",children:[Object(R.jsxs)("div",{className:"carousel__body",children:[Object(R.jsx)("button",{type:"button","aria-label":"prev",className:"carousel__button",onClick:function(){return b("prev")}}),Object(R.jsx)("div",{className:"carousel__wrapper",children:Object(R.jsx)("ul",{ref:c,className:"carousel__container",style:{transform:"translate3d(".concat(-u,"px, 0, 0)")},children:d})}),Object(R.jsx)("button",{type:"button","aria-label":"next",className:"carousel__button carousel__button--reversed",onClick:function(){return b("next")}})]}),Object(R.jsx)("div",{className:"carousel__info",children:t.map((function(e,t){return Object(R.jsx)("div",{className:V()("carousel__info-tile",{"carousel__active-tile":t+1===n})},Math.random())}))})]})}),ne=function(){return Object(R.jsx)("section",{className:"novelties",children:Object(R.jsx)(ie,{imgs:[{id:1,path:"./img/banner.png",desc:"photo 1"},{id:2,path:"./img/banner.png",desc:"photo 1"},{id:3,path:"./img/banner.png",desc:"photo 1"}]})})},re=function(e){var t=e.products;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(ne,{}),t&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(se,{products:t}),Object(R.jsx)(ce,{}),Object(R.jsx)(ae,{products:t})]})]})},le=function(){var e=Object(F.useState)(),t=Object(A.a)(e,2),c=t[0],s=t[1];return Object(F.useEffect)((function(){$().then((function(e){return s(e)}))}),[]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(H,{}),Object(R.jsx)("main",{className:"main",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)(B.d,{children:[c&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(B.b,{path:"/",element:Object(R.jsx)(B.a,{to:"/home",replace:!0})}),Object(R.jsx)(B.b,{path:"/home",element:Object(R.jsx)(re,{products:c})}),Object(R.jsxs)(B.b,{path:"/phones",children:[Object(R.jsx)(B.b,{index:!0,element:Object(R.jsx)(te,{items:c,category:"phone"})}),Object(R.jsx)(B.b,{path:":itemId",element:Object(R.jsx)(Z,{})})]}),Object(R.jsxs)(B.b,{path:"/tablets",children:[Object(R.jsx)(B.b,{index:!0,element:Object(R.jsx)(te,{items:c,category:"tablet"})}),Object(R.jsx)(B.b,{path:":itemId",element:Object(R.jsx)(Z,{})})]}),Object(R.jsxs)(B.b,{path:"/accessories",children:[Object(R.jsx)(B.b,{index:!0,element:Object(R.jsx)(te,{items:c,category:"accessories"})}),Object(R.jsx)(B.b,{path:":itemId",element:Object(R.jsx)(Z,{})})]})]}),Object(R.jsx)(B.b,{path:"/favourites",element:Object(R.jsx)(X,{})}),Object(R.jsx)(B.b,{path:"/withdraw",element:Object(R.jsx)(q,{})}),Object(R.jsx)(B.b,{path:"*",element:Object(R.jsx)("p",{children:"Page not found"})})]})})}),Object(R.jsx)(J,{})]})};i.a.render(Object(R.jsx)(n.a,{store:E,children:Object(R.jsx)(r.a,{children:Object(R.jsx)(le,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.cda66329.chunk.js.map