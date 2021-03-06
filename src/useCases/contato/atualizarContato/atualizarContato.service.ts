import { IContatoRepository } from "../../../repositories/interface/IContato.respository"
import { ValidadorEmailAdapter } from "../../../utils/validadorEmail"
import { IAtualizarContatoDTO } from "./atualizarContato.dto"

export class AtualizarContatoService {

    constructor(
        private atualizarRespository: IContatoRepository,
        private validadorEmail: ValidadorEmailAdapter,
    ) { }

    async execute(id:string, data: IAtualizarContatoDTO): Promise<string> {
        
        if (!id){
            throw new Error("Nenhum id passado como parametro")
        }

        const numberId = parseInt(id, 10)

        const contato = await this.atualizarRespository.findById(numberId)

        if(!contato){
            throw new Error("contato não encontrado")
        }

        if (!data.primeiroNome){
            throw new Error("Primeiro nome não informado")
        }

        if (!data.ultimoNome){
            throw new Error("Ultimo nome não informado")
        }

        if (!data.email){
            throw new Error("email não informado")
        }else {
            if (!this.validadorEmail.validateEmail(data.email)){
                throw new Error("email invalido") 
            }
        }

        if (!data.telefones){
            throw new Error("nenhum telefone informado")
        }else if (data.telefones.length<0){
            throw new Error("nenhum telefone informado")
        }

        const idContato = await this.atualizarRespository.update(numberId, data)

        return idContato
    }
}