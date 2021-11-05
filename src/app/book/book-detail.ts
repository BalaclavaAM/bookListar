import { Author } from "./author/author";
import { Book } from "./book";
import { Review } from "./review";

export class BookDetail extends Book {
  authors: Array<Author>;
  reviews: Array<Review>;

}
