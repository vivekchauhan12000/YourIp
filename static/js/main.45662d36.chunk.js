(this.webpackJsonpfreeadvice=this.webpackJsonpfreeadvice||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(11),i=a.n(o),l=(a(22),a(12)),r=a(13),s=a(16),m=a(15),d=(a(23),a(14)),u=a.n(d);function h(){return c.a.createElement("header",{className:"navbar"},c.a.createElement("div",{className:"navbar__title navbar__item"},"YourIP"),c.a.createElement("div",{className:"navbar__item"},"Developed by"),c.a.createElement("div",{className:"navbar__item"},"Vivek Chauhan"))}var v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={advice:"",ip:"",zipcode:"",lat:"",log:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"fetchAdvice",value:function(){var e=this;u.a.get("http://ip-api.com/json/").then((function(t){var a=t.data.country,n=t.data.query,c=t.data.zip,o=t.data.lat,i=t.data.lon;e.setState({advice:a}),e.setState({ip:n}),e.setState({zipcode:c}),e.setState({lat:o}),e.setState({log:i}),console.log(a),console.log(n),console.log(c),console.log(o),console.log(i)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(h,null),c.a.createElement("div",{className:"card"},c.a.createElement("h2",{className:"cont"},"IP: ",this.state.ip),c.a.createElement("h2",{className:"cont"},"Country: ",this.state.advice),c.a.createElement("h2",{className:"cont"},"Zipcode: ",this.state.zipcode),c.a.createElement("h2",{className:"cont"},"Latitude: ",this.state.lat),c.a.createElement("h2",{className:"cont"},"Longitude: ",this.state.log)))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.45662d36.chunk.js.map