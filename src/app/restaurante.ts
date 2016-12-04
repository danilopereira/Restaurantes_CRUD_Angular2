export class Restaurante {
  id : number;
  cnpj: string;
  especialidade : string;
  nomeFantasia : string;
  razaoSocial : string;
  atividade : string;
  endereco : string;
  regiao : string;
  horarioFuncionamento : string;
  telefone : string;
  gerente : string;

  constructor(id: number, especialidade: string, nomeFantasia: string, cnpj: string, endereco: string,
  regiao: string, telefone: string, gerente: string){
    this.id = id;
    this.especialidade = especialidade;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
    this.endereco = endereco;
    this.regiao = regiao;
    this.telefone = telefone;
    this.gerente = gerente;
  }

}
