import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/computerStoreSales.entity';
import { SalesController } from './sales.controller';
import { SaleService } from './sales.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  controllers: [SalesController],
  providers: [SaleService],
})
export class SalesModule {}
