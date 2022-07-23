const Doula = require("../src/models/doulasModels.js");

describe("Teste de models", () => {
  const doulas = new Doula({
    id: " 5 ",
    nome: "Andreza",
    cidade: "Recife",
    estado: "Pernambuco",
    contato: 987526987,
    email: "andreza@gmail.com",
  });

  it("Nova doula", () => {
    expect(doulas.nome).toBe("Andreza");
  });
  it("testar cidade", () => {
    expect(doulas.cidade).toBe("Recife");
  });
  it("testar estado", () => {
    expect(doulas.estado).toBe("Pernambuco");
  });
  it("testar contato", () => {
    expect(doulas.contato).toStrictEqual(987526987);
  });
  it("testar email", () => {
    expect(doulas.email).toBe("andreza@gmail.com");
  });
  it("Nova doula no banco de dados", () => {
    doulas.save().then((dados) => {
      expect(dados.title).toBe(" ");
    });
  });
});
