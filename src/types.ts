export type TurmaDTO = {
        id: number,
        nome:  string,
        avisos: string,
        nomeProfessor: string,
        alunos: UserDTO[],
        avaliacoes: AvaliacaoDTO[]
        comentarios: {
            texto: string,
            id: number
        }[]
}
  
export type AvaliacaoDTO = {
    id: number,
    nome: string,
    dataProva: string,
    turma: string,
    autor: string,
    alunos: UserDTO[],
    questoes: []
  }

  export type UserDTO = {
    matricula: string,
    nome: string,
    id: string,
    roles?: string[],
    turmas: {
        nome: string,
        id: number
    }[]
  }


  //FORMULÁRIOS

export type LoginUser = {
    matricula: string;
    senha: string;
  };

