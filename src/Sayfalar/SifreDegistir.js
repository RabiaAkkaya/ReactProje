import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Image/images.png";
import { sifreDegistir} from '../Functions';
function SifredDegistir() {
    return (



        <div class="row ">
            <div class="col-3"></div>

            <div class="col-6 shadow-lg p-3 mb-5 bg-white rounded text-center mt-2 "style={{height:"600px"}}>
                <div class=" d-flex justify-content-center mb-4 ">
                    <img src={logo} width="100" height="100" />
                </div>

                <h2 style={{ color: "darkslategrey" }}>Giriş Sayfası</h2><br></br>

                <div class="row mx-auto mb-4">
                    <div class="col-3 "></div>
                    <div class="col-6 ">
                        <div id="kul_bilgiler "style={{display:"none"}}>
                        <input type="text" class="form-control py-2 mb-4" name="email" id="email" placeholder="E-mail address" />

                        <input type="password" class="form-control py-2 mb-4 " id="password" name="password" placeholder="Password" />
                        </div>
                        <div id="sifreDegis">
                        <input type="password" class="form-control py-2 mb-4 " id="password" name="password" placeholder="New Password" />
                        <input type="password" class="form-control py-2 mb-4 " id="password" name="password" placeholder="New Password Again" />


                        </div>
                        <div class="row mb-4">
                            <div class="col-12">
                                <button type="button" class="btn btn-info" onClick={()=>sifreDegistir()}>Şifre Değiştir</button><br></br>
                                <p id="sonuc"></p>                               
                                <button type="button" class="btn btn-link">Giriş</button>

                            </div>
                        </div>

                    </div>
                    <div class="col-3 "></div>

                </div>
                <div class="col-3"></div>

            </div>
        </div>



    );
} export default SifreDegistir;