(this["webpackJsonprick-and-morty-finder-app"]=this["webpackJsonprick-and-morty-finder-app"]||[]).push([[0],[,,,function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(4),r=n.n(i),o=n(6),d=(n(12),function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,origin:e.origin.name,episodes:e.episode.length,gender:e.gender,image:e.image}}))}))}),j=n.p+"static/media/logo.de13d484.png",l=(n(13),function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"container__title",children:"Tu buscador de personajes de"}),Object(c.jsx)("img",{className:"container__img",src:j,alt:"Logo de Rick y Morty"})]})})}),m=n(5),u=n.n(m),h=(n(16),function(e){return Object(c.jsxs)("li",{className:"card",id:e.id,children:[Object(c.jsx)("div",{className:"card__box",children:Object(c.jsx)("img",{className:"card__box--img",src:e.image,alt:"Foto de ".concat(e.name)})}),Object(c.jsxs)("div",{className:"card__description",children:[Object(c.jsx)("h4",{className:"card__description--title",children:e.name}),Object(c.jsx)("div",{className:"card__description--species",children:Object(c.jsx)("h4",{children:e.species})})]})]})}),b=(n(17),function(e){var t=e.characters.map((function(e){return Object(c.jsx)(h,{id:e.id,name:e.name,image:e.image,species:e.species,status:e.status},e.id)}));return Object(c.jsx)("ul",{className:"cardList",children:t})});b.prototype={data:u.a.array};var p=b,f=(n(3),function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"name",children:"Filtrar por nombre:"}),Object(c.jsx)("input",{className:"form__input-text",type:"text",name:"name",id:"name",placeholder:"Busca tu personaje favorito",onChange:function(e){console.log(e.type)}})]})}),x=function(){return Object(c.jsx)("section",{children:Object(c.jsx)("form",{className:"form",children:Object(c.jsx)(f,{})})})},O=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){d().then((function(e){a(e)}))}),[]),Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)(l,{}),Object(c.jsx)(x,{}),Object(c.jsx)("main",{className:"main",children:Object(c.jsx)(p,{characters:n})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.394de450.chunk.js.map