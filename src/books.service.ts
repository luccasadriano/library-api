import { Injectable } from '@nestjs/common';
import { BooksController } from './books.controller';
import {Book} from './models/book.entity'

@Injectable()
export class BooksService {


  show(): Book[] {
    return this.Book;
  }
  findOne(id: number): Book {
    return this.Book[0];
  }
  create(book: Book) {
    this.Book.push(book);
  }
  update(book: Book): Book {
    return book;
  }
  delete(id: number){
   this.Book.pop()
  }
}
