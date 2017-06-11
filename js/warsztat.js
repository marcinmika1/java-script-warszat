
    'use strict';


var objekt = {"pracownicy":[
{"firstName": "Krystian", "lastName": "Dziopa"},
{"firstName": "Anna", "lastName": "Szapiel"},
{"firstName": "Piotr", "lastName": "Żmuda"}
]
};

//console.log(objekt);


//var obj = JSON.parse(objekt);


function iteracjaPracownikow()

{
    for (var i=0; i<objekt.pracownicy.length; i++) {
        console.log(objekt.pracownicy[i].firstName);
    }
}

iteracjaPracownikow();
//**********************************

jsonPracownicy.pracownicy.forEach( function (el, i) {
    console.log("Pracownik " + i + " :" + el.firstName + "  " + el.lastName);
});


//to samo tylko w foreach