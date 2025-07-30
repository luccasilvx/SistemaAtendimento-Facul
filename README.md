# SistemaAtendimento-Facul

<p align="center">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.io/badge/REST_API-0056B3?style=for-the-badge&logo=rest-api&logoColor=white" alt="REST API">
</p>

Este é um pequeno projeto universitário que demonstra os princípios de uma **API RESTful** em uma aplicação de **fila dinâmica**. O sistema simula um gerenciamento de atendimento, focado em exibir a implementação de uma arquitetura REST para manipulação de dados em tempo real.

---

## 🚀 Sobre o Projeto

O `SistemaAtendimento-Facul` foi desenvolvido como um exercício prático para explorar e aplicar os conceitos de **APIs REST**. Ele simula um sistema de fila onde os clientes são atendidos dinamicamente. A principal finalidade é apresentar como um backend pode ser construído seguindo os princípios REST para interagir com um frontend, proporcionando uma experiência fluida de gerenciamento de dados via requisições HTTP.

---

## ✨ Funcionalidades

* **API RESTful:** Backend construído com uma API que segue os princípios REST para manipulação da fila de atendimento.
* **Fila Dinâmica:** Gerenciamento de uma fila de atendimento onde novos itens podem ser adicionados e atendidos.
* **Integração Frontend-Backend:** Conexão entre a interface do usuário (HTML/CSS/JS) e a API backend.
* **Demonstração de Conceitos REST:** Exemplo prático de métodos HTTP (GET, POST, DELETE, etc.) e recursos RESTful.

---

## 💻 Tecnologias Utilizadas

Este projeto utiliza uma combinação de tecnologias para o frontend e o backend:

**Backend:**
* **Java:** Linguagem principal para o desenvolvimento da lógica da API RESTful.
* **Spring Boot (provável):** Embora não explicitamente detalhado na análise inicial, a natureza de uma API REST em Java para projetos como este frequentemente indica o uso de frameworks como Spring Boot para agilizar o desenvolvimento.

**Frontend:**
* **HTML5:** Para a estrutura da página web.
* **CSS3:** Para a estilização e design da interface do usuário.
* **JavaScript:** Para a lógica de interação com a API RESTful e manipulação da fila no lado do cliente.

---

## 📁 Estrutura do Projeto

A estrutura do projeto geralmente se assemelha a:
SistemaAtendimento-Facul/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── seuprojeto/
│   │   │           └── (código Java da API REST)
│   │   └── resources/
│   │       └── static/   (ou similar para arquivos estáticos)
│   │           ├── css/
│   │           │   └── style.css
│   │           ├── js/
│   │           │   └── script.js
│   │           └── index.html
├── .gitignore
├── pom.xml (ou build.gradle para dependências Java)
└── README.md

* `src/main/java/`: Contém o código-fonte Java do backend (API REST).
* `src/main/resources/static/`: Contém os arquivos estáticos do frontend (HTML, CSS, JavaScript).
* `pom.xml` (ou `build.gradle`): Arquivo de configuração de dependências e build do Maven/Gradle para o projeto Java.

---

## 🛠 Como Rodar Localmente

Para rodar este sistema em sua máquina local, você precisará configurar tanto o backend quanto o frontend:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/luccasilvx/SistemaAtendimento-Facul.git](https://github.com/luccasilvx/SistemaAtendimento-Facul.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd SistemaAtendimento-Facul
    ```
3.  **Configurar e Rodar o Backend (Java):**
    * Certifique-se de ter o **Java Development Kit (JDK)** instalado (versão 8 ou superior é comum para Spring Boot).
    * Certifique-se de ter o **Maven** ou **Gradle** instalado (dependendo de como o projeto Java está configurado).
    * No diretório raiz do projeto, compile e rode a aplicação Java (geralmente com `mvn spring-boot:run` ou `gradle bootRun`).
        * *Você pode precisar verificar o arquivo `pom.xml` ou `build.gradle` para a forma exata de rodar a aplicação.*
    * O backend geralmente iniciará em `http://localhost:8080` (porta padrão do Spring Boot).

4.  **Acessar o Frontend:**
    * Uma vez que o backend esteja rodando, você pode acessar a interface do frontend abrindo o arquivo `index.html` em seu navegador web.
    * Alternativamente, se o Spring Boot estiver configurado para servir arquivos estáticos, você pode simplesmente acessar `http://localhost:8080` no navegador.

---

## 📄 Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT). Veja o arquivo `LICENSE` no repositório para mais detalhes.
