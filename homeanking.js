//Declaración de variables

var limiteExtraccion = 5000;
var saldoCuenta = 10000;
var nombreUsuario = "Guillermo Aristizábal";
var codigo = 1234;


// declaro la variable servicios como un object, segun lo visto en clase.

var servicios = {
    1: { nombre: "Agua", valor: 350 },
    2: { nombre: "Telefono", valor: 425 },
    3: { nombre: "Luz", valor: 210 },
    4: { nombre: "Internet", valor: 570 }
}

/* de la misma forma declaro las cuentas amigas a las que voy a transferir. */

var cuentasAmigas = {
    1: { nombre: "Andrés Lopez", cuenta: 12345 },
    2: { nombre: "Juan peña", cuenta: 76543 },
    3: { nombre: "Daniela Quiroz", cuenta: 13579 },
    4: { nombre: "MariaE Mejía", cuenta: 24680 }
}


//Ejecución de las funciones que actualizan los valores de las variables en el HTML, cargan al iniciar el programa.
window.onload = function() {

    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones de verificación

/* funcion monto positivo.
   funcion monto es un numero.
   funcion monto debe ser mutiplo de 100.
   funcion para que se retire maximo el limite de extraccion.
   funcion para  que haya saldo disponible en la cuenta para el retiro
   funcion Sumar dinero.
   */


function montoesNum(monto) {
    return Number(monto);
}

function montoEspositivo(monto) {
    return monto >= 0;
}

function EsmontoMultiploDe100(monto) {
    return monto % 100 === 0;
}

function RetireMaximoElLimiteDeExtraccion(monto) {
    return monto <= limiteExtraccion
}

function disponibilidadDeSaldo(monto) {
    return monto <= saldoCuenta;
}

function SumarDinero(a, b) {
    return (a + b);

}

// funciones de interaccion con el usuario.


function cambiarLimiteDeExtraccion() {
    var monto = parseInt(prompt("¿ Cual es el nuevo limite de extraccion?"))


    //validaciones.

    if (!montoesNum(monto)) {
        return alert(" El valor que ingresaste no es un número.");
    };

    if (!montoEspositivo(monto)) {
        return alert(" Debes ingresar solo numeros positivos.");

    };
    if (!EsmontoMultiploDe100(monto)) {
        return alert(" Debes ingresar un valor multiplo de 100.");
    };

    return [limiteExtraccion = monto, actualizarLimiteEnPantalla(), alert("Nuevo limite de extracción : $  " + limiteExtraccion)];
}


function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var monto = parseInt(prompt("¿ Cuanto monto desea retirar?"));

    if (!montoesNum(monto)) {
        return alert(" El valor que ingresaste no es un número");
    };

    if (!montoEspositivo(monto)) {
        return alert(" Debes ingresar solo numeros positivos");

    };
    if (!EsmontoMultiploDe100(monto)) {
        return alert(" Debes ingresar un valor multiplo de 100");
    };
    if (!RetireMaximoElLimiteDeExtraccion(monto)) {
        return alert("El monto ingresado, supera el limite de extraccion, intente de nuevo");
    };
    if (!disponibilidadDeSaldo(monto)) {
        return alert("Fondos insuficientes, intente nuevo valor");
    }
    return [(saldoCuenta -= monto), actualizarSaldoEnPantalla(), alert("Has retirado : $" + monto + "  Saldo Anterior : $" + saldoAnterior + "  Saldo Actual : $" + saldoCuenta)];

}


function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var monto = parseInt(prompt("¿ Cuanto monto desea depositar?"));

    if (!montoesNum(monto)) {
        return alert(" El valor que ingresaste no es un número");
    };

    if (!montoEspositivo(monto)) {
        return alert(" Debes ingresar solo numeros positivos");

    };

    if (!EsmontoMultiploDe100(monto)) {
        return alert(" Debes ingresar un valor multiplo de 100");
    }

    return [(saldoCuenta = SumarDinero(monto, saldoAnterior)), actualizarSaldoEnPantalla(), alert("Has depositado : $" + monto + "  Saldo Anterior : $" + saldoAnterior + "  Saldo Actual : $" + saldoCuenta)];
}


// funcion pagarServicio() con switch.

