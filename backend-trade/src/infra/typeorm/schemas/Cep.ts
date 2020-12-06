import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity("ceps")
class Cep {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  city: string;

  @Column()
  cep: string;
}

export default Cep;
