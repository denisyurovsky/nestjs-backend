import { ApiProperty } from "@nestjs/swagger";
import { Model, Table, Column, DataType } from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({
    tableName: 'users'
})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'ИД'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'test@mail.ru', description: 'почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @ApiProperty({example: 'KJZHXKJbasfb213', description: 'пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    @ApiProperty({example: 'true', description: 'забанен или нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    @ApiProperty({example: 'фрод', description: 'причина бана'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;
}