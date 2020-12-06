import CreateCepService from "./CreateCepService";
import FakeCepRepository from "../infra/typeorm/fakes/FakeCepRepository";
import ICepRepository from "../infra/typeorm/ICepRepository";
import AppError from "../AppError";

let fakeCepRepository: ICepRepository;
let createCep: CreateCepService;

describe("CreateCep", () => {
  beforeEach(() => {
    fakeCepRepository = new FakeCepRepository();
    createCep = new CreateCepService(fakeCepRepository);
  });

  it("should be able to create a new CEP", async () => {
    const novoCep = await createCep.execute({
      city: "Maringá",
      cep: "870223",
    });

    expect(novoCep).toHaveProperty("id");
    expect(novoCep.city).toBe("Maringá");
  });

  it("should not be able to create CEP higher than 999.999", async () => {
    await expect(createCep.execute({
      city: 'Maringá',
      cep: '9999999',
    })).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create CEP lower than 100.000", async () => {
    await expect(createCep.execute({
      city: 'Maringá',
      cep: '9',
    })).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create CEP containing alternated repeated digits in pairs", async () => {
    await expect(createCep.execute({
      city: 'Maringá',
      cep: '123215',
    })).rejects.toBeInstanceOf(AppError);
  });
});
