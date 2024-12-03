import Localbase from "localbase";
import { v4 as useUuid } from "uuid";

export default class {
  db
  nomeDoModelo
  constructor() {
    this.db = new Localbase("ajude_aqui_db")
    this.nomeDoModelo = "servicos"
  }
  //"obterlista" é uma função que retorna o resultado/ lista
  getLista(obterlista) {
    return this.db.collection(this.nomeDoModelo).get().then(
      it => {
        obterlista(it)
      }
    )
  }
  //"obterItem" é uma função que retorna o resultado/item 
  getItemEspecifico(id, obterItem) {
    return this.db.collection(this.nomeDoModelo).doc(id).get().then(
      it => {
        obterItem(it)
      }
    );
  }
  criar(modelo, obterModelCriado) {
    modelo.id = useUuid();
    this.db.collection(this.nomeDoModelo).add(modelo, modelo.id).then(
      it => {
        obterModelCriado(it.data.data);
      }
    );
  }
}


