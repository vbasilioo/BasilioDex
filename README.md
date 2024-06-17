<div style="text-align: center;">
    <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="BasilioDex Logo">
</div>

Olá, bem-vindo ao BasilioDex, uma PokeDex desenvolvida por [Vinícius Basilio](https://github.com/vbasilioo).

## Sobre

O BasilioDex é um projeto desenvolvido com base na **arquitetura de funcionalidades**. Essa arquitetura permite uma organização modular do código, facilitando a manutenção e a escalabilidade do projeto. No BasilioDex, separamos o projeto nas seguintes camadas:

- **Pages**: Contêm as diferentes páginas da aplicação.
- **Interfaces**: Definem os tipos e contratos usados na aplicação.
- **Componentes**: Blocos reutilizáveis que compõem a interface do usuário.
- **Services**: Serviços que contêm a lógica de negócios e interagem com APIs externas.

### Arquitetura de Funcionalidades

A arquitetura de funcionalidades visa agrupar componentes e serviços relacionados em funcionalidades coesas. Cada funcionalidade pode incluir seus próprios componentes, serviços e testes, promovendo uma maior modularidade e encapsulamento.

### Backend

Embora o BasilioDex seja um projeto focado no frontend, se houvesse a necessidade de um backend, a arquitetura de serviços seria a escolha ideal. No contexto de uma API Laravel, a arquitetura de serviços envolve a criação de classes de serviço dedicadas a encapsular a lógica de negócios. Isso facilita a manutenção e promove a reutilização de código. A injeção de dependência através do construtor é um padrão comum que sigo nesta arquitetura, onde os serviços são injetados nos controladores e outros serviços conforme necessário.

#### Exemplos de Arquitetura de Serviços com Laravel

1. **Service Providers**: Classes responsáveis pela configuração e registro de serviços.
2. **Service Classes**: Contêm a lógica de negócios. Por exemplo, uma classe `PokemonService` que lida com todas as operações relacionadas aos Pokémons.
3. **Repositories**: Abstraem a camada de persistência, facilitando mudanças futuras no armazenamento de dados.

### Gerenciamento de Estado

No projeto, estamos utilizando RxJS para manipulação dos estados globais da aplicação. O RxJS nos permite gerenciar de forma eficiente os estados e dados dos usuários, aproveitando suas capacidades de programação reativa, o que é especialmente útil para projetos maiores e escaláveis.

### Testes Automatizados

Implementamos testes automatizados focando principalmente na Home do projeto e nos serviços relacionados aos Pokémons. Os testes garantem a qualidade e a robustez do código, facilitando a detecção de bugs e a validação de funcionalidades.

### Configurações de Ambiente

Utilizamos a configuração de environment recomendada pelo Angular para gerenciar as variáveis de ambiente. Isso permite uma fácil configuração e utilização dessas variáveis ao longo do projeto, garantindo uma maior flexibilidade e segurança.

### Ionic Framework e Responsividade

O projeto foi desenvolvido usando o **Ionic Framework**, o que permite uma fácil criação de aplicativos móveis híbridos. Além disso, foi adicionada responsividade ao projeto, garantindo que ele funcione bem em dispositivos móveis.

## Como usar?

A BasilioDex inicia na Home, exibindo informações sobre todos os Pokémons disponíveis através da API (limitamos a 125 Pokémons para não sobrecarregar o frontend e as requisições da API). As funcionalidades principais incluem:

- **Paginação**: Navegue pelas diferentes páginas de Pokémons.
- **Área de Pesquisa**: Pesquise Pokémons pelo nome exato.
- **Dropdown de Favoritos**: Acesse a página de favoritos dos seus Pokémons.

## Vídeo e Imagens Demonstrativas

-- Adicionar vídeo demonstrativo e imagens aqui--

### Funcionalidades dos Pokémons

- **Adicionar/Remover Favoritos**: Clique na estrela do card do Pokémon para adicionar ou remover dos favoritos.
- **Informações Detalhadas**: Clique no card do Pokémon para ver informações detalhadas como altura, peso, vida e tipo.
- **Lista de Favoritos**: Pesquise seus Pokémons favoritos pelo nome e veja suas imagens na área de favoritos. Remova um Pokémon favorito para que ele desapareça da lista.

### Pesquisa

- **Pesquisa pelo Nome Exato**: Para encontrar um Pokémon, você deve pesquisar pelo nome exato, pois a API do Pokémon não suporta buscas parciais.

## Rodando o Projeto

Para rodar o projeto, siga os passos abaixo:

1. Instale as dependências:
    ```sh
    npm install
    ```

2. Rode a aplicação:
    ```sh
    ionic serve
    ```

3. Para rodar os testes:
    ```sh
    ng test
    ```

---

Essa documentação fornece uma visão geral do BasilioDex, detalhando sua arquitetura, funcionalidades e instruções de uso. Para mais informações, sinta-se à vontade para explorar o código-fonte.