(this["webpackJsonpemployee-table"]=this["webpackJsonpemployee-table"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"firstName":"SpongeBob","lastName":"SquarePants","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","phoneNumber":1234567890},{"id":2,"firstName":"Eugene","lastName":"Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","phoneNumber":9876543210},{"id":3,"firstName":"Squidward","lastName":"Tentacles","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","phoneNumber":5678901234},{"id":4,"firstName":"Doug","lastName":"Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","phoneNumber":3471420945},{"id":5,"firstName":"Bugs","lastName":"Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","phoneNumber":6549387625},{"id":6,"firstName":"Johnny","lastName":"Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","phoneNumber":9624739927},{"id":7,"firstName":"Tommy","lastName":"Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","phoneNumber":4839476629}]')},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),s=a.n(r),i=a(3),o=a(4),c=a(5),m=a(8),u=a(7);a(14);var f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("thead",null,l.a.createElement("tr",{className:"row"},l.a.createElement("th",{className:"col-sm-3"},"Sort By:"),l.a.createElement("th",{onClick:e.firstHandleClick,className:"table-head col-sm-3"},"First Name"),l.a.createElement("th",{onClick:e.lastHandleClick,className:"table-head col-sm-3"},"Last Name"),l.a.createElement("th",{onClick:e.phoneHandleClick,className:"table-head col-sm-3"},"Phone Number"))))};a(15);var g=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tbody",null,e.friends.map((function(e){return l.a.createElement("tr",{className:"row",key:e.id},l.a.createElement("td",{className:"col-sm-3"},l.a.createElement("img",{className:"table-img",alt:e.name,src:e.image})),l.a.createElement("td",{className:"col-sm-3"},e.firstName),l.a.createElement("td",{className:"col-sm-3"},e.lastName),l.a.createElement("td",{className:"col-sm-3"},e.phoneNumber))}))))};var d=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",null,l.a.createElement("label",null,"Search by last name:"),l.a.createElement("br",null),l.a.createElement("input",{onChange:e.handleInputChange,type:"text",name:"search",placeholder:"Doe"}),l.a.createElement("button",{onClick:e.searchHandleClick},"Search")))},p=(a(16),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).firstHandleClick=function(e){e.preventDefault(),console.log(n.state.flag),0===n.state.flag||-1===n.state.flag?n.setState({flag:1,friends:n.state.permfriends.sort((function(e,t){return e.firstName.localeCompare(t.firstName)}))}):1===n.state.flag&&n.setState({flag:-1,friends:n.state.permfriends.sort((function(e,t){return t.firstName.localeCompare(e.firstName)}))})},n.lastHandleClick=function(e){e.preventDefault(),console.log(n.state.flag),0===n.state.flag||-1===n.state.flag?n.setState({flag:1,friends:n.state.permfriends.sort((function(e,t){return e.lastName.localeCompare(t.lastName)}))}):1===n.state.flag&&n.setState({flag:-1,friends:n.state.permfriends.sort((function(e,t){return t.lastName.localeCompare(e.lastName)}))})},n.phoneHandleClick=function(e){e.preventDefault(),console.log(n.state.flag),0===n.state.flag||-1===n.state.flag?n.setState({flag:1,friends:n.state.permfriends.sort((function(e,t){return e.phoneNumber-t.phoneNumber}))}):1===n.state.flag&&n.setState({flag:-1,friends:n.state.permfriends.sort((function(e,t){return t.phoneNumber-e.phoneNumber}))})},n.searchHandleClick=function(e){e.preventDefault();var t=n.state.permfriends.filter((function(e){return e.lastName.toLowerCase()===n.state.search.toLowerCase()}));console.log(t),n.setState({friends:t})},n.handleInputChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(i.a)({},a,l))},n.state={friends:e.friends,permfriends:e.friends,flag:0,search:"",friendSearch:""},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,l.a.createElement(d,{handleInputChange:this.handleInputChange,searchHandleClick:this.searchHandleClick})),l.a.createElement("table",{className:"friend-table"},l.a.createElement(f,{firstHandleClick:this.firstHandleClick,lastHandleClick:this.lastHandleClick,phoneHandleClick:this.phoneHandleClick}),l.a.createElement(g,{friends:this.state.friends})))}}]),a}(n.Component)),h=a(6);var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{friends:h}))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.54a56580.chunk.js.map