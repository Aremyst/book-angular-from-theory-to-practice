export class Article {
  constructor(public title: string, public date: Date, public content: string, public kind: string) {
    this.title = title;
    this.date = date;
    this.content = content;
    this.kind = kind;
  }
}
