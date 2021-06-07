import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import {Book} from './books.model'
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {
   constructor(private booksService: BooksService){
   }

   @Get()
   async show(): Promise<Book[]> {
      return this.booksService.show()
   }

   @Get(':id')
   async find(@Param() params): Promise<Book> {
      return this.booksService.findOne(params.id)
   }

   @Post()
   create(@Body() book: Book) {
      this.booksService.create(book)
   }

   @Put()
   async update(@Body() book: Book): Promise<[number, Book[]]> {
      return this.booksService.update(book)
   }

   @Delete(':id')
   async delete(@Param() params) {
      this.booksService.delete(params.id)
   }

}