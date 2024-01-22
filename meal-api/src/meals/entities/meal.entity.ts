import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  mealId: string;

  @Column()
  quantity: number;

  @Column()
  price: number;
}
