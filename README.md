# WMS Frontend

Frontend do sistema WMS, construído com Next.js, React e TypeScript.

## Pré-requisitos

- Docker instalado e em execução;
- Docker Compose v2, disponível pelo comando `docker compose`.

## Configuração com Docker

### Desenvolvimento

O `docker-compose.yaml` cria o serviço `wms-frontend` usando o estágio `deps` do `Dockerfile`. O código do projeto é montado em `/app`, enquanto `node_modules` e `.next` permanecem em volumes do Docker. Isso permite alterar os arquivos localmente e usar o hot reload do Next.js.

Na raiz do projeto, execute:

```bash
docker compose up --build
```

Depois, acesse [http://localhost:3000](http://localhost:3000).

Para executar em segundo plano:

```bash
docker compose up --build -d
```

Para acompanhar os logs:

```bash
docker compose logs -f wms-frontend
```

Para parar e remover o container:

```bash
docker compose down
```

Se as dependências ou a configuração do Dockerfile forem alteradas, recrie a imagem sem usar o cache:

```bash
docker compose build --no-cache
docker compose up
```

### Produção

O `Dockerfile` usa três estágios: instalação das dependências, build do Next.js e execução da imagem final. A configuração `output: "standalone"` do Next.js reduz o conteúdo necessário na imagem de execução.

Para construir a imagem de produção:

```bash
docker build -t wms-frontend:latest .
```

Para iniciar o container:

```bash
docker run --name wms_frontend -p 3000:3000 wms-frontend:latest
```

O serviço ficará disponível em [http://localhost:3000](http://localhost:3000). Para executá-lo em segundo plano, adicione `-d` ao comando `docker run`.

Para parar e remover o container de produção:

```bash
docker stop wms_frontend
docker rm wms_frontend
```

## Comandos sem Docker

Também é possível executar o projeto localmente, desde que o Node.js 20 ou superior esteja instalado:

```bash
npm ci
npm run dev
```

Os principais scripts disponíveis são:

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Inicia o build de produção |
| `npm run lint` | Executa o ESLint |
