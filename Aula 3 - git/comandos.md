# Comandos básciso do git

### Git init
O comando `git init` é utilizado para criar um novo repositório Git.

- Ele inicializa um repositório vazio ou reinicializa um repositório existente no diretório atual.
- Quando você executa `git init`, ele cria um subdiretório chamado `.git`.
- Esse subdiretório contém todos os arquivos necessários do repositório, como a estrutura de diretórios do Git, objetos, referências, etc.

Aqui está um exemplo de como usar o comando:

```bash
git init
```

Após executar esse comando, o diretório atual se torna um repositório Git, permitindo que você comece a rastrear as alterações nos arquivos e a utilizar outros comandos do Git para gerenciar o histórico de versões do seu projeto.

---

### Git add
O comando `git add` é utilizado para adicionar mudanças no diretório de trabalho ao índice (staging area).

- Ele informa ao Git que você deseja incluir as atualizações de um arquivo específico na próxima confirmação (commit).
- Você pode adicionar arquivos individualmente ou em massa utilizando curingas ou diretórios.

Aqui está um exemplo de como usar o comando:

```bash
git add <arquivo>
```

ou para adicionar todos os arquivos modificados:

```bash
git add .
```

Após executar esse comando, as mudanças nos arquivos especificados são preparadas para serem incluídas na próxima confirmação, permitindo que você organize e controle as alterações que deseja registrar no histórico de versões do seu projeto.

---

### Git commit

O comando `git commit` é utilizado para confirmar as mudanças no índice (staging area) e salvá-las no histórico de versões do repositório.

- Ele cria uma nova confirmação (commit) com uma mensagem descritiva que você fornece, registrando as mudanças feitas nos arquivos.
- Cada commit é identificado por um hash único, permitindo que você rastreie e reverta alterações específicas no histórico do projeto.

Aqui está um exemplo de como usar o comando:

```bash
git commit -m "Mensagem descritiva do commit"
```

ou para abrir o editor de texto padrão para escrever a mensagem do commit:

```bash
git commit
```

Após executar esse comando, as mudanças preparadas no índice são salvas no repositório, criando um ponto no histórico de versões que você pode consultar ou reverter no futuro.

---

### Git branch

O comando `git branch` é utilizado para gerenciar ramificações (branches) no repositório Git.

- Ele permite que você crie, liste, renomeie e exclua branches.
- Branches são usadas para desenvolver funcionalidades isoladamente, sem afetar o branch principal (geralmente chamado de `main` ou `master`).

Aqui está um exemplo de como criar um novo branch:

```bash
git branch <nome-do-branch>
```

Para listar todos os branches no repositório:

```bash
git branch
```

Para renomear um branch:

```bash
git branch -m <nome-antigo> <nome-novo>
```

Para excluir um branch:

```bash
git branch -d <nome-do-branch>
```

Após executar esses comandos, você pode gerenciar diferentes linhas de desenvolvimento no seu projeto, facilitando o trabalho em equipe e o desenvolvimento de novas funcionalidades sem interferir no código principal.

---

### Git push
O comando `git push` é utilizado para enviar as confirmações (commits) locais para um repositório remoto.

- Ele transfere os commits do seu repositório local para o repositório remoto, atualizando o branch remoto com as mudanças feitas localmente.
- É comumente usado para compartilhar o progresso do trabalho com outros colaboradores ou para fazer backup das alterações em um servidor remoto.

Aqui está um exemplo de como usar o comando:

```bash
git push <nome-do-remoto> <nome-do-branch>
```

ou para enviar todas as branches locais para o repositório remoto:

```bash
git push --all <nome-do-remoto>
```

Após executar esse comando, as mudanças confirmadas no seu repositório local são enviadas para o repositório remoto, permitindo que outros colaboradores acessem e integrem essas alterações em seus próprios repositórios locais.

---
