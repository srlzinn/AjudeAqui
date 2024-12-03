export default class {
  id
  titulo
  descricao
  preco
  contratante
  disponivel
  categoria
  constructor(data) {
    this.titulo = data.titulo;
    this.descricao = data.descricao;
    this.preco = data.preco;
    this.contratante = data.contratante;
    this.disponivel = data.disponivel;
    this.categoria = data.categoria;
  }
}
