import { Request, Response } from "express"
import { AtualizarContatoService } from "./atualizarContato.service";


export class AtualizarContatoController {
    constructor(
        private atualizarContratoService:AtualizarContatoService
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id
            const { primeiroNome, ultimoNome, email, telefones } = request.body;

            const data = {primeiroNome, ultimoNome, email, telefones}

            const mensagem = await this.atualizarContratoService.execute(id, data)

            return response
                .status(201)
                .json({
                    message: `${mensagem} ao atualizar contato`
                })

        } catch (e) {
            return response.status(500).json({
                message: e.message || "Erro Inesperado"
            })
        }
    }
}