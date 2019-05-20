

let cursos = [
				{
				id:1,
				nombre:'nodeJS',
				duracion:32,
				valor:0
				},
				{
				id:2,
				nombre:'Matematicas para desarrolladores',
				duracion:32,
				valor:500000
				},
				{
				id:3,
				nombre:'Frontend con REACT.js',
				duracion:32,
				valor:1500000
				},
				{
				id:4,
				nombre:'Desarrollo Personal',
				duracion:32, 
				valor:100000
				},
				{
				id:5,
				nombre:'Arte en Macrame',
				duracion:32,
				 valor:40000
				}]


let listarCursos = () => {
       
      
     let time = 0
    for (let i=0; i<cursos.length; i++){
        setTimeout(function(){	
		console.log(`El nombre de Curso es ${cursos[i].nombre}, tiene una duración de ${cursos[i].duracion} y un valor de $:${cursos[i].valor} pesos(PCO)`)
	}, time);
        time+=2000
	}
	
	  let timer = 0
    for (let i=0; i<cursos.length; i++){
        setTimeout(function(){	
		console.log(`El id del curso ${cursos[i].nombre} es el Nro:${cursos[i].id}`)
	}, timer);
        timer+=2500
	}
 }



let inscribir = (id_curso,aspirante,cedula,opciones) => {
     
console.log(aspirante);

if(id_curso ==  undefined || aspirante == undefined  || cedula == undefined){
  	 for(let i=0; i < cursos.length ;i++){
          console.log(cursos[i].id +
          	' '+ cursos[i].nombre +
          	' Duracion: ' + cursos[i].duracion +
          	' Valor: ' + cursos[i].valor)
  	 }
  console.log('Todos los datos son obligatorios , recuerda id del curso de su interes, tu nombre y tu cedula');
  
  console.log('id del curso' + opciones.id_curso.alias);
  console.log(opciones + opciones.aspirante.alias);
  console.log(opciones.cedula.alias);
  return;
}

     //tomamos el objeto del arry de cursos que corresponde al id ingresado
 let datos_curso = cursos.find(function(datos){	
 	return datos.id == id_curso
 })


    //si no existe msotramos los datos del array de cursos
      if(datos_curso === undefined){
    	console.log("El id no existe");
			 console.log("Lista de cursos");
			 let time=0;
    	 for(let i=0; i < cursos.length ;i++){
				setTimeout(function(){	
            console.log(cursos[i].id +
            	' '+ cursos[i].nombre +
            	' Duracion: ' + cursos[i].duracion +
							' Valor: ' + cursos[i].valor)
						}, time);
						time+=2000			
    	 }
    	return; }
   

     const fs = require('fs');

	texto = `El estudiante ${aspirante} con cédula: ${cedula} \
	Se ha matriculado en el curso llamado ${datos_curso.nombre} \
	que tiene una duracón de ${datos_curso.duracion} y un valoir de ${datos_curso.valor} `;


	
	fs.writeFile('matriculado.txt', texto, (err) =>{
		if (err) throw (err);
		console.log('se ha creado el archivo')
	})
  

}



module.exports = {
   cursos, 
   listarCursos,
   inscribir

};
  // la clase reservada de node (module) es una clase que exporta un array de elementos para llevar de un script a otro}

