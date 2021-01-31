/** CREACION DE LA VARIABLE Y LAS COSTANTES QUE NECESITO*/

/**Creo la variable numero_DNI y  el prompt para introducir informacion en la variable*/
let numero_DNI =  prompt('Introduzca el número de su DNI sin la letra')
/**Creo la constante de las letras que pueden ir en el DNI*/
const LETRAS_DNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N' , 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
/**Creo la constante del resto */
const RESTO = numero_DNI % 23
/**Creacion de la funcion*/
 function documento(numero_DNI, LETRAS_DNI) {
 /**Con switch aseguramos que se instroduzca el dato que solicitamos correctamente y si no es así se lo indicaremos al usuario con un alert(tambien podriamos indicarles en cada caso cocreto el error cometido  .Como que el numero de DNI no puede ser menor que 0 en el 1er case,...)*/
    switch (true){
    case numero_DNI < 0:
    case numero_DNI.length != 8:
    case numero_DNI == '':
/**Se podrian añadir más case's */
    alert('POR FAVOR ASEGURECE QUE HA INTRODUCIDO CORRECTAMENTE EL DATO SOLICITADO')
    break
    /**Una vez verificada la introduccion de datos. Con default creamos un alert en el que nos dara el DNI con la letra */
        default:
            alert(`DNI: ${numero_DNI}-${LETRAS_DNI[RESTO]}`)
        break       
    }
}
/** Llamamos a la funcion*/
documento(numero_DNI, LETRAS_DNI)