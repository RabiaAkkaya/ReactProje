import Header from "./Header"
import ReactDOM from 'react-dom/client';
import Basvuru from "./Sayfalar/Basvuru";
import Basvuru2 from "./Sayfalar/Basvuru2";
import Basvuru3 from "./Sayfalar/Basvuru3";
import Home from "./Sayfalar/Home";
import Giris from "./Sayfalar/Giris";
import Kayit from "./Sayfalar/Kayit";
import Hakkinda from "./Sayfalar/Hakkinda";
import Onizleme from "./Sayfalar/Onizleme";
import Sidebar from "./Sayfalar/SidebarPortal";



export function goster(eleman)
{
    const icerik = ReactDOM.createRoot(document.getElementById('icerik'));
    const portalicerik = ReactDOM.createRoot(document.getElementById('portalicerik'));    
    const sidebar = ReactDOM.createRoot(document.getElementById('sidebar'));
    const header = ReactDOM.createRoot(document.getElementById('header'));
    
if(eleman=="Erasmus Başvuru")
{
    document.getElementById("header").style.display="none";
    document.getElementById("icerik").style.display="none"
   
    sidebar.render(
        <Sidebar/>
    )
    portalicerik.render(
        <Basvuru/>
    )

}
if(eleman=="Başvuru Yap")
{
   
    portalicerik.render(
         <Basvuru/>
    )

}
else if(eleman=="KHAS Anasayfa")
{
    icerik.render(
        <Home/>
    )
   
    }
else if(eleman=="Anasayfa")
{
    var isLogin=sessionStorage.getItem("isLogin");
    if(isLogin=="true")
    { sidebar.render();
        portalicerik.render();
        var kullanici = sessionStorage.getItem("user");    
        kullanici = kullanici.split(",");
        document.getElementById("header").style=""
        document.getElementById("icerik").style=""
        icerik.render(
            <Home/>
        )
   
   
    }
    else{
    icerik.render(
        <Home/>
    )
}

}
else if(eleman=="Giriş")
{
    icerik.render(
        <Giris/>
    )

}
else if(eleman=="kayit")
{
    icerik.render(
        <Kayit/>
    )

}
else if(eleman=="Erasmus Hakkında")
{
    icerik.render(
        <Hakkinda/>
    )

}
else if(eleman=="Bilgi Al")
{
    portalicerik.render(
        <Hakkinda/>
    )

}
else if(eleman=="Basvuru3")
{
    portalicerik.render(
        <Basvuru3/>
    )

}
else if(eleman=="Basvuru2")
{
    
    portalicerik.render(
        <Basvuru2/>
    )

}

else if(eleman=="Onizleme")
{
    portalicerik.render(
        <Onizleme/>
    )

}
else if(eleman=="kayit")
{
    icerik.render(
        <Kayit/>
    )

}
}
export function kayit() {
    const icerik = ReactDOM.createRoot(document.getElementById('icerik'));
    const kullanici =
    [(document.getElementById("email").value), (document.getElementById("password").value)];


const sifre2 = document.getElementById("password2").value;



const yazi = document.getElementById("sonuc");

if (kullanici[1] == sifre2) {

    yazi.innerHTML = "Hesap Oluşturuldu!";
    yazi.style.color = "green";

    sessionStorage.setItem("user", kullanici);
    setTimeout(function() {
        icerik.render(
          <Giris />
        )
      },1500)

}
else {
    yazi.innerHTML = "Şifreler Eşleşmiyor.";
    yazi.style.color = "red";
}



}
export function giris() {

    const anasayfa = ReactDOM.createRoot(document.getElementById('icerik'));
 
   
    const icerik = ReactDOM.createRoot(document.getElementById('portalicerik'));
    var kullanici = sessionStorage.getItem("user");

    if(kullanici == null){
        sessionStorage.setItem("user","");
    }

    var isLogin = false;

    kullanici = kullanici.split(",");


    const mail = document.getElementById("email").value;
    const sifre = document.getElementById("password").value;

    const yazi = document.getElementById("sonuc");

    if (mail == kullanici[0] && sifre == kullanici[1]) {

        yazi.innerHTML = "Giriş bilgileri doğru! Yönlendiriliyorsunuz..."; 
        yazi.style.color = "green";
        document.getElementById("erasmusBasvuru").style.display = ""; 
        document.getElementById("btn_div").style.display = "none";    
        document.getElementById("header_karsilama").innerHTML = "Kullanıcı: " + kullanici[0];
        document.getElementById("logout_Btn").style.display = "block";
        isLogin = true;

        sessionStorage.setItem("isLogin", isLogin);

          anasayfa.render(           
            <Home/>
          )
      
        

    }
    else {
        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
    }
    
}
export function cikis() {

    var isLogin = sessionStorage.getItem("isLogin");
  
    isLogin = false;
    document.getElementById("erasmusBasvuru").style.display = "none"; 
    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("logout_Btn").style.display = "none";
    document.getElementById("btn_div").style.display = "block";
    document.getElementById("header_karsilama").innerHTML = "";
  
  }

  export function basvuru1() {

    const portalicerik = ReactDOM.createRoot(document.getElementById('portalicerik'));
 
    const icerik = ReactDOM.createRoot(document.getElementById('icerik'));
    var engelBilgisi1;
    var isim = document.getElementById("Ad").value;
    var soyisim = document.getElementById("SoyAd").value;
    var dtarih = document.getElementById("dtarih").value;
   var email = document.getElementById("email").value;
    var uyruk1 = document.getElementById("uyruk").value;  
    var id1 = document.getElementById("IDnumber").value;
   var  uyruk2 = document.getElementById("uyruk1").value;
    var id2 = document.getElementById("IDnumber1").value;
   var uyruk3 = document.getElementById("uyruk2").value;
    var id3 = document.getElementById("IDnumber2").value;

    if (document.getElementById("engelslct").value == "2") {
        engelBilgisi1 = "Yok";
    }
    else
    {
    engelBilgisi1 = document.getElementById("EngelAciklama").value;
  
    }
    if (isim !== "" && soyisim !=="" && dtarih !== "" && email !== "" && uyruk1 !== "" && engelBilgisi1 !== "") {

          
        sessionStorage.setItem("isim", isim);
        sessionStorage.setItem("soyisim", soyisim);
        sessionStorage.setItem("dtarih", dtarih);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("id1", id1);
        sessionStorage.setItem("uyruk1", uyruk1);
        sessionStorage.setItem("id2", id2);
        sessionStorage.setItem("uyruk2", uyruk2);
        sessionStorage.setItem("id3", id3);
        sessionStorage.setItem("uyruk3", uyruk3);
;
        sessionStorage.setItem("engelBilgisi", engelBilgisi1);   
        goster("Basvuru2");
          
    }
    else {      
        document.getElementById("uyari").innerHTML = "Lütfen tüm alanları doldurunuz!";
       }}
 var adet = 1;
 export function uyrukArttir() {
    document.getElementById("uyruk" + adet).style.display = "";
    document.getElementById("IDnumber" + adet).style.display = "";
    adet++;

}
       export function engel() {
        var item1 = document.getElementById("engelslct").value;
        if (item1 == "1") {
            document.getElementById("EngelAciklama").style.display = "";
        }
        else
            document.getElementById("EngelAciklama").style.display = "none";
       }
