import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import buttonleft from "../Image/next-left.png";
import { goster,basvuru3 } from '../Functions';
import buttonright from "../Image/next-right.png";
function Basvuru3() {
    return (
        <div class="row shadow-lg  mb-2 bg-white rounded p-5 " style={{height:"950px",width:"950px"}}>
            <div class="col-3"></div>
            <div class="col-6">
                <div class="container align-items-center">
                    <h6>ADRES BİLGİLERİ:</h6>

                    <p class="form-control py-2 mb-4">
                        <input type="text" class="form-control py-2 mb-2" id="ulke" placeholder="Ülke Giriniz" />
                        <input type="text" class="form-control py-2 mb-2" id="il" placeholder="il Giriniz" />
                        <input type="text" class="form-control py-2 mb-2" id="ilce" placeholder="ilçe Giriniz" />
                        <input type="text" class="form-control py-2 mb-2" id="mahalle" placeholder="Mahalle Giriniz" />

                    </p>

                    <label class="mb-2">Telefon Numarası:</label>
                    <input type="text" class="form-control py-2 mb-4" id="tel" placeholder="(5XX)-XXX-XX-XX" />

                </div>
                <div class="row mt-4 mb-2 ">
              
                          <div class="col-1"></div>
                          <div class="col-3"style={{width:"100px",height:"100px", backgroundImage:`url(${buttonleft})`}} onClick={()=>goster("Basvuru2")}></div>
                          <div class="col-4"></div>                            
                          <div class="col-3" style={{width:"100px",height:"100px", backgroundImage:`url(${buttonright})`}} onClick={()=>basvuru3()}></div>
                          </div>
                      </div>


                    <div class="col-1"></div>
                    
                </div>
        


    );
}
export default Basvuru3;
