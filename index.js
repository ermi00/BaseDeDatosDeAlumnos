class Alumno{
    constructor(nombre, apellido, edad, materiasInscritas, calificaciones){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materiasInscritas = materiasInscritas;
        this.calificaciones = calificaciones;
    }
}

// REGISTRO ALUMNO //

let botonHechoRegistro = document.getElementById("botonHechoRegistro");
botonHechoRegistro.addEventListener("click", function(){

    let inputNombre = document.getElementById("inputNombre");
    let inputNombreValor = inputNombre.value;

    let inputApellido = document.getElementById("inputApellido");
    let inputApellidoValor = inputApellido.value;

    let inputEdad = document.getElementById("inputEdad");
    let inputEdadValor = inputEdad.value;

    // let nuevoAlumno = new Alumno(inputNombreValor, inputApellidoValor, inputEdadValor);

    let spanRegistroExitoso = document.getElementById("spanRegistroExitoso");
    spanRegistroExitoso.textContent = `¡Estas Registrado! ${inputNombreValor} ${inputApellidoValor}`
})

// REGISTRO CLASES //

let botonHechoInscribirClase = document.getElementById("botonHechoInscribirClase");
botonHechoInscribirClase.addEventListener("click", function(){

    let selectClases = document.getElementById("selectClases");
    let selectClasesValor = selectClases.value;

    let spanInscripcionClase = document.getElementById("spanInscripcionClase");
    spanInscripcionClase.textContent = `¡Te has registrado en la clase de ${selectClasesValor}!`

})
