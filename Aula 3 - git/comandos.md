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
### Git pull
O comando `git pull` é utilizado para atualizar o repositório local com as mudanças do repositório remoto.

- Ele combina os comandos `git fetch` e `git merge`, baixando as mudanças do repositório remoto e mesclando-as no branch atual.
- É comumente usado para sincronizar o repositório local com o repositório remoto, garantindo que você tenha a versão mais recente do código.

Aqui está um exemplo de como usar o comando:

```bash
git pull <nome-do-remoto> <nome-do-branch>
```

ou para simplesmente puxar as mudanças do branch remoto rastreado pelo branch atual:

```bash
git pull
```

Após executar esse comando, as mudanças do repositório remoto são integradas ao seu repositório local, permitindo que você trabalhe com a versão mais atualizada do projeto.

---
### Git remote

O comando `git remote` é utilizado para gerenciar os repositórios remotos associados ao seu repositório local.

- Ele permite que você adicione, remova e visualize repositórios remotos.
- Repositórios remotos são versões do seu projeto hospedadas na internet ou em uma rede, permitindo colaboração e backup.

Aqui está um exemplo de como adicionar um repositório remoto:

```bash
git remote add <nome-do-remoto> <url-do-repositorio>
```

Para listar todos os repositórios remotos associados ao seu repositório local:

```bash
git remote -v
```

Para remover um repositório remoto:

```bash
git remote remove <nome-do-remoto>
```

Após executar esses comandos, você pode gerenciar as conexões com repositórios remotos, facilitando a colaboração e o compartilhamento de código com outros desenvolvedores.

---
### Git status
O comando `git status` é utilizado para exibir o estado atual do diretório de trabalho e do índice (staging area).

- Ele mostra quais arquivos foram modificados, quais estão prontos para serem confirmados (staged) e quais não estão sendo rastreados pelo Git.
- É uma ferramenta útil para verificar o que está acontecendo no seu repositório antes de fazer um commit.

Aqui está um exemplo de como usar o comando:

```bash
git status
```

Após executar esse comando, você verá uma lista de arquivos que foram modificados, adicionados ou removidos, permitindo que você tome decisões informadas sobre quais mudanças devem ser incluídas na próxima confirmação.

---
### Git log
O comando `git log` é utilizado para visualizar o histórico de commits do repositório.

- Ele exibe uma lista de commits em ordem cronológica inversa, mostrando detalhes como o hash do commit, autor, data e mensagem do commit.
- Você pode usar várias opções para formatar e filtrar a saída do log, facilitando a navegação pelo histórico do projeto.

Aqui está um exemplo básico de como usar o comando:

```bash
git log
```

Para exibir um log mais compacto, mostrando apenas os hashes e mensagens dos commits:

```bash
git log --oneline
```

Para visualizar o histórico de commits de um arquivo específico:

```bash
git log <caminho-do-arquivo>
```

Após executar esses comandos, você pode explorar o histórico de commits do seu repositório, ajudando a entender a evolução do projeto e a identificar mudanças específicas feitas ao longo do tempo.

---
### Git revert

O comando `git revert` é utilizado para desfazer mudanças introduzidas por um commit específico, criando um novo commit que reverte as alterações.

- Ele é útil para desfazer mudanças sem alterar o histórico de commits, preservando a integridade do repositório.
- Ao contrário do `git reset`, que remove commits do histórico, `git revert` adiciona um novo commit que desfaz as mudanças.

Aqui está um exemplo de como usar o comando:

```bash
git revert <hash-do-commit>
```

Após executar esse comando, um novo commit será criado, revertendo as mudanças introduzidas pelo commit especificado. Isso permite que você corrija erros ou remova alterações indesejadas sem reescrever o histórico do repositório.

---
### Git reset

O comando `git reset` é utilizado para redefinir o estado do diretório de trabalho e do índice (staging area) para um commit específico.

- Ele pode ser usado para desfazer commits e mudanças no diretório de trabalho, movendo a referência do branch atual para um commit anterior.
- Existem três modos principais de uso: `--soft`, `--mixed` e `--hard`, cada um com diferentes níveis de impacto no índice e no diretório de trabalho.

Aqui está um exemplo de como usar o comando:

Para redefinir apenas o índice (staging area), mantendo as mudanças no diretório de trabalho:

```bash
git reset --soft <hash-do-commit>
```

Para redefinir o índice e o diretório de trabalho, removendo todas as mudanças:

```bash
git reset --hard <hash-do-commit>
```

Após executar esses comandos, o estado do repositório será redefinido para o commit especificado, permitindo que você desfaça mudanças e commits indesejados de maneira controlada.

---
### Git commit --amend -m

O comando `git commit --amend -m` é utilizado para modificar a mensagem do último commit ou adicionar mudanças adicionais ao último commit.

- Ele permite que você edite a mensagem do commit mais recente ou inclua novas mudanças que foram adicionadas ao índice (staging area).
- É útil para corrigir erros em commits recentes sem criar um novo commit.

Aqui está um exemplo de como usar o comando para alterar a mensagem do último commit:

```bash
git commit --amend -m "Nova mensagem do commit"
```

Para adicionar mudanças adicionais ao último commit, primeiro adicione as mudanças ao índice e depois execute o comando:

```bash
git add <arquivo>
git commit --amend
```

Após executar esses comandos, o último commit será atualizado com a nova mensagem ou com as mudanças adicionais, permitindo que você ajuste commits recentes antes de compartilhá-los com outros colaboradores.

