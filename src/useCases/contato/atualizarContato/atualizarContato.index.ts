import { ContatoRepository } from "../../../repositories/implementations/contato.typeOrm"
import { ValidadorEmailAdapter } from "../../../utils/validadorEmail"
import { AtualizarContatoController } from "./atualizarContato.controller"
import { AtualizarContatoService } from "./atualizarContato.service"

const contatoRespository = new ContatoRepository()
const validadorEmail = new ValidadorEmailAdapter()

const atualizarContatoService = new AtualizarContatoService(contatoRespository,validadorEmail)

const atualizarContatoController = new AtualizarContatoController(atualizarContatoService)

export { atualizarContatoService, atualizarContatoController }