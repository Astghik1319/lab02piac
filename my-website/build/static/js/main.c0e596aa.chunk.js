(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(n,t,e){n.exports=e.p+"static/media/zdj2.09f9208a.jpg"},47:function(n,t,e){n.exports=e.p+"static/media/logoblack.b814dcca.png"},50:function(n,t,e){n.exports=e.p+"static/media/comnet.e56e22b2.png"},51:function(n,t,e){n.exports=e.p+"static/media/comnetComp.45007168.png"},52:function(n,t,e){n.exports=e.p+"static/media/conventer.3c355a78.png"},53:function(n,t,e){n.exports=e.p+"static/media/conventerComp.d3303459.png"},54:function(n,t,e){n.exports=e.p+"static/media/weather.fc509492.png"},55:function(n,t,e){n.exports=e.p+"static/media/weatherComp.7fad2a5b.png"},56:function(n,t,e){n.exports=e.p+"static/media/grawernia.3efc96f7.png"},57:function(n,t,e){n.exports=e.p+"static/media/grawerniaComp.e5d39302.png"},61:function(n,t,e){n.exports=e(94)},86:function(n,t,e){},89:function(n,t,e){},90:function(n,t,e){},94:function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),o=e(26),r=e.n(o),c=e(5),l=e(6),s=e(8),p=e(7),m=e(9),d=e(1),u=e(12),h=e(15),f=e(97),g=e(96),x=e(43),b=e(3);function w(){var n=Object(b.a)(["\n@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900&display=swap&subset=latin-ext');\n@import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700&display=swap&subset=latin-ext');\n@import url('https://fonts.googleapis.com/css?family=Kanit:300,400,700,900&display=swap&subset=latin-ext');\n    *,*::before,*::after\n    {\n        box-sizing:border-box;\n        margin:0;\n        padding:0;\n        -webkit-font-smoothing: antialiased;\n         -moz-osx-font-smoothing: grayscale;\n    }\n    body{\n        font-family: 'Kanit', sans-serif;\n        &.noscroll{\n            height:100%;\n            overflow:hidden;\n        }\n    }\n    .noview{\n        opacity:0;\n    }\n"]);return w=function(){return n},n}var v=Object(d.b)(w()),y=(e(86),e(28));function E(){var n=Object(b.a)(["\n  transform: translateX(-50%) rotate(90deg);\n  -webkit-text-stroke: 2px #000;\n  color: transparent;\n  top: 30%;\n  right: 50%;\n  width: 100%;\n"]);return E=function(){return n},n}function k(){var n=Object(b.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  z-index: 8000;\n  background-color: transparent;\n  font-size: 150px;\n  font-weight: 700;\n  font-family: 'Montserrat', sans-serif;\n  transform: translateX(-40%) rotate(90deg);\n"]);return k=function(){return n},n}function z(){var n=Object(b.a)(["\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 9999;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]);return z=function(){return n},n}var j=d.c.div(z()),O=d.c.h3(k()),I=Object(d.c)(O)(E()),C=function(n){function t(){var n,e;Object(c.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(a)))).state={},e}return Object(m.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(y.a,{from:{opacity:1},to:{opacity:0,zIndex:-1,display:"none"},duration:.9,delay:1.5},a.a.createElement(j,{className:"box"},a.a.createElement(y.a,{from:{y:"-100%"},to:{y:"100%"},duration:"5"},a.a.createElement(O,null,"MARCEL")),a.a.createElement(y.a,{from:{y:"100%"},to:{y:"-100%"},duration:"5"},a.a.createElement(I,null,"BEDNARZ"))))}}]),t}(i.Component);function A(){var n=Object(b.a)(["\n  position: ",";\n  z-index: ",";\n  left: 0;\n  top: 0;\n  background-color: transparent;\n  opacity: 0;\n  transition: 0.3s;\n"]);return A=function(){return n},n}var S=d.c.canvas(A(),function(n){return n.position},function(n){return n.index}),M=function(n){function t(){var n,e;Object(c.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(e=Object(s.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(o)))).state={isLoaded:!1},e.canvasRef=a.a.createRef(),e}return Object(m.a)(t,n),Object(l.a)(t,[{key:"componentDidMount",value:function(){var n=this.canvasRef.current,t=n.getContext("2d");function e(n,e,i,a){var o,r,c=this;this.x=n,this.y=e,this.radius=i,this.color=a,this.radians=Math.random()*Math.PI*2,this.velocity=.005,this.distanceFromCenter=(o=300,r=window.innerWidth,Math.floor(Math.random()*(r-o+1)+o)),this.update=function(){c.radians+=c.velocity,c.x=n+Math.cos(c.radians)*c.distanceFromCenter,c.y=e+Math.sin(c.radians)*c.distanceFromCenter,c.draw()},this.draw=function(){t.beginPath(),t.arc(c.x,c.y,c.radius,0,2*Math.PI,!1),t.fillStyle=c.color,t.fill(),t.closePath()}}n.width=window.innerWidth,n.height=window.innerHeight;var i=[];!function(){for(var t=0;t<10;t++)i.push(new e(n.width/2,n.height/2,5,"#000"))}(),function e(){requestAnimationFrame(e),t.clearRect(0,0,n.width,n.height),i.forEach(function(n){n.update()})}(),this.setState(function(n){return{isLoaded:!n.isLoaded}})}},{key:"render",value:function(){var n=this.props,t=n.position,e=n.index,i=n.countParticles,o=this.state.isLoaded;return a.a.createElement(S,{style:{opacity:o?1:0},ref:this.canvasRef,position:t,index:e,countParticles:i})}}]),t}(i.Component);M.defaultProps={position:"fixed",index:"-1",countParticles:5};var P=M,N=e(46),R=e.n(N),U=e(47),D=e.n(U);function L(){var n=Object(b.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  max-width: 50%;\n  height: 54px;\n  margin: 15px 0 0 30px;\n  @media (min-width: 768px) {\n    height: 70px;\n  }\n  @media (min-width: 1024px) {\n    margin: 30px 0 0 45px;\n  }\n"]);return L=function(){return n},n}function T(){var n=Object(b.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100vw;\n  height: 30vh;\n  background-image: url(",");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  @media (min-width: 768px) {\n    height: 40vh;\n  }\n  @media (min-width: 1200px) {\n    height: 60vh;\n  }\n  @media (min-width: 1600px) {\n    height: 70vh;\n  }\n  h1 {\n    padding: 0 5%;\n    font-weight: 700;\n    position: absolute;\n    font-size: 500%;\n    top: 0;\n    right: 0;\n    transform: translateY(-75%);\n    width: 100%;\n    letter-spacing: 3px;\n    text-align: left;\n    font-family: 'Kanit', sans-serif;\n    line-height: 100%;\n    @media (min-width: 1200px) {\n      width: 85%;\n    }\n    @media (min-width: 1600px) {\n      font-size: 650%;\n    }\n  }\n  p {\n    display: none;\n    font-weight: 700;\n    position: absolute;\n    font-size: 70px;\n    bottom: 0;\n    right: 75%;\n    transform: translateY(50%);\n    z-index: 11;\n    color: transparent;\n    -webkit-text-stroke: 2px #000;\n    @media (min-width: 412px) {\n      display: block;\n    }\n    @media (min-width: 768px) {\n      font-size: 100px;\n    }\n    @media (min-width: 1024px) {\n      font-size: 150px;\n    }\n    @media (min-width: 1600px) {\n      right: 70%;\n    }\n  }\n  button {\n    position: absolute;\n    bottom: 0;\n    right: 5%;\n    transform: translateY(70%);\n    padding: 20px;\n    background-color: #000;\n    border: none;\n    font-size: ",";\n    font-family: 'Josefin Sans', sans-serif;\n    letter-spacing: 2px;\n    font-weight: 300;\n    text-align: right;\n    transition: 0.2s;\n    z-index: 5;\n    overflow: hidden;\n    z-index: 10;\n    cursor: pointer;\n    @media (min-width: 768px) {\n      font-size: 25px;\n      padding: 25px;\n    }\n    @media (min-width: 1600px) {\n      right: 15%;\n    }\n    a {\n      text-decoration: none;\n      color: #fff;\n    }\n    &:hover a {\n      color: #000;\n    }\n    &::after {\n      content: '';\n      clear: both;\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 0;\n      transform: translateY(100%);\n      height: 100%;\n      width: 100%;\n      background-color: #fff;\n      z-index: -1;\n      transition: 0.2s;\n    }\n    &:hover::after {\n      transform: translateY(0);\n    }\n  }\n"]);return T=function(){return n},n}function F(){var n=Object(b.a)(["\n  position: absolute;\n  top: 80%;\n  font-size: ",";\n  text-align: center;\n  width: 100%;\n  @media (min-width: 1024px) {\n    font-size: ",";\n  }\n  @media (min-width: 1200px) {\n    top: 85%;\n  }\n  @media (min-width: 1600px) {\n    top: 90%;\n  }\n"]);return F=function(){return n},n}function q(){var n=Object(b.a)(["\n  position: relative;\n  text-align: center;\n  height: 100vh;\n  width: 100vw;\n  z-index: 5;\n"]);return q=function(){return n},n}var B=d.c.section(q()),Y=d.c.p(F(),function(n){return n.theme.h2},function(n){return n.theme.h1}),J=d.c.div(T(),R.a,function(n){return n.theme.p}),W=d.c.img(L()),H=function(){return a.a.createElement(B,null,a.a.createElement(W,{src:D.a,alt:"logo"}),a.a.createElement(J,null,a.a.createElement("h1",null,"Marcel Bednarz"),a.a.createElement("p",null,"00"),a.a.createElement("button",{type:"button"},a.a.createElement(u.b,{to:"/about"},"Check out my projects"))),a.a.createElement(Y,null,"Junior Front-End Developer"),a.a.createElement(P,null))};e(89);function V(){var n=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 19;\n  transition: 0.3s;\n"]);return V=function(){return n},n}var X=d.c.button(V()),K=function(n){function t(){var n,e;Object(c.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(a)))).state={},e}return Object(m.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this,t=this.props.clickFunc;return a.a.createElement(X,{className:"hamburger hamburger--spring",type:"button",onClick:function(){return t(n)}},a.a.createElement("span",{className:"hamburger-box"},a.a.createElement("span",{className:"hamburger-inner"})))}}]),t}(i.Component);function G(){var n=Object(b.a)(["\n  position: absolute;\n  bottom: 5%;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  button {\n    background-color: transparent;\n    padding: 10px;\n    margin-bottom: 30px;\n    border: none;\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n    &:hover a {\n      color: #000;\n    }\n    &::after {\n      content: '';\n      clear: both;\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 0;\n      transform: translateY(100%);\n      height: 100%;\n      width: 100%;\n      background-color: #fff;\n      z-index: -1;\n      transition: 0.2s;\n    }\n    &:hover::after {\n      transform: translateY(0);\n    }\n    a {\n      text-decoration: none;\n      color: #fff;\n      font-weight: 300;\n      letter-spacing: 5px;\n      font-size: 14px;\n    }\n  }\n"]);return G=function(){return n},n}function _(){var n=Object(b.a)(["\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: -100;\n  opacity: 0;\n  transition: 0.3s;\n  background-color: #000;\n  &.active {\n    opacity: 1;\n    z-index: 18;\n  }\n  &.active li {\n    animation: "," 0.3s 0.2s linear both;\n    &:nth-of-type(2) {\n      animation: "," 0.3s 0.35s linear both;\n    }\n    &:nth-of-type(3) {\n      animation: "," 0.3s 0.5s linear both;\n    }\n    &:nth-of-type(4) {\n      animation: "," 0.3s 0.65s linear both;\n    }\n  }\n  &.active .socials {\n    animation: "," 0.3s 0.8s linear both;\n  }\n  ul {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    list-style: none;\n    font-weight: 700;\n    li {\n      padding: 5px 0;\n      font-size: 45px;\n      width: 100vw;\n      text-align: center;\n      a {\n        text-decoration: none;\n        color: #fff;\n        letter-spacing: 2px;\n      }\n    }\n  }\n"]);return _=function(){return n},n}function Z(){var n=Object(b.a)(["\nfrom{\n  opacity:0;\n}\nto{\n  opacity:1;\n}\n"]);return Z=function(){return n},n}var Q=Object(d.d)(Z()),$=d.c.nav(_(),Q,Q,Q,Q,Q),nn=d.c.div(G()),tn=function(n){function t(){var n,e;Object(c.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(a)))).state={},e.handleActiveState=function(){document.querySelector(".hamburger").classList.toggle("is-active"),document.querySelector("nav").classList.toggle("active")},e}return Object(m.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,{clickFunc:function(){return n.handleActiveState(n)}}),a.a.createElement($,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(u.c,{to:"/",onClick:this.handleActiveState},"Home")),a.a.createElement("li",null,a.a.createElement(u.c,{to:"/information",onClick:this.handleActiveState},"About me")),a.a.createElement("li",null,a.a.createElement(u.c,{to:"/about",onClick:this.handleActiveState},"Projects")),a.a.createElement("li",null,a.a.createElement(u.c,{to:"/contact",onClick:this.handleActiveState},"Contact"))),a.a.createElement(nn,{className:"socials"},a.a.createElement("button",{type:"button"},a.a.createElement("a",{href:"https://github.com/marceleq27",target:"_blank",rel:"noopener noreferrer"},"GITHUB")),a.a.createElement("button",{type:"button"},a.a.createElement("a",{href:"https://linkedin.com/in/marcel-bednarz16",target:"_blank",rel:"noopener noreferrer"},"LINKEDIN")))))}}]),t}(i.Component),en=(e(90),e(21)),an=e(14),on=e(24),rn=e.n(on);function cn(){var n=Object(b.a)(["\n  border: none;\n  position: absolute;\n  bottom: 6%;\n  right: 6%;\n  width: 50px;\n  height: 50px;\n  background-color: #fff;\n  border-radius: 50%;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-family: 'Josefin Sans', sans-serif;\n  &:hover {\n    background-color: #000;\n    transform: scale(1.2);\n    p {\n      color: #fff;\n    }\n  }\n  @media (min-width: 768px) {\n    width: 70px;\n    height: 70px;\n  }\n  p {\n    font-weight: 900;\n    letter-spacing: 1px;\n    margin: 0 auto;\n    font-size: 16px;\n    @media (min-width: 768px) {\n      font-size: 20px;\n    }\n  }\n  &.second {\n    bottom: 6%;\n    right: 30%;\n    z-index: 17;\n    &:hover {\n      svg {\n        color: #fff;\n      }\n    }\n    @media (min-width: 1024px) {\n      right: 15%;\n    }\n    a {\n      text-decoration: none;\n      svg {\n        color: #000;\n        font-size: 20px;\n        @media (min-width: 768px) {\n          font-size: 25px;\n        }\n      }\n    }\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(b.a)(["\n  position: absolute;\n  bottom: 45%;\n  left: 25%;\n  width: 60vh;\n  color: #333;\n  font-size: 13px;\n  transform: rotate(90deg);\n  letter-spacing: 2px;\n  z-index: 5;\n  @media (min-width: 768px) {\n    left: 40%;\n    font-size: 18px;\n  }\n\n  @media (min-width: 1024px) {\n    transform: rotate(90deg) translate(-30vh, 0vh);\n    font-size: 20px;\n    font-weight: 700;\n    bottom: 0;\n    top: 50%;\n    left: 45%;\n    width: auto;\n  }\n  @media (min-width: 1024px) and (max-height: 1400px) {\n    left: 30%;\n  }\n  @media (min-width: 1200px) and (max-height: 1400px) {\n    left: 40%;\n  }\n  @media (min-width: 1400px) and (max-height: 1400px) {\n    left: 50%;\n  }\n  @media (min-width: 1700px) {\n    left: 65%;\n  }\n"]);return ln=function(){return n},n}function sn(){var n=Object(b.a)(["\n  position: absolute;\n  font-size: 55px;\n  top: 0;\n  right: 0;\n  font-family: 'Montserrat', sans-serif;\n  transform: rotate(-90deg) translate(-55vw, -45vw);\n  font-weight: 900;\n  letter-spacing: 10px;\n  color: #fff;\n  z-index: 3;\n  width: 95vw;\n  @media (min-width: 768px) {\n    transform: rotate(-90deg) translate(-55vw, -15vw);\n  }\n  @media (min-width: 1024px) {\n    transform: rotate(0) translate(-50%, 0);\n    top: 20%;\n    left: 50%;\n    font-size: 60px;\n    width: 100%;\n    z-index: -1;\n    &.front {\n      color: transparent;\n      -webkit-text-stroke: 1px #fff;\n      z-index: 5;\n    }\n  }\n  @media (min-width: 1024px) and (min-height: 1200px) {\n    font-size: 90px;\n    top: 32%;\n  }\n  @media (min-width: 1200px) {\n    top: 15%;\n    font-size: 90px;\n  }\n"]);return sn=function(){return n},n}function pn(){var n=Object(b.a)(["\n  position: absolute;\n  left: 0;\n  top: 10%;\n  right: 0;\n  bottom: 0;\n  width: 85%;\n  background-image: ",";\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  z-index: 2;\n  @media (min-width: 768px) {\n    width: 70%;\n    top: 5%;\n  }\n  @media (min-width: 1024px) {\n    width: 100%;\n    top: 20%;\n    height: 60%;\n  }\n"]);return pn=function(){return n},n}function mn(){var n=Object(b.a)(["\n  font-size: 120px;\n  font-weight: 900;\n  color: transparent;\n  -webkit-text-stroke: 2px #333;\n  position: absolute;\n  top: 12%;\n  right: 0;\n  transform: translateY(-10%);\n  @media (min-width: 768px) {\n    font-size: 180px;\n  }\n  @media (min-width: 1400px) {\n    top: 5%;\n  }\n"]);return mn=function(){return n},n}function dn(){var n=Object(b.a)(["\n  position: relative;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  width: 70vw;\n"]);return dn=function(){return n},n}function un(){var n=Object(b.a)(["\n  max-width: 1600px;\n  margin: 0 auto;\n  height: 100vh;\n  width: 100vw;\n  position: relative;\n  margin-bottom: 50px;\n  @media (min-width: 1200px) {\n    margin-bottom: 100px;\n  }\n  &:nth-of-type(4) {\n    margin-bottom: 0;\n  }\n  .info01,\n  .info02,\n  .info03,\n  .info04 {\n    color: #fff;\n    height: 100vh;\n    width: 75vw;\n    position: fixed;\n    top: 0;\n    left: 0;\n    transition: 0.3s;\n    background-color: #333;\n    display: block;\n    z-index: 16;\n    opacity: 0;\n    display: flex;\n    align-items: left;\n    justify-content: center;\n    flex-direction: column;\n    padding: 20px;\n    @media (min-width: 768px) {\n      width: 70vw;\n    }\n    @media (min-width: 1800px) {\n      width: 80vw;\n    }\n    h1 {\n      font-size: ",";\n      margin-bottom: 20px;\n      letter-spacing: 1px;\n      font-weight: 700;\n      @media (min-width: 768px) {\n        font-size: 45px;\n      }\n      @media (min-width: 768px) {\n        font-size: 55px;\n      }\n      @media (min-width: 1600px) {\n        margin-bottom: 50px;\n        font-size: 75px;\n      }\n    }\n    p {\n      font-size: ",";\n      line-height: 27.5px;\n      font-weight: 300;\n      @media (min-width: 768px) {\n        font-size: 21px;\n        line-height: 34px;\n      }\n      @media (min-width: 1024px) {\n        font-size: 25px;\n        line-height: 40.5px;\n      }\n      @media (min-width: 1600px) {\n        margin-bottom: 50px;\n      }\n    }\n    &.activeInfo {\n      opacity: 1;\n    }\n  }\n"]);return un=function(){return n},n}var hn=d.c.div(un(),function(n){return n.theme.h2},function(n){return n.theme.p}),fn=d.c.div(dn()),gn=d.c.p(mn()),xn=d.c.div(pn(),function(n){return n.image}),bn=d.c.p(sn()),wn=d.c.p(ln()),vn=d.c.button(cn()),yn=function(n){function t(){var n,e;Object(c.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(a)))).state={activeButton:!1,isComputerActive:!1},e.handleActiveInfo=function(n){var t=e.props.number,i=document.querySelector(".info".concat(t)),a=document.querySelector(".hamburger");(n.target.classList[0]||n.currentTarget.classList[0])&&(i.classList.contains("info01")&&a.classList.toggle("noview"),i.classList.toggle("activeInfo")),document.body.classList.toggle("noscroll"),e.setState(function(n){return{activeButton:!n.activeButton}})},e}return Object(m.a)(t,n),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState(function(n){return{isLoaded:!n.isLoaded}}),document.body.getBoundingClientRect().width>=1024&&this.setState({isComputerActive:!0})}},{key:"render",value:function(){var n=this.state,t=n.activeButton,e=n.isComputerActive,i=this.props,o=i.project,r=i.number,c=i.aboutProject,l=i.link,s=i.technologies,p=i.imageUrlMobile,m=i.imageUrlDesktop;return a.a.createElement(hn,null,a.a.createElement(rn.a,{animateIn:"fadeInLeft",animateOnce:!0},a.a.createElement(fn,null,a.a.createElement(xn,{image:e?m:p}),a.a.createElement(gn,null,r),a.a.createElement(bn,{className:"front"},o),a.a.createElement(bn,null,o))),a.a.createElement(vn,{onClick:this.handleActiveInfo,style:{zIndex:t?"26":"1"},className:"button".concat(r)},a.a.createElement("p",null,t?"X":"Info")),a.a.createElement("div",{className:"info".concat(r)},a.a.createElement("h1",null,o),a.a.createElement("p",null,c)),a.a.createElement(vn,{className:"second"},a.a.createElement("a",{href:l},a.a.createElement(en.a,{icon:an.a}))),a.a.createElement(wn,null,s))}}]),t}(i.Component);yn.defaultProps={imageUrlDesktop:null,imageUrlMobile:null};var En=yn,kn=e(50),zn=e.n(kn),jn=e(51),On=e.n(jn),In=e(52),Cn=e.n(In),An=e(53),Sn=e.n(An),Mn=e(54),Pn=e.n(Mn),Nn=e(55),Rn=e.n(Nn),Un=e(56),Dn=e.n(Un),Ln=e(57),Tn=e.n(Ln),Fn=[{project:"COMNET",number:"01",aboutProject:"First commercial project wrote in CRA. In cooperation with my friend(UI Desiger) we've created this project from scratch. To make fast navigation I decided to use React Router. We also made some animations. This was an amazing experience to learn how animation works in React.",link:"http://www.com-net.com.pl/",imageUrlDesktop:"url(".concat(On.a,")"),imageUrlMobile:"url(".concat(zn.a,")"),technologies:"ANIMATIONS | REACT | STYLED COMPONENTS"},{project:"CONVERTER",number:"02",aboutProject:"Application created to learn how to use API. It also works in daily use. Writing code in SCSS sytax was much better and it helped me with keep my code clean. ",link:"https://github.com/marceleq27/CurrencyConverter",imageUrlMobile:"url(".concat(Cn.a,")"),imageUrlDesktop:"url(".concat(Sn.a,")"),technologies:"SCSS | REACT | JAVASCRIPT | API"},{project:"WEATHER",number:"03",aboutProject:"Simple weather app, it allows enter your city and check current weather. This was first expierience with Styled Components, and now I really love this package :)",link:"https://github.com/marceleq27/DzierzoniowWeatherApp",imageUrlMobile:"url(".concat(Pn.a,")"),imageUrlDesktop:"url(".concat(Rn.a,")"),technologies:"API | REACT | STYLED COMPONENTS"},{project:"GRAWERNIA",number:"04",aboutProject:"Shop created for my client with UI Designer. It was my first contact with e-commerce system like Prestashop, but if you read previous section you know that - I really like improvising :)",link:"https://grawerniaddz.pl",imageUrlDesktop:"url(".concat(Tn.a,")"),imageUrlMobile:"url(".concat(Dn.a,")"),technologies:"PRESTASHOP | IDENTITY | BRANDING"}];function qn(){var n=Object(b.a)(["\n  overflow-x: hidden;\n  background-color: #1e1e1e;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"]);return qn=function(){return n},n}var Bn=d.c.section(qn()),Yn=function(){return a.a.createElement(Bn,null,Fn.map(function(n){return a.a.createElement(En,{key:n.project,project:n.project,number:n.number,aboutProject:n.aboutProject,link:n.link,imageUrlDesktop:n.imageUrlDesktop,imageUrlMobile:n.imageUrlMobile,technologies:n.technologies})}))},Jn=[{id:1,header:"Just Practise",paragraph:"I finished a lot of courses, but is it a way to write the best code? Certainly not. I always try to spur my curiosity and write better and better projects. Feel free to check them."},{id:2,header:"Curiosity",paragraph:"The basis for the work of a programmer. Without this I couldn't be there. I'm sure of that. I love to learn new things and I often get lost, but would it be fun without it?"},{id:3,header:"Perfection",paragraph:"Regular work with UI/UX Designer sometimes can be hard. Always 'pixel perfect'. I've learned this and i want to continue this. Plus my clean code and we have a definition from this headline."},{id:4,header:"Impossible?",paragraph:"Doesn't exist. If I have an occasion, I always try. And if something fail - I will try as long as this work. Unfortunately, this is due to my curiosity and desire to develop.\n    Is such greed good? I don't know, it works great so far."}];function Wn(){var n=Object(b.a)(["\n  height: 100vh;\n  text-decoration: none;\n  position: relative;\n  display: block;\n\n  h1 {\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #fff;\n    font-size: 50px;\n    text-align: center;\n    font-weight: 900;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    font-family: 'Montserrat', sans-serif;\n    padding: 10px 0;\n    @media (min-width: 768px) {\n      font-size: 80px;\n    }\n    @media (min-width: 1024px) {\n      font-size: 100px;\n    }\n    &:hover {\n      &::after {\n        height: 500px;\n        z-index: -1;\n        opacity: 1;\n      }\n    }\n    &::after {\n      content: '';\n      font-weight: 300;\n      font-size: 15px;\n      line-height: 200px;\n      position: absolute;\n      color: #fff;\n      top: 50%;\n      left: 50%;\n      width: 100%;\n      height: 2px;\n      background-color: #000;\n      transition: 0.3s;\n      transform: translate(-50%, -50%);\n      opacity: 0;\n      border-radius: 8px;\n    }\n  }\n"]);return Wn=function(){return n},n}function Hn(){var n=Object(b.a)(["\n  width: 90%;\n  margin-bottom: 70px;\n  padding: 20px 0;\n  @media (min-width: 1200px) {\n    width: 80%;\n  }\n  @media (min-width: 1600px) {\n    width: 70%;\n  }\n  h2 {\n    font-weight: 700;\n    font-size: 25px;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n    line-height: 120%;\n    @media (min-width: 768px) {\n      font-size: 30px;\n      margin-bottom: 15px;\n    }\n    @media (min-width: 1024px) {\n      font-size: 40px;\n    }\n  }\n  p {\n    font-size: 15px;\n    font-weight: 300;\n    @media (min-width: 768px) {\n      font-size: 20px;\n    }\n    @media (min-width: 1024px) {\n      font-size: 20px;\n    }\n  }\n"]);return Hn=function(){return n},n}function Vn(){var n=Object(b.a)(["\n  display: grid;\n  justify-items: left;\n  align-content: center;\n  padding: 20px;\n  p {\n    line-height: 170%;\n  }\n  @media (min-width: 768px) {\n    width: 80vw;\n    grid-template-columns: repeat(2, minmax(300px, 1fr));\n    grid-column-gap: 30px;\n  }\n"]);return Vn=function(){return n},n}function Xn(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  min-height: 100vh;\n  margin-bottom: 100px;\n  width: 80vw;\n  @media (min-width: 768px) {\n    width: 60vw;\n  }\n  h1 {\n    margin-top: 50px;\n    font-weight: 900;\n    font-size: ",";\n    font-family: 'Montserrat', sans-serif;\n    letter-spacing: 3px;\n    line-height: 120%;\n    @media (min-width: 768px) {\n      font-size: 70px;\n    }\n    @media (min-width: 1024px) {\n      font-size: 80px;\n    }\n    @media (min-width: 1200px) {\n      font-size: 90px;\n    }\n    @media (min-width: 1600px) {\n      font-size: 100px;\n    }\n  }\n  p {\n    line-height: 27.5px;\n    font-size: ",";\n    /* 162% ,*1,618*/\n    /* h3 => 20px to h2=> h3 * 1.618 */\n    @media (min-width: 768px) {\n      font-size: 25px;\n      line-height: 40.5px;\n    }\n    @media (min-width: 1024px) {\n      font-size: 35px;\n      line-height: 56.5px;\n    }\n    @media (min-width: 1400px) {\n      font-size: 35px;\n    }\n  }\n"]);return Xn=function(){return n},n}function Kn(){var n=Object(b.a)(["\n  background-color: #1c1c1c;\n  color: #fff;\n  padding: 0 10vw;\n"]);return Kn=function(){return n},n}var Gn=d.c.section(Kn()),_n=d.c.div(Xn(),function(n){return n.theme.h1},function(n){return n.theme.p}),Zn=d.c.section(Vn()),Qn=d.c.div(Hn()),$n=d.c.a(Wn()),nt=function(){return a.a.createElement(Gn,null,a.a.createElement(_n,null,a.a.createElement("h1",null,"Hi, let's get to know each other."),a.a.createElement("p",null,"I'am Marcel, since more than year I'm learning and coding as a Front End Developer. Currently I'm searching for an awesome projects. Maybe you have one?")),a.a.createElement(Zn,null,Jn.map(function(n){var t=n.id,e=n.header,i=n.paragraph;return a.a.createElement(rn.a,{key:t,animateOnce:!0,animateIn:"fadeInUp",offset:60},a.a.createElement(Qn,{key:t},a.a.createElement("h2",null,e),a.a.createElement("p",null,i)))})),a.a.createElement(rn.a,{animateOnce:!0,animateIn:"fadeInUp",offset:60},a.a.createElement($n,{as:u.b,to:"/contact"},a.a.createElement("h1",null,"Contact"))))},tt=[{id:1,href:"mailto:marcel.bednarz16@gmail.com",icon:an.c},{id:2,href:"tel:696-533-998",icon:an.d},{id:3,href:"https://github.com/marceleq27",icon:an.b},{id:4,href:"https://linkedin.com/in/marcel-bednarz16",icon:a.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",className:"svg-inline--fa fa-linkedin-in fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.a.createElement("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))}];function et(){var n=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20vh;\n  background-color: #1c1c1c;\n  border-top: 2px solid #1c1c1c;\n  color: #fff;\n  width: 100%;\n  text-align: center;\n  padding: 5px 0;\n  font-size: 15px;\n  font-family: 'Montserrat', sans-serif;\n  transition: 0.3s;\n  opacity: 0;\n  z-index: -1;\n  &.active {\n    opacity: 1;\n    z-index: 5;\n    section {\n      overflow: visible;\n    }\n  }\n  .close {\n    border: none;\n    background-color: transparent;\n    color: #fff;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 15px;\n    svg {\n      font-size: 30px;\n    }\n  }\n  p {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -55%);\n    font-size: 20px;\n    letter-spacing: 1px;\n  }\n"]);return et=function(){return n},n}function it(){var n=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  border: none;\n  padding: 10px;\n  border-radius: 30%;\n  cursor: pointer;\n  transition: 0.2s;\n  &:hover {\n    padding: 25px;\n    background-color: #000;\n  }\n  &:hover svg {\n    transform: scale(1.5);\n    color: #fff;\n  }\n  svg {\n    transition: 0.3s;\n    padding: 5px;\n    font-size: 45px;\n    color: #1c1c1c;\n  }\n"]);return it=function(){return n},n}function at(){var n=Object(b.a)(["\n  height: 20vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n"]);return at=function(){return n},n}function ot(){var n=Object(b.a)(["\n  height: 80vh;\n  background-color: transparent;\n  position: relative;\n  overflow: hidden;\n  p:first-child {\n    -webkit-text-stroke: 0.5px #000;\n    color: transparent;\n    font-size: 450px;\n    position: absolute;\n    top: 25%;\n    font-size: 100px;\n    @media (min-width: 1024px) {\n      font-size: 300px;\n      top: 15%;\n    }\n    @media (min-width: 1400px) {\n      font-size: 450px;\n    }\n  }\n  p {\n    text-align: center;\n    color: #000;\n    font-weight: 900;\n    font-family: 'Montserrat', sans-serif;\n    font-size: ",";\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    text-transform: uppercase;\n    transform: translate(-50%, -50%);\n    @media (min-width: 768px) {\n      font-size: 50px;\n      top: 15%;\n    }\n    @media (min-width: 1024px) {\n      font-size: 80px;\n    }\n    span {\n      position: absolute;\n      transform: translateX(-50%);\n      width: 100vw;\n      opacity: 1;\n      letter-spacing: 3px;\n      font-size: 100px;\n      &:nth-of-type(1) {\n        animation: "," 9s infinite both;\n      }\n      &:nth-of-type(2) {\n        animation: "," 9s 3s infinite both;\n      }\n      &:nth-of-type(3) {\n        animation: "," 9s 6s infinite both;\n      }\n      @media (min-width: 1024px) {\n        font-size: 300px;\n      }\n      @media (min-width: 1400px) {\n        font-size: 450px;\n      }\n    }\n  }\n"]);return ot=function(){return n},n}function rt(){var n=Object(b.a)(["\n 0%{\n   opacity:0;\n }\n 30%{\n   opacity:1;\n }\n 35%{\n   opacity:0;\n }\n 100%{\n   opacity:0;\n }\n"]);return rt=function(){return n},n}var ct=Object(d.d)(rt()),lt=d.c.section(ot(),function(n){return n.theme.h2},ct,ct,ct),st=d.c.footer(at()),pt=d.c.button(it()),mt=d.c.div(et()),dt=function(n){function t(){var n,e;Object(c.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(a)))).state={},e.handleEmail=function(){document.querySelector(".mail").classList.toggle("active")},e.handlePhone=function(){document.querySelector(".phone").classList.toggle("active")},e}return Object(m.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(lt,null,a.a.createElement("p",null,"Let's"),a.a.createElement("p",null,a.a.createElement("span",null,"talk"),a.a.createElement("span",null,"work"),a.a.createElement("span",null,"meet"))),a.a.createElement(st,null,tt.map(function(t){return a.a.createElement("a",{href:t.href,key:t.id,onClick:1===t.id?n.handleEmail:2===t.id?n.handlePhone:null},a.a.createElement(pt,{type:"button"},4===t.id?t.icon:a.a.createElement(en.a,{icon:t.icon})))}),a.a.createElement(mt,{className:"mail"},a.a.createElement("p",null,"marcel.bednarz16@gmail.com"),a.a.createElement("button",{type:"button",className:"close",onClick:this.handleEmail},a.a.createElement(en.a,{icon:an.e}))),a.a.createElement(mt,{className:"phone"},a.a.createElement("p",null,"+48 696 533 998"),a.a.createElement("button",{type:"button",className:"close",onClick:this.handlePhone},a.a.createElement(en.a,{icon:an.e})))))}}]),t}(i.Component),ut={h1:"45px",h2:"28px",h3:"17px",h4:"10.5px",p:"17px"},ht=function(n){function t(){var n,e;Object(c.a)(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(a)))).state={},e}return Object(m.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(d.a,{theme:ut},a.a.createElement(x.ParallaxProvider,null,a.a.createElement(u.a,{basename:""},a.a.createElement(v,null),a.a.createElement(C,null),a.a.createElement(tn,null),a.a.createElement(h.a,{render:function(n){var t=n.location;return a.a.createElement(f.a,null,a.a.createElement(g.a,{key:t.key,classNames:"fade",timeout:500},a.a.createElement(h.c,{location:t},a.a.createElement(h.a,{exact:!0,path:"/",component:H}),a.a.createElement(h.a,{path:"/information",component:nt}),a.a.createElement(h.a,{path:"/about",component:Yn}),a.a.createElement(h.a,{path:"/contact",component:dt}))))}}))))}}]),t}(i.Component);r.a.render(a.a.createElement(ht,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.c0e596aa.chunk.js.map