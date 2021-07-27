import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ContatoEntity } from './contato.entity';


@Entity('telefone', { schema: 'agenda' })
export class TelefoneEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', { name: 'contato_id' })
    contatoId: number;

    @Column('text', { name: 'numero' })
    numero: string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;

    @Column({ name: 'delete_at', type: 'timestamp', nullable: true })
    deleteAt: Date | null;

    @ManyToOne(
        type => ContatoEntity,
        contato => contato.telefones,
    )
    @JoinColumn({ name: 'contato_id' })
    contato: ContatoEntity;

    constructor(partial: Partial<TelefoneEntity>) {
        Object.assign(this, partial);
    }
}