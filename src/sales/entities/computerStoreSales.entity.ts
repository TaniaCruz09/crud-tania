import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn('uuid')
  saleID: string;

  @Column({ type: 'text', nullable: true })
  customer: string;

  @Column({ type: 'text' })
  product: string;

  @Column({ type: 'text', nullable: true })
  saleDate: string;

  @Column({ type: 'numeric' })
  saleAmount: number;

  @Column({ type: 'text', default: 'debito' })
  paymentMethod: string;

  @Column({ type: 'text', nullable: true })
  salePerson: string;
}
