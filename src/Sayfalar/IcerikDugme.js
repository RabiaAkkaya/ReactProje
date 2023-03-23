import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import buttonright from "../Image/next-right.png";
import {basvuru1,goster} from '../Functions';




function IcerikDugme() {
    return (        
     
                            <div class="row">
                            <div class="col-10"></div>
                            
                            <div class="col-2 " style={{width:"100px",height:"100px", backgroundImage:`url(${buttonright})`}} onClick={()=>basvuru1()}></div>
                            </div>
      
    );
}
export default IcerikDugme;