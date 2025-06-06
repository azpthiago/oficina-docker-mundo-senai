# Rodando seus projetos em containers: Aprenda Docker para desenvolvedores

## Visão Geral
Este repositório contém todo o material e código-fonte desenvolvido durante a oficina "Rodando seus projetos em containers: Aprenda Docker para desenvolvedores". Ele serve como um guia prático e um recurso para revisão dos conceitos abordados.

Ministrador(a): [Thiago Paz](https://www.linkedin.com/in/thiagopazba/)

Data da Palestra: 06/06/2025

Local/Evento: SENAI Alagoinhas

## Sobre a Oficina
Nesta oficina, exploramos os fundamentos e conceitos básicos sobre docker e containers, habilitando os participantes a rodar aplicações dentro de containers e colaborar em projetos que utilizam a ferramenta.

- Tópicos Abordados
    - Conceitos Fundamentais:
        - Containers
        - Imagens
        - Dockerfile
    - Desenvolvimento Prático:
        - Rodando containers de demonstração do docker
        - Criação de Dockerfile
        - Utilização do Docker dentro do terminal.
        - Criação de projeto web basico utilizando docker.

## Como Rodar o Projeto
> **Toda a base de código utilizada na segunda prática se encontra na branch master, caso queira contribuir comece a partir dela!**

**Pré-requisitos**
Certifique-se de ter as seguintes ferramentas instaladas:
- Docker e Docker Desktop
- WSL2 (Caso esteja no Windows)

Passos de Instalação e Execução

1. Clone o repositório:
```shell
git clone https://github.com/azpthiago/oficina-docker-mundo-senai
cd oficina-docker-mundo-senai
```
2. Construa a imagm Docker:
```shell
# Execute o build da imagem
docker build -t meu-app-express
```
3. Inicie o container:

```shell
# Execute o comando para iniciar o container a partir da imagem
docker run -d -p 3000:3000 --name meu-site meu-app-express
```
> O servidor estará rodando em http://localhost:3000.

4. Para visualizar os logs
```shell
docker logs meu-site
```

## Testando a API
O contaienr com o projeto ja está funcionando, para testar basta abrir o localhost na porta 3000 no seu navegador.


##  Recursos Adicionais
- [Slides da Palestra](https://www.canva.com/design/DAGpMe2Nbzs/rVUS14exOrm9XYW117uLTA/edit?utm_content=DAGpMe2Nbzs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- [Documentação Docker](https://docs.docker.com/)

**Qualquer dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou pull request neste repositório!**