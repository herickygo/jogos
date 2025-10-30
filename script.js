document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const mensagem = document.getElementById("mensagem");

        const regexEmail = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
        const regexTelefone = /^\\(\\d{2}\\) \\d{5}-\\d{4}$/;

        if (!regexEmail.test(email)) {
            mensagem.textContent = "❌ Email inválido!";
            mensagem.style.color = "red";
            return;
        }

        if (!regexTelefone.test(telefone)) {
            mensagem.textContent = "❌ Telefone inválido! Use o formato (99) 99999-9999";
            mensagem.style.color = "red";
            return;
        }

        mensagem.textContent = "✅ Formulário enviado com sucesso!";
        mensagem.style.color = "green";
        form.reset();
    });
});
