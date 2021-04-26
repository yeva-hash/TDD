import { Registration } from "./registration.form";
let regis;

beforeEach(() => {
  regis = new Registration();
  document.body.innerHTML = "";
  document.body.append(regis.dom);
});
describe("Layout", () => {
  it.only("should render div#container", () => {
    expect.assertions(1);
    const container = document.getElementById("container");
    expect(container).toBeTruthy();
  });

  it("should render input#emailInput", () => {
    expect.assertions(1);
    const emailInput = document.getElementById("emailInput");
    expect(emailInput).toBeTruthy();
  });

  it("should render div#emailValidCont", () => {
    expect.assertions(1);
    const emailValidCont = document.getElementById("emailValidCont");
    expect(emailValidCont).toBeTruthy();
  });

  it("should render input#passInput", () => {
    expect.assertions(1);
    const passInput = document.getElementById("passInput");
    expect(passInput).toBeTruthy();
  });

  it("should render div#passValidCont", () => {
    expect.assertions(1);
    const passValidCont = document.getElementById("passValidCont");
    expect(passValidCont).toBeTruthy();
  });

  it("should render input#repeatPassInput", () => {
    expect.assertions(1);
    const repeatPassInput = document.getElementById("repeatPassInput");
    expect(repeatPassInput).toBeTruthy();
  });

  it("should render div#repeatPassValidCont", () => {
    expect.assertions(1);
    const repeatPassValidCont = document.getElementById("repeatPassValidCont");
    expect(repeatPassValidCont).toBeTruthy();
  });

  it("should render button#createAccount", () => {
    expect.assertions(1);
    const buttonCreateAccount = document.getElementById("createAccount");
    expect(buttonCreateAccount).toBeTruthy();
  });
});
