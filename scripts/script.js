var chks = document.getElementsByClassName('knowValues');
var primeiroValor = document.getElementsByName('primeiroValor');
var segundoValor = document.getElementsByName('segundoValor');
var rdb1 = document.getElementsByName('radPri');
var rdb2 = document.getElementsByName('radSec');
var results = document.getElementById("result");
var frequencia = document.getElementById("freq");
var vl1 = document.getElementById("vl1");
var vl2 = document.getElementById("vl2");
var vl3 = document.getElementById("vl3");
var vl4 = document.getElementById("vl4");
var botao = document.getElementById('calc');


class Operações{
    constructor(){
        this.real;
        this.imaginario;
        this.valor;
        this.angulo;
    }

    soma(a1,a2,aux1,b1,b2,aux2){
        if(aux1==="Retangular" && aux2==="Retangular"){
            this.real = a1+b1;
            this.imaginario = a2+b2;
            var resultado = [this.real, this.imaginario]
            return resultado
        }
        if(aux1==="Retangular" && aux2==="Polar"){
            let i = b1 * (Math.cos(b2*(Math.PI/180)))
            let j = b1 * (Math.sin(b2*(Math.PI/180)))
            this.real = a1+i;
            this.imaginario = a2+j
            var resultado = [this.real, this.imaginario]
            return resultado

        }

        if(aux1==="Polar" && aux2==="Retangular"){
            let i = a1 * (Math.cos(a2*(Math.PI/180)))
            let j = a1 * (Math.sin(a2*(Math.PI/180)))
            this.real = b1+i;
            this.imaginario = b2+j
            var resultado = [this.real, this.imaginario]
            return resultado

        }

        if(aux1==="Polar" && aux2==="Polar"){
            let i1 = a1 * (Math.cos(a2*(Math.PI/180)))
            let j1 = a1 * (Math.sin(a2*(Math.PI/180)))
            let i2 = b1 * (Math.cos(b2*(Math.PI/180)))
            let j2 = b1 * (Math.sin(b2*(Math.PI/180)))
            this.real = i1+i2;
            this.imaginario = j1+j2;
            var resultado = [this.real, this.imaginario]
            return resultado;
        }
    }
    subtracao(a1,a2,aux1,b1, b2,aux2){

        if(aux1==="Retangular" && aux2==="Retangular"){
            this.real = a1-b1;
            this.imaginario = a2-b2
            var resultado = [this.real, this.imaginario]
            return resultado
        }
        if(aux1==="Retangular" && aux2==="Polar"){
            let i = b1 * (Math.cos(b2*(Math.PI/180)))
            let j = b1 * (Math.sin(b2*(Math.PI/180)))
            this.real = a1-i;
            this.imaginario = a2-j
            var resultado = [this.real, this.imaginario]
            return resultado

        }

        if(aux1==="Polar" && aux2==="Retangular"){
            let i = a1 * (Math.cos(a2*(Math.PI/180)))
            let j = a1 * (Math.sin(a2*(Math.PI/180)))
            this.real = b1-i;
            this.imaginario = b2-j
            var resultado = [this.real, this.imaginario]
            return resultado

        }

        if(aux1==="Polar" && aux2==="Polar"){
            let i1 = a1 * (Math.cos(a2*(Math.PI/180)))
            let j1 = a1 * (Math.sin(a2*(Math.PI/180)))
            let i2 = b1 * (Math.cos(b2*(Math.PI/180)))
            let j2 = b1 * (Math.sin(b2*(Math.PI/180)))
            this.real = i1-i2;
            this.real = j1-j2;
            var resultado = [this.real, this.imaginario]
            return resultado;
        }

    }

