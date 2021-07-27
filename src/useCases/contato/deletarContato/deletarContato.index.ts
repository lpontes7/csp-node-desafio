import { ContatoRepository } from "../../../repositories/implementations/contato.typeOrm"
import { DeletarContatoController } from "./deletarContato.controller"
import { DeletarContatoService } from "./deletarContato.service"

const contatoRespository = new ContatoRepository()

const deletarContatoService = new DeletarContatoService(contatoRespository)

const deletarContatoController = new DeletarContatoController(deletarContatoService)

export { deletarContatoService, deletarContatoController }