export default class {
  id
  titulo
  contratante
  disponivel
  constructor(data) {
    this.titulo = data.titulo;
    this.contratante = data.contratante;
    this.disponivel = data.disponivel;
  }
}
