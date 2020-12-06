import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity("users")
class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default User;
