import { Entity, ObjectIdColumn, ObjectID, Column, Unique } from 'typeorm';

@Entity()
@Unique(['username'])
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({
        type: 'varchar',
        width: 100,
        nullable: false,
    })
    username: string;

    @Column({
        type: 'varchar',
        width: 100,
        nullable: false,
    })
    firstName: string;

    @Column({
        type: 'varchar',
        width: 100,
        nullable: false,
    })
    lastName: string;

    @Column({
        type: 'text',
        nullable: false,
    })
    password: string;

    @Column({
        type: 'text',
        width: 150,
        nullable: false,
    })
    token: string;

    @Column({
        type: 'varchar',
        width: 150,
        nullable: false,
    })
    refreshToken: string;

    @Column({
        type: 'smallint',
        width: 10,
        nullable: false,
    })
    revokeToken = 0;
}
