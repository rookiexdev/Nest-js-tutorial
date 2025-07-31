import { Controller, Get, Param } from '@nestjs/common';
import { ITodo, TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get("/")
  getAllTodos (): ITodo[] {
    return this.todosService.getAllTodos();
  }

  @Get("/:id")
  getTodoById(@Param("id") id: string){
    return { id }
  }
}
