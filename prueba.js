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

let a = 0;
let r = Math.trunc(Math.random() * 21);
function handleChange(e) {
  let x = e.target.value;
  //Si hubieron menos de 6 intentos
  if (a < 6) {
    console.log(e.target.value);
    if (e.target.value.length != 5) {
    }
    else if (!dict.include(x)) {
    }
    else {
      let i = 0;
      console.log(dict[r]);
      for (let c of e.target.value) {
        if (c == dict[r][i++]){
          let div = document.createElement('div');
          div.id = 'IDV';
          div.textContent = e.target.value[i-1];
          document.body.append(div);
        } else if (dict[r].includes(c)){
         let div = document.createElement('div');
         div.id = 'IDA';
         div.textContent = e.target.value[i-1];
         document.body.append(div);
        } else {
          let div = document.createElement('div');
          div.id = 'IDPal';
          div.textContent = e.target.value[i-1];
          document.body.append(div);
        }
      }
      a++;
    }
    if (e.target.value == dict[r]) {
      console.log('Ganaste!!!');
      let gan = document.createElement('h1');
      gan.id = 'gan';
      gan.textContent = 'Ganaste!!!';
      document.body.append(gan);

      let restart = document.createElement('button');
      restart.type = 'button';
      restart.id = 'restart';
      restart.onclick = function() {
        location.reload();
      }
      restart.textContent = 'Reinicia';
      document.body.append(restart);
      a = 7;
    }
  }
  else if (a == 6) {
    console.log('Perdiste');
    let per = document.createElement('h1');
    per.id = 'perd';
    per.textContent = 'Perdiste';
    document.body.append(per);

    let restart = document.createElement('button');
    restart.type = 'button';
    restart.id = 'restart';
    restart.onclick = function() {
      location.reload();
    }
    restart.textContent = 'Reinicia';
    document.body.append(restart);
    a++;
  }
}
