(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,o=n(6),s=n.n(o),r=n(5),i=n(7),a=n(1),u=(n(12),n(13),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.LENGTH="length",t.ALPHABET="alphabet"}(c||(c={}));var b=function(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],o=e[1],s=Object(a.useState)(!1),b=Object(r.a)(s,2),h=b[0],j=b[1],d=function(t,e){var n=e.sortType,o=e.reverse,s=Object(i.a)(t);return n&&s.sort((function(t,e){switch(n){case c.LENGTH:return t.length-e.length;case c.ALPHABET:return t.localeCompare(e);default:throw new Error("Sorting went wrong...")}})),o&&s.reverse(),s}(l,{sortType:n,reverse:h});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:"button is-info ".concat(n!==c.ALPHABET&&"is-light"),onClick:function(){return o(c.ALPHABET)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:"button is-success ".concat(n!==c.LENGTH&&"is-light"),onClick:function(){return o(c.LENGTH)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:"button is-warning ".concat(!h&&"is-light"),onClick:function(){return j((function(t){return!t}))},children:"Reverse"}),(n||h)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){j(!1),o("")},children:"Reset"})]}),Object(u.jsx)("ul",{children:d.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.50348351.chunk.js.map