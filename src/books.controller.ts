import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import {Book} from './books.model'
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {
   constructor(private booksService: BooksService){
   }

   @Get()
   show(): Book[] {
      return this.booksService.show()
   }

   @Get(':id')
   find(@Param() params): Book {
      return this.booksService.findOne(params.id)
   }

   @Post()
   create(@Body() book: Book) {
      book.id = 1
      this.booksService.create(book)
   }

   @Put()
   update(@Body() book: Book): Book {
      return this.booksService.update(book)
   }

   @Delete(':id')
   delete(@Param() params) {
      this.booksService.delete(params.id)
   }

}