# Usa uma imagem base oficial do Node.js na versão a qual o projeto foi construido.
# Lembre-se sempre de cuidar de versões a qual foi construida o projeto.
FROM node:22-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json (se existir)
# A ordem é importante para aproveitar o cache do Docker.
# Copiar apenas os arquivos de dependência primeiro, instalar,
# e só depois copiar o restante do código.
COPY package*.json ./

# Instala as dependências da aplicação
# `--production` para instalar apenas as dependências de produção
RUN npm install --production

# Copia o restante do código da aplicação (incluindo a pasta 'public')
COPY . .

# Abre a porta 3000 para o mundo exterior (a porta que a aplicação Express escuta)
EXPOSE 3000

# Comando para rodar a aplicação quando o contêiner iniciar
CMD [ "npm", "start" ]