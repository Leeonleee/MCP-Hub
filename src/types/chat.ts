export type Role = "user" | "assistant"

export type Attachment = {
  id: string
  name: string
  size: number
  type: string
}

export type Message = {
  id: string
  role: Role
  content: string
  createdAt: number
  attachments?: Attachment[]
  status?: "streaming" | "done"
}

export type Conversation = {
  id: string
  title: string
  createdAt: number
  updatedAt: number
  messages: Message[]
}
