import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Post {
    @ObjectIdColumn()
    id: ObjectID;

    @Column({
        type: 'varchar',
        width: 200,
        nullable: false,
    })
    title: string;

    @Column({
        type: 'varchar',
        width: 100,
        nullable: false,
    })
    date: string;

    @Column({
        type: 'longtext',
        nullable: false,
    })
    content: string;

    @Column({
        type: 'varchar',
        width: 100,
        nullable: false,
    })
    tags: string;

    @Column({
        type: 'varchar',
        width: 100,
        nullable: false,
    })
    slug: string;

    @CreateDateColumn()
    public createAt: Date;

    @UpdateDateColumn()
    public updateAt: Date;
}
