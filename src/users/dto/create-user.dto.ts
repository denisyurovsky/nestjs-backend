import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'test@mail.ru', description: 'почта'})
    readonly email: string;
    @ApiProperty({example: 'KJZHXKJbasfb213', description: 'пароль'})
    readonly password: string;
}