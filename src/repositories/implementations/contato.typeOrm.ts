import { getManager, getRepository, Like } from "typeorm";
import { ContatoEntity } from "../../entitys/contato.entity";
import { TelefoneEntity } from "../../entitys/telefone.entity";
import { ICadastroContatoDTO } from "../../useCases/contato/cadastrarContato/cadastrarContato.dto";
import { IListarContatoDTO } from "../../useCases/contato/listarContato/listarContato.dto";
import { IContatoRepository } from "../interface/IContato.respository";


export class ContatoRepository implements IContatoRepository {
    constructor() { }

    async findById(id: number) {
        const contatoRespository = getRepository(ContatoEntity)
        return await contatoRespository.findOne({ where: { id: id } })
    }

    async findAll() {
        const accountRespository = getRepository(ContatoEntity)
        return await accountRespository.find()
    }

    async findByName(nome: string) {
        const contatoRespository = getRepository(ContatoEntity)
        return await contatoRespository.find({
            ultimoNome: Like(`%${nome}%`),
            primeiroNome: Like(`%${nome}%`)
        })
    }

    async findByEmail(email: string) {
        const contatoRespository = getRepository(ContatoEntity)
        return await contatoRespository.find({
            email: Like(`%${email}%`)
        })
    }

    async findByFiltro(filtros: IListarContatoDTO) {
        const contatoRespository = getRepository(ContatoEntity)
            .createQueryBuilder("contato")

        if (filtros.email) {
            contatoRespository.orWhere("contato.email LIKE :email", { email: `%${filtros.email}%` })
        }

        if (filtros.nome) {
            contatoRespository.orWhere("contato.primeiroNome LIKE :primeiroNome", { primeiroNome: `%${filtros.nome}%` })
            contatoRespository.orWhere("contato.ultimoNome LIKE :segundoNome", { segundoNome: `%${filtros.nome}%`})
        }

        const dados = await contatoRespository.getRawMany();

        return dados
    }

    async save(data: ICadastroContatoDTO) {
        return await getManager().transaction(async transactionalEntityManager => {
            const { telefones, ...dados } = data

            const contato = new ContatoEntity(dados)

            const novoContato = await transactionalEntityManager.save(contato)

            const telefonesDoContao = telefones.map(telefone => {
                const novoTelefone = { contatoId: novoContato.id, numero: telefone }
                return new TelefoneEntity(novoTelefone)
            })

            await transactionalEntityManager.save(telefonesDoContao)
            return novoContato.id
        })
    }

    async update(id: number, data: ICadastroContatoDTO) {

        return await getManager().transaction(async transactionalEntityManager => {

            const { telefones, ...dados } = data

            const contato = new ContatoEntity(dados)

            await transactionalEntityManager.update(ContatoEntity, id, contato)

            const telefonesDoContao = telefones.map(telefone => {
                const novoTelefone = { contatoId: id, numero: telefone }
                return new TelefoneEntity(novoTelefone)
            })

            const telefonesExcluir = await transactionalEntityManager.find(TelefoneEntity, { where: { contatoId: id } })
            await transactionalEntityManager.delete(TelefoneEntity, telefonesExcluir)
            await transactionalEntityManager.save(telefonesDoContao)

            return "Sucesso"
        })

    }

    async delete(id: number) {
        return await getManager().transaction(async transactionalEntityManager => {

            const telefonesExcluir = await transactionalEntityManager.find(TelefoneEntity, { where: { contatoId: id } })
            await transactionalEntityManager.delete(TelefoneEntity, telefonesExcluir)

            const contato = await transactionalEntityManager.find(ContatoEntity, { where: { id: id } })
            await transactionalEntityManager.delete(ContatoEntity, contato)

            return "Sucesso"
        })
    }

}