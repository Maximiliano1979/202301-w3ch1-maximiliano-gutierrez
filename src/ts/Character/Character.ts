import type {
  AdvisorStructre,
  CharacterDataStructure,
  CharacterStructure,
  FighterStructure,
  KingStructure,
  SquireStructure,
} from "../types/types";

export class Character implements CharacterStructure {
  public isAlive = true;
  public series = "Game of Thrones";

  constructor(public characterData: CharacterDataStructure) {}

  communicate(): string {
    return `${this.characterData.name} says: `;
  }

  die(): void {
    this.isAlive = false;
  }
}
