// � Função para salvar um usuário

function salvarUsuario() {
    const nome = document.getElementById("nome").value;
    fetch("http://localhost:3000/salvar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome })
    })
    .then(res => res.json())
    .then(() => listarUsuarios()); // Atualiza a lista de usuários
    }
    // � Função para listar usuários cadastrados
    function listarUsuarios() {
        fetch("http://localhost:3000/usuarios")
            .then(res => res.json())
            .then(usuarios => {
                const lista = document.getElementById("listaUsuarios");
                lista.innerHTML = "";
    
                usuarios.forEach(user => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                        ${user.nome}
                        <button onclick="editarUsuario(${user.id}, '${user.nome}')">✏️</button>
                        <button onclick="deletarUsuario(${user.id})">🗑️</button>
                    `;
                    lista.appendChild(li);
                });
            });
    }

    function editarUsuario(id, nomeAtual) {
        const novoNome = prompt("Editar nome:", nomeAtual);
        if (novoNome && novoNome !== nomeAtual) {
            fetch(`http://localhost:3000/editar/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome: novoNome })
            })
            .then(res => res.json())
            .then(() => listarUsuarios());
        }
    }

    function deletarUsuario(id) {
        if (confirm("Tem certeza que deseja deletar?")) {
            fetch(`http://localhost:3000/deletar/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(() => listarUsuarios());
        }
    }
    // � Carregar usuários ao iniciar a página
    listarUsuarios();