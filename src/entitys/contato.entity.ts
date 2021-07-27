import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { TelefoneEntity } from './telefone.entity';
  
  
  @Entity('contato',  { schema: 'agenda' })
  export class ContatoEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text', { name:'primeiro_nome'})
    primeiroNome: string;
  
    @Column('text', { name:'ultimo_nome'})
    ultimoNome: string;

    @Column('text', { name:'email'})
    email: string;
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
  
    @Column({ name: 'delete_at', type: 'timestamp', nullable: true })
    deleteAt: Date | null;
  
    @OneToMany(
      type => TelefoneEntity,
      telefone => telefone.contato,
    )
    telefones: TelefoneEntity[];
  
    constructor(partial: Partial<ContatoEntity>) {
      Object.assign(this, partial);
    }
}