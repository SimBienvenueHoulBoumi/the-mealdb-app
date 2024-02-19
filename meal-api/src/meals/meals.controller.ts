import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MealsService } from './meals.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth-guard.guard';

@Controller('meals')
@ApiTags('meals')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Post()
  @ApiOperation({ summary: 'create meal' })
  create(@Body() createMealDto: CreateMealDto) {
    return this.mealsService.create(createMealDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all meals' })
  findAll() {
    return this.mealsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'find one meal by id' })
  findOne(@Param('id') id: string) {
    return this.mealsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update one meal' })
  update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
    return this.mealsService.update(id, updateMealDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete one meal' })
  remove(@Param('id') id: string) {
    return this.mealsService.remove(id);
  }
}
