<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site Simples</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>      
        :root {
    --cor-icone-instagram: #963ceb; /* Cor do ícone do Instagram */
    --cor-icone-github: #c5b8b8; /* Cor do ícone do GitHub */
    --cor-icone-youtube: #FF0000; /* Cor do ícone do YouTube */
    --cor-icone-whatsapp: #25D366; /* Cor do ícone do WhatsApp */
}

.social-icons i {
    margin: 0 10px; /* Espaço entre os ícones */
    font-size: 24px; /* Tamanho dos ícones */
}

.social-icons .fa-instagram {
    color: var(--cor-icone-instagram);
}

.social-icons .fa-github {
    color: var(--cor-icone-github);
}

.social-icons .fa-youtube {
    color: var(--cor-icone-youtube);
}

.social-icons .fa-whatsapp {
    color: var(--cor-icone-whatsapp);
}
        body {
            font-family: Arial, sans-serif;
            background-image: url('https://assets.grok.com/anon-users/ebe5b541-e6ba-4142-9e7e-745eb56ff1a1/ZgmvecwBQZzdLyts-generated_image.jpg'); /* Adicionado */
            background-size: cover; /* Adicionado */
            background-repeat: no-repeat; /* Adicionado */
            color: #ffffff; /* Texto branco */
            margin: 0; /* Remove a margem padrão do body */
            padding: 20px; /* Adiciona um pouco de padding */
        }

        header {
            display: flex; /* Usando flexbox para organizar itens */
            justify-content: space-between; /* Espaço entre os itens do cabeçalho */
            margin-bottom: 20px; /* Espaço abaixo do cabeçalho */
        }

        h1 {
            color: #00BFFF; /* Cor do título */
        }

        nav ul {
            list-style-type: none; /* Remove os marcadores da lista */
            padding: 0; /* Remove o padding padrão */
        }

        nav ul li {
            display: inline; /* Exibe os itens da lista em linha */
            margin-right: 15px; /* Espaço entre os itens */
        }

        nav ul li a {
            color: #eeeeee; /* Cor dos links */
            text-decoration: none; /* Remove o sublinhado dos links */
        }

        .login-container {
            align-self: center; /* Centraliza verticalmente */
        }

        .login-link {
            color: white; /* Cor branca para os links de login */
            text-decoration: none; /* Remove o sublinhado dos links */
        }

        .search-container {
            position: relative; /* Para posicionar o ícone da lupa */
            width: 250px; /* Largura da barra de pesquisa */
            margin-bottom: 20px; /* Espaço abaixo da barra de pesquisa */
        }

        .search-input {
            width: 100%; /* O campo de pesquisa ocupa toda a largura do container */
            padding: 10px 40px; /* Padding para o texto e espaço para o ícone */
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #333; /* Fundo do campo de pesquisa */
            color: #fff; /* Texto do campo de pesquisa em branco */
        }

        .search-input:focus {
            outline: none; /* Remove o contorno padrão ao focar */
            border-color: #00BFFF; /* Muda a cor da borda ao focar */
        }

        .search-icon {
            position: absolute; /* Posiciona o ícone dentro do campo de pesquisa */
            left: 10px; /* Distância do lado esquerdo */
            top: 50%; /* Centraliza verticalmente */
            transform: translateY(-50%); /* Ajusta a posição vertical */
            color: #cccccc; /* Cor do ícone */
        }

        main {
            margin-top: 20px; /* Espaço acima do conteúdo principal */
        }

        footer {
            margin-top: 20px; /* Espaço acima do rodapé */
            text-align: center; /* Centraliza o texto do rodapé */
        }

        .ai-image {
            width: 100%; /* Largura da imagem */
            max-width: 600px; /* Largura máxima da imagem */
            height: auto; /* Mantém a proporção da imagem */
            margin-top: 20px; /* Espaço acima da imagem */
        }

        .social-icons i {
            margin: 0 10px; /* Espaço entre os ícones */
            color: #E1306C; /* Cor dos ícones sociais */
            font-size: 24px; /* Tamanho dos ícones */
        }
    </style>
    <script>
        function redirecionar() {
            window.location.href = "https://youtu.be/Ejkb_YpuHWs?si=sRCC234UCOaH5RV_"; // Substitua pelo URL desejado
        }
    </script>
</head>
<body>
    <header>
        <h1>Bem-vindo a DataMind Analytics</h1>
        <nav>
            <ul>
                <li><a href="#home"><i class="fa-solid fa-house"></i> Início</a></li>
                <li><a href="#sobre"></a></li><i class="fa-solid fa-star"></i>  sobre</a></li></i>
                <li><a href="#servicos"></a></li><i class="fa-solid fa-check"></i>Serviços</a></li></i>
                <li><a href="#contato"></a></li><i class="fa-solid fa-phone"></i> contato</a></li></i>
            </ul>
        </nav>
        <div class="login-container">
            <a href="#login" class="login-link"><i class="fa-solid fa-user"></i> Log In /</a> 
            <a href="#criar-conta" class="login-link">Criar Conta</a> <br>
            <button onclick="redirecionar()">log in</button>        
        </div>
    </header>

    <div class="search-container">
        <i class="fas fa-search search-icon"></i>
        <input type="text" class="search-input" id="searchInput" placeholder="Pesquisar...">
    </div>

    <main>
        <section id="home">
            <h2>Início</h2>
            <p></p>
            <button onclick="redirecionar()">Início</button>
        </section>

        <section id="sobre">
            <h2>Sobre</h2>
            <p>Informações sobre mim ou sobre o site.</p>
           
        </section>

        <section id="servicos">
            <h2>Serviços</h2>
            <p>Serviços oferecidos<br>
                Desenvolvimento de IA <br>
                Manutenção de servidores <br>
                Manutenção de IA <br>
            </p>
        </section>

        <section id="contato">
            <h2>Contato</h2>
            <div class="social-icons">
                <span><i class="fa-brands fa-instagram"></i> </span><br>
                <p><a href="https://www.instagram.com" target="_blank">Instagram</a></p>
                <span><i class="fa-brands fa-github"></i> </span>
                <p><a href="https://github.com" target="_blank">GitHub</a></p>
                <span><i class="fa-brands fa-youtube"></i></span>
                <p><a href="https://youtu.be/J-EYUHUhaUc?si=jasnvM5ECf31yN07" target="_blank">YouTube</a></p>
                <span><i class="fa-brands fa-whatsapp"></i> WhatsApp</span> 11970730756
                <p>Entre em contato para mais informações.</p>
            </div>
        </section>
    </main>

    <footer>
        <p>&reg; 2025 DataMind
    </footer>
</body>
</html>
