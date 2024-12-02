import ContratacaoRepositorio from "./ContratacaoRepositorio"
import SevicoRepositorio from "./SevicoRepositorio"
import UsuarioRepositorio from "./UsuarioRepositorio"

export default class {
  repositorioDeUsuarios
  repositorioDeContratos
  repositorioDeServicos
  constructor() {
    this.repositorioDeUsuarios = new UsuarioRepositorio()
    this.repositorioDeContratos = new ContratacaoRepositorio()
    this.repositorioDeServicos = new SevicoRepositorio()
  }
}
