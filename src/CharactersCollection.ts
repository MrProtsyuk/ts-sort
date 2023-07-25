export class CharactersCollection {
  constructor(public data: string[]) {}
  get length(): string {
    return this.data.length;
  }
  compare(): boolean {
    return false;
  }
  swap(): void {}
}
