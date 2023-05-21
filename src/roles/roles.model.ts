import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreation {
  value: string;
  desc: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreation> {
  @ApiProperty({ example: '1', description: 'unice role' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'qwe', description: 'unice value' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({ example: 'qwe', description: 'des' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  desc: string;

  @BelongsToMany(() => User, () => UserRoles)
  user: User[];
}
