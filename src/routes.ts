import { Router } from "express";

const router = Router()

router.get('/teste', (request, response) => {
    return response.json({Mensagem : "Sucesso"})
})

export {router}