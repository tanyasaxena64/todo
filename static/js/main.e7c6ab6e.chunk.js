(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(6),a=n.n(o),r=(n(12),n(7)),s=n(5),l=(n.p,n(13),n(0));var d=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)([]),a=Object(s.a)(o,2),d=a[0],u=a[1],j=function(e){console.log("deleted"),u((function(t){return t.filter((function(t,n){return t!==e}))}))};return Object(l.jsx)("div",{className:"main_div",children:Object(l.jsxs)("div",{className:"center_div",children:[Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"add a item...",value:n,onChange:function(e){i(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){u([].concat(Object(r.a)(d),[n])),i(""),console.log(d)},children:"Add"}),Object(l.jsx)("ol",{children:d.map((function(e,t){return Object(l.jsxs)("div",{id:t,text:e,onSelect:j,style:{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"8px",border:"1px solid black"},children:[Object(l.jsx)("li",{children:e}),Object(l.jsx)("button",{className:"but",onClick:function(){return j(e)},children:"Del"})]},t)}))})]})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.e7c6ab6e.chunk.js.map