//
//    'use strict';
//
//
//var objekt = {"pracownicy":[
//{"firstName": "Krystian", "lastName": "Dziopa"},
//{"firstName": "Anna", "lastName": "Szapiel"},
//{"firstName": "Piotr", "lastName": "Żmuda"}
//]
//};
//
////console.log(objekt);
//
//
////var obj = JSON.parse(objekt);
//
//
//function iteracjaPracownikow()
//
//{
    'use strict';

//    'use strict';
//    for (var i=0; i<objekt.pracownicy.length; i++) {
//        console.log(objekt.pracownicy[i].firstName);
//    }
//}
//
//iteracjaPracownikow();
////**********************************
//
//jsonPracownicy.pracownicy.forEach( function (el, i) {
//    console.log("Pracownik " + i + " :" + el.firstName + "  " + el.lastName);
//});
//*****************************************
/*zadanie z pdf materialy-dom zad 1*/
function klik(){
    document.getElementsByTagName('p')[0].style.backgroundColor='red';
    document.getElementsByTagName('p')[1].style.backgroundColor='red';
    
    
    console.log('kliknolem');
}

document.getElementsByTagName('button')[0].onclick=klik;

//*********************************
//ZADANIE 2 



function pobierzImie(event) {
    event.preventDefault();
    
    console.log(document.getElementsByName('fname')[0].value);
    console.log(document.getElementsByName('lname')[0].value);
    
}



//document.getElementsByTagName('input')[2].onclick=pobierzImie;




















//to samo tylko w foreach