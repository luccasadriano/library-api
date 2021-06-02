import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryColumn()
  id: number;

  @Column()
   code: string

   @Column()
   name: string

   @Column()
   price: number
}

// id:number
// code: string
// name: string
// price: number
