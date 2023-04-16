import {
  IsNotEmpty,
  MinLength,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Unique } from 'typeorm';

export class CreateProductDTO {
  @IsString()
  @MinLength(25)
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsNumber()
  @IsNotEmpty()
  @Unique(['model'])
  model: number;

  @IsString()
  @IsNotEmpty()
  @Unique(['description'])
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsOptional()
  availability: string;
}
