# Importar dados

Se sua igreja já tem uma lista de membros em uma planilha, o Importar dados permite trazê-la
em vez de digitar tudo à mão. Por enquanto, importa **somente Membros**.

## As quatro etapas

### 1. Enviar arquivo

Exporte sua planilha como **arquivo CSV** (do Excel, Google Sheets, ou quase qualquer outro
sistema de igreja) e envie aqui. Arquivos com mais de **500 linhas** são recusados de cara —
divida um arquivo maior e importe em lotes.

### 2. Associar suas colunas

Para cada coluna do seu arquivo, escolha a qual campo do HolyCRM ela corresponde (primeiro
nome, sobrenome, e-mail, telefone, data de nascimento, status, tags, e mais). O HolyCRM
tenta adivinhar associações razoáveis a partir dos cabeçalhos das suas colunas (incluindo
alguns cabeçalhos comuns em português, como "Sobrenome"), mas sempre confira essas sugestões
antes de continuar.

Uma amostra dos valores reais de cada coluna é exibida ao lado, já que um cabeçalho sozinho
("Status", "Estado") nem sempre diz o que realmente está nas células.

**Primeiro nome** e **Sobrenome** são as únicas associações obrigatórias — tudo o mais é
opcional.

### 3. Pré-visualização

Veja exatamente o que será criado — nome, e-mail, e um status por linha:

- **Pronto** — vai importar sem problemas.
- **Pronto com aviso** — algo secundário foi ignorado (por exemplo, uma data ilegível), a
  linha ainda assim é importada.
- **Erro** — falta o primeiro nome ou o sobrenome; essa linha será totalmente ignorada.

### 4. Importar

As linhas são criadas aos poucos, com uma contagem de progresso ao vivo. Ao terminar, você vai
ver um resumo de criados/ignorados com o motivo de cada linha ignorada.

## Bom saber antes de importar

- **Não há detecção de duplicados.** Toda importação cria registros de membro totalmente
  novos — não há comparação com pessoas que já estejam no seu diretório. Se não tiver
  certeza se alguém já está no HolyCRM, verifique antes; importá-lo de novo cria um segundo
  registro.
- **Tags são criadas automaticamente** se o nome de uma tag no seu arquivo ainda não existir
  na sua igreja.
- **Locais são associados só pelo nome, nunca criados automaticamente.** Se o nome de um
  local no seu arquivo não corresponder a um que você já tenha configurado, esse campo fica
  em branco para aquela linha (com um aviso) em vez de criar um registro de local mal
  configurado.
- **Datas**: o HolyCRM tenta ler as datas de nascimento tanto no formato dia-primeiro quanto
  mês-primeiro, mas é uma estimativa de melhor esforço — vale a pena conferir algumas datas de
  nascimento depois de uma importação real.
- O status de menor de idade (`is_minor`) é calculado automaticamente a partir da data de
  nascimento importada, usando a idade limite configurada pela sua igreja — veja
  [Membros](#/members).

## O que ainda não faz

Importar qualquer coisa além de Membros (Visitantes, histórico de ofertas, etc.), arquivos
Excel `.xlsx` diretamente (exporte para CSV primeiro), ou combinar/atualizar registros
existentes em vez de sempre criar novos.
