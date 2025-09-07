import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos" });
  } else if (erro instanceof mongoose.Error.ValidationError) {
    const messagensErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    res.status(400).send({ message: `Os seguintes erros foram encontrados: ${messagensErro}` });
  } else {
    res.status(500).send({ message: "Erro interno de servidor." });
  };
}

export default manipuladorDeErros;