export default class {
  id
  titulo
  contratante
  disponivel
  categoria
  constructor(data) {
    this.titulo = data.titulo;
    this.contratante = data.contratante;
    this.disponivel = data.disponivel;
    this.categoria = data.categoria;
  }
}
