(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{31:function(e,t,c){},44:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var a=c(24),s=c.n(a),n=c(22),i=c(9),r=c(17),o=c(8),l="favourite",j=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):[]},d={favorites:j(l)},u=Object(r.b)({name:"favorite",initialState:d,reducers:{addFavourite:function(e,t){!function(e,t){var c=j(e);"string"===typeof t?c.push(t):t.forEach((function(e){return c.push(e)})),localStorage.setItem(e,JSON.stringify(c))}(l,t.payload),e.favorites=[].concat(Object(o.a)(e.favorites),[t.payload])},removeFavourite:function(e,t){!function(e,t){var c=j(e);localStorage.setItem(e,JSON.stringify(c.filter((function(e){return e!==t}))))}(l,t.payload),e.favorites=e.favorites.filter((function(e){return e!==t.payload}))}}}),h=u.actions,b=h.addFavourite,m=h.removeFavourite,_=u.reducer,O=c(6),f=c(12),x="withdraw",p=function(){var e=localStorage.getItem(x);return e?JSON.parse(e):{}},v=function(e){localStorage.setItem(x,JSON.stringify(e))},N={withdraw:p()},w=Object(r.b)({name:x,initialState:N,reducers:{addWithdraw:function(e,t){Object.prototype.hasOwnProperty.call(p(),t.payload.id)||(e.withdraw=Object(f.a)(Object(f.a)({},e.withdraw),{},Object(O.a)({},t.payload.id,Object(f.a)(Object(f.a)({},t.payload),{},{amount:1})))),v(e.withdraw)},encreaseAmount:function(e,t){Object.prototype.hasOwnProperty.call(p(),t.payload[1])&&(e.withdraw[t.payload[1]].amount+=t.payload[0])},decreaseAmount:function(e,t){Object.prototype.hasOwnProperty.call(p(),t.payload[1])&&e.withdraw[t.payload[1]].amount-t.payload[0]>0&&(e.withdraw[t.payload[1]].amount-=t.payload[0])},deleteWithdraw:function(e,t){delete e.withdraw[t.payload],v(e.withdraw)}}}),g=w.actions,y=g.addWithdraw,k=g.decreaseAmount,C=g.deleteWithdraw,S=g.encreaseAmount,E=w.reducer,A=Object(r.a)({reducer:{favorite:_,withdraw:E}}),M=c(4),W=c(0),F=c(3),I=(c(44),c(31),c(10)),J=c.n(I),B=function(){return Object(n.b)()},P=n.c,R=c(1),T=function(){var e=P((function(e){return e.favorite.favorites})).length,t=P((function(e){return e.withdraw.withdraw})),c=Object(W.useMemo)((function(){var e=0;return Object.keys(t).forEach((function(c){e+=t[c].amount})),e}),[t]);return Object(R.jsx)("header",{className:"header",children:Object(R.jsxs)("div",{className:"header__content",children:[Object(R.jsxs)("div",{className:"header__right",children:[Object(R.jsx)("div",{className:"logo",children:Object(R.jsx)(i.c,{to:"/home",className:"logo__link",children:Object(R.jsx)("img",{src:"./img/header/logo.svg",alt:"logo",className:"logo__img"})})}),Object(R.jsx)("nav",{className:"nav",children:Object(R.jsxs)("ul",{className:"nav__list",children:[Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(i.c,{to:"/home",className:function(e){var t=e.isActive;return J()("nav__link",{"is-active":t})},children:"Home"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(i.c,{to:"/phones",className:function(e){var t=e.isActive;return J()("nav__link",{"is-active":t})},children:"Phones"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(i.c,{to:"/tablets",className:function(e){var t=e.isActive;return J()("nav__link",{"is-active":t})},children:"Tablets"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)(i.c,{to:"/accessories",className:function(e){var t=e.isActive;return J()("nav__link",{"is-active":t})},children:"Accessories"})})]})})]}),Object(R.jsxs)("div",{className:"header__left",children:[Object(R.jsxs)(i.c,{to:"/favourites",className:function(e){var t=e.isActive;return J()("header__icon",{"is-active":t})},children:[e>0&&Object(R.jsx)("p",{className:"header__ellipse",children:e}),Object(R.jsx)("img",{src:"./img/header/favorite(Stroke).svg",alt:"Favorite"})]}),Object(R.jsxs)(i.c,{to:"/withdraw",className:function(e){var t=e.isActive;return J()("header__icon",{"is-active":t})},children:[c>0&&Object(R.jsx)("p",{className:"header__ellipse",children:c}),Object(R.jsx)("img",{src:"./img/header/withdraw.svg",alt:"Withdraw"})]})]})]})})},U=(c(47),c(48),function(e){var t=e.imgs,c=Object(W.useRef)(null),a=Object(W.useRef)(null),s=Object(W.useState)(1),n=Object(M.a)(s,2),i=n[0],r=n[1],l=Object(W.useState)(0),j=Object(M.a)(l,2),d=j[0],u=j[1],h=Object(W.useMemo)((function(){if(t.length>1){var e=t.map((function(e){return Object(R.jsx)("li",{className:"carousel__slide",children:Object(R.jsx)("img",{src:e.path,alt:e.desc})},e.id)}));return[Object(R.jsx)("li",{className:"carousel__slide",children:Object(R.jsx)("img",{src:"".concat(t[t.length-1].path),alt:t[t.length-1].desc})},t[0].id-1)].concat(Object(o.a)(e),[Object(R.jsx)("li",{className:"carousel__slide",children:Object(R.jsx)("img",{src:"".concat(t[0].path),alt:t[0].desc})},t[t.length-1].id+1)])}return Object(R.jsx)("li",{className:"carousel__slide",children:t[0]})}),[t]),b=Object(W.useCallback)((function(e){c.current&&(c.current.style.transitionDuration="400ms","prev"===e?i<=1?(u(0),r(t.length)):(u(c.current.clientWidth*(i-1)),r((function(e){return e-1}))):"next"===e&&(i>=t.length?(u(c.current.clientWidth*(t.length+1)),r(1)):(u(c.current.clientWidth*(i+1)),r((function(e){return e+1})))))}),[i,t]);return Object(W.useEffect)((function(){var e=function(){c.current&&(i<=1&&(c.current.style.transitionDuration="0ms",u(c.current.clientWidth*i)),i>=t.length&&(c.current.style.transitionDuration="0ms",u(c.current.clientWidth*t.length)))};return document.addEventListener("transitionend",e),function(){document.removeEventListener("transitionend",e)}}),[i,t]),Object(W.useLayoutEffect)((function(){c.current&&u(c.current.clientWidth*i)}),[]),Object(W.useEffect)((function(){return a.current&&clearInterval(a.current),a.current=setInterval((function(){b("next")}),5e3),function(){a.current&&clearInterval(a.current)}}),[b]),Object(R.jsxs)("div",{className:"carousel",children:[Object(R.jsxs)("div",{className:"carousel__body",children:[Object(R.jsx)("button",{type:"button","aria-label":"prev",className:"carousel__button",onClick:function(){return b("prev")}}),Object(R.jsx)("div",{className:"carousel__wrapper",children:Object(R.jsx)("ul",{ref:c,className:"carousel__container",style:{transform:"translate3d(".concat(-d,"px, 0, 0)")},children:h})}),Object(R.jsx)("button",{type:"button","aria-label":"next",className:"carousel__button carousel__button--reversed",onClick:function(){return b("next")}})]}),Object(R.jsx)("div",{className:"carousel__info",children:t.map((function(e,t){return Object(R.jsx)("div",{className:J()("carousel__info-tile",{"carousel__active-tile":t+1===i})},Math.random())}))})]})}),D=function(){return Object(R.jsx)("section",{className:"novelties",children:Object(R.jsx)(U,{imgs:[{id:1,path:"./img/banner.png",desc:"photo 1"},{id:2,path:"./img/banner.png",desc:"photo 1"},{id:3,path:"./img/banner.png",desc:"photo 1"}]})})},L=(c(49),function(){return Object(R.jsx)("footer",{className:"footer",children:Object(R.jsxs)("div",{className:"container footer__content",children:[Object(R.jsx)("div",{className:"footer__logo",children:Object(R.jsx)("a",{href:"/",className:"footer__link",children:Object(R.jsx)("img",{src:"./img/header/logo.svg",alt:"logo"})})}),Object(R.jsx)("div",{className:"footer__contacts",children:Object(R.jsx)("nav",{className:"nav",children:Object(R.jsxs)("ul",{className:"nav__list",children:[Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)("a",{href:"/",className:"nav__link",children:"Github"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)("a",{href:"/",className:"nav__link",children:"Contacts"})}),Object(R.jsx)("li",{className:"nav__item",children:Object(R.jsx)("a",{href:"/",className:"nav__link",children:"Rights"})})]})})}),Object(R.jsxs)("button",{type:"button",className:"footer__to-top",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:[Object(R.jsx)("h3",{className:"footer__to-top-text",children:"Back to top"}),Object(R.jsx)("div",{className:"footer__to-top-button"})]})]})})}),Y=(c(50),c(51),"https://mate-academy.github.io/react_phone-catalog"),H="https://mate-academy.github.io/react_phone-catalog/api/products",G=function(){return fetch("".concat(H,".json")).then((function(e){if(!e.ok)throw new Error;return e.json()}))},X=function(e){var t=e.item,c=P((function(e){return e.favorite.favorites})),a=P((function(e){return e.withdraw.withdraw})),s=B(),n=Object(W.useMemo)((function(){return Object.keys(a).includes(t.id)}),[a]),i=Object(W.useMemo)((function(){return c.includes(t.id)}),[c]),r=function(e){"favorite"===e?s(i?m(t.id):b(t.id)):"withdraw"===e&&s(n?C(t.id):y(t))};return Object(R.jsxs)("div",{className:"item",children:[Object(R.jsxs)("div",{className:"item__header",children:[Object(R.jsx)("div",{className:"item__photo-container",children:Object(R.jsx)("img",{src:"".concat(Y,"/").concat(t.imageUrl),alt:t.id,className:"item__photo"})}),Object(R.jsx)("h2",{className:"item__title",children:t.name})]}),Object(R.jsxs)("div",{className:"item__body",children:[Object(R.jsx)("div",{className:"item__price",children:t.discount?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("p",{className:"item__counted",children:Math.ceil(t.price*((100-t.discount)/100))}),Object(R.jsx)("p",{className:"item__initial-price",children:t.price})]}):Object(R.jsx)("p",{className:"item__counted",children:t.price})}),Object(R.jsx)("div",{className:"item__specs specs",children:Object(R.jsxs)("ul",{className:"item__specs specs__list",children:[Object(R.jsxs)("li",{className:"specs__item",children:[Object(R.jsx)("p",{className:"specs__name",children:"Screen"}),Object(R.jsx)("p",{className:"specs__value",children:t.screen})]}),Object(R.jsxs)("li",{className:"specs__item",children:[Object(R.jsx)("p",{className:"specs__name",children:"Capacity"}),Object(R.jsx)("p",{className:"specs__value",children:t.capacity})]}),Object(R.jsxs)("li",{className:"specs__item",children:[Object(R.jsx)("p",{className:"specs__name",children:"RAM"}),Object(R.jsx)("p",{className:"specs__value",children:t.ram})]})]})}),Object(R.jsxs)("div",{className:"item__buttons",children:[Object(R.jsx)("button",{type:"button",className:J()("item__buy",{"item__buy--selected":n}),onClick:function(){return r("withdraw")},children:n?"Added to cart":"Add to cart"}),Object(R.jsx)("button",{type:"button",className:J()("item__favorite",{"item__favorite--active":i}),onClick:function(){return r("favorite")}})]})]})]})},$=(c(52),function(e){var t=e.title,c=e.items,a=Object(W.useState)(0),s=Object(M.a)(a,2),n=s[0],i=s[1],r=Object(W.useMemo)((function(){return c?Math.ceil(c.length/4):0}),[c]),o=function(e){"next"===e&&n<r-1?i((function(e){return e+1})):"prev"===e&&n>0&&i((function(e){return e-1}))};return Object(R.jsxs)("div",{className:"itemCarousel",children:[Object(R.jsxs)("div",{className:"itemCarousel__header",children:[Object(R.jsx)("h2",{className:"itemCarousel__title",children:t}),Object(R.jsxs)("div",{className:"itemCarousel__buttons",children:[Object(R.jsx)("button",{disabled:0===n,"aria-label":"prev",className:J()("itemCarousel__button","itemCarousel__button--reversed",{"itemCarousel__button--disabled":0===n}),type:"button",onClick:function(){return o("prev")}}),Object(R.jsx)("button",{disabled:n===r-1,"aria-label":"next",className:J()("itemCarousel__button",{"itemCarousel__button--disabled":n===r-1}),type:"button",onClick:function(){return o("next")}})]})]}),Object(R.jsx)("div",{className:"itemCarousel__body",children:Object(R.jsx)("div",{className:"itemCarousel__wrapper",style:{transform:"translateX(".concat(1156*-n,"px)")},children:null===c||void 0===c?void 0:c.map((function(e){return Object(R.jsx)(X,{item:e},e.id)}))})})]})}),q=function(e){var t=e.products,c=Object(W.useMemo)((function(){return t.sort((function(e,t){return t.discount-e.discount})).filter((function(e){return e.discount>0}))}),[t]);return Object(R.jsx)("section",{className:"hotPrice",children:c&&Object(R.jsx)($,{title:"Hot prices",items:c})})},z=(c(53),function(e){var t=e.products,c=Object(W.useMemo)((function(){return t.filter((function(e){return e.age<10})).sort((function(e,t){return e.age-t.age}))}),[t]);return Object(R.jsx)("section",{className:"newModels",children:c&&Object(R.jsx)($,{title:"Brand new models",items:c})})}),K=(c(54),function(){return Object(R.jsxs)("section",{className:"category",children:[Object(R.jsx)("h2",{className:"category__title",children:"Shop by category"}),Object(R.jsxs)("ul",{className:"category__list",children:[Object(R.jsx)("li",{className:"category__item",children:Object(R.jsxs)(i.b,{to:"/phones",children:[Object(R.jsx)("div",{className:"category__photo--phones category__photo"}),Object(R.jsx)("h2",{className:"category__name",children:"Mobile phones"}),Object(R.jsx)("p",{className:"category__amount",children:"amount"})]})}),Object(R.jsx)("li",{className:"category__item",children:Object(R.jsxs)(i.b,{to:"/tablets",children:[Object(R.jsx)("div",{className:"category__photo--tablets category__photo"}),Object(R.jsx)("h2",{className:"category__name",children:"Tabets"}),Object(R.jsx)("p",{className:"category__amount",children:"amount"})]})}),Object(R.jsx)("li",{className:"category__item",children:Object(R.jsxs)(i.b,{to:"accessories",children:[Object(R.jsx)("div",{className:"category__photo--accessories category__photo"}),Object(R.jsx)("h2",{className:"category__name",children:"Accessories"}),Object(R.jsx)("p",{className:"category__amount",children:"amount"})]})})]})]})}),Q=(c(55),function(e){var t=e.pathElems,c=e.pathBoldElems;return Object(R.jsxs)("div",{className:"path",children:[Object(R.jsx)(i.b,{to:"/home",className:"path__link"}),Object(R.jsx)("div",{className:"path__arrow"}),t.map((function(e,t,a){return a.length-1>t?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(i.b,{to:"/".concat(e),className:J()("path__text",{path__bold:c.includes(e)}),children:e},e),Object(R.jsx)("div",{className:"path__arrow"})]}):Object(R.jsx)(i.b,{to:"/".concat(e),className:J()("path__text",{path__bold:c.includes(e)}),children:e},e)}))]})}),V=(c(56),function(){var e=Object(W.useState)([]),t=Object(M.a)(e,2),c=t[0],a=t[1],s=function(){var e=window.location.pathname.split("/"),t=e[e.length-1];return t[0].toUpperCase()+t.slice(1)},n=P((function(e){return e.favorite.favorites}));return Object(W.useEffect)((function(){G().then((function(e){n.forEach((function(t){var c=e.find((function(e){return e.id===t}));c&&a((function(e){return[].concat(Object(o.a)(e),[c])}))}))}))}),[n]),Object(R.jsxs)("section",{className:"favourites",children:[Object(R.jsx)(Q,{pathElems:[s()],pathBoldElems:[]}),Object(R.jsx)("h1",{className:"favourites__title",children:s()}),Object(R.jsx)("h3",{className:"favourites__subtitle",children:"".concat(n.length," items")}),Object(R.jsx)("div",{className:"favourites__body",children:c.map((function(e){return Object(R.jsx)(X,{item:e},e.id)}))})]})}),Z=(c(57),c(58),c(59),function(){var e=B(),t=Object(W.useState)(window.scrollY),c=Object(M.a)(t,2),a=c[0],s=c[1],n=P((function(e){return e.withdraw.withdraw})),i=function(t,c){"add"===t?e(S([1,c])):"remove"===t&&e(k([1,c]))};return Object(W.useEffect)((function(){window.scrollTo(0,a)}),[window.scrollY]),Object(R.jsxs)("section",{className:"withdraw",children:[Object(R.jsx)(Q,{pathElems:[function(){var e=window.location.pathname.split("/"),t=e[e.length-1];return t[0].toUpperCase()+t.slice(1)}()],pathBoldElems:[]}),Object(R.jsx)("h1",{className:"withdraw__title",children:"Cart"}),Object(R.jsx)("div",{className:"grid",children:Object(R.jsx)("div",{className:"grid__item grid__item-1-16",children:Object(R.jsx)("ul",{children:Object.values(n).map((function(t){return Object(R.jsxs)("li",{className:"withdraw__item",children:[Object(R.jsxs)("div",{className:"withdraw__item-info",children:[Object(R.jsx)("button",{type:"button","aria-label":"delete",className:"withdraw__cross",onClick:function(){return c=t.id,s(window.scrollY),void e(C(c));var c}}),Object(R.jsx)("img",{src:"".concat(Y,"/").concat(t.imageUrl),alt:t.id,className:"withdraw__img"}),Object(R.jsx)("p",{className:"withdraw__text",children:t.name})]}),Object(R.jsxs)("div",{className:"withdraw__item-price",children:[Object(R.jsxs)("div",{className:"withdraw__counter",children:[Object(R.jsx)("button",{type:"button",className:"withdraw__button",onClick:function(){return i("remove",t.id)},children:"-"}),Object(R.jsx)("div",{className:"withdraw__container",children:Object(R.jsx)("p",{className:"withdraw__amount",children:t.amount})}),Object(R.jsx)("button",{type:"button",className:"withdraw__button withdraw__button--active",onClick:function(){return i("add",t.id)},children:"+"})]}),Object(R.jsx)("p",{className:"withdraw__price",children:"$".concat(Math.ceil(t.price*((100-t.discount)/100)))})]})]},t.id)}))})})})]})}),ee=function(){var e=Object(W.useState)(),t=Object(M.a)(e,2),c=t[0],a=t[1];return Object(W.useEffect)((function(){G().then((function(e){return a(e)}))}),[]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(T,{}),Object(R.jsx)("main",{className:"main",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)(F.d,{children:[Object(R.jsx)(F.b,{path:"/",element:Object(R.jsx)(F.a,{to:"/home",replace:!0})}),Object(R.jsx)(F.b,{path:"/home",element:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(D,{}),c&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(q,{products:c}),Object(R.jsx)(K,{}),Object(R.jsx)(z,{products:c})]})]})}),Object(R.jsx)(F.b,{path:"/favourites",element:Object(R.jsx)(V,{})}),Object(R.jsx)(F.b,{path:"/withdraw",element:Object(R.jsx)(Z,{})}),Object(R.jsx)(F.b,{path:"*",element:Object(R.jsx)("p",{children:"Page not found"})})]})})}),Object(R.jsx)(L,{})]})};s.a.render(Object(R.jsx)(n.a,{store:A,children:Object(R.jsx)(i.a,{children:Object(R.jsx)(ee,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.751ab3fa.chunk.js.map