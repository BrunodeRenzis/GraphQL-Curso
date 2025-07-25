import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}
  @Query(() => [Todo], { name: 'todos' })
  findAll(): Todo[] {
    //asjlk
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'TodoById' })
  findOne(@Args('id', { type: () => Int }) id: Number) {
    return this.todoService.findOne(id);
  }

  createTodo() {}

  updateTodo() {}

  removeTodo() {}
}
