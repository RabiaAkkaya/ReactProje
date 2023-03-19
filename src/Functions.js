import Header from "./Header"
import ReactDOM from 'react-dom/client';
import Basvuru from "./Sayfalar/Basvuru";
import Home from "./Sayfalar/Home";
import Giris from "./Sayfalar/Giris";
import Kayit from "./Sayfalar/Kayit";
import Hakkinda from "./Sayfalar/Hakkinda";
import Basvuru2 from "./Sayfalar/Basvuru2";
import Basvuru3 from "./Sayfalar/Basvuru3";
import Onizleme from "./Sayfalar/Onizleme";


export function goster(eleman)
{
    const govde = ReactDOM.createRoot(document.getElementById('portalicerik'));
    const ansyf_govde = ReactDOM.createRoot(document.getElementById('icerik'));
if(eleman=="Erasmus Başvuru")
{
    ansyf_govde.render(
        <Basvuru/>
    )

}
else if(eleman=="Anasayfa")
{
    ansyf_govde.render(
        <Home/>
    )

}
else if(eleman=="Giriş")
{
    ansyf_govde.render(
        <Giris/>
    )

}
else if(eleman=="kayit")
{
    ansyf_govde.render(
        <Kayit/>
    )

}
else if(eleman=="Erasmus Hakkında")
{
    ansyf_govde.render(
        <Hakkinda/>
    )

}
else if(eleman=="Basvuru3")
{
    ansyf_govde.render(
        <Basvuru3/>
    )

}
else if(eleman=="Basvuru2")
{
    ansyf_govde.render(
        <Basvuru2/>
    )

}
else if(eleman=="Onizleme")
{
    ansyf_govde.render(
        <Onizleme/>
    )

}
else if(eleman=="kayit")
{
    ansyf_govde.render(
        <Kayit/>
    )

}
}
export function kayit() {

   var kullanici =
        [(document.getElementById("email").value), (document.getElementById("password").value)];

    var sifre2 = document.getElementById('password2').value;
    var sifre = document.getElementById('password').value;
    if (sifre == sifre2) {
        sessionStorage.setItem("user", kullanici);
        document.getElementById("sonuc").style.color = "green";
        document.getElementById("sonuc").innerHTML = "Kayıt Başarılı";
       

    }
    else {
        document.getElementById("sonuc").style.color = "red";
        document.getElementById("sonuc").innerHTML = "Lütfen Kayıt Bilgilerini Kontrol Ediniz!";
        this.refresh();
    }
}