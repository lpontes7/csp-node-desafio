import { ContatoRepository } from "../../../repositories/implementations/contato.typeOrm"
import { CadastrarContatoController } from "./cadastrarContato.controller"
import { CadastrarContatoService } from "./cadastrarContato.service"

const contatoRespository = new ContatoRepository()

const cadastrarContatoService = new CadastrarContatoService(contatoRespository)

const cadastrarContatoController = new CadastrarContatoController(cadastrarContatoService)

export { cadastrarContatoService, cadastrarContatoController }