    multiplicacao(a1,a2,aux1,b1,b2,aux2){

        if(aux1==="Retangular" && aux2==="Retangular"){
            let valor1 = Math.sqrt((a1**2)+(a2**2));                                                                  
            let angulo1 = Math.atan(a2/a1)*180/Math.PI;
            let valor2 = Math.sqrt((b1**2)+(b2**2));
            let angulo2 = Math.atan(b2/b1)*180/Math.PI;
            this.valor = valor1*valor2;
            this.angulo = angulo1+angulo2;
            var resultado = [this.valor, this.angulo]
            return resultado;
        }

        if(aux1==="Retangular" && aux2==="Polar"){
            let valor1 = Math.sqrt((a1**2)+(a2**2));
            let angulo1 = Math.atan(a2/a1)*180/Math.PI;
            this.valor = valor1*b1;
            this.angulo = angulo1+b2;
            var resultado = [this.valor, this.angulo]
            return resultado;

        }

        if(aux1==="Polar" && aux2==="Retangular"){
            let valor2 = Math.sqrt((b1**2)+(b2**2));
            let angulo2 = Math.atan(b2/b1)*180/Math.PI;
            this.valor = a1*valor2;
            this.angulo = a2+angulo2;
            var resultado = [this.valor, this.angulo]
            return resultado;

        }

        if(aux1==="Polar" && aux2==="Polar"){
            this.valor = a1*b1;
            this.angulo = a2+b2;
            var resultado = [this.valor, this.angulo]
            return resultado;
        }



    }

    divisao(a1,a2,aux1,b1, b2,aux2){

        if(aux1==="Retangular" && aux2==="Retangular"){
            let valor1 = Math.sqrt((a1**2)+(a2**2));                                                                  
            let angulo1 = Math.atan(a2/a1)*180/Math.PI;
            let valor2 = Math.sqrt((b1**2)+(b2**2));
            let angulo2 = Math.atan(b2/b1)*180/Math.PI;
            this.valor = valor1/valor2;
            this.angulo = angulo1-angulo2;
            var resultado = [this.valor, this.angulo]
            return resultado;
        }

        if(aux1==="Retangular" && aux2==="Polar"){
            let valor1 = Math.sqrt((a1**2)+(a2**2));
            let angulo1 = Math.atan(a2/a1)*180/Math.PI;
            this.valor = valor1/b1;
            this.angulo = angulo1-b2;
            var resultado = [this.valor, this.angulo]
            return resultado;

        }

        if(aux1==="Polar" && aux2==="Retangular"){
            let valor2 = Math.sqrt((b1**2)+(b2**2));
            let angulo2 = Math.atan(b2/b1)*180/Math.PI;
            this.valor = a1/valor2;
            this.angulo = a2-angulo2;
            var resultado = [this.valor, this.angulo]
            return resultado;

        }

        if(aux1==="Polar" && aux2==="Polar"){
            this.valor = a1/b1;
            this.angulo = a2-b2;
            var resultado = [this.valor, this.angulo]
            return resultado;
        }

    }

    conversao(v1,v2,aux){
        if(aux===true){
            this.valor = Math.sqrt((b1**2)+(b2**2));
            this.angulo = Math.atan(b2/b1)*180/Math.PI;
            var resultado = [this.valor, this.angulo]
            return resultado;
        }
        else{
            this.real = v1 * (Math.cos(v2*(Math.PI/180)))
            this.imaginario = v1 * (Math.sin(v2*(Math.PI/180)))
            var resultado = [this.real, this.imaginario]
            return resultado;
        }

    }


}

function limpar(){
    vl1.value="";
    vl2.value="";
    vl3.value="";
    vl4.value="";
    results.value=""
}

var operacoes = new Operações()


var num=0
function checarCKB(value){
    num=0;
    
    for(x=0;x<3;x++){
       if(chks[x].checked==true){
            num++;
       }
    }

    if(num==3){
        value.checked=false;
    }

};

function checarRDB(){
    if((rdb1[0].checked == true || rdb1[1].checked == true) && ((rdb2[0].checked == true) || (rdb2[1].checked == true)))
    {
        document.getElementById('dados').style.display = 'block'

    }
}

function ocutar(){
    if(num>=2){
        document.getElementById('formato').style.display = 'block'
       }
       else{
        document.getElementById('formato').style.display = 'none'
        document.getElementById('dados').style.display = 'none'
        rdb1[0].checked=false;
        rdb1[1].checked=false;
        rdb2[0].checked=false;
        rdb2[1].checked=false;
        limpar();
       }
}

chks[0].addEventListener('change', () =>{
    
    checarCKB(chks[0]);
    ocutar();
    if(chks[0].checked==true)
    {
        for(x=0;x<2;x++)
        {
            primeiroValor[x].textContent = "Tensão: "
        }

    }

    if(chks[0].checked==true && chks[1].checked==true)
    {
        for(x=0;x<2;x++)
        {
            primeiroValor[x].textContent = "Tensão: "
            segundoValor[x].textContent = "Corrente: "
        }

    }
});

