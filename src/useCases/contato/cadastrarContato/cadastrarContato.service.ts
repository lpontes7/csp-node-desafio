import { IContatoRepository } from "../../../repositories/interface/IContato.respository"
import { ValidadorEmailAdapter } from "../../../utils/validadorEmail"
import { ICadastroContatoDTO } from "./cadastrarContato.dto"

export class CadastrarContatoService {

    constructor(
        private contatoRespository: IContatoRepository,
        private validadorEmail: ValidadorEmailAdapter
    ) { }

    async execute(data: ICadastroContatoDTO): Promise<number> {
        
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

        const idContato = await this.contatoRespository.save(data)

        return idContato
    }
}