import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Meal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  mealId: string;

  @Column()
  quantity: number;

  @Column()
  price: number;
}
