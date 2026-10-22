# Habits

Aplicação para acompanhar a consistência de hábitos ao longo do ano. A interface apresenta um calendário em formato de mapa de contribuições: cada quadrado representa um dia, permitindo visualizar a rotina de forma rápida. O repositório reúne uma API, uma aplicação web e um aplicativo mobile.

> **Estado atual:** o projeto está em desenvolvimento. As interfaces ainda usam dados visuais fixos e não estão integradas à API. A API tem uma rota de consulta e uma rota de criação ainda incompleta; veja [API disponível](#api-disponível).

## Propósito

A ideia é ajudar a pessoa a definir hábitos recorrentes e acompanhar sua realização dia a dia. O calendário anual oferece uma visão geral da frequência, enquanto a estrutura do backend modela hábitos, dias da semana e registros de conclusão.

## Principais tópicos

- **Web:** React, TypeScript, Vite e Tailwind CSS. Exibe o cabeçalho e o calendário anual.
- **Mobile:** React Native, Expo e NativeWind. Inclui telas de início, criação de hábito e detalhes de um dia.
- **API:** Node.js, TypeScript e Fastify, com CORS habilitado e validação de entrada usando Zod.
- **Persistência:** Prisma ORM com SQLite.
- **Modelo de dados:** `Habit` representa um hábito; `HabitWeekDays` relaciona o hábito aos dias da semana (0 = domingo até 6 = sábado); `Day` representa uma data; `DayHabit` relaciona um hábito a um dia.

## Requisitos

- Node.js e npm.
- Para executar o app mobile em dispositivo ou emulador, use o Expo Go ou configure um emulador compatível com o Expo.

## Como executar

Cada aplicação tem suas próprias dependências e comandos. Abra um terminal para cada processo que quiser executar.

### 1. API e banco de dados

No diretório `HABITS-APP-BACKEND`, instale as dependências:

```bash
cd HABITS-APP-BACKEND
npm install
```

Crie o arquivo `.env` nesse diretório com a URL do SQLite:

```env
DATABASE_URL="file:./dev.db"
```

O caminho `file:./dev.db` aponta para `HABITS-APP-BACKEND/prisma/dev.db`, junto ao schema Prisma. Gere o cliente, aplique as migrações e inicie a API:

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

A API ficará disponível em `http://localhost:3333`. O comando `npm run dev` usa `tsx watch` e reinicia o servidor quando os arquivos TypeScript mudam.

### 2. Aplicação web

Em outro terminal:

```bash
cd HABITS-APP-FRONT-END
npm install
npm run dev
```

Abra no navegador o endereço local indicado pelo Vite (normalmente `http://localhost:5173`). Para gerar a versão de produção, use `npm run build`; para servir essa versão localmente, use `npm run preview`.

### 3. Aplicativo mobile

Em outro terminal:

```bash
cd HABITS-APP-MOBILE
npm install
npm run start
```

O Expo exibirá as opções para abrir o app em um dispositivo ou emulador. Também é possível iniciar diretamente com `npm run android`, `npm run ios` ou `npm run web`, conforme o ambiente disponível.

## API disponível

As rotas são registradas em `HABITS-APP-BACKEND/src/lib/routes.ts`. O servidor habilita CORS e escuta na porta `3333`.

| Método | Caminho | Funcionamento |
| --- | --- | --- |
| `GET` | `/` | Consulta os hábitos cujo título começa com `Beber` e devolve a lista em JSON. A busca usa o início do título; não retorna todos os hábitos. |
| `POST` | `/habit` | Rota de criação em desenvolvimento. Valida um corpo com `title` (texto) e `weekDays` (lista de números de `0` a `6`), mas a gravação da recorrência ainda não está implementada corretamente e a rota não devolve uma resposta de sucesso. Portanto, não é uma operação funcional para uso da aplicação neste estado. |

Exemplo do formato esperado pela validação da rota de criação:

```json
{
  "title": "Beber água",
  "weekDays": [1, 3, 5]
}
```

O projeto ainda não possui rotas para listar todos os hábitos, consultar hábitos de uma data ou marcar/desmarcar a conclusão de um hábito. A aplicação web e a mobile também não fazem chamadas à API: o calendário e os hábitos exibidos nas telas são atualmente demonstrativos.

## Estrutura do repositório

```text
HABITS-APP-BACKEND/    API Fastify, Prisma e SQLite
HABITS-APP-FRONT-END/  Interface web React
HABITS-APP-MOBILE/     Aplicativo React Native com Expo
```