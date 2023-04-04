import { ApiProperty } from '@nestjs/swagger';
import { Readable } from 'stream';

export interface userDto {
  user_id: number;
  full_name: string;
  email: string;
  pass_word: string;
}

export interface FileDto {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  stream: Readable;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  fileUpload: any;
}
