import { Request, Response } from "express"
import { ListarContatoService } from "./listarContato.service";

export class ListarContatoController {
    constructor(
        private listarrContratoService: ListarContatoService
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const filtroNome = request.query.nome;
            const filtroEmail = request.query.email;

            const filtros = {
                nome: filtroNome==undefined ? null :filtroNome.toString() ,
                email: filtroEmail==undefined ? null : filtroEmail.toString()
            }

            const contatos = await this.listarrContratoService.execute(filtros)

            return response
                .status(201)
                .json(contatos)

        } catch (e) {
            return response.status(500).json({
                message: e.message || "Erro Inesperado"
            })
        }
    }
}