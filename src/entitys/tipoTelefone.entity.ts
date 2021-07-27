import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { TelefoneEntity } from './telefone.entity';
  
  @Entity('tipo_telefone', { schema: 'agenda' })
  export class TipoTelefoneEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    name: string;
  
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
  
    @Column({ name: 'delete_at', type: 'timestamp', nullable: true })
    deleteAt: Date | null;
  
    @OneToMany(
      type => TelefoneEntity,
      telefone => telefone.tipoTelefone,
    )
    telefones: TelefoneEntity[];
  
    constructor(partial: Partial<TipoTelefoneEntity>) {
      Object.assign(this, partial);
    }
  }