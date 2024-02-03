import { Inject, Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { Meal } from './entities/meal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MealsService {
  constructor(
    @Inject('MEAL_REPOSITORY')
    private mealRepository: Repository<Meal>,
  ) {}

  create(createMealDto: CreateMealDto) {
    this.mealRepository.save(createMealDto);
  }

  findAll(): Promise<Meal[]> {
    return this.mealRepository.find();
  }

  findOne(id: string) {
    return this.mealRepository.findBy({ id: id });
  }

  update(id: string, updateMealDto: UpdateMealDto) {
    return this.mealRepository.update({ id: id }, updateMealDto);
  }

  remove(id: string) {
    return this.mealRepository.delete({ id: id });
  }
}
