import { ExampleType } from "./example-type.enum";

export class InfoExampleItem {
  public constructor(
    public id: string,
    public infoItem: string,
    public exampleTypeId: ExampleType,
    public text: string = ''
  ) {}
}
