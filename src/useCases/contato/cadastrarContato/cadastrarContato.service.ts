import { IContatoRepository } from "../../../repositories/interface/IContato.respository"
import { ICadastroContatoDTO } from "./cadastrarContato.dto"

export class CadastrarContatoService {

    constructor(
        private contatoRespository: IContatoRepository,
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
            //validar email 
        }

        if (data.telefones.length<0){
            throw new Error("nenhum telefone informado")
        }

        const idContato = await this.contatoRespository.save(data)

        return idContato
    }
}