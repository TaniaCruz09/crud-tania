import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  productID: string;

  @Column({ type: 'text' })
  productName: string;

  @Column({ type: 'text' })
  brand: string;

  @Column({ type: 'numeric', unique: true })
  model: number;

  @Column({ type: 'text', unique: true })
  description: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'text', default: 'en stock', nullable: true })
  availability: string;
}
