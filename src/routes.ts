import { Router } from "express";
import { cadastrarContatoController } from "./useCases/contato/cadastrarContato/cadastrarContato.index";
import { listarContatoController } from "./useCases/contato/listarContato/listarContato.index";

const router = Router()

router.get('/contato', (request, response) => {
    return listarContatoController.handle(request, response)
})

router.post("/contato", (request, response) => {
    return cadastrarContatoController.handle(request, response)
})

router.put("/contato/:id", (request, response) => {
   // return atualizarContatoController.handle(request, response)
})

router.delete("/contato/:id", (request, response) => {
   // return deletarContatoController.handle(request, response)
})


export {router}