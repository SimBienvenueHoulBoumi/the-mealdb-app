import { DataSource } from 'typeorm';

import { Meal } from './entities/meal.entity';

export const MealProviders = [
  {
    provide: 'MEAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Meal),
    inject: ['DATA_SOURCE'],
  },
];
