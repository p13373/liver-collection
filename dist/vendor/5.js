(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{123:function(e,t,n){(e.exports=n(53)(!1)).push([e.i,".white-space {\r\n    margin-top: 8px;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}",""])},124:function(e,t,n){var r=n(123);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(52)(r,o);r.locals&&(e.exports=r.locals)},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this;this.get=function(t){var n="store."+e.name+"."+t;if(null!==localStorage.getItem(n))try{return JSON.parse(localStorage.getItem(n))}catch(e){return null}},this.set=function(t,n){if(void 0===n)e.remove(t);else{if("function"==typeof n)n=null;else try{n=JSON.stringify(n)}catch(e){n=null}localStorage.setItem("store."+e.name+"."+t,n)}return e},this.remove=function(t){return localStorage.removeItem("store."+e.name+"."+t),e},this.removeAll=function(){for(var t="store."+e.name+".",n=localStorage.length-1;n>=0;n--)localStorage.key(n).substring(0,t.length)===t&&localStorage.removeItem(localStorage.key(n));return e},this.toObject=function(){for(var t={},n=void 0,r=void 0,o="store."+e.name+".",a=localStorage.length-1;a>=0;a--)localStorage.key(a).substring(0,o.length)===o&&(n=localStorage.key(a).substring(o.length),void 0!==(r=e.get(n))&&(t[n]=r));return t},this.fromObject=function(t,n){for(var r in!0!==n&&e.removeAll(),t)t.hasOwnProperty(r)&&e.set(r,t[r]);return e}};t.default=function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.call(this),this.name=t,void 0!==n)for(var o in n)n.hasOwnProperty(o)&&void 0===this.get(o)&&this.set(o,n[o])}},226:function(e,t,n){(e.exports=n(53)(!1)).push([e.i,".Popup {\r\n    width: 430px;\r\n    height: 460px;\r\n    text-align: center;\r\n    padding: 8px;\r\n    background: #B0E0E6;\r\n    font-size: 14px;\r\n}",""])},227:function(e,t,n){var r=n(226);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(52)(r,o);r.locals&&(e.exports=r.locals)},228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(91)),o=u(n(68));n(86),n(67);var a=n(1),c=u(a),i=u(n(58)),l=u(n(13));function u(e){return e&&e.__esModule?e:{default:e}}var s=(chrome.extension?chrome.extension.getBackgroundPage():{store:new l.default}).store,f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSwitchOnChange=function(e){s.set("isEunuch",e),chrome.extension&&e&&(chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.connect(t[0].id,{name:"popup_to_content"}).postMessage({message:"to_be_a_eunuch",status:e})}),n.setState({title:"这就是我想要的生活（便乘"})),chrome.extension&&!e&&(chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.connect(t[0].id,{name:"popup_to_content"}).postMessage({message:"to_be_a_gbfer",status:e})}),n.setState({title:"开启该选项时，你将成为穷空士"})),n.setState({checked:e})},n.render=function(){var e=n.state,t=e.checked,a=e.title;return c.default.createElement("div",{className:"GachaOptions"},c.default.createElement("div",{style:{marginLeft:"6%"}},c.default.createElement(o.default,{title:a},c.default.createElement("span",{style:{float:"left",color:"#666"}},"是否精神阉割骑空士")),c.default.createElement(r.default,{onChange:n.handleSwitchOnChange,defaultChecked:t,disabled:t,style:{float:"right",marginRight:"6%"}}),c.default.createElement(i.default,{clear:!0})),c.default.createElement(i.default,{clear:!0}))},n.state={checked:s.get("isEunuch"),title:"开启该选项时，你将成为穷空士"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}();t.default=f},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(77)),o=s(n(121)),a=s(n(119));n(76),n(105),n(104);var c=n(1),i=s(c),l=s(n(58)),u=s(n(13));function s(e){return e&&e.__esModule?e:{default:e}}var f=(chrome.extension?chrome.extension.getBackgroundPage():{store:new u.default("options")}).store,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});t.postMessage({message:"isCharacterPage"}),t.onMessage.addListener(function(e){var t=e.flag;n.setState({disabled:!t})})})},n.handleExportBlackList=function(){var e=JSON.stringify(f.get("blackList")),t=document.createElement("a"),n=new Blob([e],{type:"octet/stream"}),r=window.URL.createObjectURL(n);t.setAttribute("href",r),t.setAttribute("download","black_list.json"),t.click()},n.handleCheckBlackList=function(){chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(e){n.setState({checkLoading:!0});var t=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});t.postMessage({message:"checkBlackList"}),t.onMessage.addListener(function(e){var t=e.datas,r=[],c=!0,l=!1,u=void 0;try{for(var s,d=t[Symbol.iterator]();!(c=(s=d.next()).done);c=!0){var p=s.value,m=p.nickName,y=p.userId,v=!0,g=!1,b=void 0;try{for(var _,w=f.get("blackList")[Symbol.iterator]();!(v=(_=w.next()).done);v=!0){var k=_.value,O=k.id,E=k.description;y==O&&r.push({id:O,nickName:m,description:E})}}catch(e){g=!0,b=e}finally{try{!v&&w.return&&w.return()}finally{if(g)throw b}}}}catch(e){l=!0,u=e}finally{try{!c&&d.return&&d.return()}finally{if(l)throw u}}var S=i.default.createElement(a.default,{scroll:{y:280},columns:h,dataSource:r,pagination:!1,rowKey:"id"});o.default.open({message:r.length?"有目标人物":"无目标人物",description:r.length?S:"你和另"+t.length+"个人的关系尚未发生，可能有新的基会。咦？为什么会多了一个人？",duration:null}),n.setState({checkLoading:!1})})})},n.render=function(){var e=n.state,t=e.exportLoading,o=e.checkLoading,a=e.disabled;return i.default.createElement("div",{className:"CheckBlackList"},i.default.createElement(r.default,{type:"primary",loading:t,onClick:n.handleExportBlackList,style:{width:"90%"}},"下载黑名单"),i.default.createElement(l.default,null),i.default.createElement(r.default,{type:"primary",loading:o,disabled:a,onClick:n.handleCheckBlackList,style:{width:"90%"}},"检查黑名单"),i.default.createElement(l.default,null))},n.state={exportLoading:!1,checkLoading:!1,disabled:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),t}();t.default=d;var h=[{title:"id",dataIndex:"id",key:"id",align:"center",width:60},{title:"姓名",dataIndex:"nickName",key:"nickName",align:"center",width:100},{title:"描述",dataIndex:"description",key:"description",align:"center"}]},230:function(e,t,n){(e.exports=n(53)(!1)).push([e.i,".CheckCharacters{}",""])},231:function(e,t,n){var r=n(230);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(52)(r,o);r.locals&&(e.exports=r.locals)},378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(77)),o=s(n(121)),a=s(n(119));n(76),n(105),n(104);var c=n(1),i=s(c),l=s(n(58)),u=n(5);function s(e){return e&&e.__esModule?e:{default:e}}n(231);var f="http://game.granbluefantasy.jp/profile/content/index/",d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});t.postMessage({message:"isCharacterPage"}),t.onMessage.addListener(function(e){var t=e.flag;n.setState({disabled:!t})})})},n.handleCheckUbCharacters=function(){n.state.disabled||chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});n.setState({checkUbCharactersBtnLoading:!0}),t.postMessage({message:"check_ub_characters"}),t.onMessage.addListener(function(e){var t=e.datas,r=!0,c=!1,l=void 0;try{for(var u,s=t[Symbol.iterator]();!(r=(u=s.next()).done);r=!0){var d=u.value,m=d.userId,y=void 0===m?1:m;d.url=f+y,d.hasCharacter=""}}catch(e){c=!0,l=e}finally{try{!r&&s.return&&s.return()}finally{if(c)throw l}}n.recursionRequest(t,0,function(e){var t=!0,r=!1,c=void 0;try{for(var l,u=e[Symbol.iterator]();!(t=(l=u.next()).done);t=!0){var s=l.value,f=s.data,d=[],m=!0,y=!1,v=void 0;try{for(var g,b=f.split("http%3A%2F%2Fgame-a.granbluefantasy.jp%2Fassets%2Fimg_light%2Fsp%2Fassets%2Fnpc%2Fquest")[Symbol.iterator]();!(m=(g=b.next()).done);m=!0){var _=g.value,w=!0,k=!1,O=void 0;try{for(var E,S=h[Symbol.iterator]();!(w=(E=S.next()).done);w=!0){var C=E.value,j=C.key,x=C.url;_.includes(x)&&d.push(j)}}catch(e){k=!0,O=e}finally{try{!w&&S.return&&S.return()}finally{if(k)throw O}}}}catch(e){y=!0,v=e}finally{try{!m&&b.return&&b.return()}finally{if(y)throw v}}s.hasCharacter=Array.from(new Set(d)).toString()}}catch(e){r=!0,c=e}finally{try{!t&&u.return&&u.return()}finally{if(r)throw c}}var P=i.default.createElement(a.default,{scroll:{y:280},columns:p,dataSource:e,pagination:!1,rowKey:"id"});o.default.open({message:"红茶已泡好，跟谁喝自便，但请注意卫生",description:P,duration:null}),n.setState({checkUbCharactersBtnLoading:!1})})})})},n.recursionRequest=function(e,t,r){if(t>=e.length)r(e);else{var o=e[t],a=o.url;(0,u.getByCookie)(a,{},function(a){var c=a.data,i=void 0===c?"":c;o.data=decodeURI(i),n.recursionRequest(e,++t,r)})}},n.render=function(){var e=n.state,t=e.checkUbCharactersBtnLoading,o=e.disabled;return i.default.createElement("div",{className:"CheckCharacters"},i.default.createElement(r.default,{type:"primary",loading:t,disabled:o,onClick:n.handleCheckUbCharacters,style:{width:"90%"}},"严格检查骑空士队友是否失格"),i.default.createElement(l.default,null))},n.state={checkUbCharactersBtnLoading:!1,disabled:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),t}();t.default=d;var h=[{key:1,name:"",url:"3040030000"},{key:2,name:"",url:"3040031000"},{key:3,name:"",url:"3040032000"},{key:4,name:"",url:"3040033000"},{key:5,name:"",url:"3040034000"},{key:6,name:"",url:"3040035000"},{key:7,name:"",url:"3040036000"},{key:8,name:"",url:"3040037000"},{key:9,name:"",url:"3040038000"},{key:10,name:"",url:"3040039000"}],p=[{title:"姓名",dataIndex:"nickName",key:"nickName"},{title:"年龄",dataIndex:"userRank",key:"userRank"},{title:"天人",dataIndex:"hasCharacter",key:"hasCharacter"}]},379:function(e,t,n){(e.exports=n(53)(!1)).push([e.i,".SetZoom{}",""])},380:function(e,t,n){var r=n(379);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(52)(r,o);r.locals&&(e.exports=r.locals)},391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(390));n(383);var o=n(1),a=l(o),c=l(n(58)),i=l(n(13));function l(e){return e&&e.__esModule?e:{default:e}}n(380);var u=(chrome.extension?chrome.extension.getBackgroundPage():{store:new i.default}).store,s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_zoom=function(e){u.set("zoom",e),chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.connect(t[0].id,{name:"popup_to_content"}).postMessage({zoom:e,message:"set_zoom"})})},n.render=function(){var e=n.state.defaultZoom;return a.default.createElement("div",{className:"SetZoom"},a.default.createElement("div",{style:{margin:"0 6%",textAlign:"left"}},a.default.createElement("span",{style:{color:"#666"}},"调节窗口大小"),a.default.createElement(r.default,{step:.01,min:.7,max:2,defaultValue:e,onChange:n.handle_zoom})),a.default.createElement(c.default,null))},n.state={defaultZoom:u.get("zoom")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=s},392:function(e,t,n){(e.exports=n(53)(!1)).push([e.i,".CoopraidSearch{}",""])},393:function(e,t,n){var r=n(392);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(52)(r,o);r.locals&&(e.exports=r.locals)},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=s(r),a=s(n(452)),c=s(n(391)),i=s(n(378)),l=s(n(229)),u=s(n(228));function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(227);var d=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,d=Array(s),h=0;h<s;h++)d[h]=arguments[h];return n=r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(d))),r.render=function(){return o.default.createElement("div",{className:"Popup"},o.default.createElement(a.default,null),o.default.createElement(c.default,null),o.default.createElement(l.default,null),o.default.createElement(i.default,null),o.default.createElement(u.default,null))},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=d},452:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(91)),o=s(n(68)),a=s(n(176));n(86),n(67),n(99);var c=n(1),i=s(c),l=s(n(58)),u=s(n(13));function s(e){return e&&e.__esModule?e:{default:e}}n(393);var f=(chrome.extension?chrome.extension.getBackgroundPage():{store:new u.default("options")}).store,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));h.call(n);var r=f.get("search")||"";return n.state={coopraidSearchValue:r,coopraidSwitchChecked:!!r},r&&n.handleSearch(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),t}(),h=function(){var e=this;this.componentDidMount=function(){},this.handleSearch=function(){var t=e.state.coopraidSearchValue;chrome.tabs.query({active:!0,currentWindow:!0},function(e){var n=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});f.set("search",t),n.postMessage({message:"open_coopraid_search",search:t})})},this.handleCoopraidSearch=function(t){return e.setState({coopraidSearchValue:t.target.value})},this.handleCoopraidSwitch=function(t){t?e.handleSearch():(f.remove("search"),e.setState({coopraidSearchValue:""})),e.setState({coopraidSwitchChecked:t})},this.render=function(){var t=e.state,n=t.coopraidSearchValue,c=t.coopraidSwitchChecked;return i.default.createElement("div",{className:"CoopraidSearch"},i.default.createElement(a.default,{style:{width:"90%"},onChange:e.handleCoopraidSearch,value:n,placeholder:"这里填房间描述"}),i.default.createElement(l.default,null),i.default.createElement("div",{style:{marginLeft:"6%"}},i.default.createElement(o.default,{title:"看见上面的文本框了么，填了这个你才能开启搜索"},i.default.createElement("span",{style:{float:"left",color:"#666"}},"是否开启共斗搜索")),i.default.createElement(r.default,{disabled:!n,onChange:e.handleCoopraidSwitch,checked:c,style:{float:"right",marginRight:"6%"}}),i.default.createElement("div",{style:{clear:"both"}})),i.default.createElement(l.default,null))}};t.default=d},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.uploadToServer=function(e,t,n){if(e){var r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.text()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.getByCookie=function(e,t,n){if(e){var r={credentials:"include"};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.json()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.postByCookie=function(e,t,n){if(e){var r={method:"POST",credentials:"include",headers:{"Content-Type":"application/json; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return console.log(e),e.text()}).then(function(e){console.log(e),n(JSON.parse(e))}).catch(function(e){console.log(e)})}},t.dispatchInjectToContentScript=function(e){return document.getElementById("init_window").dispatchEvent(new CustomEvent("inject_to_content_script",{detail:e}))},t.dispatchContentScriptToInject=function(e){return document.getElementById("init_window").dispatchEvent(new CustomEvent("content_script_to_inject",{detail:e}))}},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n(124);var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.render=function(){var e=n.props.clear;return o.default.createElement("div",{className:"white-space",style:{clear:e?"both":"none"}})},n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=a}}]);