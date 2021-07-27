
import { ContatoEntity } from "../../../entitys/contato.entity"
import { IContatoRepository } from "../../../repositories/interface/IContato.respository"
import { IListarContatoDTO } from "./listarContato.dto"

export class ListarContatoService {

    constructor(
        private contatoRespository: IContatoRepository,
    ) { }

    async execute(filtros: IListarContatoDTO): Promise<ContatoEntity[] | undefined> {

        return await this.contatoRespository.findByFiltro(filtros)

    }
}