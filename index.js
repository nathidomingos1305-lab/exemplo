Function validarEntrada(nome, idade, animal, vip){

if(nome === ""){
  return "Erro 400, Precisa ter um nome!!";
}
if(idade > 20 || idade < 0){
return "Erro 400, idade invalida";
}

if(animal === "Gato" && vip === false){
  return "Erro 400, Seu animal não é um gato";
  ]
}
Return"Sucesso 201";
}

