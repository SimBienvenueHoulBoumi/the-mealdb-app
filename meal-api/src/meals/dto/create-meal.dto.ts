import { ApiProperty } from '@nestjs/swagger';

export class CreateMealDto {
  @ApiProperty({
    description: 'The name of the meal',
    type: String,
    default: 'Meal name',
  })
  mealId: string;
  @ApiProperty({
    description: 'The quantity of the meal',
    type: Number,
    default: 5,
  })
  quantity: number;
  @ApiProperty({
    description: 'The price of the meal',
    type: Number,
    default: 100,
  })
  price: number;
}
