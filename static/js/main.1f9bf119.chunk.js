(this["webpackJsonppe-elastics-frontend"]=this["webpackJsonppe-elastics-frontend"]||[]).push([[0],{35:function(e,t,n){e.exports={loader:"Spinner_loader__fTuX5",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},51:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(33),o=n.n(a),s=(n(51),n(10)),i=n(2),l=n(6),d=n.n(l),u=n(15),b=n(9),j=n(34),h=n.n(j),x=function(){var e=Object(u.a)(d.a.mark((function e(t,n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/github/repo?projectName=".concat(t,"&token=").concat(n));case 2:return c=e.sent,console.log(c),e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=h.a.create({baseURL:"https://8eqbhzi5ay.eu-west-1.awsapprunner.com"}),f=n(1),m=function(e){var t=e.title,n=e.onClick,c=e.disabled;return Object(f.jsx)("button",{className:"bg-primary-500 shadow hover:bg-primary-400 disabled:cursor-not-allowed disabled:bg-primary-500 focus:shadow-outline focus:outline-none text-secondary font-bold py-2 px-4 rounded",onClick:n,disabled:c,children:t})},O=function(e){var t=e.id,n=e.placeholder,c=e.error,r=e.value,a=e.onChange,o="border-primary-500";return c&&(o="border-error"),Object(f.jsx)("input",{className:"shadow appearance-none border-2 "+o+" rounded py-2 px-3 text-primary-500 leading-tight focus:outline-none focus:shadow-outline",id:t,type:"text",placeholder:n,value:r,onChange:a})},g=n(35),w=n.n(g),y=function(){return Object(f.jsx)("div",{className:w.a.loader})},v=n(14),N=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(b.a)(a,2),s=o[0],l=o[1],j=Object(c.useState)(""),h=Object(b.a)(j,2),g=h[0],w=h[1],N=Object(c.useState)(""),k=Object(b.a)(N,2),C=k[0],L=k[1],_=Object(c.useState)(!1),S=Object(b.a)(_,2),A=S[0],F=S[1],P=new URLSearchParams(Object(i.f)().search).get("code");console.log("ba20df7bc47f0d87756b"),Object(c.useEffect)((function(){P&&function(e){return p.post("/github/auth",{githubCode:e}).then((function(e){return e.data}))}(P).then((function(e){r(e)}))}),[P]);var z=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(s,n).then((function(){L(""),w("")})).catch((function(){L("Oh no! One or more of the repositories could not be deleted! \ud83d\ude2e Please try again later")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("main",{className:"container mx-auto w-2/6 space-y-10 pb-20 pt-20",children:[Object(f.jsx)("h1",{className:"text-secondary text-4xl",children:"Peareasy Elastics \ud83d\udd25"}),Object(f.jsx)("h3",{className:"text-secondary text-xl",children:"In order for us to be able to create an awesome project template for you, we need you to authorize your Github account with us."}),Object(f.jsx)("div",{children:Object(f.jsx)(m,{disabled:!!n,onClick:function(){return window.location.href="https://github.com/login/oauth/authorize?client_id=ba20df7bc47f0d87756b&scope=repo delete_repo workflow"},title:n?"You have authorized Github \ud83c\udf89":"Authorize Github"})}),n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{className:"text-secondary text-xl",children:"Cool! The next step is to choose a root project name, a microservice repo name and a API gateway repo name \ud83d\ude0e"}),Object(f.jsxs)("div",{className:"space-y-3",children:[Object(f.jsx)("div",{hidden:!C,children:Object(f.jsx)("p",{className:"text-error text-xl",children:C})}),Object(f.jsx)("div",{children:Object(f.jsx)(O,{id:"projectName",error:C,placeholder:"Project name",value:s,onChange:function(e){L(""),l(e.target.value)}})}),Object(f.jsx)("div",{children:Object(f.jsx)(m,{title:"Create Repositories",onClick:function(){F(!0),function(e,t){return p.post("/github/repo",{projectName:e,githubToken:t}).then((function(e){return e.data.rootUrl}))}(s,n).then((function(e){F(!1),w(e)})).catch((function(e){422===e.response.status&&L("Oh no! Project name was already occupied on your Github account! \ud83d\ude2e Find a new name and try again!"),w(""),F(!1)}))},disabled:!n||!s})}),Object(f.jsx)("div",{children:Object(f.jsx)(m,{title:"Delete Repositories",onClick:z})}),Object(f.jsx)("div",{children:A?Object(f.jsx)(y,{}):null})]}),g?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{children:Object(f.jsx)("h3",{className:"text-secondary text-xl",children:"Alright, this is it. Here's the link to your new Github repo! \ud83d\udc4a\ud83c\udffc"})}),Object(f.jsx)("div",{children:Object(f.jsx)(m,{title:"Open Root Repository",onClick:function(){return window.open(g)}})}),Object(f.jsx)("div",{children:Object(f.jsx)("h3",{className:"text-secondary text-xl",children:"To download the entire project, open a terminal and paste and execute the command below!"})}),Object(f.jsx)("div",{children:Object(f.jsx)(v.a,{theme:v.b,text:"git clone --recurse-submodules -j8 ".concat(g),language:"shell",showLineNumbers:!1,startingLineNumber:1})}),Object(f.jsx)("div",{children:Object(f.jsx)("h3",{className:"text-secondary text-xl",children:"Now navigate to the project folder and run the entire project!\ud83c\udf7e\ud83e\udd42\ud83e\udd73"})}),Object(f.jsx)("div",{children:Object(f.jsx)(v.a,{theme:v.b,text:"cd ".concat(s," \n&& docker-compose up"),language:"shell",showLineNumbers:!1,startingLineNumber:1})})]}):null]}):null]})},k=function(){return Object(f.jsx)(f.Fragment,{})},C=function(){return Object(f.jsx)(f.Fragment,{})},L=function(e){var t=e.link,n=e.onClick,c=e.children;return Object(f.jsx)(s.b,{to:t,className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75",onClick:n,children:Object(f.jsx)("span",{className:"ml-2",children:c})})},_=function(e){var t=e.link,n=e.children;return Object(f.jsx)("button",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75",onClick:function(){return window.open(t)},children:Object(f.jsx)("span",{className:"ml-2",children:n})})},S=Object(f.jsx)("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",children:Object(f.jsx)("path",{d:"M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"})}),A=function(){var e=r.a.useState(!1),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(f.jsx)("nav",{className:"relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary-500 mb-3",children:Object(f.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[Object(f.jsxs)("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[Object(f.jsx)(s.b,{className:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-secondary",to:"/",children:"Peareasy Elastics"}),Object(f.jsx)("button",{className:"text-secondary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return c(!n)},children:S})]}),Object(f.jsx)("div",{className:"lg:flex flex-grow items-center"+(n?" flex":" hidden"),id:"example-navbar-danger",children:Object(f.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto",children:[Object(f.jsx)(L,{link:"/docs",onClick:function(){return c(!n)},children:"docs"}),Object(f.jsx)(L,{link:"/about",onClick:function(){return c(!n)},children:"about"}),Object(f.jsx)(_,{link:"https://github.com/peareasy-elastics",children:"github"})]})})]})})};var F=function(){return Object(f.jsx)("div",{className:"min-h-screen bg-gray-800 text-center",children:Object(f.jsxs)(s.a,{children:[Object(f.jsx)(A,{}),Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"/docs",component:k}),Object(f.jsx)(i.a,{path:"/about",component:C}),Object(f.jsx)(i.a,{path:"/",component:N})]})]})})},P=function(e){e&&e instanceof Function&&n.e(155).then(n.bind(null,269)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root")),P()}},[[83,152,153]]]);
//# sourceMappingURL=main.1f9bf119.chunk.js.map