import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TaskModule } from 'src/todos/task/task.module';

@Module({
  imports: [TaskModule],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
