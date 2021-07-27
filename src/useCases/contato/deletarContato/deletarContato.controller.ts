import { Request, Response } from "express"
import { DeletarContatoService } from "./deletarContato.service";

export class DeletarContatoController {
    constructor(
        private deletarContratoService: DeletarContatoService
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id

            const mensagem = await this.deletarContratoService.execute(id)

            return response
                .status(201)
                .json({
                    message: `${mensagem} ao deletar contato`
                })

        } catch (e) {
            return response.status(500).json({
                message: e.message || "Erro Inesperado"
            })
        }
    }
}