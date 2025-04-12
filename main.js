const explicadores = [
    { nome: "João Silva", disciplina: "Matemática" },
    { nome: "Maria Oliveira", disciplina: "Física" },
    { nome: "Carlos Santos", disciplina: "Química" },
    { nome: "Ana Souza", disciplina: "Biologia" },
    { nome: "Fernanda Costa", disciplina: "Português" }
];

function buscarExplicadores() {
    const termoPesquisa = document.getElementById("search").value.toLowerCase();
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    const filtrados = explicadores.filter(explicador =>
        explicador.disciplina.toLowerCase().includes(termoPesquisa)
    );
    
    if (filtrados.length === 0) {
        resultado.innerHTML = "<p>Nenhum explicador encontrado.</p>";
    } else {
        filtrados.forEach(explicador => {
            const item = document.createElement("p");
            item.textContent = `${explicador.nome} - ${explicador.disciplina}`;
            resultado.appendChild(item);
        });
    }
}
