(this["webpackJsonpfrontend-test"]=this["webpackJsonpfrontend-test"]||[]).push([[0],{36:function(n,e,t){},57:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var c,i,r,a=t(1),s=t.n(a),o=t(25),d=t.n(o),l=(t(36),t(12)),b=t.n(l),j=t(26),u=t(5),A=t(27),f=t.n(A).a.create({baseURL:"https://www.mocky.io/v2/"}),h=t(2),x=t(3),O=x.a.div(c||(c=Object(h.a)(["\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 3vw;\n  min-height: 60px;\n  background: #FFF;\n  display: flex;\n  justify-content: center;\n"]))),m=x.a.div(i||(i=Object(h.a)(["\n  width:90vw;\n  display: flex;\n  justify-content: flex-end;\n"]))),g=x.a.div(r||(r=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 0.5vw;\n  \n  &:hover {\n    cursor: pointer;\n    background: #dadddb;\n    border-radius: 0.5vw;\n  }\n\n  img {\n    width: 40px;\n  }\n"]))),p=t(0),v=Object(a.createContext)({isOpen:!1,setIsOpen:function(){}});function w(n){var e=n.children,t=Object(a.useState)(!1),c=Object(u.a)(t,2),i=c[0],r=c[1];return Object(p.jsx)(v.Provider,{value:{isOpen:i,setIsOpen:r},children:e})}function B(){var n=Object(a.useContext)(v).setIsOpen;return Object(p.jsx)(O,{children:Object(p.jsx)(m,{children:Object(p.jsx)(g,{onClick:function(){n(!0)},children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVHic7dk9TsMwFMDxPx8SG13oBYALQMshoBdhg+NwDcQOG0xwgn6wM4HoCGFAjHZSJ8JO+/9Jb4otvfcc2VYCkiRJkiRJ2ixbkWeHwA1wAuz8Tzqd+wJegEtgserkO6Bak7gNFbkdacBBXYd6ZJgy6QJYkn/12sYncB4qMrYHAOwDxw3GlaoCpsBH7kQkSSVqcrwNiF+YSvYNvKdOPgNeyX+RaRsLYJzSgIcCku8q7kNFxl7tqq5DPZJUyxiYk3/12sYMGIWKdBOUJG2wumNwABw1GFeqv3tA0lE4YT0+ii75/cC7sqcCku8qHkNFxm54b3Ud6pFgLbuRSVfAHnBKv3+NPQPXuRORJEmSJElSKX4Aipt3XtGq1OwAAAAASUVORK5CYII=",alt:""})})})})}var k,y=t(15),C=t(31),F=Object(a.createContext)({betslip:[],setBetslip:function(){}});function U(n){var e=n.children,t=Object(a.useState)([]),c=Object(u.a)(t,2),i=c[0],r=c[1];return Object(p.jsx)(F.Provider,{value:{betslip:i,setBetslip:r},children:e})}var S,E,N=x.a.button.attrs({type:"button"})(k||(k=Object(h.a)(["\n  flex-grow: 1;\n  flex-basis: 10vw;\n  max-width: 30vw;\n  background: ",";\n  transition: filter 0.1s;\n  border: ",";\n\n  &:hover {\n    filter: brightness(0.8);\n  }\n\n  p {\n    margin: 0.4rem 0;\n    color: #131516;\n  }\n"])),(function(n){return n.isActive?"#77dd77":"#FFF"}),(function(n){return n.isActive?"1px solid #77dd00":"1px solid #676767"}));function G(n){var e=n.selection,t=n.handleUserSelection,c=n.isActive;return Object(p.jsxs)(N,{isActive:c,onClick:function(){return t(e)},value:e.id,children:[e.name,Object(p.jsx)("br",{}),new Intl.NumberFormat("pt-BR",{style:"currency",currency:"EUR"}).format(e.price)]})}var I,R,Q,J=x.a.div(S||(S=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 8vw;\n  align-items: center;\n"]))),Y=x.a.div(E||(E=Object(h.a)(["\n  h3 {\n    margin: 0 0 1rem 0;\n  }\n"])));function D(n){var e=n.market,t=Object(a.useState)({}),c=Object(u.a)(t,2),i=c[0],r=c[1],s=Object(a.useContext)(F),o=s.betslip,d=s.setBetslip;Object(a.useEffect)((function(){o.length&&j()}),[o]);var l=function(n){n&&(r(n),b(n))},b=function(n){var t=o.filter((function(n){return n.id!==e.id}));d([].concat(Object(C.a)(t),[Object(y.a)(Object(y.a)({},e),{},{selection:n})]))},j=function(){o.find((function(n){return n.id===e.id}))||r({})};return Object(p.jsxs)(Y,{children:[Object(p.jsx)("h3",{children:e.name}),Object(p.jsx)(J,{children:e.selections.map((function(n){return Object(p.jsx)(G,{selection:n,handleUserSelection:l,isActive:i.id===n.id},n.id)}))})]})}var P,z,M,X,H,K=x.a.div(I||(I=Object(h.a)(["\n  border: 2px solid #8791a0;\n  margin-bottom: 3vh;\n"]))),Z=x.a.section(R||(R=Object(h.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #676767;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]))),q=x.a.header(Q||(Q=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  border-bottom: 2px solid #676767;\n\n  h2 {\n    margin: 5vw;\n  }\n"])));function V(n){var e=n.event;return Object(p.jsxs)(K,{children:[Object(p.jsx)(q,{children:Object(p.jsx)("h2",{children:e.name})}),e.markets.map((function(n){return Object(p.jsx)(Z,{children:Object(p.jsx)(D,{market:n})},n.id)}))]})}var L,T,W=x.a.div(P||(P=Object(h.a)(["\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  \n  display: flex;\n  justify-content: end;\n"]))),$=x.a.div(z||(z=Object(h.a)(["\n  background: #FFF;\n  width: 70vw;\n  max-width: 520px;\n  height: 100%;\n  padding: 10px;\n  animation: showModal 0.4s ease-out;\n\n  @keyframes showModal {\n    from {\n      transform: translateX(100%);\n    }\n\n    to {\n      transform: translateX(0);\n    }\n  }\n"]))),_=x.a.div(M||(M=Object(h.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: end;\n"]))),nn=x.a.button(X||(X=Object(h.a)(["\n  background: #FFF;\n  width: 30px;\n  padding: 0;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n    background: #dadddb;\n    border-radius: 50%;\n  }\n\n  img {\n    width: 100%;\n  }\n"]))),en=x.a.div(H||(H=Object(h.a)(["\n  width: 85%;\n  margin: 0 auto;\n"]))),tn=x.a.div(L||(L=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1.2rem 0;\n  border-bottom: 2px solid #5b5b5b;\n\n  p {\n    margin: 0 0 1.2rem;\n  }\n"]))),cn=x.a.button(T||(T=Object(h.a)(["\n  background: #47535e;\n  color: #FFF;\n\n  &:hover {\n    filter: brightness(1.2);\n    color: #000;\n  }\n"])));function rn(n){var e=n.marketSelections,t=e.name,c=e.selection,i=Object(a.useContext)(F),r=i.betslip,s=i.setBetslip;return Object(p.jsxs)(tn,{children:[Object(p.jsxs)("p",{children:[c.name," ",t]}),Object(p.jsx)("p",{children:c.price}),Object(p.jsx)(cn,{onClick:function(){return function(n){var e=r.filter((function(e){return e.selection.id!==n.id}));s(e)}(c)},children:" Delete "})]})}function an(){var n=Object(a.useContext)(v).setIsOpen,e=Object(a.useContext)(F).betslip,t=function(e){e.target.className.includes("close-modal")&&n(!1)};return Object(p.jsx)(W,{onClick:t,className:"close-modal",children:Object(p.jsxs)($,{children:[Object(p.jsx)(_,{children:Object(p.jsx)(nn,{onClick:t,className:"close-modal",children:Object(p.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"close-modal"})})}),Object(p.jsx)(en,{children:e.map((function(n){return Object(p.jsx)(rn,{marketSelections:n},n.id)}))})]})})}var sn;t(57);function on(n){var e=n.events,t=Object(a.useContext)(v).isOpen;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(B,{}),Object(p.jsx)("div",{className:"content",children:e.map((function(n){return n.markets.length?Object(p.jsx)(V,{event:n},n.id):null}))}),t&&Object(p.jsx)(an,{})]})}var dn=x.a.div(sn||(sn=Object(h.a)(["\n  width: 80%;\n  height: 80vh;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10%;\n\n  img {\n    width: 30%;\n  }\n\n  h1 {\n    font-size: 1rem;\n\n    @media screen and (min-width: 630px) {\n      font-size: 2rem;\n    }\n  }\n  \n"]))),ln=t.p+"static/media/warning.c0de3abf.png";function bn(){return Object(p.jsxs)(dn,{children:[Object(p.jsx)("img",{src:ln,alt:""}),Object(p.jsx)("h1",{children:"Ops, something went wrong. Please try again later."})]})}var jn=function(){var n=Object(a.useState)([]),e=Object(u.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)(!1),r=Object(u.a)(i,2),s=r[0],o=r[1],d=function(){var n=Object(j.a)(b.a.mark((function n(){var e,t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.get("/59f08692310000b4130e9f71/");case 3:e=n.sent,t=e.data,c(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),o(!0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),s?Object(p.jsx)(bn,{}):t.length?Object(p.jsx)(w,{children:Object(p.jsx)(U,{children:Object(p.jsx)(on,{events:t})})}):Object(p.jsx)("div",{className:"loading",children:Object(p.jsx)("svg",{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",children:Object(p.jsx)("path",{fill:"#000",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",children:Object(p.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})})})};d.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(jn,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.4e7aba92.chunk.js.map