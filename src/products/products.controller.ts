import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/computerStoreProducts.dto';
import { ProductService } from './products.service';

@Controller('productos')
export class ProductsController {
  constructor(private readonly productServiceRepo: ProductService) {}

  //Crear un nuevo producto
  @Post()
  create(@Body() productDTO: CreateProductDTO) {
    return this.productServiceRepo.create(productDTO);
  }

  //ver todos los productos
  @Get()
  findAll() {
    return this.productServiceRepo.findAll();
  }

  //visualizar un producto en especifico
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productServiceRepo.findOne(id);
  }

  //Remover un producto especifico
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productServiceRepo.remove(id);
  }

  //Actualizar un producto especifico
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProductDTO: CreateProductDTO,
  ) {
    return this.productServiceRepo.update(id, updateProductDTO);
  }
}
