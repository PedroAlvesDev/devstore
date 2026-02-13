# DevStore

Aplicação de exemplo de e‑commerce construída com Next.js, React e TypeScript. Fornece busca de produtos, página de produto e um carrinho simples gerenciado por contexto.

**Sobre**
- **Descrição:** App demo para demonstrar fluxo de loja (busca, listagem, produto, carrinho).
- **Objetivo:** código didático para estudos e testes E2E com Cypress.

**Funcionalidades**
- Busca de produtos.
- Página de detalhe do produto com imagem "opengraph".
- Adição de produtos ao carrinho (context API).
- Testes E2E com Cypress.

**Tecnologias**
- **Framework:** Next.js ([package.json](package.json))
- **Linguagem:** TypeScript
- **UI:** Tailwind CSS
- **Testes E2E:** Cypress ([cypress.config.ts](cypress.config.ts))
- **Validação:** Zod

**Primeiros passos**
Pré-requisitos: Node.js (v18+ recomendado) e `pnpm`.

- Instalar dependências:

  `pnpm install`

- Rodar em modo desenvolvimento:

  `pnpm dev`

- Gerar build de produção:

  `pnpm build`

- Executar em produção (após build):

  `pnpm start`

- Abrir Cypress (E2E):

  `pnpm exec cypress open`

Confira os scripts em [package.json](package.json) caso precise ajustar comandos.

**Estrutura principal**
- `src/app` — rotas e layouts do Next.js
- `src/components` — componentes reutilizáveis (header, search, cart widget)
- `src/contexts/cart-context.tsx` — lógica do carrinho
- `src/data/api.ts` — chamadas/integração com API
- `src/data/types/products.ts` — tipos de dados
- `cypress/e2e` — testes E2E
- `src/env.ts` — carregamento/definição das variáveis de ambiente

**Variáveis de ambiente**
O projeto usa a configuração definida em `src/env.ts`. Adicione variáveis sensíveis em um arquivo `.env` na raiz quando necessário.

**Contribuindo**
- Fork do repositório, crie uma branch com a feature/bugfix e abra um pull request.
- Sinta-se à vontade para melhorar testes E2E e cobertura de componentes.

**Licença**
Nenhuma licença especificada no repositório. Adicione um arquivo `LICENSE` se quiser definir uma licença.

---

Se quiser, posso:
- adicionar badges (build/test),
- incluir instruções de deployment (Vercel),
- ou abrir um PR com este `README.md` pronto.

**Arquitetura (Mermaid)**
Diagrama do fluxo (visualização melhorada). Copie o bloco abaixo em um arquivo Markdown para renderização, ou veja a versão estática em `public/mermaid-architecture.svg`.

```mermaid
flowchart TB
  %% Frontend
  subgraph Frontend [Frontend]
    direction TB
    User[Usuário] --> Search[Página de Busca]
    Search --> Product[Página do Produto]
    Product --> CartCtx[Contexto do Carrinho]
    CartCtx --> CartWidget[Cart Widget]
    CartWidget --> Checkout[Checkout (futuro)]
  end

  %% Backend / API
  subgraph Backend [API / Mock]
    API[API / Mock de Produtos]
  end

  %% Integrações
  Search -->|consulta| API
  Product -->|dados do produto| API

  classDef fg fill:#ffffff,stroke:#111827,stroke-width:1px;
  class Frontend,Backend fg;

  %% Notas visuais
  class User,Search,Product,CartCtx,CartWidget,Checkout,API fg;
```

Observação: plataformas como GitHub renderizam Mermaid; se preferir um arquivo estático, veja `public/mermaid-architecture.svg`.