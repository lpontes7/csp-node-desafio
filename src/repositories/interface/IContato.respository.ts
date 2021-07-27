import { ContatoEntity } from "../../entitys/contato.entity";
import { ICadastroContatoDTO } from "../../useCases/contato/cadastrarContato/cadastrarContato.dto";
import { IListarContatoDTO } from "../../useCases/contato/listarContato/listarContato.dto";

export interface IContatoRepository{
    findById(id:number):Promise<ContatoEntity | undefined>;
    findAll():Promise<ContatoEntity[] | undefined>;
    findByName(nome:String):Promise<ContatoEntity[] | undefined>;
    findByEmail(email:String):Promise<ContatoEntity[] | undefined>;
    findByFiltro(filtros: IListarContatoDTO ):Promise<ContatoEntity[] | undefined>;
    update(id:number, data: ICadastroContatoDTO):Promise<string>; 
    delete(id:number):Promise<string>;
    save(dados: ICadastroContatoDTO): Promise<number>;
}