(this["webpackJsonpreact-app-after-theory"]=this["webpackJsonpreact-app-after-theory"]||[]).push([[3],{87:function(e,t,a){e.exports={wrap:"UserPage_wrap__34Ljw"}},88:function(e,t,a){e.exports={grid:"Users_grid__1pR2T",card:"Users_card__1ExKn",link:"Users_link__1BBFX",wrap:"Users_wrap__3ImYJ",btn:"Users_btn__36YvZ"}},93:function(e,t,a){"use strict";a.r(t),a.d(t,"UserContainer",(function(){return h}));var n=a(0),r=a.n(n),l=a(24),c=a(29),s=a(18),i=a(3),m=a(8),u=a(48),o=a(87),d=function(e){var t,a=Object(i.h)().userId;if(e.data[a]){var n=e.data[a],l=n.gender,c=n.email,s=n.dob,d=n.picture,E=n.login,g=n.name,h=n.phone,p=n.location;t=function(){return r.a.createElement("div",{className:o.wrap},r.a.createElement("img",{src:d.large,alt:g.first}),r.a.createElement("div",{className:o.info},r.a.createElement("h3",null,g.title,". ",r.a.createElement("strong",null,g.first," ",g.last)),r.a.createElement("h4",null,"\u041f\u043e\u043b: ",l," \u0412\u043e\u0437\u0440\u0430\u0441\u0442: ",s.age),r.a.createElement("h4",null,"Email: ",c),r.a.createElement("h4",null,"Username: ",E.username),r.a.createElement("h4",null,"\u0421\u0442\u0440\u0430\u043d\u0430: ",p.country,", \u0448\u0442\u0430\u0442: ",p.state,", "),r.a.createElement("h4",null,"\u0433\u043e\u0440\u043e\u0434: ",p.city,", "),r.a.createElement("h4",null,"\u0443\u043b\u0438\u0446\u0430: ",p.street.name,", \u0434\u043e\u043c: ",p.street.number),r.a.createElement("h5",null,"\u0442\u0435\u043b\u0435\u0444\u043e\u043d: ",h)))}}else t=function(){return r.a.createElement(u.a,null)};return r.a.createElement("div",{className:"anim"},r.a.createElement("div",null,t()),r.a.createElement(m.b,{to:"/users"},"\u041d\u0430\u0437\u0430\u0434"))},E=a(88);var g=Object(i.j)((function(e){var t=e.handlerRequest,a=e.isFetching,l=e.data,c=e.message,u=Object(i.i)().url;return Object(n.useEffect)((function(){0===l.length&&t(10)}),[l.length,t]),r.a.createElement("div",null,r.a.createElement(i.b,{exact:!0,path:"/users"},r.a.createElement("div",{className:"anim-light"},a&&0===l.length?r.a.createElement(s.a,null):c?(console.log(c),r.a.createElement("h2",null,"Something going wrong (",c.status,")")):r.a.createElement("div",{className:E.grid},l.map((function(e,t){return r.a.createElement(m.b,{to:"".concat(u,"/").concat(t,"/"),key:e.login.md5,className:E.link},r.a.createElement("div",{"data-user":e,className:E.card},r.a.createElement("img",{src:e.picture.medium,alt:""}),r.a.createElement("h3",null,e.name.first," ",e.name.last),r.a.createElement("h4",null,"\u041f\u043e\u043b: ",e.gender," \u0412\u043e\u0437\u0440\u0430\u0441\u0442: ",e.dob.age)))}))),a&&0!==l.length?r.a.createElement(s.c,null):r.a.createElement("div",{className:E.wrap},r.a.createElement("button",{className:E.btn,onClick:function(){t(10,e.data)}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435")))),r.a.createElement(i.b,{exact:!0,path:"/users/:userId"},r.a.createElement(d,{data:e.data})))})),h=function(e){return r.a.createElement(g,{isFetching:e.isFetching,data:e.data,message:e.message,handlerRequest:e.handlerRequest})};h.defaultProps={message:null};t.default=Object(l.b)((function(e){return{isFetching:e.people.isFetching,data:e.people.data,message:e.people.message}}),(function(e){return{handlerRequest:function(t,a){return e(Object(c.d)(t,a))}}}))(h)}}]);
//# sourceMappingURL=3.b5d2e61a.chunk.js.map