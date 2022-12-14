(this["webpackJsonpserum-dex-ui"]=this["webpackJsonpserum-dex-ui"]||[]).push([[5],{877:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return w}));var r=t(1),i=t.n(r),s=t(9),o=t(13),a=t(16),u=t(28),c=t(29),d=t(114),p=t.n(d),l=t(25),h=t(26),f=t.n(h),v=function(e,n,t,r){return new(t||(t=Promise))((function(i,s){function o(e){try{u(r.next(e))}catch(n){s(n)}}function a(e){try{u(r.throw(e))}catch(n){s(n)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,a)}u((r=r.apply(e,n||[])).next())}))},w=function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(e,r){var i,a;if(Object(o.a)(this,t),(i=n.call(this))._network=r,i._publicKey=null,i._popup=null,i._handlerAdded=!1,i._nextRequestId=1,i._autoApprove=!1,i._responsePromises=new Map,i.handleMessage=function(e){var n;if(i._injectedProvider&&e.source===window||e.origin===(null===(n=i._providerUrl)||void 0===n?void 0:n.origin)&&e.source===i._popup)if("connected"===e.data.method){var t=new l.PublicKey(e.data.params.publicKey);i._publicKey&&i._publicKey.equals(t)||(i._publicKey&&!i._publicKey.equals(t)&&i.handleDisconnect(),i._publicKey=t,i._autoApprove=!!e.data.params.autoApprove,i.emit("connect",i._publicKey))}else if("disconnected"===e.data.method)i.handleDisconnect();else if(e.data.result||e.data.error){var r=i._responsePromises.get(e.data.id);if(r){var o=Object(s.a)(r,2),a=o[0],u=o[1];e.data.result?a(e.data.result):u(new Error(e.data.error))}}},i._beforeUnload=function(){i.disconnect()},function(e){return"object"===typeof e&&null!==e}(a=e)&&"postMessage"in a&&"function"===typeof a.postMessage)i._injectedProvider=e;else{if(!function(e){return"string"===typeof e}(e))throw new Error("provider parameter must be an injected provider or a URL string.");i._providerUrl=new URL(e),i._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:i._network}).toString()}return i}return Object(a.a)(t,[{key:"handleConnect",value:function(){var e,n=this;return this._handlerAdded||(this._handlerAdded=!0,window.addEventListener("message",this.handleMessage),window.addEventListener("beforeunload",this._beforeUnload)),this._injectedProvider?new Promise((function(e){n.sendRequest("connect",{}),e()})):(window.name="parent",this._popup=window.open(null===(e=this._providerUrl)||void 0===e?void 0:e.toString(),"_blank","location,resizable,width=460,height=675"),new Promise((function(e){n.once("connect",e)})))}},{key:"handleDisconnect",value:function(){var e=this;this._handlerAdded&&(this._handlerAdded=!1,window.removeEventListener("message",this.handleMessage),window.removeEventListener("beforeunload",this._beforeUnload)),this._publicKey&&(this._publicKey=null,this.emit("disconnect")),this._responsePromises.forEach((function(n,t){var r=Object(s.a)(n,2)[1];e._responsePromises.delete(t),r(new Error("Wallet disconnected"))}))}},{key:"sendRequest",value:function(e,n){return v(this,void 0,void 0,i.a.mark((function t(){var r,s=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("connect"===e||this.connected){t.next=2;break}throw new Error("Wallet not connected");case 2:return r=this._nextRequestId,++this._nextRequestId,t.abrupt("return",new Promise((function(t,i){var o,a,u,c;s._responsePromises.set(r,[t,i]),s._injectedProvider?s._injectedProvider.postMessage({jsonrpc:"2.0",id:r,method:e,params:Object.assign({network:s._network},n)}):(null===(o=s._popup)||void 0===o||o.postMessage({jsonrpc:"2.0",id:r,method:e,params:n},null!==(u=null===(a=s._providerUrl)||void 0===a?void 0:a.origin)&&void 0!==u?u:""),s.autoApprove||null===(c=s._popup)||void 0===c||c.focus())})));case 5:case"end":return t.stop()}}),t,this)})))}},{key:"publicKey",get:function(){return this._publicKey}},{key:"connected",get:function(){return null!==this._publicKey}},{key:"autoApprove",get:function(){return this._autoApprove}},{key:"connect",value:function(){return v(this,void 0,void 0,i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._popup&&this._popup.close(),e.next=3,this.handleConnect();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"disconnect",value:function(){return v(this,void 0,void 0,i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._injectedProvider){e.next=3;break}return e.next=3,this.sendRequest("disconnect",{});case 3:this._popup&&this._popup.close(),this.handleDisconnect();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"sign",value:function(e,n){return v(this,void 0,void 0,i.a.mark((function t(){var r,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e instanceof Uint8Array){t.next=2;break}throw new Error("Data must be an instance of Uint8Array");case 2:return t.next=4,this.sendRequest("sign",{data:e,display:n});case 4:return r=t.sent,s=f.a.decode(r.signature),o=new l.PublicKey(r.publicKey),t.abrupt("return",{signature:s,publicKey:o});case 8:case"end":return t.stop()}}),t,this)})))}},{key:"signTransaction",value:function(e){return v(this,void 0,void 0,i.a.mark((function n(){var t,r,s;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.sendRequest("signTransaction",{message:f.a.encode(e.serializeMessage())});case 2:return t=n.sent,r=f.a.decode(t.signature),s=new l.PublicKey(t.publicKey),e.addSignature(s,r),n.abrupt("return",e);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"signAllTransactions",value:function(e){return v(this,void 0,void 0,i.a.mark((function n(){var t,r,s;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.sendRequest("signAllTransactions",{messages:e.map((function(e){return f.a.encode(e.serializeMessage())}))});case 2:return t=n.sent,r=t.signatures.map((function(e){return f.a.decode(e)})),s=new l.PublicKey(t.publicKey),e=e.map((function(e,n){return e.addSignature(s,r[n]),e})),n.abrupt("return",e);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"diffieHellman",value:function(e){return v(this,void 0,void 0,i.a.mark((function n(){var t;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e instanceof Uint8Array){n.next=2;break}throw new Error("Data must be an instance of Uint8Array");case 2:return n.next=4,this.sendRequest("diffieHellman",{publicKey:e});case 4:return t=n.sent,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n,this)})))}}]),t}(p.a)}}]);
//# sourceMappingURL=5.9d79ff50.chunk.js.map