function pagarServicio() {
    indice = parseInt(prompt("Ingrese el numero que corresponda, con el servicio que quiere pagar" + "   1-Agua " + " 2-Teléfono " + " 3-Luz " + " 4-Internet "));


    // verificaciones

    if (!montoesNum(indice)) {
        return alert(" El valor que ingresaste no es un número");
    };

    if (!montoEspositivo(indice)) {
        return alert(" Debes ingresar solo numeros positivos");

    };

    var saldoAnterior = saldoCuenta;


    switch (indice) {
        case 1:
            valorApagar = servicios[1].valor;
            // verficar saldo
            if (!disponibilidadDeSaldo(valorApagar)) {
                return alert("Fondos insuficientes, intente nuevo valor");
            };

            saldoCuenta -= servicios[1].valor;
            alert("Has pagado el servicio de Agua" + "  " + "Saldo Anterior : $" + saldoAnterior + "  " + "valor pagado : $" + valorApagar + "   " + "saldo actual : $" + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        case 2:
            valorApagar = servicios[2].valor;
            // verficar saldo

            if (!disponibilidadDeSaldo(valorApagar)) {
                return alert("Fondos insuficientes, intente nuevo valor");

            };
            saldoCuenta -= servicios[2].valor;
            alert("Has pagado el servicio de Teléfono" + "  " + "Saldo Anterior : $" + saldoAnterior + "  " + "valor pagado : $" + valorApagar + "   " + "saldo actual : $" + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        case 3:
            valorApagar = servicios[3].valor;
            // verficar saldo

            if (!disponibilidadDeSaldo(valorApagar)) {
                return alert("Fondos insuficientes, intente nuevo valor");

            };
            saldoCuenta -= servicios[3].valor;
            alert("Has pagado el servicio de Luz" + "  " + "Saldo Anterior : $" + saldoAnterior + "  " + "valor pagado : $" + valorApagar + "   " + "saldo actual : $" + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        case 4:
            valorApagar = servicios[4].valor;
            // verficar saldo

            if (!disponibilidadDeSaldo(valorApagar)) {
                return alert("Fondos insuficientes, intente nuevo valor");

            };
            saldoCuenta -= servicios[4].valor;
            alert("Has pagado el servicio de Internet" + "  " + "Saldo Anterior : $" + saldoAnterior + "  " + "valor pagado : $" + valorApagar + "   " + "saldo actual : $" + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        default:
            alert("La opcion ingresada, es incorrecta, intente de nuevo.");

    }

}

function transferirDinero() {
    var saldoAnterior = saldoCuenta;
    var monto = parseInt(prompt("¿ Cuanto dinero desea transferir?"));


    if (!montoesNum(monto)) {
        return alert(" El valor que ingresaste no es un número");
    };

    if (!montoEspositivo(monto)) {
        return alert(" Debes ingresar solo numeros positivos");

    };

    if (monto < 100) {
        alert("el valor minimo para transferir es de 100 pesos");
        return false;

    }

    if (monto > saldoCuenta) {
        alert(" El valor a transferir es superior al saldo, intente nuevo valor");
        return false;

    }
    var SaldoActual = saldoCuenta - monto;


    if (!disponibilidadDeSaldo(SaldoActual)) {
        alert("Fondos insuficientes, intente nuevo valor");
        return false;
    };

    var cuenta = parseInt(prompt(" ¿ Ingrese cuenta?"));

    //  llamando las cuentas desde el object, para validar que se ingresen solo cuentas amigas, sino alerta y muere programa.

    if (cuenta == cuentasAmigas[1].cuenta || cuenta == cuentasAmigas[2].cuenta ||
        cuenta == cuentasAmigas[3].cuenta || cuenta == cuentasAmigas[4].cuenta) {

        alert(" Transferencia realizada con exito");
    } else {
        alert(" Ingrese una cuenta amiga registrada");
        return false;

    }

    return [(saldoCuenta -= monto), actualizarSaldoEnPantalla(), alert("Has transferido : $" + monto + "/n" + " cuenta de destino : #" + cuenta + "  Saldo Anterior : $" + saldoAnterior + "  Saldo Actual : $" + saldoCuenta)];
}


// Inicio de sesion y clave.


function iniciarSesion() {

    nombreUsuario = prompt("Ingrese nombre de usuario");
    clave = parseInt(prompt("Ingrese su clave"));

    if (clave == codigo) {
        alert(" Bienvenido" + "  " + nombreUsuario + "  " + "ya puedes realizar operaciones");

    } else {
        alert(" ha ingresado clave inválida, intente de nuevo");
        saldoCuenta = 0; // bloqueo fondos si no entra su clave correcta.
        actualizarSaldoEnPantalla();
        limiteExtraccion = 0;
        actualizarLimiteEnPantalla();
        nombreUsuario = " ";
        cargarNombreEnPantalla();


    }


}


//Funciones que actualizan el valor de las variables en el HTML


function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
