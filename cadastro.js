var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let notes = [];
let student = {};

rl.question(
  "SEJA BEM-VINDO(A) AO PORTAL DO ALUNO.DIGITE 'C' CASO DESEJE SE CADASTRAR, PARA SABER SUA MEDIA DE NOTA DIGITE 'M': \n",
  (resp) => {
    if (resp === "C") {
      dados();
    } else if (resp === "M") {
      askNote();
    }
  }
);

const dados = () => {
  rl.question("Qual seu nome? \n", (username) => {
    student.username = username;
    rl.question("Sua turma. Ex: 1° Ano E.M \n", (turma) => {
      student.turma = turma;
      rl.question("Idade: \n", (age) => {
        student.age = age;
        rl.question(
          `Seja bem vindo ${student.username}, seja bem vindo. deseja fazer algo mais: 'M' para saber a media e 'S' para sair: \n`,
          (choice) => {
            if (choice === "M") {
              askNote();
            } else {
              rl.close;
            }
          }
        );
      });
    });
  });
};

const askNote = () => {
  rl.question(
    'Digite suas notas. Digite "FIM" quando finalizar: \n',
    (nota) => {
      if (nota === "FIM") {
        calcMedia();
      } else {
        notes.push(Number(nota));
        askNote();
      }
    }
  );
};

const calcMedia = () => {
  const soma = notes.reduce((total, nota) => total + nota);
  const media = soma / notes.length;
  if(media >= 7){
  console.log(`Sua media foi: ${media.toFixed(2)}. Parabéns, você passou !!!`);
}else{
  console.log(`Sua média foi: ${media.toFixed(2)}. Infelizmente você foi reprovado.`)
}
};
