(this["webpackJsonpcats-app"]=this["webpackJsonpcats-app"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(4),r=n.n(i),s=(n(19),n(1));var o=function(){return Object(s.jsx)("nav",{className:"blue darken-4",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"!#",className:"brand-logo",children:"React Cats"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/VolodymyrReient/cat-app",children:"Repo"})})})]})})};var l=function(){return Object(s.jsx)("footer",{className:"page-footer blue lighten-2",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/VolodymyrReient/cat-app",children:"Repo"})]})})})},d=n(7),h=n(8),j=n(11),u=n(10),p=n(43);n(21);var b=function(e){var t=e.description,n=e.id,a=e.url,c=e.wikipedia_url,i=e.name;return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("div",{className:"img",children:Object(s.jsx)("img",{src:a,alt:i})}),Object(s.jsx)("div",{className:"name",children:0===i.length?"no name":i}),Object(s.jsx)("div",{className:"description",children:Object(s.jsx)("p",{children:0===t.length?"read the description on wikipedia":t})}),Object(s.jsx)("div",{className:"button",children:Object(s.jsx)("button",{className:"btn waves-light",children:Object(s.jsx)("a",{className:"blue-text text-darken-2",href:0===c.length?"https://en.wikipedia.org/wiki/Cat":c,target:"_blank",rel:"noreferrer noopener",children:"Wikipedia"})})})]},n)};n(22);var m=function(e){return Object(s.jsx)("div",{className:"cats",children:e.data.map((function(e){return Object(s.jsx)(b,{description:e.breeds.map((function(e){return e.description})),url:e.url,wikipedia_url:e.breeds.map((function(e){return e.wikipedia_url})),name:e.breeds.map((function(e){return e.name}))},e.id)}))})};var g=function(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})},x=(n(23),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={data:[],loading:!0,counter:1,page:1},e.handleClick=function(t){e.setState({page:t.target.textContent}),fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=10&page=".concat(e.state.page)).then((function(e){return e.json()})).then((function(t){return e.setState({data:t,loading:!1})})),window.scrollTo(0,0)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=10&page=".concat(this.state.page)).then((function(e){return e.json()})).then((function(t){return e.setState({data:t,loading:!1})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"content",children:[this.state.loading?Object(s.jsx)(g,{}):Object(s.jsx)(m,{data:this.state.data},this.state.data.id),Object(s.jsx)(p.a,{count:3,onChange:this.handleClick,className:"pagination"})]})}}]),n}(a.Component));var f=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(x,{}),Object(s.jsx)(l,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),O()}},[[28,1,2]]]);
//# sourceMappingURL=main.b61e0c3d.chunk.js.map