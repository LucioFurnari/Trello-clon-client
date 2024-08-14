import { Delta } from "quill/core";


export interface CardData {
  cardId: string,
  title: string,
  description?: Delta, 
  coverColor?: string,
  coverImage?: string,
  startDate?: string,
  dueDate?: Date, 
  listId: string   
}