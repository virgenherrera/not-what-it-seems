import { IsDefined, Matches } from 'class-validator';

export class StuffDto {
  @IsDefined()
  @Matches(/^[A-Z0-9-]+$/, { each: true })
  eids: string[];
}
