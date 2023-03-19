import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import buttonleft from "../Image/next-left.png";
 import { goster } from '../Functions';

function Onizleme(props) {
    return (
        <div class="row mt-2">
<div class="col-1"></div>
<div class="col-10  shadow-lg p-3 mb-1 bg-white rounded p-2"style={{height:"950px",width:"950px"}}>

<div class="row ">
                                <div class="col-1"></div>
                                <div class="col-10">
                                    <div class="row ">
                                        <div class="col-2"></div>
                                        <div class="col-8" style={{alignItems:"center"}}>
                                            <h5 class="mb-4">{props.baslik}</h5>
                                              <label>{props.icerik}</label>                                 
                                          
                                          

                                            <div class="row ">
                                                <div class="col-4"></div>
                                                <div class="col-6"><button type="button" class="btn btn-dark mb-4 mt-4 ">Başvuruyu Tamamla</button></div>
                                                <div class="col-2"></div>



                                            </div>
                                         
                                         <div class="col-2"style={{width:"100px",height:"100px", backgroundImage:`url(${buttonleft})`}} onClick={()=>goster("Erasmus Başvuru")}></div>



                                        </div>
                                        <div class="col-2"></div>

                                    </div>
                                <div class="col-1"></div>
                            </div>

                        </div>
                    
                    </div>
                 


    

<div class="col-2"></div>
</div>


        
               

            );
}
            export default Onizleme;