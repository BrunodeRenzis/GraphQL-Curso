import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ObjectType({description:"todo quick aggregations"})
export class AggregationsType{
    @Field(()=>Int)
    total:number;

    @Field(()=>Int)
    pending:number;

    @Field(()=>Int)
    completed:number;

    @IsOptional()
    @Field(()=>Int,{deprecationReason:"Use completed instead"})
    totalTodosCompleted:number;
}