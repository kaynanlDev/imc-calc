export interface ImcPessoas {
  id: number;
  nome: string;
  imc: number;
  classificacao: string;
}

export const data: ImcPessoas[] = [
  {
    id: 1,
    nome: "Ana Silva",
    imc: 21.3,
    classificacao: "Peso normal",
  },
  {
    id: 2,
    nome: "Bruno Souza",
    imc: 28.4,
    classificacao: "Sobrepeso",
  },
  {
    id: 3,
    nome: "Carla Mendes",
    imc: 31.1,
    classificacao: "Obesidade grau I",
  },
  {
    id: 4,
    nome: "Diego Rocha",
    imc: 20.9,
    classificacao: "Peso normal",
  },
  {
    id: 5,
    nome: "Eduarda Lima",
    imc: 17.6,
    classificacao: "Abaixo do peso",
  },
];
