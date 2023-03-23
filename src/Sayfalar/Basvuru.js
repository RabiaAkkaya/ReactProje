import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import buttonright from "../Image/next-right.png";
import {basvuru1,goster,engel,uyrukArttir} from '../Functions';




function Basvuru() {
    return (
        
            <div class="row"id="basvurudiv1">

                <div class="col-1"></div>
                <div class="col-10  shadow-lg p-3 mb-2 bg-white rounded m-2 " style={{height:"950px",width:"950px"}}>
                <div class="row mx-auto mb-4">
                    
                        
                        <h2 class="text-center">Erasmus Başvuru Ekranı</h2><br></br>
                        <h5>Kişisel Bilgiler:</h5>

                        <input type="text" class="form-control py-2 mb-2" id="Ad" placeholder="İsim Giriniz" />
                        <input type="text" class="form-control py-2 mb-2" id="SoyAd" placeholder="Soyad Giriniz" />
                        <div class="col-12">
                            <h7 >Doğum Tarihini Giriniz:</h7>
                        </div>
                        <input type="date" class="form-control py-2 mb-4" id="dtarih" placeholder="Doğum Tarihi Giriniz" />
                        <input type="email" class="form-control py-2 mb-4" id="email" placeholder="Email" />

                        <h7 class="form-control mb-2">

                            <input type="text" class="form-control py-2 mb-2" id="uyruk" placeholder="Uyruk Giriniz" />
                            <input type="text" class="form-control py-2 mb-4" id="IDnumber" placeholder="ID Number Giriniz" />
                            <input type="text" class="form-control py-2 mb-2" style={{ display: "none" }} id="uyruk1" placeholder="Uyruk Giriniz" />
                            <input type="text" class="form-control py-2 mb-4" style={{ display: "none" }} id="IDnumber1" placeholder="ID Number Giriniz" />
                            <input type="text" class="form-control py-2 mb-2" style={{ display: "none" }} id="uyruk2" placeholder="Uyruk Giriniz" />
                            <input type="text" class="form-control py-2 mb-4" style={{ display: "none" }} id="IDnumber2" placeholder="ID Number Giriniz" />
                         
                            <div class="row">
                                <div class="col-4"></div>
                                <div class="col-4 md-1"> <button type="button" class="btn btn-dark mb-2 " id="uyruk_btn" onClick={()=>uyrukArttir()} > Farklı uyruk bilgisi için tıklayınız.</button></div>
                                <div class="col-4"></div>


                            </div>
                        </h7>
                        <div class="col-12 ">
                            <select class="form-select form-select-sm-1 py-2 mb-1" aria-label=".form-select-sm example" id="engelslct" onChange={()=>engel()}>
                                <option selected="">Lütfen Engel Bilgisi Girin</option>
                                <option value="1">Var</option>
                                <option value="2">Yok</option>

                            </select>
                            <textarea class="form-control py-2 mb-2" id="EngelAciklama" style={{ display: "none" }} placeholder="Açıklama giriniz"></textarea>

                            <div class="row">

                                <div class="col-4"></div>
                                <div class="col-7"><p id="uyari" style={{ color: "red" }}></p></div>


                            </div>
                            <div class="row">
                            <div class="col-10"></div>
                            
                            <div class="col-2 " style={{width:"100px",height:"100px", backgroundImage:`url(${buttonright})`}} onClick={()=>basvuru1()}></div>
                            </div>
                            
                     
                        </div>
                    </div>
                    </div>                 

                
            </div>


      
    );
}
export default Basvuru;