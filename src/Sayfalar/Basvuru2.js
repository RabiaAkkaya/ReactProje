import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import buttonleft from "../Image/next-left.png";
import buttonright from "../Image/next-right.png";
import { goster,basvuru2 } from '../Functions';

function Basvuru2() {
    return (
        <div class="row mt-1" >
            <div class="col-1"></div>
            <div class="col-10  shadow-lg p-3 mb-1 bg-white rounded p-2" style={{ height: "950px",width:"950px" }}>

                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">

                        <div class="row mb-2 ">

                            <div class="col-12 mb-2">
                                <h5 class="mb-4">EĞİTİM BİLGİLERİ:</h5>

                                <input type="text" class="form-control py-2 mb-2 " id="UniversiteAd" placeholder="Universite Adı Giriniz" />
                                <input type="text" class="form-control py-2 mb-2" id="bolum" placeholder="Bölüm Bilgisi Giriniz" />
                                <input type="number" class="form-control py-2 mb-2" id="Ortalama" placeholder="Ortalama Giriniz" />
                            </div>

                            <div class="col-12">
                                <h7>Mezuniyet Tarihini Giriniz:</h7>
                            </div>
                            <div class="col-12">
                                <input type="date" class="form-control py-2 mb-2" id="Mtarih" />

                            </div>
                        </div>

                        <div class="row mb-2 ">
                            <div class="col-12 ">
                                <select class="form-select form-select-sm-1 py-2 mb-1" aria-label=".form-select-sm example" id="sinif1">
                                    <option selected="">Lütfen Sınıf Bilgisi girin</option>
                                    <option value="1.Sınıf" id="1">1.Sınıf</option>
                                    <option value="2.Sınıf" id="2">2.Sınıf</option>
                                    <option value="3.Sınıf" id="3">3.sınıf</option>
                                    <option value="4.Sınıf" id="4">4.sınıf</option>
                                    <option value="Mezun" id="5">Mezun</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-2 ">
                            <div class="col-5 ">
                                <p>CV:</p><hr></hr><p class="p-form-control  ">Niyet Mektubu:</p><hr></hr><p>Pasaport:</p><hr></hr><p>Diploma:</p><hr></hr><p>İngilizce Yeterlilik Sınavı:</p><hr></hr><p>İkametgah:</p><hr></hr>
                                <label style={{ color: "green" }}>Sadece Pdf Dosyaları*</label>
                            </div>
                            <div class="col-7 ">
                                <input type="file" class="form-control py-2 mb-3" id="CV" accept=".pdf, .PDF" />
                                <input type="file" class="form-control py-2 mb-3" id="NiyetMektubu" accept=".pdf, .PDF" />
                                <input type="file" class="form-control py-2 mb-3" id="Pasaport" accept=".pdf, .PDF" />
                                <input type="file" class="form-control py-2 mb-3" id="Diploma" accept=".pdf, .PDF" />
                                <input type="file" class="form-control py-2 mb-3" id="IngilizceY" accept=".pdf, .PDF" />
                                <input type="file" class="form-control py-2 mb-3" id="Ikametgah" accept=".pdf, .PDF" />


                            </div>
                            <div class="row mt-2 ">
                                <div class="col-4"></div>
                                <div class="col-8">
                                <div class="col-12"><p id="uyari" style={{ color: "red" }}></p></div>                                                          
                                </div>

                            </div>

                            <div class="row mt-2 mb-2 ">
                                <div class="col-2"></div>
                                <div class="col-2" style={{ width: "100px", height: "100px", backgroundImage: `url(${buttonleft})` }} onClick={() => goster("Başvuru Yap")}></div>
                                <div class="col-4"></div>
                                <div class="col-3" style={{ width: "100px", height: "100px", backgroundImage: `url(${buttonright})` }} onClick={() =>basvuru2()}></div>
                            </div>
                        </div>


                    </div>
                    <div class="col-1"></div>

                </div>

            </div>





            <div class="col-2"></div>
        </div>





    );
}
export default Basvuru2;