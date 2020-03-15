(this["webpackJsonpreact--store"]=this["webpackJsonpreact--store"]||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/errorImg.22220253.png"},32:function(e,t,n){e.exports=n(48)},37:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(18),l=n(8),i=n(10),u=n(11),s=n(14),m=n(12),d=n(15),f=(n(37),function(e){var t=e.book,n=e.onAddedToCart,a=t.title,r=t.author,c=t.price,l=t.coverImage;return o.a.createElement("div",{className:"book-list-item"},o.a.createElement("div",{className:"book-cover"},o.a.createElement("img",{src:l,alt:"cover"})),o.a.createElement("div",{className:"book-details"},o.a.createElement("span",{href:"#",className:"book-title"},a),o.a.createElement("div",{className:"book-author"},r),o.a.createElement("div",{className:"book-author"},"$",c),o.a.createElement("button",{onClick:n,className:"btn btn-info add-to-cart"},"Add to cart")))}),E=(n(38),n(7)),p=o.a.createContext(),b=p.Provider,h=p.Consumer,O=function(){return function(e){return function(t){return o.a.createElement(h,null,(function(n){return o.a.createElement(e,Object.assign({},t,{bookstoreService:n}))}))}}},v=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},g=function(e){return function(){return function(t){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then((function(e){t({type:"FETCH_BOOKS_SUCCESS",payload:e})})).catch((function(e){return t({type:"FETCH_BOOKS_FAILURE",payload:e})}))}}},k=n(6),y=(n(43),function(){return o.a.createElement("div",{className:"loadingio-spinner-magnify-tgu0irgs9w d-block m-auto"},o.a.createElement("div",{className:"ldio-k11tab22jqs"},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",null),o.a.createElement("div",null)))))}),C=n(28),_=n.n(C),j=function(){return o.a.createElement("div",{className:"text-center"},o.a.createElement("h1",{className:"display-3"},"All books are gone ..."),o.a.createElement("h3",null,"But we are already writing new ones!"),o.a.createElement("img",{className:"w-50",src:_.a,alt:"recover missed books"}))},N=function(e){var t=e.books,n=e.onAddedToCart;return o.a.createElement("ul",{className:"book-list"},t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(f,{book:e,onAddedToCart:function(){return n(e.id)}}))})))},T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,a=e.error,r=e.onAddedToCart;return n?o.a.createElement(y,null):a?o.a.createElement(j,null):o.a.createElement(N,{books:t,onAddedToCart:r})}}]),t}(r.Component),A=Object(k.c)(O(),Object(E.b)((function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}}),(function(e,t){var n=t.bookstoreService;return Object(k.b)({fetchBooks:g(n),onAddedToCart:v},e)})))(T),S=(n(44),{onDecrease:function(e){return{type:"BOOK_REMOVED_FROM_CART",payload:e}},onIncrease:v,onDelete:function(e){return{type:"ALL_BOOKS_REMOVED_FROM_CART",payload:e}}}),I=Object(E.b)((function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}}),S)((function(e){var t=e.items,n=(e.total,e.onIncrease),a=e.onDecrease,r=e.onDelete,c=t.reduce((function(e,t){return e+t.total}),0);return o.a.createElement("div",{className:"shopping-cart-table"},o.a.createElement("h2",null,"Your Order"),o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Item"),o.a.createElement("th",null,"Count"),o.a.createElement("th",null,"Price"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,t.map((function(e,t){var c=e.id,l=e.title,i=e.count,u=e.total;return o.a.createElement("tr",{key:c},o.a.createElement("td",null,t+1),o.a.createElement("td",null,l),o.a.createElement("td",null,i),o.a.createElement("td",null,"$",u),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){r(c)},className:"btn btn-outline-danger btn-sm float-right"},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{onClick:function(){n(c)},className:"btn btn-outline-success btn-sm float-right"},o.a.createElement("i",{className:"fa fa-plus-circle"})),o.a.createElement("button",{onClick:function(){a(c)},className:"btn btn-outline-warning btn-sm float-right"},o.a.createElement("i",{className:"fa fa-minus-circle"}))))})))),o.a.createElement("div",{className:"total"},"Total: $",c))})),R=function(){return o.a.createElement("div",null,o.a.createElement(A,null),o.a.createElement(I,null))},w=function(){return o.a.createElement("h1",null,"Cart Page")},B=(n(45),n(13)),D=Object(E.b)((function(e){return{cartItems:e.shoppingCart.cartItems}}),{})((function(e){var t=e.cartItems,n=t.reduce((function(e,t){return e+t.total}),0),a=t.reduce((function(e,t){return e+t.count}),0);return o.a.createElement("header",{className:"shop-header row"},o.a.createElement(B.b,{to:"/"},o.a.createElement("div",{className:"logo text-dark"},"ReStore")),o.a.createElement(B.b,{to:"/cart"},o.a.createElement("div",{className:"shopping-cart"},o.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),a," items ($",n,")")))})),L=function(){return o.a.createElement("main",{role:"main",className:"container"},o.a.createElement(D,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",component:R,exact:!0}),o.a.createElement(l.a,{path:"/cart",component:w})))},F=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement(j,null):this.props.children}}]),t}(r.Component),K=n(24),M=n.n(K),x=n(30),H=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}],n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getBooks",value:function(){var e=Object(x.a)(M.a.mark((function e(){var t=this;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){setTimeout((function(){e(t.data)}),700)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),t}(r.Component),U=n(16),P=function(e,t,n){return 0===t.count?[].concat(Object(U.a)(e.slice(0,n)),Object(U.a)(e.slice(n+1))):-1===n?[].concat(Object(U.a)(e),[t]):[].concat(Object(U.a)(e.slice(0,n)),[t],Object(U.a)(e.slice(n+1)))},V=function(e,t,n){var a=e.bookList.books,r=e.shoppingCart.cartItems,o=a.find((function(e){return e.id===t})),c=r.findIndex((function(e){return e.id===t})),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,o=t.count,c=void 0===o?0:o,l=t.title,i=void 0===l?e.title:l,u=t.total,s=void 0===u?0:u;return{id:r,title:i,count:c+n,total:s+n*e.price}}(o,r[c],n);return{orderTotal:0,cartItems:P(r,l,c)}},J=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0};switch(t.type){case"BOOK_ADDED_TO_CART":return V(e,t.payload,1);case"BOOK_REMOVED_FROM_CART":return V(e,t.payload,-1);case"ALL_BOOKS_REMOVED_FROM_CART":var n=e.shoppingCart.cartItems.find((function(e){return e.id===t.payload}));return V(e,t.payload,-n.count);default:return e.shoppingCart}},$=function(e,t){if(void 0===e)return{books:[],loading:!0,error:null};switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:t.payload};default:return e.bookList}},q=function(e,t){return{bookList:$(e,t),shoppingCart:J(e,t)}},z=n(31),Q=Object(k.d)(q,Object(k.a)(z.a,(function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}}),(function(){return function(e){return function(t){return e(t)}}})));Q.dispatch((a=3e3,function(e){setTimeout((function(){return e({type:"DELAYED_ACTION"})}),a)}));var X=Q,Y=new H;Object(c.render)(o.a.createElement(E.a,{store:X},o.a.createElement(F,null,o.a.createElement(b,{value:Y},o.a.createElement(B.a,null,o.a.createElement("div",{className:"Index"},o.a.createElement(L,null)))))),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.29a22f6c.chunk.js.map