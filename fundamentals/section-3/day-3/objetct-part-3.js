/*
🚀 Manipulação de objetos: Parte 3
Suponha que você esteja trabalhando para uma escola e precise fazer algumas atualizações no sistema. Para isso, considere a seguinte base de dados:
*/

const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};
/* Exercício 1
Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.
*/

const getValueByIndex = (obj, index) => Object.values(obj)[index];

console.log(getValueByIndex(school.lessons, 1));


/* Exercício 2
Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
*/

const getTotalStudents = (obj) => {
  let totalStudents = 0;

  for (let index = 0; index < obj.lessons.length; index += 1) {
    totalStudents += obj.lessons[index].students;
  }

  return totalStudents;
}

console.log(getTotalStudents(school));


/* Exercicio 03
Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
*/

const verifyKey = (obj, key) => {
  for (let index = 0; index < obj.lessons.length; index++) {
    if (obj.lessons[index][key] === undefined) {
      return false;
    }
  }
  return true;
}

console.log(verifyKey(school, 'professor'));

/*
Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
*/

const changeShift = (obj, course, newShift) => {
  for (let index = 0; index < obj.lessons.length; index += 1) {
    if (obj.lessons[index]['course'] === course) {
      obj.lessons[index].shift = newShift;
    }
  }
}

changeShift(school, 'Python', 'Noite');
console.log(school);
