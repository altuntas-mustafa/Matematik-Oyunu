let sayi1,sayi2,sonuc,dogru=0,yanlis=0,islem;
 sayi1 = document.getElementById("sayi1");
 sayi2 = document.getElementById("sayi2");
 islem= document.getElementById("islem");
 sonuc= document.getElementById("sonuc");
 dogru = document.getElementById("p1");
 yanlis = document.getElementById("p2");
 
 function randomInt1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function yenisoru() {
    let liste = [
        "+" , "-", "/", "*"
    ];
    islem.textContent= liste[randomInt1(0,3)];
    sayi1.textContent = randomInt1(0,100);
    sayi2.textContent = randomInt1(0,100);
    if (islem.textContent=="/") {
        while (true) {
            sayi2.textContent = randomInt1(0,100);
            if (sayi1.textContent%sayi2.textContent == 0)
                 {break;}
        }
    
    }
}
window.onload = function() {
    yenisoru();
}




function myFunction() {
    let cevap=0,s1,s2;
    s1 = Number(sayi1.textContent);
    s2 = Number( sayi2.textContent );
    switch (islem.textContent){
        case '+' : cevap = s1+s2;break;
        case "-" : cevap = s1-s2;break;
        case "/" : cevap = s1/s2;break;
        case "*" : cevap = s1*s2;break;
        default:break;
    }
    if (sonuc.value == cevap) {
        dogru.textContent = Number(dogru.textContent) + 1 ;
    } 
    else {
        yanlis.textContent = Number (yanlis.textContent) + 1 ;
        window.alert("!!! Yanlış Sayısını Daha da Artırmamaya Özen Gösterelim :D ")
    }
    yenisoru()
}




    