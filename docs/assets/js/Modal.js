document.addEventListener("DOMContentLoaded", function () {
    const modalButton = document.querySelectorAll(".open-modal");
    const modal = document.getElementById("modal-projeto");
    const closeButton = document.querySelector(".close");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");

    const projetos = {
        "projeto1": {
            titulo: "Projeto 1 - Py.nk",
            descricao: "O projeto em questão é um sistema de internet banking desenvolvido pelo grupo Py.nk, utilizando metodologias ágeis para a entrega de funcionalidades básicas e uma interface de administração. O sistema será acessado por três principais atores: o cliente (usuário comum), o gerente de agência e o gerente geral.<br>Os requisitos funcionais para o cliente incluem a capacidade de realizar operações como cadastro, login, emissão de extrato bancário, movimentações financeiras (depósito em caixa, saque e transferência), solicitação de atualização de dados e fechamento de conta. Cada uma dessas ações deve gerar um comprovante correspondente.",
            link: "https://github.com/pynkAPI/API-1-DSM_22"
        },
        "projeto2": {
            titulo: "Projeto 2",
            descricao: "Descrição do segundo projeto, suas funcionalidades e tecnologias utilizadas.",
            link: "https://github.com/seuRepositorio/projeto2"
        },
        "projeto3": {
            titulo: "Projeto 3",
            descricao: "Descrição do terceiro projeto, suas funcionalidades e tecnologias utilizadas.",
            link: "https://github.com/seuRepositorio/projeto3"
        },
        "projeto4": {
            titulo: "Projeto 4",
            descricao: "Descrição do quarto projeto, suas funcionalidades e tecnologias utilizadas.",
            link: "https://github.com/seuRepositorio/projeto4"
        },
        "projeto5": {
            titulo: "Projeto 5",
            descricao: "Descrição do quinto projeto, suas funcionalidades e tecnologias utilizadas.",
            link: "https://github.com/seuRepositorio/projeto5"
        },
        "projeto6": {
            titulo: "Projeto 6",
            descricao: "Descrição do sexto projeto, suas funcionalidades e tecnologias utilizadas.",
            link: "https://github.com/seuRepositorio/projeto6"
        }
    };

    modalButton.forEach(button => {
        button.addEventListener("click", function () {
            const projetoId = this.getAttribute("data-projeto");
            modalTitle.textContent = projetos[projetoId].titulo;
            modalDescription.textContent = projetos[projetoId].descricao;
            modalLink.href = projetos[projetoId].link;
            modal.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
