import { Controller, Get, Param } from '@nestjs/common';

@Controller('todos/:todoId/task')
export class TaskController {
  @Get()
  getTask(@Param("todoId") todoId: string) {
    return `This is the task id ${todoId}`;
  }

  @Get("/:id")
  getTodo(@Param("id") id: string) {
    return `Here is the todo ${id}`
  }
}
