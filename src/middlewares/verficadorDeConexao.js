function verificadorDeConexao(db) {
  db.on("error", console.log.bind(console, "Erro de conexão"));
  db.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
  });
}

export default verificadorDeConexao;