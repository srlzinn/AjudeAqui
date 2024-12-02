export default class {
  id
  data_de_contratacao
  servico
  contratado
  constructor(data) {
    this.data_de_contratacao = data.data_de_contratacao
    this.servico = data.servico
    this.contratado = data.contratado
  }
}
