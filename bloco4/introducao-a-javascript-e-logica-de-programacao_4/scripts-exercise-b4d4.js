let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log('Bem-Vinda, ' + info.personagem);

  info['recorrente'] = 'sim';

  console.log (info.recorrente);

  for (let key in info) {
      console.log(key)
  };

  for (let key in info) {
    console.log(info[key]);


};let infoExtra = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrent: "Sim"
  };
