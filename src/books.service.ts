import { Injectable } from '@nestjs/common';
import { BooksController } from './books.controller';
import {Book} from './books.model'

@Injectable()
export class BooksService {
  books: Book[] = [
    // new Book("LIV01", "Livro TDD e BDD na prática", 29.90),
    // new Book("LIV02", "Livro Iniciando com Flutter", 39.90),
    // new Book("LIV03", "Inteligência artificial como serviço", 29.90),
];

  show(): Book[] {
    return this.books;
  }
  findOne(id: number): Book {
    return this.books[0];
  }
  create(book: Book) {
    this.books.push(book);
  }
  update(book: Book): Book {
    return book;
  }
  delete(id: number){
   this.books.pop()
  }
}
