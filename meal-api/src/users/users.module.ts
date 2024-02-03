import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserProviders } from './users.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...UserProviders],
  exports: [UsersService],
})
export class UsersModule {}
