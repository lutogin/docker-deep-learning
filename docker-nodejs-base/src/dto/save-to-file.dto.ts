import { IsString } from 'class-validator';

export class SaveToFileDto {
  @IsString()
  payload: string;
}
