import { Field, InputType, Int } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min } from "class-validator";

@InputType()
export class UpdateTodoInput{
    @Field(()=>Int)
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    id:number;

    @Field(()=>String, {description:"What needs to be done", nullable:true})
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @MaxLength(20)
    description?:string;

    @Field(()=>Boolean, {description:"If the todo is done", nullable:true})
    @IsBoolean()
    @IsOptional()
    done?:boolean;
}