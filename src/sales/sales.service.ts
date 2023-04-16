import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './entities/computerStoreSales.entity';
import { CreateSaleDTO } from './dto/computerStoreSales.dto';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
  ) {}

  //metodo que crea el nuevo producto
  async create(saleDTO: CreateSaleDTO) {
    const sale = this.saleRepository.create(saleDTO);
    await this.saleRepository.save(sale);

    return sale;
  }

  //metodo para visualizar todos los porductos
  findAll() {
    return this.saleRepository.find();
  }

  //metodo para visualizar un producto en especifico
  findOne(saleID: string) {
    return this.saleRepository.findOneBy({ saleID });
  }

  //Remover un producto especifico
  async remove(saleID: string) {
    const sale = await this.findOne(saleID);
    await this.saleRepository.remove(sale);
    return 'Venta eliminada satisfactoriamente';
  }

  //Actualizar un producto especifico
  async update(saleID: string, cambios: CreateSaleDTO) {
    const findSale = await this.findOne(saleID);
    const updatedSale = await this.saleRepository.merge(findSale, cambios);
    return this.saleRepository.save(updatedSale);
  }
}
