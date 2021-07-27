import { ContatoRepository } from "../../../repositories/implementations/contato.typeOrm"
import { ListarContatoController } from "./listarContato.controller"
import { ListarContatoService } from "./listarContato.service"

const contatoRespository = new ContatoRepository()

const listarContatoService = new ListarContatoService(contatoRespository)

const listarContatoController = new ListarContatoController(listarContatoService)

export { listarContatoService, listarContatoController }