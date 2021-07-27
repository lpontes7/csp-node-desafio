import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ContatoEntity } from './contato.entity';
import { TipoTelefoneEntity } from './tipoTelefone.entity';


@Entity('telefone', { schema: 'agenda' })
export class TelefoneEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', { name: 'contato_id' })
    contatoId: number;

    @Column('int', { name: 'tipo_telefone_id' })
    tipoTelefoneId: number;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @Column({ name: 'delete_at', type: 'timestamp', nullable: true })
    deleteAt: Date | null;

    @ManyToOne(
        type => ContatoEntity,
        contato => contato.telefones,
    )
    @JoinColumn({ name: 'client_id' })
    contato: ContatoEntity;

    @ManyToOne(
        type => TipoTelefoneEntity,
        tipoTelefone => tipoTelefone.telefones,
    )
    @JoinColumn({ name: 'tipo_telefone_id' })
    tipoTelefone: TipoTelefoneEntity;

    constructor(partial: Partial<TelefoneEntity>) {
        Object.assign(this, partial);
    }
}