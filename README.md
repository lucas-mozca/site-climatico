# 🌤️ Site Climático

Aplicação web desenvolvida para consultar informações climáticas de diferentes cidades utilizando dados fornecidos pela **OpenWeatherMap API**.

O projeto permite pesquisar uma cidade e visualizar informações sobre as condições climáticas atuais de forma simples e intuitiva.

## 🚀 Funcionalidades

* 🔎 Pesquisa de clima por cidade
* 🌡️ Exibição da temperatura atual
* 🌡️ Sensação térmica
* ☁️ Descrição das condições climáticas
* 💨 Velocidade do vento
* 🌤️ Ícone representando o clima atual
* ⚠️ Tratamento de cidades inválidas ou não encontradas
* 🎨 Interface com fundo em gradiente animado

## 🛠️ Tecnologias utilizadas

* **HTML5** — estrutura da aplicação
* **CSS3** — estilização e animações
* **JavaScript** — lógica e integração com a API
* **OpenWeatherMap API** — dados meteorológicos

## 📂 Estrutura do projeto

```text
site-climatico/
│
├── index.html
├── style.css
├── script.js
└── cloud.png
```

## ⚙️ Como funciona

O usuário informa o nome de uma cidade no campo de pesquisa.

O JavaScript realiza uma requisição para a API do OpenWeatherMap e, caso a cidade seja encontrada, os dados climáticos são processados e exibidos na interface.

Entre as informações apresentadas estão temperatura, sensação térmica, condição climática e velocidade do vento.

## 💻 Como executar

Clone o repositório:

```bash
git clone https://github.com/lucas-mozca/site-climatico.git
```

Entre na pasta:

```bash
cd site-climatico
```

Depois, abra o arquivo `index.html` no navegador.

Também é possível utilizar a extensão **Live Server** no Visual Studio Code.

## 🔑 Configuração da API

Para utilizar o projeto, crie uma chave de API no **OpenWeatherMap**.

No arquivo `script.js`, configure sua chave:

```javascript
const API_KEY = "SUA_CHAVE_API";
```

> Por segurança, evite publicar chaves de API privadas diretamente no código em projetos públicos.

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento web, principalmente:

* Manipulação do DOM
* JavaScript assíncrono
* `async/await`
* Requisições HTTP com `fetch`
* Consumo de APIs REST
* Tratamento de erros
* HTML e CSS
* Integração entre front-end e serviços externos

## 👨‍💻 Autor

Lucas Scalioni

Projeto desenvolvido para estudos e prática de desenvolvimento web.
