import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/computerStoreProducts.entity';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './dto/computerStoreProducts.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  //metodo que crea el nuevo producto
  async create(productDTO: CreateProductDTO) {
    const product = this.productRepository.create(productDTO);
    await this.productRepository.save(product);

    return product;
  }

  //metodo para visualizar todos los porductos
  findAll() {
    return this.productRepository.find();
  }

  //metodo para visualizar un producto en especifico
  findOne(productID: string) {
    return this.productRepository.findOneBy({ productID });
  }

  //Remover un producto especifico
  async remove(productID: string) {
    const product = await this.findOne(productID);
    await this.productRepository.remove(product);
    return 'Producto eliminado satisfactoriamente';
  }

  //Actualizar un producto especifico
  async update(productID: string, cambios: CreateProductDTO) {
    const findProduct = await this.findOne(productID);
    const updatedProduct = await this.productRepository.merge(
      findProduct,
      cambios,
    );
    return this.productRepository.save(updatedProduct);
  }
}
