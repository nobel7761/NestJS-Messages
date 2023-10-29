import { IsString } from 'class-validator';

//! step 2
// create a class that describes the different properties that the request body should have. (Data transfer object/Dto)
export class CreateMessageDto {
  //! step 3 (add validation rules to the class)
  @IsString()
  content: string;
}
