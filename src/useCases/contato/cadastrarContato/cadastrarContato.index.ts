import { ContatoRepository } from "../../../repositories/implementations/contato.typeOrm"
import { ValidadorEmailAdapter } from "../../../utils/validadorEmail"
import { CadastrarContatoController } from "./cadastrarContato.controller"
import { CadastrarContatoService } from "./cadastrarContato.service"

const contatoRespository = new ContatoRepository()
const validadorEmail = new ValidadorEmailAdapter()

const cadastrarContatoService = new CadastrarContatoService(contatoRespository,validadorEmail)

const cadastrarContatoController = new CadastrarContatoController(cadastrarContatoService)

export { cadastrarContatoService, cadastrarContatoController }