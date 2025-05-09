const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("meusite.db", err => {
  if (err) console.error("Erro ao conectar ao SQLite:", err);
  else console.log("✅ Banco de dados ta pegandooooooooooooo.");
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT
  )`);
  console.log("✅ Tabela usuarios ta pegandoooooooooooo.");
});

app.post("/salvar", (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ mensagem: "Nome é obrigatório!" });

  const sql = "INSERT INTO usuarios (nome) VALUES (?)";
  db.run(sql, [nome], function (err) {
    if (err) return res.status(500).json({ mensagem: "Erro ao salvar." });
    res.json({ mensagem: "Salvo com sucesso meu nobre!", id: this.lastID });
  });
});

app.get("/usuarios", (req, res) => {
  db.all("SELECT * FROM usuarios", [], (err, rows) => {
    if (err) return res.status(500).json({ mensagem: "Erro ao buscar o cearense" });
    res.json(rows);
  });
});

app.delete("/deletar/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM usuarios WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ mensagem: "Erro ao deletar." });
    res.json({ mensagem: "Foi de Vasco!" });
  });
});

app.put("/editar/:id", (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ mensagem: "Nome é obrigatório doido!" });

  db.run("UPDATE usuarios SET nome = ? WHERE id = ?", [nome, id], function (err) {
    if (err) return res.status(500).json({ mensagem: "Erro ao editar esse doido ai." });
    res.json({ mensagem: "Editado com sucesso esse doido!" });
  });
});

app.listen(3000, () => {
  console.log("🚀 Servidor rodando na porta 3000");
});
