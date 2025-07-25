import { Query, Resolver, Int, Float, Args } from '@nestjs/graphql';

//proveen las instrucciones para transformar instrucciones provenientes del cleinente en data que GraphQL puee utilizar.
@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  helloWorld(): string {
    return 'Hola';
  }

  @Query(() => Number, { name: 'randomNumber' })
  getRandomNumber(): Number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomNumberFromZeroTo',
    description: 'From zro to argument TO',
  })
  randomNumberFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 5,
  ): Number {
    return Math.floor(Math.random() * to) + 1;
  }
}
