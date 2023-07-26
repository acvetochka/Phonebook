"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[877],{4814:function(n,e,t){t.d(e,{$:function(){return s}});var r,a=t(168),i=t(7686).Z.h2(r||(r=(0,a.Z)(["\n  color: #181717;\n  text-align: center;\n  text-shadow: 2px 2px 5px white;\n  font-size: 30px;\n"]))),o=t(3329);function s(n){var e=n.title,t=n.children;return(0,o.jsxs)("section",{children:[(0,o.jsx)(i,{children:e}),t]})}},355:function(n,e,t){t.d(e,{v:function(){return i}});var r=t(1686),a=t.n(r),i=function(n){a().Report.warning("Warning",n)};a().Report.init({svgSize:"50px",messageFontSize:"20px",warning:{svgColor:"#44728f",buttonBackground:"#44728f",backOverlayColor:"rgba(0,0, 0,0.2)"}})},2877:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,a,i,o,s=t(9434),x=function(n){return n.contacts},p=function(n){return n.filter},c=t(6382),d=t(208),l=t(168),u=t(7686),g=u.Z.form(r||(r=(0,l.Z)(["\n  max-width: 350px;\n  margin: 0 auto;\n  border: 1px solid gray;\n  border-radius: 10px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 1px 1px 5px gray;\n  background: linear-gradient(180deg, #b5b5b5, #599caa, #0f596b);\n"]))),h=u.Z.label(a||(a=(0,l.Z)(["\n  font-size: 28px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n  gap: 5px;\n"]))),b=u.Z.input(i||(i=(0,l.Z)(["\n  max-width: 300px;\n  width: 100%;\n  height: 30px;\n  border-radius: 8px;\n  font-size: 20px;\n  padding: 10px;\n"]))),f=u.Z.button(o||(o=(0,l.Z)(["\n  margin: 0 auto;\n  border-radius: 8px;\n  padding: 5px 10px;\n  background: transparent;\n  color: white;\n  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  text-shadow: 5px 5px 10px black;\n  font-size: 18px;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    background: #145d6f;\n  }\n"]))),m=t(355),v=t(3329);function j(){var n=(0,s.v9)(x).contactsItem,e=(0,s.I0)();return(0,v.jsxs)(g,{onSubmit:function(t){t.preventDefault();var r=t.target,a=r.elements,i=a.name,o=a.number,s={id:(0,c.x0)(),name:i.value,number:o.value};n.some((function(n){return n.name===i.value}))?(0,m.v)("".concat(i.value," is already in contacts.")):e((0,d.uK)(s)),r.reset()},children:[(0,v.jsxs)(h,{children:["Name",(0,v.jsx)(b,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\\s]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)(h,{children:["Number",(0,v.jsx)(b,{type:"tel",name:"number",pattern:"\\+?[0-9\\s\\-\\(\\)]+",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)(f,{type:"submit",children:"Add contact"})]})}var Z,w,y,k,z,C,_,A,I=t(2791),F=t(719),L=u.Z.ul(Z||(Z=(0,l.Z)(["\n  padding-left: 0;\n  max-width: 450px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 1048px) {\n    width: 450px;\n  }\n"]))),N=u.Z.li(w||(w=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 26px;\n  border: 1px solid gray;\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px gray;\n  padding: 10px 20px;\n  margin-bottom: 10px;\n  background: linear-gradient(180deg, #b5b5b5, #599caa, #0f596b);\n"]))),$=u.Z.p(y||(y=(0,l.Z)(["\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),q=u.Z.span(k||(k=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),K=u.Z.button(z||(z=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  border-radius: 8px;\n  height: 35px;\n  padding: 0 5px;\n  background: transparent;\n  color: white;\n  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  text-shadow: 5px 5px 10px black;\n  font-size: 18px;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    background: #2a7182;\n  }\n"]))),R=u.Z.span(C||(C=(0,l.Z)(["\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),S=(0,u.Z)(F.HKN)(_||(_=(0,l.Z)(["\n  fill: currentColor;\n"]))),B=u.Z.li(A||(A=(0,l.Z)(["\n  display: block;\n  font-size: 28px;\n"])));function D(){var n=(0,s.v9)(p),e=(0,s.I0)(),t=(0,s.v9)(x),r=t.contactsItem,a=t.isLoading,i=t.error;(0,I.useEffect)((function(){e((0,d.yF)())}),[e]);var o=function(){var e=n.toLowerCase().trim();return r.filter((function(n){return n.name.toLowerCase().includes(e)}))}();return(0,v.jsxs)(L,{children:[a&&(0,v.jsx)("p",{children:"Loading contacts..."}),i&&(0,v.jsx)("p",{children:i}),r.length>0?o.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,v.jsxs)(N,{children:[(0,v.jsxs)($,{children:[(0,v.jsxs)(q,{children:[(0,v.jsx)(F.a4m,{}),r,":"," "]}),(0,v.jsxs)(q,{children:[(0,v.jsx)(F.jIu,{}),a]})]}),(0,v.jsxs)(K,{type:"button",onClick:function(){return e((0,d.GK)(t))},children:[(0,v.jsx)(S,{})," ",(0,v.jsx)(R,{children:"Delete"})]})]},t)})):(0,v.jsx)(B,{children:"Oops, contact list is empty. Add new contact"})]})}var M,O,E,G=t(6895),H=u.Z.div(M||(M=(0,l.Z)(["\n  margin-bottom: 20px;\n"]))),J=u.Z.label(O||(O=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 26px;\n  align-items: center;\n"]))),P=u.Z.input(E||(E=(0,l.Z)(["\n  max-width: 300px;\n  width: 100%;\n  height: 30px;\n  font-size: 24px;\n  border-radius: 8px;\n"])));function T(){var n=(0,s.v9)(p),e=(0,s.I0)();return(0,v.jsx)(H,{children:(0,v.jsxs)(J,{children:["Find contact by name",(0,v.jsx)(P,{type:"text",onChange:function(n){e((0,G.Tv)(n.target.value))},value:n})]})})}var W=t(4814),Q=function(){var n=(0,s.v9)(x),e=n.isLoading,t=n.error;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(W.$,{title:"Add new contact",children:(0,v.jsx)(j,{})}),e&&!t&&(0,v.jsx)("b",{children:"Request in progress..."}),(0,v.jsxs)(W.$,{title:"My contacts",children:[(0,v.jsx)(T,{}),(0,v.jsx)(D,{})]})]})}}}]);
//# sourceMappingURL=877.421430c8.chunk.js.map