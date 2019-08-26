


function Tiempo(){ 
    
    var hrE = Number(document.querySelector("#hrE").value);
    var minE = Number(document.querySelector("#minE").value);
    var segE = Number(document.querySelector("#segE").value);
    var hrS = Number(document.querySelector("#hrS").value);
    var minS = Number(document.querySelector("#minS").value);
    var segS = Number(document.querySelector("#segS").value);
    

    console.log(`El usuario tiene como hora de entrada las ${hrE} con 
    ${minE} minutos y ${segE} segundos, y como hora de salida las 
    ${hrS} con ${minS} y ${segS} segundos`);

    console.log(tiempoT(hrE, minE, segE, hrS, minS, segS));
}

function tiempoT(hE, mE, sE, hS, mS, sS){
   
    t1=new Date();
    t2=new Date();

    t1.setHours(hE, mE, sE);
    t2.setHours(hS, mS, sS);

    t1.setHours(t2.getHours() - t1.getHours(), t2.getMinutes() - t1.getMinutes(),
    t2.getSeconds() - t1.getSeconds());


    return "La diferencia es de : " 
    + (t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? " horas " : " hora ") : " ") 
    + (t1.getMinutes() ? t1.getMinutes() + (t1.getMinutes() > 1 ? " minutos " : " minuto ") : " ")
    + (t1.getSeconds() ? t1.getSeconds() + (t1.getSeconds() > 1 ? " segundos " : " segundo ") : " ");
}