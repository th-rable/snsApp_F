"use strict";(self["webpackChunkfirstapp"]=self["webpackChunkfirstapp"]||[]).push([[191],{2191:function(n,e,t){t.r(e),t.d(e,{default:function(){return c}});var o=t(641),r=t(3751);function l(n,e,t,l,a,i){const s=(0,o.g2)("Navbar");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(s),e[6]||(e[6]=(0,o.Lk)("h1",null,"Team수능 로그인",-1)),(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>a.id=n),placeholder:"아이디"},null,512),[[r.Jo,a.id]]),e[4]||(e[4]=(0,o.Lk)("br",null,null,-1)),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=n=>a.pw=n),placeholder:"비밀번호",onKeyup:e[2]||(e[2]=(0,r.jR)((n=>i.login()),["enter"]))},null,544),[[r.Jo,a.pw]]),e[5]||(e[5]=(0,o.Lk)("br",null,null,-1)),(0,o.Lk)("button",{onClick:e[3]||(e[3]=n=>i.login())},"✔")])],64)}var a=t(4364),i={name:"LoginComponents",data(){return{id:"",pw:""}},components:{Navbar:a.A},created(){this.$checklogin().then((()=>{window.location.href="/home"})).catch((()=>{}))},methods:{login(){const n={id:this.id,psword:this.pw};fetch("https://rable.duckdns.org/auth/login/",{method:"post",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((n=>{if(!n.ok)throw new Error("로그인을 실패했어요");return n.json()})).then((e=>{console.log(e),this.$cookies.set("id",n.id),this.$cookies.set("key",e.key),window.location.href="/home"})).catch((n=>{alert(n.message)}))}}},s=t(6262);const u=(0,s.A)(i,[["render",l]]);var c=u},4364:function(n,e,t){t.d(e,{A:function(){return u}});var o=t(641);const r={class:"menu"};function l(n,e,t,l,a,i){const s=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(s,{to:"/"},{default:(0,o.k6)((()=>e[0]||(e[0]=[(0,o.eW)("Team수능")]))),_:1})])}var a={name:"NavbarComponent"},i=t(6262);const s=(0,i.A)(a,[["render",l]]);var u=s}}]);
//# sourceMappingURL=191.e0275a57.js.map