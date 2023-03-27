import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Home from './Sayfalar/Home';
import bg from './Image/redes.jpg';
import { goster } from './Functions';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="anasayfa">
      <div id="header" className="row">
        <Header />
      </div>
      <div className="row" style={{ backgroundImage: `url(${bg})` }} >
        <div id="sag" className="col-2" ></div>
        <div id="icerik" className="col-8" ><Home /></div>
        <div id="sol" className="col-2"></div>
      </div>
    </div>
    <div id="portal">
    <div class="row  ">
      <div className='col-3' id="sidebar">      
      </div>
  
      <div className="col-8" id='portalicerik'></div>

      
      <div className='col-1'></div>
    </div>
    </div>
    <div className='row' id="footer" style={{ fontFamily: "fantasy", fontSize: "20px" }}>
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item m-2" onClick={()=>goster("kayit")}><a class="nav-link px-2 text-muted"><font style={{ vertical: "inherit" }}><font style={{ vertical: "inherit" }}>Kayıt</font></font></a></li>
          <li class="nav-item m-2" onClick={()=>goster("Giriş")}><a class="nav-link px-2 text-muted"><font style={{ vertical: "inherit" }}><font style={{ vertical: "inherit" }}>Giriş</font></font></a></li>
          <li class="nav-item m-2"  onClick={()=>goster("Erasmus Hakkında")}><a class="nav-link px-2 text-muted"><font style={{ vertical: "inherit" }}><font style={{ vertical: "inherit" }}>Erasmus Hakkında  </font></font></a></li>

        </ul>
        <p class="text-center text-muted"><font style={{ vertical: "inherit" }}><font style={{ vertical: "inherit" }}>© 2023 Kadir Has Universitesi</font></font></p>
      </footer>

    </div>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
