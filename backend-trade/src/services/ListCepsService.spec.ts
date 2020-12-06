import CreateCepService from "./CreateCepService";
import FakeCepRepository from "../infra/typeorm/fakes/FakeCepRepository";
import ICepRepository from "../infra/typeorm/ICepRepository";
import CepController from "../controllers/CepController";
import ListCepsService from "./ListCepsService";

let fakeCepRepository: ICepRepository;
let createCep: CreateCepService;
let listCeps: ListCepsService;

describe("CreateCep", () => {
  fakeCepRepository = new FakeCepRepository();
  createCep = new CreateCepService(fakeCepRepository);
  listCeps = new ListCepsService(fakeCepRepository);

  it("should be able to list all CEPs and cities created", async () => {
    const cep1 = await createCep.execute({
      city: "Maringá",
      cep: "870246",
    });
    
    const cep2 = await createCep.execute({
      city: "Maringá",
      cep: "123456",
    });

    const ceps = await listCeps.execute();

    expect(ceps).toEqual([cep1, cep2]);
  });
});