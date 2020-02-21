import { Injectable } from "client/client/node_modules/@angular/core/core";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  constructor() {}
}
