(this["webpackJsonpfrontend-test"]=this["webpackJsonpfrontend-test"]||[]).push([[0],{36:function(n,e,t){},57:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var c,i,r,a=t(1),s=t.n(a),o=t(25),d=t.n(o),l=(t(36),t(12)),b=t.n(l),j=t(26),u=t(5),A=t(27),f=t.n(A).a.create({baseURL:"https://www.mocky.io/v2/"}),h=function(){return f.get("/59f08692310000b4130e9f71/")},x=t(2),O=t(3),m=O.a.div(c||(c=Object(x.a)(["\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 3vw;\n  min-height: 60px;\n  background: #FFF;\n  display: flex;\n  justify-content: center;\n"]))),g=O.a.div(i||(i=Object(x.a)(["\n  width:90vw;\n  display: flex;\n  justify-content: flex-end;\n"]))),p=O.a.div(r||(r=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 0.5vw;\n  \n  &:hover {\n    cursor: pointer;\n    background: #dadddb;\n    border-radius: 0.5vw;\n  }\n\n  img {\n    width: 40px;\n  }\n"]))),v=t(0),w=Object(a.createContext)({isOpen:!1,setIsOpen:function(){}});function B(n){var e=n.children,t=Object(a.useState)(!1),c=Object(u.a)(t,2),i=c[0],r=c[1];return Object(v.jsx)(w.Provider,{value:{isOpen:i,setIsOpen:r},children:e})}function k(){var n=Object(a.useContext)(w).setIsOpen;return Object(v.jsx)(m,{children:Object(v.jsx)(g,{children:Object(v.jsx)(p,{onClick:function(){n(!0)},"data-testid":"menu-opener",children:Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVHic7dk9TsMwFMDxPx8SG13oBYALQMshoBdhg+NwDcQOG0xwgn6wM4HoCGFAjHZSJ8JO+/9Jb4otvfcc2VYCkiRJkiRJ2ixbkWeHwA1wAuz8Tzqd+wJegEtgserkO6Bak7gNFbkdacBBXYd6ZJgy6QJYkn/12sYncB4qMrYHAOwDxw3GlaoCpsBH7kQkSSVqcrwNiF+YSvYNvKdOPgNeyX+RaRsLYJzSgIcCku8q7kNFxl7tqq5DPZJUyxiYk3/12sYMGIWKdBOUJG2wumNwABw1GFeqv3tA0lE4YT0+ii75/cC7sqcCku8qHkNFxm54b3Ud6pFgLbuRSVfAHnBKv3+NPQPXuRORJEmSJElSKX4Aipt3XtGq1OwAAAAASUVORK5CYII=",alt:""})})})})}var y,C=t(15),F=t(31),U=Object(a.createContext)({betslip:[],setBetslip:function(){}});function S(n){var e=n.children,t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],r=c[1];return Object(v.jsx)(U.Provider,{value:{betslip:i,setBetslip:r},children:e})}var E,G,N=O.a.button.attrs({type:"button"})(y||(y=Object(x.a)(["\n  flex-grow: 1;\n  flex-basis: 10vw;\n  max-width: 30vw;\n  background: ",";\n  transition: filter 0.1s;\n  border: ",";\n\n  &:hover {\n    filter: brightness(0.8);\n  }\n\n  p {\n    margin: 0.4rem 0;\n    color: #131516;\n  }\n"])),(function(n){return n.isActive?"#77dd77":"#FFF"}),(function(n){return n.isActive?"1px solid #77dd00":"1px solid #676767"}));function I(n){var e=n.selection,t=n.handleUserSelection,c=n.isActive;return Object(v.jsxs)(N,{isActive:c,onClick:function(){return t(e)},value:e.id,children:[e.name,Object(v.jsx)("br",{}),new Intl.NumberFormat("pt-BR",{style:"currency",currency:"EUR"}).format(e.price)]})}var R,Q,J,Y=O.a.div(E||(E=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 8vw;\n  align-items: center;\n"]))),D=O.a.div(G||(G=Object(x.a)(["\n  h3 {\n    margin: 0 0 1rem 0;\n  }\n"])));function P(n){var e=n.market,t=Object(a.useState)({}),c=Object(u.a)(t,2),i=c[0],r=c[1],s=Object(a.useContext)(U),o=s.betslip,d=s.setBetslip;Object(a.useEffect)((function(){j()}),[o]);var l=function(n){n&&(r(n),b(n))},b=function(n){var t=o.filter((function(n){return n.id!==e.id}));d([].concat(Object(F.a)(t),[Object(C.a)(Object(C.a)({},e),{},{selection:n})]))},j=function(){o.find((function(n){return n.id===e.id}))||r({})};return Object(v.jsxs)(D,{children:[Object(v.jsx)("h3",{children:e.name}),Object(v.jsx)(Y,{children:e.selections.map((function(n){return Object(v.jsx)(I,{selection:n,handleUserSelection:l,isActive:i.id===n.id},n.id)}))})]})}var z,M,X,H,K,Z=O.a.div(R||(R=Object(x.a)(["\n  border: 2px solid #8791a0;\n  margin-bottom: 3vh;\n"]))),q=O.a.section(Q||(Q=Object(x.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #676767;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]))),V=O.a.header(J||(J=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  border-bottom: 2px solid #676767;\n\n  h2 {\n    margin: 5vw;\n  }\n"])));function L(n){var e=n.event;return Object(v.jsxs)(Z,{children:[Object(v.jsx)(V,{children:Object(v.jsx)("h2",{children:e.name})}),e.markets.map((function(n){return Object(v.jsx)(q,{children:Object(v.jsx)(P,{market:n})},n.id)}))]})}var T,W,$,_=O.a.div(z||(z=Object(x.a)(["\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  \n  display: flex;\n  justify-content: end;\n"]))),nn=O.a.div(M||(M=Object(x.a)(["\n  background: #FFF;\n  width: 70vw;\n  max-width: 520px;\n  height: 100%;\n  padding: 10px;\n  animation: showModal 0.4s ease-out;\n\n  @keyframes showModal {\n    from {\n      transform: translateX(100%);\n    }\n\n    to {\n      transform: translateX(0);\n    }\n  }\n"]))),en=O.a.div(X||(X=Object(x.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: end;\n"]))),tn=O.a.button(H||(H=Object(x.a)(["\n  background: #FFF;\n  width: 30px;\n  padding: 0;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n    background: #dadddb;\n    border-radius: 50%;\n  }\n\n  img {\n    width: 100%;\n  }\n"]))),cn=O.a.div(K||(K=Object(x.a)(["\n  width: 85%;\n  margin: 0 auto;\n"]))),rn=O.a.div(T||(T=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1.2rem 0;\n  border-bottom: 2px solid #5b5b5b;\n\n  p {\n    margin: 0 0 1.2rem;\n  }\n"]))),an=O.a.button(W||(W=Object(x.a)(["\n  background: #47535e;\n  color: #FFF;\n\n  &:hover {\n    filter: brightness(1.2);\n    color: #000;\n  }\n"])));function sn(n){var e=n.marketSelections,t=e.name,c=e.selection,i=Object(a.useContext)(U),r=i.betslip,s=i.setBetslip;return Object(v.jsxs)(rn,{children:[Object(v.jsxs)("p",{children:[c.name," ",t]}),Object(v.jsx)("p",{children:c.price}),Object(v.jsx)(an,{onClick:function(){return function(n){var e=r.filter((function(e){return e.selection.id!==n.id}));s(e)}(c)},children:" Delete "})]})}function on(){var n=Object(a.useContext)(w).setIsOpen,e=Object(a.useContext)(U).betslip,t=function(e){e.target.className.includes("close-modal")&&n(!1)};return Object(v.jsx)(_,{onClick:t,className:"close-modal",children:Object(v.jsxs)(nn,{children:[Object(v.jsx)(en,{children:Object(v.jsx)(tn,{onClick:t,className:"close-modal",children:Object(v.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"close-modal"})})}),Object(v.jsx)(cn,{children:e.map((function(n){return Object(v.jsx)(sn,{marketSelections:n},n.id)}))})]})})}var dn=O.a.div($||($=Object(x.a)(["\n  width: 40vw;\n  margin: 0 auto;\n  max-width: 200px;\n"])));function ln(){return Object(v.jsx)(dn,{children:Object(v.jsx)("svg",{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",children:Object(v.jsx)("path",{fill:"#000",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",children:Object(v.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})})})}var bn;t(57);function jn(n){var e=n.events,t=Object(a.useContext)(w).isOpen;return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(k,{}),Object(v.jsx)("div",{className:"content",children:e.length?e.map((function(n){return n.markets.length?Object(v.jsx)(L,{event:n},n.id):null})):Object(v.jsx)(ln,{})}),t&&Object(v.jsx)(on,{})]})}var un=O.a.div(bn||(bn=Object(x.a)(["\n  width: 80%;\n  height: 80vh;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10%;\n\n  img {\n    width: 30%;\n  }\n\n  h1 {\n    font-size: 1rem;\n\n    @media screen and (min-width: 630px) {\n      font-size: 2rem;\n    }\n  }\n  \n"]))),An=t.p+"static/media/warning.c0de3abf.png";function fn(){return Object(v.jsxs)(un,{children:[Object(v.jsx)("img",{src:An,alt:""}),Object(v.jsx)("h1",{children:"Ops, something went wrong. Please try again later."})]})}var hn=function(){var n=Object(a.useState)([]),e=Object(u.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)(!1),r=Object(u.a)(i,2),s=r[0],o=r[1],d=function(){var n=Object(j.a)(b.a.mark((function n(){var e,t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h();case 3:e=n.sent,t=e.data,c(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),o(!0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),s?Object(v.jsx)(fn,{}):Object(v.jsx)(B,{children:Object(v.jsx)(S,{children:Object(v.jsx)(jn,{events:t})})})};d.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(hn,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.aaa50a9d.chunk.js.map