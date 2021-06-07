import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BooksController } from './books.controller';
import { Book } from './books.model'

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book
  ) { }

  async show(): Promise<Book[]> {
    return this.bookModel.findAll()
  }
  async findOne(id: number): Promise<Book> {
    return this.bookModel.findByPk(id)
  }
  async create(book: Book) {
    this.bookModel.create(book)
  }
  async update(book: Book): Promise<[number, Book[]]> {
    return this.bookModel.update(book, {
      where: {
        id: book.id
      }
    })
  }
  async delete(id: number) {
    const book: Book = await this.findOne(id) 
    book.destroy()
  }
}
