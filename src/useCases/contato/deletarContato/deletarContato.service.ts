import { IContatoRepository } from "../../../repositories/interface/IContato.respository"

export class DeletarContatoService {

    constructor(
        private contatoRespository: IContatoRepository,
    ) { }

    async execute(id: string): Promise<string> {
        
        if (!id){
            throw new Error("Nenhum id passado como parametro")
        }

        const numberId = parseInt(id, 10)

        const contato = await this.contatoRespository.findById(numberId)

        if(!contato){
            throw new Error("contato não encontrado")
        }

        const mensagem = await this.contatoRespository.delete(numberId)

        return mensagem
    }
}