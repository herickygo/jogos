document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const nome = document.getElementById("nome").value.trim();
        const mensagem = document.getElementById("mensagem");

        const regexEmail = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
        const regexTelefone = /^\\(\\d{2}\\) \\d{5}-\\d{4}$/;

        if (!nome || !regexEmail.test(email) || !regexTelefone.test(telefone)) {
            mensagem.style.color = "red";
            mensagem.textContent = "❌ Verifique os dados: formato de e-mail e telefone devem ser válidos.";
            return;
        }

        mensagem.style.color = "green";
        mensagem.textContent = "✅ Formulário enviado com sucesso!";
        form.reset();
    });
});
