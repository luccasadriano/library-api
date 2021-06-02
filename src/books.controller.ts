import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Books } from './books.model'
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {
   constructor(private booksService: BooksService){

   }

   @Get()
   show(): Books[] {
      return this.booksService.show()
   }

   @Get(':id')
   find(@Param() params): Books {
      return this.booksService.findOne(params.id)
   }

   @Post()
   create(@Body() book: Books) {
      book.id = 1
      this.booksService.create(book)
   }

   @Put()
   update(@Body() book: Books): Books {
      return this.booksService.update(book)
   }

   @Delete(':id')
   delete(@Param() params) {
      this.booksService.delete(params.id)
   }

}