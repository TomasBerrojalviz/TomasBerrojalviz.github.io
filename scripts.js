const cube = document.querySelector('.cube');
const cube1 = document.querySelector('.cube1');
const cube2 = document.querySelector('.cube2');
const cube3 = document.querySelector('.cube3');
const time = 2;
element = document.getElementById('partes_topy');
element.style.display = 'none';
var dadoAccion = "";
var dadoTopy = "";
var dadoGia = "";
var dadoTiempo = "";
var resultado = ""; 


// 1 6 3 4 5 2

var tiempo=["por 30 segundos","hasta acabar","por 1 minutos","por 2 minutos","cuanto desee","por 45 segundos"];
var partes_topy=["la pija","el pelo","el cuello","el torso","la boca","los huevos"];
var partes_gia=["la concha","la boca","el culo","las piernas","el pelo","las tetas"];
var accion=["Chupar","✨69✨","Dar besos en","Acariciar","Lamer","Pajear/Masajear"];

function tirarDado(cube, nro){
    cube.style.transition = '';
    cube.style.transform = `translateY(200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    setTimeout(() => {
        cube.style.transition = `transform ${time}s`;
        const randomValue = Math.floor((Math.random() * 6) + 1);
        switch(nro){
            case 0:
                dadoAccion = accion[randomValue-1];
            break;
            case 1:
                dadoTopy = partes_topy[randomValue-1];
            break;
            case 2:
                dadoGia = partes_gia[randomValue-1];
            break;
            case 3:
                dadoTiempo = tiempo[randomValue-1];
            break;
        }
        console.log("nro dado: " + nro );
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

function juego2(gia) {
	tirarDado(cube, 0);
        if(!gia){
            mostrar('partes_topy');
            ocultar('partes_gia');
            tirarDado(cube1, 1);
        }
        else{
            ocultar('partes_topy');
            mostrar('partes_gia');
            tirarDado(cube2, 2);
        }
        tirarDado(cube3, 3);
    
    setTimeout(() => {
        resultado = dadoAccion;
        if(dadoAccion != accion[1]){
            if(!gia){
                resultado += " " + dadoTopy;
            }
            else{
                resultado += " " + dadoGia;
            }
            resultado += " " + dadoTiempo;
        }
        console.log(resultado);
        document.getElementById("salida").innerHTML = '<b>'+resultado+'</b>';
    }, 1800);

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

function resultado(){
    document.getElementById(id).style.display = 'block';
}
            
