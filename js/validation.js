export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").textContent ="";
        console.log("entreee");
    }else{
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").textContent =mostrarMensajeDeError(tipoDeInput,input);
    }
    

}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch"
]

const mensajeDeErrores = {
    nombre:{
        valueMissing:"El campo nombre no puede estar vacio"
    },
    email:{
        valueMissing:"El campo email no puede estar vacio",
        typeMismatch:"El correo no es valido"
    },
    asunto:{
        valueMissing:"El campo nombre no puede estar vacio"
    }
}

function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tipoDeErrores.forEach(error =>{
        if(input.validity[error]){
            mensaje = mensajeDeErrores[tipoDeInput][error]
        }
    })
    return mensaje;
}



