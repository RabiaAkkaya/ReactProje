import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Image/images.png";
function Giris() {
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
                        <input type="text" class="form-control py-2 mb-4" name="email" id="email" placeholder="E-mail address" />

                        <input type="password" class="form-control py-2 mb-4 " id="password" name="password" placeholder="Password" />

                        <div class="row mb-4">
                            <div class="col-12">
                                <button type="button" class="btn btn-info" onclick="girids()">Giriş</button><br></br>
                                <p id="sonuc"></p>
                                <button type="button" class="btn btn-link">Şifremi Unuttum</button><br></br>
                                <button type="button" class="btn btn-link">Kayıt Ol</button>

                            </div>
                        </div>

                    </div>
                    <div class="col-3 "></div>

                </div>
                <div class="col-3"></div>

            </div>
        </div>



    );
} export default Giris;