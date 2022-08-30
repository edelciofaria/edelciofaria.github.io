function criptografar(){
    textoCripto = [];
    var textoLimpo = fraseLimpa.value;
    textoLimpo = textoLimpo.toLowerCase();

    for(indice=0; indice<textoLimpo.length; indice++){           
        if (textoLimpo[indice] == "e"){
            textoCripto.push("enter");
        }
        else if (textoLimpo[indice] == "i"){
            textoCripto.push("imes");
        }
        else if(textoLimpo[indice] == "a"){
            textoCripto.push("ai")
        }
        else if (textoLimpo[indice] == "o"){
            textoCripto.push("ober");
        }
        else if(textoLimpo[indice] == "u"){
            textoCripto.push("ufat")
        }
        else{
            textoCripto.push(textoLimpo[indice]);
        }
                     
    }
    fraseCriptogr.value = textoCripto.join("");
    fraseLimpa.value = "";

    fraseLimpa.focus();
}
function descriptografar(){
    for (indice=0;indice<=textoCripto.length;indice++){
        if (textoCripto[indice] == "enter"){
            textoCripto[indice] = "e";
        }
        else if (textoCripto[indice] == "imes"){
            textoCripto[indice] = "i";
        }
        else if (textoCripto[indice] == "ai"){
            textoCripto[indice] = "a";
        }
        else if (textoCripto[indice] == "ober"){
            textoCripto[indice] = "o";
        }
        else if (textoCripto[indice] == "ufat"){
            textoCripto[indice] = "u";
        }
        else if (textoCripto == ""){
            alert("Voce precisa criptografar uma mensagem antes !!!");
        }   
    }
    fraseLimpa.value = textoCripto.join("");
    fraseCriptogr.value = ("");
}

var fraseLimpa = document.getElementById("fraseLimpa");
var fraseCriptogr = document.getElementById("fraseCriptogr");
var btnCriptografar = document.getElementById("btn1");
var btnDescriptografar = document.getElementById("btn2");
fraseLimpa.focus();

var textoCripto= [];

btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;