// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
let dict = [
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes'
];
function handleChange(e) {
  console.log(e.target.value);
  // for (let c of e.target.value) {
  //   document.body.append(e.target.value.length);
  // }
  let r = 0;//Math.trunc(Math.random() * 21);
//  console.log(r);
  if (e.target.value.length != 5) {
    //document.body.append('Aprende a contar');
  } else {
    let i = 0;
    console.log(dict[r]);
    for (let c of e.target.value) {
      if (c == dict[r][i++]){
        let div = document.createElement('div');
        div.id = 'IDV';
        div.textContent = e.target.value[i-1];
        document.body.append(div);
      }
      else {
        let div = document.createElement('div');
        div.id = 'IDPal';
        div.textContent = e.target.value[i-1];
        document.body.append(div);
    // for (let i = 0; i < 5; i++) {
    //   let div = document.createElement('div');
    //   div.id = 'IDPal';
    //   div.textContent = e.target.value[i];
    //   document.body.append(div);
      }
    }
  }
}



// function handleChange(e) {
//   console.log(e.target.value);
//   let h1 = document.createElement("h1");
//   h1.id = 'IDPal';
//   for (int i = 0; i < 5; i++) {
//     h1.textContent = e.target.value;
//     document.body.append(h1);
//   }
// }
