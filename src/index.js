import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <header>
        <div class="header">
      <a href="#default" class="logo"><img src="./img/logo.png"></img></a>
      <a href="#default" class="menu">Posts</a>
      <div class="header-right">
        <a class="active" href="#login">Login</a>
      </div>
    </div>
    </header>
      <section>
      <App />
      </section>
      <footer class="footer-distributed">

<div class="footer-left">

  <h3><span>Thank you for supporting us!
</span></h3>

  <p class="footer-links">
  Let's get in touch on any of these platforms.
  </p>

</div>

<div class="footer-center">


</div>

<div class="footer-right">
  <div class="footer-icons">

    <a href="#">
    <img src="./img/ico/tw.png"></img>
      </a>
    <a href="#">
    <img src="./img/ico/fb.png"></img>
      </a>
    <a href="#">
    <img src="./img/ico/br.png"></img>
      </a>
    <a href="#">
    <img src="./img/ico/git.png"></img>
      </a>

  </div>

</div>
<div className="hr4"></div>
    <div className="footer-arka-bg">
    <div className="column">
        <div className="row">
        <span className="footer-credits">
        © 2018 <span className="footer-credits2"> Şikayetvar</span>
        </span>
        </div>
        </div>
      <div className="columns">
        <div className="row">
          <span className="footer-right-text">Posts</span>
        </div>
        </div>
      </div> 
</footer>


  </React.StrictMode>,
  rootElement
);
