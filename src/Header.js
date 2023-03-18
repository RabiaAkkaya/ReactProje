import 'bootstrap/dist/css/bootstrap.min.css';
import { goster } from './Functions';
import logo from "./Image/logo4.png";
import { Anasyf_menu } from './Sayfalar/diziler';

function Header()
{
    return(
        <>
        <div className="row"style={{backgroundColor:"#f0f8ff"}}>
<div className="col-1"></div>
<div className="col-10">

<header className="d-flex flex-wrap align-items-center  justify-content-md-between py-3  border-bottom">       
<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"style={{fontFamily:"fantasy",fontSize:"25px"}}>
<img src={logo}style={{width:"150px"}}/>
{Anasyf_menu.map((eleman)=>(
 <li><a href="#" className="nav-link px-3 link-secondary"onClick={()=>goster(eleman)}>{eleman}</a></li>
))}
 
</ul>

<div className="col-md-3 ">
  <button type="button" className="btn btn-dark me-2" onClick={()=>goster("Giriş")}>Giriş</button>
  <button type="button" className="btn btn-primary"onClick={()=>goster("kayit")}>Kayıt Ol</button>
</div>

</header>
</div>
        </div>
        <div className="col-1"></div>

 </>
    )
}
export default Header;