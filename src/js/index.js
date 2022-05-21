function calculator(tipo, valor){
  document.getElementById('resultado').value

  if(tipo === 'acao'){

    //apagar numero no campo input ao clicar o 'c'
    if(valor === 'c'){
      document.getElementById('resultado').value = '' 
    }

    //aparecer as operaçoes no campo input
    if(valor === '/' || valor === '*' || valor === '+' || valor === '-' || valor === '.'){
      document.getElementById('resultado').value += valor
    }

    //realizar o calculo quando clicar no campo '='
    if(valor === '='){
      let campo_valor = eval(document.getElementById('resultado').value)
      document.getElementById('resultado').value = campo_valor
    }

  } else if(tipo === 'valor'){
    //concanetar valores no campo input
    document.getElementById('resultado').value += valor
  }
}