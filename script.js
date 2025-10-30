document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const emailMsg = document.getElementById('email-msg');
    const telefoneMsg = document.getElementById('telefone-msg');
    const formStatus = document.getElementById('form-status');

    // Função de validação de E-mail
    function validateEmail(email) {
        // Regex simples para verificar o formato do e-mail
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Função de validação de Telefone (Exemplo: 10 ou 11 dígitos, apenas números, com DDD)
    function validateTelefone(telefone) {
        // Remove todos os caracteres não numéricos
        const cleanTelefone = telefone.replace(/\D/g, '');
        // Verifica se tem 10 ou 11 dígitos (DDD + 8/9 dígitos)
        return cleanTelefone.length >= 10 && cleanTelefone.length <= 11;
    }

    // Event Listener para o envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        let isValid = true;

        // Limpa mensagens de erro e status
        emailMsg.textContent = '';
        telefoneMsg.textContent = '';
        formStatus.textContent = '';
        formStatus.className = 'status-msg';

        // 1. Validação do E-mail
        if (!validateEmail(emailInput.value)) {
            emailMsg.textContent = 'E-mail inválido. Por favor, insira um formato correto (ex: nome@dominio.com).';
            isValid = false;
        }

        // 2. Validação do Telefone
        if (!validateTelefone(telefoneInput.value)) {
            telefoneMsg.textContent = 'Telefone inválido. Deve conter 10 ou 11 dígitos (ex: 11987654321).';
            isValid = false;
        }

        // 3. Processamento do Formulário
        if (isValid) {
            // Aqui você faria o envio real dos dados (ex: usando fetch() para uma API/backend)
            
            formStatus.textContent = '✅ Mensagem enviada com sucesso! Em breve entraremos em contato.';
            formStatus.classList.add('success');
            form.reset(); // Limpa o formulário após o sucesso

            // Opcional: Log dos dados para visualização no console
            console.log('--- Dados Enviados ---');
            console.log('Nome:', document.getElementById('nome').value);
            console.log('E-mail:', emailInput.value);
            console.log('Telefone:', telefoneInput.value);
            console.log('Mensagem:', document.getElementById('mensagem').value);
            console.log('------------------------');

        } else {
            formStatus.textContent = '❌ Por favor, corrija os erros no formulário antes de enviar.';
            formStatus.classList.add('error');
        }
    });
});
