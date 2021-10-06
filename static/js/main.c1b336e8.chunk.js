(this["webpackJsonppe-elastics-frontend"]=this["webpackJsonppe-elastics-frontend"]||[]).push([[0],{35:function(e,t,n){e.exports={loader:"Spinner_loader__fTuX5",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},51:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(33),o=n.n(r),s=(n(51),n(19)),i=n(2),l=n(6),d=n.n(l),u=n(14),j=n(7),b=n(34),x=n.n(b),h=function(){var e=Object(u.a)(d.a.mark((function e(t,n,a,c,r){var o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/github/repo?msRepo=".concat(t,"&apiRepo=").concat(n,"&frontendRepo=").concat(a,"&rootRepo=").concat(c,"&token=").concat(r));case 2:return o=e.sent,console.log(o),e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,c,r){return e.apply(this,arguments)}}(),p=x.a.create({baseURL:"http://3.70.171.250/"}),m=n(1),f=function(e){var t=e.title,n=e.onClick,a=e.disabled;return Object(m.jsx)("button",{className:"bg-primary-500 shadow hover:bg-primary-400 disabled:cursor-not-allowed disabled:bg-primary-500 focus:shadow-outline focus:outline-none text-secondary font-bold py-2 px-4 rounded",onClick:n,disabled:a,children:t})},O=function(e){var t=e.id,n=e.placeholder,a=e.error,c=e.value,r=e.onChange,o="border-primary-500";return a&&(o="border-error"),Object(m.jsx)("input",{className:"shadow appearance-none border-2 "+o+" rounded py-2 px-3 text-primary-500 leading-tight focus:outline-none focus:shadow-outline",id:t,type:"text",placeholder:n,value:c,onChange:r})},g=n(35),y=n.n(g),v=function(){return Object(m.jsx)("div",{className:y.a.loader})},N=n(13),w=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(j.a)(r,2),s=o[0],l=o[1],b=Object(a.useState)(""),x=Object(j.a)(b,2),g=x[0],y=x[1],w=Object(a.useState)(""),R=Object(j.a)(w,2),k=R[0],C=R[1],S=Object(a.useState)(""),_=Object(j.a)(S,2),F=_[0],L=_[1],P=Object(a.useState)(""),T=Object(j.a)(P,2),G=T[0],z=T[1],A=Object(a.useState)(""),E=Object(j.a)(A,2),I=E[0],U=E[1],B=Object(a.useState)(!1),D=Object(j.a)(B,2),J=D[0],M=D[1],Y=new URLSearchParams(Object(i.f)().search).get("code");Object(a.useEffect)((function(){Y&&function(e){return p.post("/github/auth",{githubCode:e}).then((function(e){return e.data}))}(Y).then((function(e){c(e)}))}),[Y]);var q=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(s,g,k,F,n).then((function(){U(""),z("")})).catch((function(){U("Oh no! One or more of the repositories could not be deleted! \ud83d\ude2e Please try again later")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("main",{className:"container mx-auto w-2/6 space-y-10 pb-20 pt-20",children:[Object(m.jsx)("h1",{className:"text-secondary text-4xl",children:"Peareasy Elastics \ud83d\udd25"}),Object(m.jsx)("h3",{className:"text-secondary text-xl",children:"In order for us to be able to create an awesome project template for you, we need you to authorize your Github account with us."}),Object(m.jsx)("div",{children:Object(m.jsx)(f,{disabled:!!n,onClick:function(){return window.location.href="https://github.com/login/oauth/authorize?client_id=e78392cb4d38b6f34b4b&scope=repo delete_repo workflow"},title:n?"You have authorized Github \ud83c\udf89":"Authorize Github"})}),n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{className:"text-secondary text-xl",children:"Cool! The next step is to choose a root project name, a microservice repo name and a API gateway repo name \ud83d\ude0e"}),Object(m.jsxs)("div",{className:"space-y-3",children:[Object(m.jsx)("div",{hidden:!I,children:Object(m.jsx)("p",{className:"text-error text-xl",children:I})}),Object(m.jsx)("div",{children:Object(m.jsx)(O,{id:"rootRepoName",error:I,placeholder:"Root Repository name",value:F,onChange:function(e){U(""),L(e.target.value)}})}),Object(m.jsx)("div",{children:Object(m.jsx)(O,{id:"username",error:I,placeholder:"MS Repository name",value:s,onChange:function(e){U(""),l(e.target.value)}})}),Object(m.jsx)("div",{children:Object(m.jsx)(O,{id:"apiRepoName",error:I,placeholder:"Api Repository name",value:g,onChange:function(e){U(""),y(e.target.value)}})}),Object(m.jsx)("div",{children:Object(m.jsx)(O,{id:"frontendRepoName",error:I,placeholder:"Frontend Repository name",value:k,onChange:function(e){U(""),C(e.target.value)}})}),Object(m.jsx)("div",{children:Object(m.jsx)(f,{title:"Create Repositories",onClick:function(){M(!0),function(e,t,n,a,c){return console.log(e),console.log(a),console.log(c),p.post("/github/repo",{msRepoName:e,apiRepoName:t,frontendRepoName:n,rootRepoName:a,githubToken:c}).then((function(e){return e.data.rootUrl}))}(s,g,k,F,n).then((function(e){M(!1),z(e)})).catch((function(e){422===e.response.status&&U("Oh no! One or more of the repository names were already taken! \ud83d\ude2e Find a new name and try again!"),z(""),M(!1)}))},disabled:!n||!s})}),Object(m.jsx)("div",{children:Object(m.jsx)(f,{title:"Delete Repositories",onClick:q})}),Object(m.jsx)("div",{children:J?Object(m.jsx)(v,{}):null})]}),G?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("h3",{className:"text-secondary text-xl",children:"Alright, this is it. Here's the link to your new Github repo! \ud83d\udc4a\ud83c\udffc"})}),Object(m.jsx)("div",{children:Object(m.jsx)(f,{title:"Open Root Repository",onClick:function(){return window.open(G)}})}),Object(m.jsx)("div",{children:Object(m.jsx)("h3",{className:"text-secondary text-xl",children:"To download the entire project, open a terminal and paste and execute the command below!"})}),Object(m.jsx)("div",{children:Object(m.jsx)(N.a,{theme:N.b,text:"git clone --recurse-submodules -j8 ".concat(G),language:"shell",showLineNumbers:!1,startingLineNumber:1})}),Object(m.jsx)("div",{children:Object(m.jsx)("h3",{className:"text-secondary text-xl",children:"Now navigate to the project folder and run the entire project!\ud83c\udf7e\ud83e\udd42\ud83e\udd73"})}),Object(m.jsx)("div",{children:Object(m.jsx)(N.a,{theme:N.b,text:"cd ".concat(F," \n&& docker-compose up"),language:"shell",showLineNumbers:!1,startingLineNumber:1})})]}):null]}):null]})},R=function(){var e=c.a.useState(!1),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary-500 mb-3",children:Object(m.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[Object(m.jsxs)("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[Object(m.jsx)("a",{className:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-secondary",href:"#pablo",children:"Peareasy Elastics"}),Object(m.jsx)("button",{className:"text-secondary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return a(!n)},children:Object(m.jsx)("i",{className:"fas fa-bars"})})]}),Object(m.jsx)("div",{className:"lg:flex flex-grow items-center"+(n?" flex":" hidden"),id:"example-navbar-danger",children:Object(m.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsxs)("a",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75",href:"#pablo",children:[Object(m.jsx)("i",{className:"fab fa-facebook-square text-lg leading-lg text-secondary opacity-75"}),Object(m.jsx)("span",{className:"ml-2",children:"Share"})]})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsxs)("a",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75",href:"#pablo",children:[Object(m.jsx)("i",{className:"fab fa-twitter text-lg leading-lg text-secondary opacity-75"}),Object(m.jsx)("span",{className:"ml-2",children:"Tweet"})]})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsxs)("a",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75",href:"#pablo",children:[Object(m.jsx)("i",{className:"fab fa-pinterest text-lg leading-lg text-secondary opacity-75"}),Object(m.jsx)("span",{className:"ml-2",children:"Pin"})]})})]})})]})})})};var k=function(){return Object(m.jsxs)("div",{className:"min-h-screen bg-gray-800 text-center",children:[Object(m.jsx)(R,{}),Object(m.jsx)(s.a,{children:Object(m.jsx)(i.c,{children:Object(m.jsx)(i.a,{path:"/",component:w})})})]})},C=function(e){e&&e instanceof Function&&n.e(155).then(n.bind(null,269)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),C()}},[[83,152,153]]]);
//# sourceMappingURL=main.c1b336e8.chunk.js.map