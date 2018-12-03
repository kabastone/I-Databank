export class DataModel {
  constructor(public id: number, public name: string, public description: string, public categorie: string, public type: string,
              public date: Date, public view: number, public content: object[]) {
  }
}
