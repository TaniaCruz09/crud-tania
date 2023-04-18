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
import { SaleService } from './sales.service';
import { CreateSaleDTO } from './dto/computerStoreSales.dto';

@Controller('venta')
export class SalesController {
  constructor(private readonly saleServiceRepo: SaleService) {}

  //Crear una nueva venta
  @Post()
  create(@Body() saleDTO: CreateSaleDTO) {
    return this.saleServiceRepo.create(saleDTO);
  }

  //ver todos las ventas
  @Get()
  findAll() {
    return this.saleServiceRepo.findAll();
  }

  //visualizar una venta en especifico
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.saleServiceRepo.findOne(id);
  }

  //Remover una venta en especifico
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.saleServiceRepo.remove(id);
  }

  //Actualizar una venta especifico
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateSaleDTO: CreateSaleDTO,
  ) {
    return this.saleServiceRepo.update(id, updateSaleDTO);
  }
}
