// build time:Thu Jun 04 2020 17:18:00 GMT+0800 (CST)
(function(t,e){"use strict";if(typeof define==="function"&&define.amd){define([],function(){return t.BotUI=e(t)})}else{t.BotUI=e(t)}})(typeof window!=="undefined"?window:this,function(t,e){"use strict";var n=function(e,n){n=n||{};if(!e){throw Error("BotUI: Container id is required as first argument.")}if(!document.getElementById(e)){throw Error("BotUI: Element with id #"+e+" does not exist.")}if(!t.Vue&&!n.vue){throw Error("BotUI: Vue is required but not found.")}var i,o={debug:false,fontawesome:true},s,a={},u,c={icon:/!\(([^\)]+)\)/gim,image:/!\[(.*?)\]\((.*?)\)/gim,link:/\[([^\[]+)\]\(([^\)]+)\)(\^?)/gim},r="https://use.fontawesome.com/ea731dcb6f.js",l="https://cdn.jsdelivr.net/es6-promise/4.1.0/es6-promise.min.js";t.Vue=t.Vue||n.vue;for(var f in o){if(n.hasOwnProperty(f)){o[f]=n[f]}}if(!t.Promise&&!Promise&&!options.promise){b(l)}function d(t,e,n,i){var o=i?"blank":"";return"<a class='botui-message-content-link' target='"+o+"' href='"+n+"'>"+e+"</a>"}function m(t){return t.replace(c.image,"<img class='botui-message-content-image' src='$2' alt='$1' />").replace(c.icon,"<i class='botui-icon botui-message-content-icon fa fa-$1'></i>").replace(c.link,d)}function b(t,e){var n=document.createElement("script");n.type="text/javascript";n.src=t;if(e){n.onload=e}document.body.appendChild(n)}function v(t){if(g.action.addMessage){a.message.human({delay:100,content:t})}g.action.show=!g.action.autoHide}var p={template:'<div class="botui botui-container" v-botui-container><div class="botui-messages-container"><div v-for="msg in messages" class="botui-message" :class="msg.cssClass" v-botui-scroll><transition name="slide-fade"><div v-if="msg.visible" :class="[{human: msg.human, \'botui-message-content\': true}, msg.type]"><span v-if="msg.type == \'text\'" v-text="msg.content" v-botui-markdown></span> <iframe v-if="msg.type == \'embed\'" :src="msg.content" frameborder="0" allowfullscreen></iframe></div></transition></div></div><div class="botui-actions-container"><transition name="slide-fade"><div v-if="action.show" v-botui-scroll><form v-if="action.type == \'text\'" class="botui-actions-text" @submit.prevent="handle_action_text()" :class="action.cssClass"><i v-if="action.text.icon" class="botui-icon botui-action-text-icon fa" :class="\'fa-\' + action.text.icon"></i> <input type="text" ref="input" :type="action.text.sub_type" v-model="action.text.value" class="botui-actions-text-input" :placeholder="action.text.placeholder" :size="action.text.size" :value="action.text.value" :class="action.text.cssClass" required v-focus/> <button v-if="isMobile" class="botui-actions-text-submit">Go</button></form><div v-if="action.type == \'button\'" class="botui-actions-buttons" :class="action.cssClass"> <button type="button" :class="button.cssClass" class="botui-actions-buttons-button" v-for="button in action.button.buttons" @click="handle_action_button(button)" autofocus><i v-if="button.icon" class="botui-icon botui-action-button-icon fa" :class="\'fa-\' + button.icon"></i> {{button.text}}</button></div></div></transition></div></div>',data:function(){return{action:{text:{size:30,placeholder:"Write here .."},button:{},show:false,type:"text",autoHide:true,addMessage:true},messages:[]}},computed:{isMobile:function(){return t.innerWidth&&t.innerWidth<=768}},methods:{handle_action_button:function(t){v(t.text);u({type:"button",text:t.text,value:t.value})},handle_action_text:function(){if(!this.action.text.value)return;v(this.action.text.value);u({type:"text",value:this.action.text.value});this.action.text.value=""}}};t.Vue.directive("botui-markdown",function(t,e){if(e.value=="false")return;t.innerHTML=m(t.textContent)});t.Vue.directive("botui-scroll",{inserted:function(t){s.scrollTop=s.scrollHeight}});t.Vue.directive("focus",{inserted:function(t){t.focus()}});t.Vue.directive("botui-container",{inserted:function(t){s=t}});i=new t.Vue({components:{"bot-ui":p}}).$mount("#"+e);var g=i.$children[0];function h(t){if(!t.content){throw Error('BotUI: "content" is required in message object.')}t.type=t.type||"text";t.visible=t.delay?false:true;var e=g.messages.push(t)-1;return new Promise(function(n,i){setTimeout(function(){g.messages[e].visible=true;n(e)},t.delay||0)})}function x(t){if(typeof t==="string"){t={content:t}}return t||{}}a.message={add:function(t){return h(x(t))},bot:function(t){t=x(t);return h(t)},human:function(t){t=x(t);t.human=true;return h(t)},get:function(t){return Promise.resolve(g.messages[t])},remove:function(t){g.messages.splice(t,1);return Promise.resolve()},update:function(t,e){g.messages[t].content=e.content;return Promise.resolve(e.content)},removeAll:function(){g.messages.splice(0,g.messages.length);return Promise.resolve()}};function y(t,e){for(var n in t){if(!e.hasOwnProperty(n)){e[n]=t[n]}}}function w(t){if(!t.action){throw Error('BotUI: "action" property is required.')}}function C(t){w(t);y({type:"text",cssClass:"",autoHide:true,addMessage:true},t);g.action.type=t.type;g.action.cssClass=t.cssClass;g.action.autoHide=t.autoHide;g.action.addMessage=t.addMessage;return new Promise(function(e,n){u=e;setTimeout(function(){g.action.show=true},t.delay||0)})}a.action={show:C,hide:function(){g.action.show=false;return Promise.resolve()},text:function(t){w(t);g.action.text=t.action;return C(t)},button:function(t){w(t);t.type="button";g.action.button.buttons=t.action;return C(t)}};if(o.fontawesome){b(r)}if(o.debug){a._botApp=i}return a};return n});
//rebuild by neat 