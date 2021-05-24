import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductsController {

   @Get()
   show(): string {
      return 'Lista todos os produtos!'
   }

   @Get(':id')
   find(@Param() params): string {
      return `Retorna os dados do produtos ${params.id}!`
   }

   @Post()
   create(@Body() product): string {
      console.log(product)
      return 'Produto(s) criado!'
   }

   @Put()
   update(@Body() product): string {
      console.log(product)
      return 'Produto alterado!'
   }

   @Delete(':id')
   delete(@Param() params): string {
      return `Produto ${params.id} delete!`
   }

}