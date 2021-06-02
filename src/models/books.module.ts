import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BooksController } from "src/books.controller";
import { BooksService } from "src/books.service";
import { Book } from "./book.entity";

@Module({
   imports: [TypeOrmModule.forFeature([Book])],
   providers: [BooksService],
   controllers:[BooksController]
})
export class BooksModule{}