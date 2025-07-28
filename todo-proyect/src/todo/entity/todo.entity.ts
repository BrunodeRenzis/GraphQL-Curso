import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType() //Es una manera de que este tipo de dato Todo pueda exportarse para que otas propiedades puedan ser de tipo todo y sea reconocible para graphql
export class Todo {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  done: boolean = false;
}