chks[1].addEventListener('change', () =>{
    checarCKB(chks[1]);
    ocutar();
    if(chks[1].checked==true && chks[0].checked==false)
    {
        for(x=0;x<2;x++)
        {
            primeiroValor[x].textContent = "Corrente: "
        }
    }
    if(chks[0].checked==true && chks[1].checked==true){
        for(x=0;x<2;x++)
        {
            primeiroValor[x].textContent = "Tensão: "
            segundoValor[x].textContent = "Corrente: "

        }
    }
});

chks[2].addEventListener('change', () =>{
    checarCKB(chks[2]);
    ocutar();
    if(chks[2].checked==true)
    {
        segundoValor[0].textContent = "Impedância: "
        segundoValor[1].textContent = "Impedância: "
    }
    if(chks[1].checked==true){
        primeiroValor[x].textContent = "Corrente: "
    }
});

rdb1[0].addEventListener('change',()=>{
    checarRDB()
    if(rdb1[0].checked==true)
    {
        vl1.placeholder = "Valor"
        vl2.placeholder = "Angulo"
    }
})

rdb1[1].addEventListener('change',()=>{
    checarRDB()
    if(rdb1[1].checked==true)
    {
        vl1.placeholder = "Real"
        vl2.placeholder = "Imaginario"
    }
    
})

rdb2[0].addEventListener('change',()=>{
    checarRDB()
    if(rdb2[0].checked==true)
    {
        vl3.placeholder = "Valor"
        vl4.placeholder = "Angulo"
    }
})

rdb2[1].addEventListener('change',()=>{
    checarRDB()
    if(rdb1[1].checked==true)
    {
        vl3.placeholder = "Real"
        vl4.placeholder = "Imaginario"
    }
})


function calculo(){
    var a1 = parseFloat(vl1.value);
    var a2 = parseFloat(vl2.value);
    var b1 = parseFloat(vl3.value);
    var b2 = parseFloat(vl4.value);
    var frequencia = parseFloat(freq.value)
    var impedanciaRet;
    var impedanciaPol;
    var fp;;
    var potenciaS;
    var potenciaQ;
    var potenciaP;
    var carga;

    var operacoes = new Operações()
    
    if(chks[0].checked==true && chks[1].checked == true){

        if(rdb1[0].checked === true && rdb2[0].checked === true){
            impedanciaPol = operacoes.divisao(a1,a2,rdb1[0].value,b1,b2,rdb2[0].value)
            impedanciaRet = operacoes.conversao(impedanciaPol[0],impedanciaPol[1],false)
            carga = impedanciaRet[1]>0? "Indutor: " + (impedanciaRet[1]/frequencia) + " Henry\n": "Capacitor: "+ (1/(impedanciaRet[1]*frequencia))*-1 + " Farad\n"
            fp=Math.cos(impedanciaPol[1]*(Math.PI/180)) 
            potenciaS = a1*b1;
            potenciaP = potenciaS*Math.cos(impedanciaRet[0]*(Math.PI/180))
            potenciaQ = potenciaS*Math.sin(impedanciaRet[0]*(Math.PI/180))
            results.value += "Impedancia Retangular: " + impedanciaRet[0]+ " " +impedanciaRet[1]+"j\n"
            results.value += "Impedancia Polar: " + impedanciaPol[0]+ " |" +impedanciaPol[1]+"°\n"
            results.value += carga
            results.value += "Fator de Potência: "+fp+"\n"
            results.value += "Potencia Aparente: "+potenciaS+" VA \n"
            results.value += "Potencia Ativa: "+potenciaP+" W \n"
            results.value += "Potencia Reativa: "+potenciaQ+" VAR \n"
            
            console.log(Error)
        }

        if(rdb1[0].checked === true && rdb2[1].checked === true){


        }

        if(rdb1[1].checked === true && rdb2[0].checked === true){

        }

        if(rdb1[1].checked === true && rdb2[1].checked === true){       

        }
    }
}


botao.addEventListener('click',()=>{

    results.value = "";
    calculo();
  
})
