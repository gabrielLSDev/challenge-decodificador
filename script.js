const inputTexto = document.querySelector('.input-texto');
inputTexto.focus();
const mensagem = document.querySelector('#mensagem');

function btnEncriptar() {
  const textoDesencriptado = encriptar(inputTexto.value);
  mensagem.value = textoDesencriptado;
  mensagem.style.backgroundImage = 'none';

  let nenhumTexto = document.querySelector(".mensagem-nao-encontrada");
  nenhumTexto.classList.add("invisivel");
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [['e', 'enter'],['i', 'imes'],['a', 'ai'],['o', 'ober'],['u', 'ufat']];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function btnDesenncriptar() {
    const textoEncriptado = desencriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage = 'none';
    
    let nenhumTexto = document.querySelector(".mensagem-nao-encontrada");
    nenhumTexto.classList.add("invisivel");
  }
  
  function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['enter', 'e'],['imes', 'i'],['ai', 'a'],['ober', 'o'],['ufat', 'u']];
    stringDesencriptada = stringDesencriptada.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][0])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }
    }
    return stringDesencriptada;
  }

  function copiarTexto() {
    let textoCopiado = document.getElementById("mensagem");
    textoCopiado.select();
    
    document.execCommand("copy");

    
    alert("Texto copiado");
    inputTexto.value = "";
    mensagem.value = "";
    inputTexto.focus();
  }