export function basvuru2() {

    var universite = document.getElementById("UniversiteAd").value;
    var bolum = document.getElementById("bolum").value;
    var ortalama = document.getElementById("Ortalama").value;
    var belge1 = document.getElementById("CV").value;
    var belge2 = document.getElementById("NiyetMektubu").value;
    var belge3 = document.getElementById("Pasaport").value;
    var belge4 = document.getElementById("Diploma").value;
    var belge5 = document.getElementById("IngilizceY").value;
    var belge6 = document.getElementById("Ikametgah").value;
    var sinif = document.getElementById("sinif1").value;
    if (universite !== "" && bolum !== "" && ortalama !== "" && belge1 !== "" && belge2 !== "" && belge3 !== "" && belge4 !== "" && belge5 !== "" && belge6 !== "" && sinif !== "")
    {

        sessionStorage.setItem("universite", universite);
        sessionStorage.setItem("bolum", bolum);
        sessionStorage.setItem("ortalama", ortalama);
        sessionStorage.setItem("belge1", belge1);
        sessionStorage.setItem("belge2", belge2);
        sessionStorage.setItem("belge3", belge3);
        sessionStorage.setItem("belge4", belge4);
        sessionStorage.setItem("belge5", belge5);
        sessionStorage.setItem("belge6", belge6);
        sessionStorage.setItem("sinif", sinif);
        goster("Basvuru3");
    }
    else {
        
        document.getElementById("uyari").innerHTML = "Lütfen tüm alanları doldurunuz!";
    }
}
export function basvuru3() {
    var ulke = document.getElementById("ulke").value;
    var il = document.getElementById("il").value;
    var ilce = document.getElementById("ilce").value;
    var mahalle = document.getElementById("mahalle").value;
    var tel = document.getElementById("tel").value;
    if (ulke !== "" && il !== "" && ilce !== "" && mahalle !== "" && tel !== "" ) { 
  
    sessionStorage.setItem("ulke", ulke); 
    sessionStorage.setItem("il", il);    
    sessionStorage.setItem("ilce", ilce);   
    sessionStorage.setItem("mahalle", mahalle);   
    sessionStorage.setItem("tel", tel);

    }
    else {
        document.getElementById("uyari").innerHTML = "Lütfen tüm alanları doldurunuz!";
    }
}