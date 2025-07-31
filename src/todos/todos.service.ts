import { Injectable } from '@nestjs/common';

export interface ITodo {
  id: string,
  title: string,
  description: string,
  done: boolean,
}

@Injectable()
export class TodosService {
  private todos: ITodo[] = [];

  getAllTodos (): ITodo[] {
    return this.todos;
  }

}
