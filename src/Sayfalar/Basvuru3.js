import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Basvuru3() {
    return (
<div class="row shadow-lg  mb-2 bg-white rounded p-5">
                <div class="col-3"></div>
                <div class="col-6">
                    <div class="container align-items-center">
                        <h6>ADRES BİLGİLERİ:</h6>

                        <p class="form-control py-2 mb-4">
                            <input type="text" class="form-control py-2 mb-2" id="ulke" placeholder="Ülke Giriniz"/>
                            <input type="text" class="form-control py-2 mb-2" id="il" placeholder="il Giriniz"/>
                            <input type="text" class="form-control py-2 mb-2" id="ilce" placeholder="ilçe Giriniz"/>
                            <input type="text" class="form-control py-2 mb-2" id="mahalle" placeholder="Mahalle Giriniz"/>

                        </p>

                        <label class="mb-2">Telefon Numarası:</label>
                        <input type="text" class="form-control py-2 mb-4" id="tel" placeholder="(5XX)-XXX-XX-XX"/>

                    </div>
                    <div class="row">
                        <div class="col-1"><a style={{color:"black"}} href="basvuru2.html"><i class="fa-solid fa-circle-chevron-left fa-3x"></i></a></div>
                        <div class="col-10 text-center"><p id="uyari" style={{color:"red"}}></p></div>
                        <div class="col-1"><button type="button" onclick="basvuru3()" style={{border:"0px",backgroundColor:"white"}}></button></div>


                    </div>
                </div>
            </div>

    );
} 
export default Basvuru3;
