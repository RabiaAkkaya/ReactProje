import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sidebar_menu } from './diziler';
import { goster } from '../Functions';


function Sidebar() {  
    function hover(eleman)
    {
    document.getElementById(eleman).style.backgroundColor="gray";
    }
    function out(eleman)
    {
    document.getElementById(eleman).style.backgroundColor="white";
    }

    return (        
<div class="row">
            <div class="d-flex flex-column flex-shrink-0 p-3  text-white bg-dark " style={{width:"100%",height:"750px",fontFamily:"fantasy"}}>                                
                    <p  style={{fontSize:"40px"}}>Başvuru Sistemi</p>            
                <hr></hr>
                    <ul class="mb-auto my-3"style={{fontSize:"25px",listStyle:"none"}}>
                    
                            {sidebar_menu.map((eleman)=>(
                               <li class="mb-2">
                               <a href={"#"}  id={eleman} onMouseOver={()=>hover(eleman)} onMouseLeave={()=>out(eleman)} onClick={()=>goster(eleman)}
                              
                               className="btn btn-lg btn-light mx-3 my-2"
                            
                               >{eleman}</a>

                                 </li>

                              ))}
                          
                          
                            
                     
                        
                    </ul>
                    <hr></hr>

                    </div> 
                    </div>
                );
}
export default Sidebar;