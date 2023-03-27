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
import Iletisim from "./Sayfalar/Iletisim";
import Sidebar from "./Sayfalar/SidebarPortal";
import { onizleme } from "./Sayfalar/diziler"
import 'bootstrap/dist/css/bootstrap.min.css';
import SifreDegistir from "./Sayfalar/SifreDegistir";



export function goster(eleman) {
    const icerik = ReactDOM.createRoot(document.getElementById('icerik'));
    const portalicerik = ReactDOM.createRoot(document.getElementById('portalicerik'));
    const sidebar = ReactDOM.createRoot(document.getElementById('sidebar'));
    const header = ReactDOM.createRoot(document.getElementById('header'));

    if (eleman == "Erasmus Başvuru") {

        var kullanici = sessionStorage.getItem("user");
        kullanici = kullanici.split(",");
        document.getElementById("header").style.display = "none";
        document.getElementById("icerik").style.display = "none";
        sidebar.render(
            <Sidebar
                kullaniciadi={"Kullanıcı: " + kullanici[0]} />
        )
        portalicerik.render(
            <Basvuru />
        )

    }

    if (eleman == "Başvuru Yap") {
        var isLogin = sessionStorage.getItem("isLogin");
        if (isLogin == "true") {
            document.getElementById("header").style.display = "none";
            document.getElementById("icerik").style.display = "none";
            sidebar.render(
                <Sidebar />
            )
            portalicerik.render(
                <Basvuru />
            )
        }
        else
            alert("Lütfen giriş yapınız!");
    }
    else if (eleman == "Şifre Değiştir") {

        icerik.render(
            <SifreDegistir />
        )
    }

    else if (eleman == "Yeni Parola Al") {
        var mail = document.getElementById("email").value;
        var sifre = document.getElementById("password").value;
        var user2 = [mail, sifre];
        var kullanici = sessionStorage.getItem("user");

        if (kullanici == user2) {
            document.getElementById("kul_bilgiler").style.display = "none";
            document.getElementById("sifreDegis").style.display = "";
        }
        else
            document.getElementById("sonuc").innerHTML = "Kullanıcı bulunamadı!"


    }

    else if (eleman == "Tamamla") {
        if (document.getElementById("password1").value == document.getElementById("password2").value
            && document.getElementById("password2").value != "") {
            var kullanici = sessionStorage.getItem("user");
            kullanici = kullanici.split(",");
            var yeni_kullanici = [kullanici[0], document.getElementById("password1").value];
            sessionStorage.setItem("user", "");
            sessionStorage.setItem("user", yeni_kullanici);
            document.getElementById("sonuc1").style.color = "green";
            document.getElementById("sonuc1").innerHTML = "Şifre başarıyla değiştirildi!"

            setTimeout(() => {
                icerik.render(
                    <Giris />
                )
            }, 1000);
        }
        else
            document.getElementById("sonuc1").innerHTML = "Tekrar deneyiniz!"
    }
    else if (eleman == "KHAS Anasayfa") {

        icerik.render(
            <Home />
        )


    }
    else if (eleman == "Anasayfa") {
        var isLogin = sessionStorage.getItem("isLogin");
        if (isLogin == "true") {
            sidebar.render();
            portalicerik.render();

            document.getElementById("header").style = ""
            document.getElementById("icerik").style = ""
            icerik.render(
                <Home />
            )


        }
        else {
            icerik.render(
                <Home />
            )
        }

    }
    else if (eleman == "Giriş") {
        icerik.render(
            <Giris />
        )

    }
    else if (eleman == "kayit") {
        icerik.render(
            <Kayit />
        )

    }
    else if (eleman == "Erasmus Hakkında") {
        icerik.render(
            <Hakkinda />
        )

    }
    else if (eleman == "İletişim") {
        icerik.render(
            <Iletisim />
        )

    }
    else if (eleman == "Bilgi Al") {
        portalicerik.render(
            <Hakkinda />
        )

    }
    else if (eleman == "Basvuru3") {
        portalicerik.render(
            <Basvuru3 />
        )

    }
    else if (eleman == "Basvuru2") {

        portalicerik.render(
            <Basvuru2 />
        )

    }

    else if (eleman == "Başvuru Görüntüle") {
        const portalicerik = ReactDOM.createRoot(document.getElementById('portalicerik'));
        var isim = sessionStorage.getItem("isim");
        var soyisim = sessionStorage.getItem("soyisim");
        var email = sessionStorage.getItem("email");
        var dtarih = sessionStorage.getItem("dtarih");
        var uyruk = sessionStorage.getItem("uyruk1");
        var id = sessionStorage.getItem("id1");
        var uyruk2 = sessionStorage.getItem("uyruk2");
        var id2 = sessionStorage.getItem("id2");
        var uyruk3 = sessionStorage.getItem("uyruk3");
        var id3 = sessionStorage.getItem("id3");
        var engelbilgisi = sessionStorage.getItem("engelBilgisi");
        var universite = sessionStorage.getItem("universite");
        var bolum = sessionStorage.getItem("bolum");
        var ortalama = sessionStorage.getItem("ortalama");
        var sinif = sessionStorage.getItem("sinif");
        var belge = [sessionStorage.getItem("belge1"), sessionStorage.getItem("belge2"), sessionStorage.getItem("belge3"), sessionStorage.getItem("belge4"), sessionStorage.getItem("belge5"), sessionStorage.getItem("belge6")];
        var ulke = sessionStorage.getItem("ulke");
        var il = sessionStorage.getItem("il");
        var ilce = sessionStorage.getItem("ilce");
        var mahalle = sessionStorage.getItem("mahalle");
        var tel = sessionStorage.getItem("tel");

        const onizlenenler = [isim, soyisim, email, dtarih, uyruk, id, uyruk2, id2, uyruk3
            , id3, engelbilgisi, universite, bolum
            , ortalama, sinif, belge, ulke, il, ilce, mahalle, tel];
onizlenenler.map((eleman,index)=>
{
   if(onizlenenler[index]=="")
   {
    onizlenenler[index]="null";
   }
});      
        //  sessionStorage.getItem("belge2"),sessionStorage.getItem("belge3"),
        //  sessionStorage.getItem("belge4"), sessionStorage.getItem("belge5"), sessionStorage.getItem("belge6"),
        const icerik = ReactDOM.createRoot(document.getElementById('portalicerik'));

       
        if (onizlenenler[3]!=null) {
            portalicerik.render(
                <div className="p-1">
                    <ul className="list-group-item.disabled " style={{ fontFamily: "cursive", fontSize: "14px" }}>
                        {onizleme.map((bilgi, bilgi_index) =>
                        ( 
                            <Onizleme
                                baslik={bilgi}
                                icerik={onizlenenler[bilgi_index]}
                            />
                        ))}

                    </ul>
                </div>
            )

        }
        else
            alert("Lütfen başvuru formunu doldurunuz!");
    }



    else if (eleman == "kayit") {
        icerik.render(
            <Kayit />
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
        setTimeout(function () {
            icerik.render(
                <Giris />
            )
        }, 1500)

    }
    else {
        yazi.innerHTML = "Şifreler Eşleşmiyor.";
        yazi.style.color = "red";
    }



}
export function giris() {
    const icerik = ReactDOM.createRoot(document.getElementById('icerik'));
    var kullanici = sessionStorage.getItem("user");

    if (kullanici == null) {
        sessionStorage.setItem("user", "");
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

        icerik.render(
            <Home />
        )



    }
    else {
        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
    }

}
export function cikis2() {

    window.location.reload()

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

    var engelBilgisi1;
    var isim = document.getElementById("Ad").value;
    var soyisim = document.getElementById("SoyAd").value;
    var dtarih = document.getElementById("dtarih").value;
    var email = document.getElementById("email").value;
    var uyruk1 = document.getElementById("uyruk").value;
    var id1 = document.getElementById("IDnumber").value;
    var uyruk2 = document.getElementById("uyruk1").value;
    var id2 = document.getElementById("IDnumber1").value;
    var uyruk3 = document.getElementById("uyruk2").value;
    var id3 = document.getElementById("IDnumber2").value;

    if (document.getElementById("engelslct").value == "2") {
        engelBilgisi1 = "Yok";
    }
    else {
        engelBilgisi1 = document.getElementById("EngelAciklama").value;

    }
    if (isim !== "" && soyisim !== "" && dtarih !== "" && email !== "" && uyruk1 !== "" && engelBilgisi1 !== "") {


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
    }
}
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
    if (universite !== "" && bolum !== "" && ortalama !== "" && belge1 !== "" && belge2 !== "" && belge3 !== "" && belge4 !== "" && belge5 !== "" && belge6 !== "" && sinif !== "") {

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
    if (ulke !== "" && il !== "" && ilce !== "" && mahalle !== "" && tel !== "") {

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
export function sifreDegistir() {
}
