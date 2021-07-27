import { Request, Response } from "express"
import { CadastrarContatoService } from "./cadastrarContato.service";

export class CadastrarContatoController {
    constructor(
        private cadastrarContratoService: CadastrarContatoService
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { primeiroNome, ultimoNome, email, telefones } = request.body;

            const id = await this.cadastrarContratoService.execute({
                primeiroNome, ultimoNome, email, telefones
            })

            return response
                .status(201)
                .json({
                    message: `Sucesso ao cadastrar um novo contato, id: ${id}:`
                })

        } catch (e) {
            return response.status(500).json({
                message: e.message || "Erro Inesperado"
            })
        }
    }
}