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

// Change this or the name
export interface WorkspaceData {
  workspaceId: string,
  name: string,
  description?: string
  visibilityPrivate: boolean,
  visibilityPublic: boolean,
  canEditAdmin: boolean,
  canEditUser: boolean,
  boards: BoardData[] | []
}

// Change this or the name
export interface WorkspaceType {
  workspaceId: string,
  name: string,
  description?: string
  visibilityPrivate: boolean,
  visibilityPublic: boolean,
  canEditAdmin: boolean,
  canEditUser: boolean,
}

export interface BoardData {
  boardId: string,
  title: string,
  description?: string,
  coverColor?: string,
  coverImage?: string,
  workspaceId: string,
  
}