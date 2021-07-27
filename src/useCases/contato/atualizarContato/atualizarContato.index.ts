import { ContatoRepository } from "../../../repositories/implementations/contato.typeOrm"
import { AtualizarContatoController } from "./atualizarContato.controller"
import { AtualizarContatoService } from "./atualizarContato.service"

const contatoRespository = new ContatoRepository()

const atualizarContatoService = new AtualizarContatoService(contatoRespository)

const atualizarContatoController = new AtualizarContatoController(atualizarContatoService)

export { atualizarContatoService, atualizarContatoController }