const cube = document.querySelector('.cube');
const cube1 = document.querySelector('.cube1');
const cube2 = document.querySelector('.cube2');
const cube3 = document.querySelector('.cube3');
const time = 2;
element = document.getElementById('partes_topy');
element.style.display = 'none';  
/*

cube.addEventListener('click', () => {
    cube.style.transition = '';
    cube.style.transform = `translateY(200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    setTimeout(() => {
        cube.style.transition = `transform ${time}s`;
        const randomValue = Math.floor((Math.random() * 6) + 1);
        console.log(`randomValue: ${randomValue}` );
        
        switch(randomValue) {
            case 1:             
                cube.style.transform = `translateY(200px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 2:
                cube.style.transform = `translateY(200px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 3:
                cube.style.transform = `translateY(200px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                break;
            case 4:
                cube.style.transform = `translateY(200px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                break;
            case 5:
                cube.style.transform = `translateY(200px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 6:
                cube.style.transform = `translateY(200px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                break;
        };
    }, time * 10);

});
cube2.addEventListener('click', () => {
    cube2.style.transition = '';
    cube2.style.transform = `translateY(200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    setTimeout(() => {
        cube2.style.transition = `transform ${time}s`;
        const randomValue = Math.floor((Math.random() * 6) + 1);
        console.log(`randomValue: ${randomValue}` );
        
        switch(randomValue) {
            case 1:             
                cube2.style.transform = `translateY(200px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 2:
                cube2.style.transform = `translateY(200px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 3:
                cube2.style.transform = `translateY(200px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                break;
            case 4:
                cube2.style.transform = `translateY(200px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                break;
            case 5:
                cube2.style.transform = `translateY(200px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 6:
                cube2.style.transform = `translateY(200px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                break;
        };
    }, time * 10);

});
*/
function tirarDado(cube){
    cube.style.transition = '';
    cube.style.transform = `translateY(200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    setTimeout(() => {
        cube.style.transition = `transform ${time}s`;
        const randomValue = Math.floor((Math.random() * 6) + 1);
        console.log(`randomValue: ${randomValue}` );
        
        switch(randomValue) {
            case 1:             
                cube.style.transform = `translateY(200px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 2:
                cube.style.transform = `translateY(200px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 3:
                cube.style.transform = `translateY(200px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                break;
            case 4:
                cube.style.transform = `translateY(200px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                break;
            case 5:
                cube.style.transform = `translateY(200px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 6:
                cube.style.transform = `translateY(200px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                break;
        };
    }, time * 10);

}
var tiempo=["por 2 minutos","por 5 minutos","por 7 minutos","por 10 minutos","hasta que la persona quiera","hasta acabar"]
var partes_topy=["la pija","los huevos","el cuello","el torso","la boca","el pelo"]
var partes_gia=["la concha","las tetas","el culo","las piernas","el pelo","la boca"]
var accion=["Chupar","Pajear/Masajear","Dar besos en","Acariciar","Lamer","???69???"]
var texto='';  
function juego2(gia) {
	if(!gia){
		mostrar('partes_topy');
		ocultar('partes_gia');
	}
	else{
		ocultar('partes_topy');
		mostrar('partes_gia');
	}
	tirarDado(cube);
	tirarDado(cube1);
	tirarDado(cube2);
	tirarDado(cube3);
}
function juego(quien) {
	var resultado=''; 
	for (var i = 0; i < 3; i++) {
		var aleatorio=Math.floor(Math.random()*5)+1;
		texto=valor(aleatorio,i,quien)+" ";
		if(i == 2 && aleatorio == 5)
			resultado = texto;
		else
			resultado=texto+resultado;
		
	}
	document.getElementById("salida").innerHTML = '<h3>'+resultado+'</h3>';
}
function valor(dado, tipo, gia) {
	switch(tipo) {
		case 0:
			return tiempo[dado];
		case 1:
			if(!gia)
				return partes_topy[dado];
			else
				return partes_gia[dado];
		case 2:
			return accion[dado];
	}
return -99;
}

function agregartxt2(){
	var newt = document.createElement("<div class=\"accion\" onclick=\"tirarDado(cube)\">");
	newt.style = accion;                 
	var t = document.createTextNode("Nuevo contenedor");       
	newt.appendChild(t);                                         
	document.getElementById("cont5").appendChild(newt); 
}   

function ocultar(id){
document.getElementById(id).style.display = 'none';
}

function mostrar(id){
document.getElementById(id).style.display = 'block';
}