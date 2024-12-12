function aggiunginumero(numero){
    let display=document.getElementById("display");
    display.value +=numero;
}
function calcola(){
    let display=document.getElementById("display");
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value="errore";
    }
    
}
function cancella(){
    document.getElementById('display').value='';
    
}