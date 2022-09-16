(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{31:function(e,t,c){},44:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var s=c(24),a=c.n(s),n=c(22),i=c(10),r=c(17),l=c(8),o="favourite",j=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):[]},d={favorites:j(o)},u=Object(r.b)({name:"favorite",initialState:d,reducers:{addFavourite:function(e,t){!function(e,t){var c=j(e);"string"===typeof t?c.push(t):t.forEach((function(e){return c.push(e)})),localStorage.setItem(e,JSON.stringify(c))}(o,t.payload),e.favorites=[].concat(Object(l.a)(e.favorites),[t.payload])},removeFavourite:function(e,t){!function(e,t){var c=j(e);localStorage.setItem(e,JSON.stringify(c.filter((function(e){return e!==t}))))}(o,t.payload),e.favorites=e.favorites.filter((function(e){return e!==t.payload}))}}}),m=u.actions,h=m.addFavourite,b=m.removeFavourite,_=u.reducer,O=c(6),f=c(12),x="withdraw",p=function(){var e=localStorage.getItem(x);return e?JSON.parse(e):{}},v=function(e){localStorage.setItem(x,JSON.stringify(e))},N={withdraw:p()},g=Object(r.b)({name:x,initialState:N,reducers:{addWithdraw:function(e,t){Object.prototype.hasOwnProperty.call(p(),t.payload.id)||(e.withdraw=Object(f.a)(Object(f.a)({},e.withdraw),{},Object(O.a)({},t.payload.id,Object(f.a)(Object(f.a)({},t.payload),{},{amount:1})))),v(e.withdraw)},encreaseAmount:function(e,t){Object.prototype.hasOwnProperty.call(p(),t.payload[1])&&(e.withdraw[t.payload[1]].amount+=t.payload[0])},decreaseAmount:function(e,t){Object.prototype.hasOwnProperty.call(p(),t.payload[1])&&e.withdraw[t.payload[1]].amount-t.payload[0]>0&&(e.withdraw[t.payload[1]].amount-=t.payload[0])},deleteWithdraw:function(e,t){delete e.withdraw[t.payload],v(e.withdraw)}}}),w=g.actions,y=w.addWithdraw,C=w.decreaseAmount,k=w.deleteWithdraw,S=w.encreaseAmount,E=g.reducer,A=Object(r.a)({reducer:{favorite:_,withdraw:E}}),M=c(4),W=c(0),F=c(3),I=(c(44),c(31),c(9)),P=c.n(I),J=function(){return Object(n.b)()},B=n.c,R=c(1),U=function(){var e=B((function(e){return e.favorite.favorites})).length,t=B((function(e){return e.withdraw.withdraw})),c=Object(W.useMemo)((function(){var e=0;return Object.keys(t).forEach((function(c){e+=t[c].amount})),e}),[t]);return Object(R.jsx)("header",{className:"header",children:Object(R.jsxs)("div",{className:"header__content",children:[Object(R.jsxs)("div",{className:"header__right",children:[Object(R.jsx)("div",{className:"logo",children:Object(R.jsx)(i.c,{to:"/home",className:"logo__link",children:Object(R.jsx)("img",{src:"./img/header/logo.svg",alt:"logo",className:"logo__img"})})}),Object(R.jsx)("nav",{className:"nav",children:Object(R.jsxs)("ul",{className:"nav__list",children:[Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(i.c,{to:"/home",className:function(e){var t=e.isActive;return P()("nav__link",{"is-active":t})},children:"Home"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(i.c,{to:"/phones",className:function(e){var t=e.isActive;return P()("nav__link",{"is-active":t})},children:"Phones"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(i.c,{to:"/tablets",className:function(e){var t=e.isActive;return P()("nav__link",{"is-active":t})},children:"Tablets"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(i.c,{to:"/accessories",className:function(e){var t=e.isActive;return P()("nav__link",{"is-active":t})},children:"Accessories"})})]})})]}),Object(R.jsxs)("div",{className:"header__left",children:[Object(R.jsxs)(i.c,{to:"/favourites",className:function(e){var t=e.isActive;return P()("header__icon",{"is-active":t})},children:[e>0&&Object(R.jsx)("p",{className:"header__ellipse",children:e}),Object(R.jsx)("img",{src:"./img/header/favorite(Stroke).svg",alt:"Favorite"})]}),Object(R.jsxs)(i.c,{to:"/withdraw",className:function(e){var t=e.isActive;return P()("header__icon",{"is-active":t})},children:[c>0&&Object(R.jsx)("p",{className:"header__ellipse",children:c}),Object(R.jsx)("img",{src:"./img/header/withdraw.svg",alt:"Withdraw"})]})]})]})})},D=(c(47),c(48),function(e){var t=e.imgs,c=Object(W.useRef)(null),s=Object(W.useRef)(null),a=Object(W.useState)(1),n=Object(M.a)(a,2),i=n[0],r=n[1],o=Object(W.useState)(0),j=Object(M.a)(o,2),d=j[0],u=j[1],m=Object(W.useMemo)((function(){if(t.length>1){var e=t.map((function(e){return Object(R.jsx)("li",{className:"carousel__slide",children:Object(R.jsx)("img",{src:e.path,alt:e.desc})},e.id)}));return[Object(R.jsx)("li",{className:"carousel__slide",children:Object(R.jsx)("img",{src:"".concat(t[t.length-1].path),alt:t[t.length-1].desc})},t[0].id-1)].concat(Object(l.a)(e),[Object(R.jsx)("li",{className:"carousel__slide",children:Object(R.jsx)("img",{src:"".concat(t[0].path),alt:t[0].desc})},t[t.length-1].id+1)])}return Object(R.jsx)("li",{className:"carousel__slide",children:t[0]})}),[t]),h=Object(W.useCallback)((function(e){c.current&&(c.current.style.transitionDuration="400ms","prev"===e?i<=1?(u(0),r(t.length)):(u(c.current.clientWidth*(i-1)),r((function(e){return e-1}))):"next"===e&&(i>=t.length?(u(c.current.clientWidth*(t.length+1)),r(1)):(u(c.current.clientWidth*(i+1)),r((function(e){return e+1})))))}),[i,t]);return Object(W.useEffect)((function(){var e=function(){c.current&&(i<=1&&(c.current.style.transitionDuration="0ms",u(c.current.clientWidth*i)),i>=t.length&&(c.current.style.transitionDuration="0ms",u(c.current.clientWidth*t.length)))};return document.addEventListener("transitionend",e),function(){document.removeEventListener("transitionend",e)}}),[i,t]),Object(W.useLayoutEffect)((function(){c.current&&u(c.current.clientWidth*i)}),[]),Object(W.useEffect)((function(){return s.current&&clearInterval(s.current),s.current=setInterval((function(){h("next")}),5e3),function(){s.current&&clearInterval(s.current)}}),[h]),Object(R.jsxs)("div",{className:"carousel",children:[Object(R.jsxs)("div",{className:"carousel__body",children:[Object(R.jsx)("button",{type:"button",className:"carousel__button",onClick:function(){return h("prev")},children:Object(R.jsx)("img",{src:"./img/vector.svg",alt:"Prev"})}),Object(R.jsx)("div",{className:"carousel__wrapper",children:Object(R.jsx)("ul",{ref:c,className:"carousel__container",style:{transform:"translate3d(".concat(-d,"px, 0, 0)")},children:m})}),Object(R.jsx)("button",{type:"button",className:"carousel__button",onClick:function(){return h("next")},children:Object(R.jsx)("img",{src:"./img/vector.svg",alt:"Next",className:"carousel__mirrored"})})]}),Object(R.jsx)("div",{className:"carousel__info",children:t.map((function(e,t){return Object(R.jsx)("div",{className:P()("carousel__info-tile",{"carousel__active-tile":t+1===i})},Math.random())}))})]})}),H=function(){return Object(R.jsx)("section",{className:"novelties",children:Object(R.jsx)(D,{imgs:[{id:1,path:"./img/banner.png",desc:"photo 1"},{id:2,path:"./img/banner.png",desc:"photo 1"},{id:3,path:"./img/banner.png",desc:"photo 1"}]})})},L=(c(49),function(){return Object(R.jsx)("footer",{className:"footer",children:Object(R.jsxs)("div",{className:"container footer__content",children:[Object(R.jsx)("div",{className:"footer__logo",children:Object(R.jsx)("a",{href:"/",className:"footer__link",children:Object(R.jsx)("img",{src:"./img/header/logo.svg",alt:"logo"})})}),Object(R.jsx)("div",{className:"footer__contacts",children:Object(R.jsx)("nav",{className:"nav",children:Object(R.jsxs)("ul",{className:"nav__list",children:[Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)("a",{href:"/",className:"nav__link",children:"Github"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)("a",{href:"/",className:"nav__link",children:"Contacts"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)("a",{href:"/",className:"nav__link",children:"Rights"})})]})})}),Object(R.jsxs)("a",{href:"/",className:"footer__to-top",children:[Object(R.jsx)("h3",{className:"footer__to-top-text",children:"Back to top"}),Object(R.jsx)("div",{className:"footer__to-top-button",children:Object(R.jsx)("img",{src:"./img/Vector (Stroke).svg",alt:"to top",className:"footer__arrow"})})]})]})})}),T=(c(50),c(51),function(e){var t=e.item,c=B((function(e){return e.favorite.favorites})),s=B((function(e){return e.withdraw.withdraw})),a=J(),n=Object(W.useMemo)((function(){return Object.keys(s).includes(t.id)}),[s]),i=Object(W.useMemo)((function(){return c.includes(t.id)}),[c]),r=function(e){"favorite"===e?a(i?b(t.id):h(t.id)):"withdraw"===e&&a(n?k(t.id):y(t))};return Object(R.jsxs)("div",{className:"item",children:[Object(R.jsxs)("div",{className:"item__header",children:[Object(R.jsx)("div",{className:"item__photo-container",children:Object(R.jsx)("img",{src:"./".concat(t.imageUrl),alt:t.id,className:"item__photo"})}),Object(R.jsx)("h2",{className:"item__title",children:t.name})]}),Object(R.jsxs)("div",{className:"item__body",children:[Object(R.jsx)("div",{className:"item__price",children:t.discount?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("p",{className:"item__counted",children:Math.ceil(t.price*((100-t.discount)/100))}),Object(R.jsx)("p",{className:"item__initial-price",children:t.price})]}):Object(R.jsx)("p",{className:"item__counted",children:t.price})}),Object(R.jsx)("div",{className:"item__specs specs",children:Object(R.jsxs)("ul",{className:"item__specs specs__list",children:[Object(R.jsxs)("li",{className:"specs__item",children:[Object(R.jsx)("p",{className:"specs__name",children:"Screen"}),Object(R.jsx)("p",{className:"specs__value",children:t.screen})]}),Object(R.jsxs)("li",{className:"specs__item",children:[Object(R.jsx)("p",{className:"specs__name",children:"Capacity"}),Object(R.jsx)("p",{className:"specs__value",children:t.capacity})]}),Object(R.jsxs)("li",{className:"specs__item",children:[Object(R.jsx)("p",{className:"specs__name",children:"RAM"}),Object(R.jsx)("p",{className:"specs__value",children:t.ram})]})]})}),Object(R.jsxs)("div",{className:"item__buttons",children:[Object(R.jsx)("button",{type:"button",className:P()("item__buy",{"item__buy--selected":n}),onClick:function(){return r("withdraw")},children:"Add to cart"}),Object(R.jsx)("button",{type:"button",className:"item__favorite",onClick:function(){return r("favorite")},children:Object(R.jsx)("img",{src:"./img/ShopItem/favorite".concat(i?"(filled)":"",".svg"),alt:"add to favorite"})})]})]})]})}),Y=(c(52),function(e){var t=e.title,c=e.items,s=Object(W.useState)(0),a=Object(M.a)(s,2),n=a[0],i=a[1],r=Object(W.useMemo)((function(){return c?Math.ceil(c.length/4):0}),[c]),l=function(e){"next"===e&&n<r-1?i((function(e){return e+1})):"prev"===e&&n>0&&i((function(e){return e-1}))};return Object(R.jsxs)("div",{className:"itemCarousel",children:[Object(R.jsxs)("div",{className:"itemCarousel__header",children:[Object(R.jsx)("h2",{className:"itemCarousel__title",children:t}),Object(R.jsxs)("div",{className:"itemCarousel__buttons",children:[Object(R.jsx)("button",{disabled:0===n,className:P()("itemCarousel__button","arrow__reverse",{"itemCarousel__button--disabled":0===n}),type:"button",onClick:function(){return l("prev")},children:Object(R.jsx)("img",{src:"./img/vector.svg",alt:"prev",className:"arrow__reverse"})}),Object(R.jsx)("button",{disabled:n===r-1,className:P()("itemCarousel__button",{"itemCarousel__button--disabled":n===r-1}),type:"button",onClick:function(){return l("next")},children:Object(R.jsx)("img",{src:"./img/vector.svg",alt:"prev",className:"arrow"})})]})]}),Object(R.jsx)("div",{className:"itemCarousel__body",children:Object(R.jsx)("div",{className:"itemCarousel__wrapper",style:{transform:"translateX(".concat(1156*-n,"px)")},children:null===c||void 0===c?void 0:c.map((function(e){return Object(R.jsx)(T,{item:e},e.id)}))})})]})}),G=function(e){var t=e.products,c=Object(W.useMemo)((function(){return t.sort((function(e,t){return t.discount-e.discount})).filter((function(e){return e.discount>0}))}),[t]);return Object(R.jsx)("section",{className:"hotPrice",children:c&&Object(R.jsx)(Y,{title:"Hot prices",items:c})})},V="https://mate-academy.github.io/react_phone-catalog/api/products",X=function(){return fetch("".concat(V,".json")).then((function(e){if(!e.ok)throw new Error;return e.json()}))},$=(c(53),function(e){var t=e.products,c=Object(W.useMemo)((function(){return t.filter((function(e){return e.age<10})).sort((function(e,t){return e.age-t.age}))}),[t]);return Object(R.jsx)("section",{className:"newModels",children:c&&Object(R.jsx)(Y,{title:"Brand new models",items:c})})}),q=(c(54),function(){return Object(R.jsxs)("section",{className:"category",children:[Object(R.jsx)("h2",{className:"category__title",children:"Shop by category"}),Object(R.jsxs)("ul",{className:"category__list",children:[Object(R.jsxs)("li",{className:"category__item",children:[Object(R.jsx)("img",{src:"./img/Category/phones.jpg",alt:"Phones",className:"category__photo"}),Object(R.jsx)("h2",{className:"category__name",children:"Mobile phones"}),Object(R.jsx)("p",{className:"category__amount",children:"amount"})]}),Object(R.jsxs)("li",{className:"category__item",children:[Object(R.jsx)("img",{src:"./img/Category/tablets.jpg",alt:"Phones",className:"category__photo"}),Object(R.jsx)("h2",{className:"category__name",children:"Tabets"}),Object(R.jsx)("p",{className:"category__amount",children:"amount"})]}),Object(R.jsxs)("li",{className:"category__item",children:[Object(R.jsx)("img",{src:"./img/Category/accessories.jpg",alt:"Phones",className:"category__photo"}),Object(R.jsx)("h2",{className:"category__name",children:"Accessories"}),Object(R.jsx)("p",{className:"category__amount",children:"amount"})]})]})]})}),z=(c(55),function(e){var t=e.pathElems,c=e.pathBoldElems;return Object(R.jsxs)("div",{className:"path",children:[Object(R.jsx)(i.b,{to:"/home",className:"path__link",children:Object(R.jsx)("img",{src:"./img/path/pathHome.svg",alt:"home",className:"path__img"})}),Object(R.jsx)("div",{className:"path__arrow",children:">"}),t.map((function(e,t,s){return s.length-1>t?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(i.b,{to:"/".concat(e),className:P()("path__text",{path__bold:c.includes(e)}),children:e},e),Object(R.jsx)("div",{className:"path__arrow",children:">"})]}):Object(R.jsx)(i.b,{to:"/".concat(e),className:P()("path__text",{path__bold:c.includes(e)}),children:e},e)}))]})}),K=(c(56),function(){var e=Object(W.useState)([]),t=Object(M.a)(e,2),c=t[0],s=t[1],a=function(){var e=window.location.pathname.split("/"),t=e[e.length-1];return t[0].toUpperCase()+t.slice(1)},n=B((function(e){return e.favorite.favorites}));return Object(W.useEffect)((function(){X().then((function(e){n.forEach((function(t){var c=e.find((function(e){return e.id===t}));c&&s((function(e){return[].concat(Object(l.a)(e),[c])}))}))}))}),[n]),Object(R.jsxs)("section",{className:"favourites",children:[Object(R.jsx)(z,{pathElems:[a()],pathBoldElems:[]}),Object(R.jsx)("h1",{className:"favourites__title",children:a()}),Object(R.jsx)("h3",{className:"favourites__subtitle",children:"".concat(n.length," items")}),Object(R.jsx)("div",{className:"favourites__body",children:c.map((function(e){return Object(R.jsx)(T,{item:e},e.id)}))})]})}),Q=(c(57),c(58),c(59),function(){var e=J(),t=Object(W.useState)(window.scrollY),c=Object(M.a)(t,2),s=c[0],a=c[1],n=B((function(e){return e.withdraw.withdraw})),i=function(t,c){"add"===t?e(S([1,c])):"remove"===t&&e(C([1,c]))};return Object(W.useEffect)((function(){window.scrollTo(0,s)}),[window.scrollY]),Object(R.jsxs)("section",{className:"withdraw",children:[Object(R.jsx)(z,{pathElems:[function(){var e=window.location.pathname.split("/"),t=e[e.length-1];return t[0].toUpperCase()+t.slice(1)}()],pathBoldElems:[]}),Object(R.jsx)("h1",{className:"withdraw__title",children:"Cart"}),Object(R.jsx)("div",{className:"grid",children:Object(R.jsx)("div",{className:"grid__item grid__item-1-16",children:Object(R.jsx)("ul",{children:Object.values(n).map((function(t){return Object(R.jsxs)("li",{className:"withdraw__item",children:[Object(R.jsxs)("div",{className:"withdraw__item-info",children:[Object(R.jsx)("img",{src:"./img/withdraw/Close.svg",alt:"delete",className:"withdraw__cross",onClick:function(){return c=t.id,a(window.scrollY),void e(k(c));var c}}),Object(R.jsx)("img",{src:"./".concat(t.imageUrl),alt:t.id,className:"withdraw__img"}),Object(R.jsx)("p",{className:"withdraw__text",children:t.name})]}),Object(R.jsxs)("div",{className:"withdraw__item-price",children:[Object(R.jsxs)("div",{className:"withdraw__counter",children:[Object(R.jsx)("button",{type:"button",className:"withdraw__button",onClick:function(){return i("remove",t.id)},children:"-"}),Object(R.jsx)("div",{className:"withdraw__container",children:Object(R.jsx)("p",{className:"withdraw__amount",children:t.amount})}),Object(R.jsx)("button",{type:"button",className:"withdraw__button withdraw__button--active",onClick:function(){return i("add",t.id)},children:"+"})]}),Object(R.jsx)("p",{className:"withdraw__price",children:"$".concat(Math.ceil(t.price*((100-t.discount)/100)))})]})]},t.id)}))})})})]})}),Z=function(){var e=Object(W.useState)(),t=Object(M.a)(e,2),c=t[0],s=t[1];return Object(W.useEffect)((function(){X().then((function(e){return s(e)}))}),[]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(U,{}),Object(R.jsx)("main",{className:"main",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)(F.d,{children:[Object(R.jsx)(F.b,{path:"/",element:Object(R.jsx)(F.a,{to:"/home",replace:!0})}),Object(R.jsx)(F.b,{path:"/home",element:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(H,{}),c&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(G,{products:c}),Object(R.jsx)(q,{}),Object(R.jsx)($,{products:c})]})]})}),Object(R.jsx)(F.b,{path:"/favourites",element:Object(R.jsx)(K,{})}),Object(R.jsx)(F.b,{path:"/withdraw",element:Object(R.jsx)(Q,{})}),Object(R.jsx)(F.b,{path:"*",element:Object(R.jsx)("p",{children:"Page not found"})})]})})}),Object(R.jsx)(L,{})]})};a.a.render(Object(R.jsx)(n.a,{store:A,children:Object(R.jsx)(i.a,{children:Object(R.jsx)(Z,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.770e8e52.chunk.js.map