import {
  IsNotEmpty,
  MinLength,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateSaleDTO {
  @IsString()
  @IsOptional()
  customer: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(25)
  product: string;

  @IsString()
  @IsOptional()
  saleDate: string;

  @IsNumber()
  @IsNotEmpty()
  saleAmount: number;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  @IsString()
  @IsOptional()
  salePerson: string;
}
