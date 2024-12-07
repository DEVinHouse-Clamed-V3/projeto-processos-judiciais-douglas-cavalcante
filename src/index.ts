import PessoaJuridica from "./classes/PessoaJuridica";
import ProcessosJudiciaisAPI from "./classes/ProcessosJudiciaisAPI";

async function run() {
  const microsoft = new PessoaJuridica(
    "Microsoft",
    "Micro soft",
    "12.345.678/0001-00"
  );

  const processosDoCnpj = await ProcessosJudiciaisAPI.buscarProcessosPorCnpj(
    microsoft.getCnpj()
  );

  const processo = await ProcessosJudiciaisAPI.buscarProcessoPorId("1")

}

run()
