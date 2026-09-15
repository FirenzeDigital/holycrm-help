# Importar dados

Se a sua igreja já tem uma lista de membros numa folha de cálculo, o Importar dados permite
trazê-la em vez de a escrever à mão. Por agora importa **apenas Membros**.

## As quatro etapas

### 1. Carregar o ficheiro

Exporte a sua folha de cálculo como **ficheiro CSV** (do Excel, Google Sheets, ou quase
qualquer outro sistema de igreja) e carregue-o aqui. Ficheiros com mais de **500 linhas** são
recusados logo à partida — divida um ficheiro maior e importe por lotes.

### 2. Associar as colunas

Para cada coluna do seu ficheiro, escolha a que campo do HolyCRM corresponde (primeiro nome,
apelido, e-mail, telefone, data de nascimento, estado, etiquetas, e mais). O HolyCRM tenta
adivinhar associações razoáveis a partir dos cabeçalhos das suas colunas (incluindo alguns
cabeçalhos comuns em português, como "Apelido"), mas confirme sempre essas sugestões antes de
continuar.

É mostrada uma amostra dos valores reais de cada coluna, já que um cabeçalho sozinho
("Estado", "Status") nem sempre diz o que está realmente nas células.

**Primeiro nome** e **Apelido** são as únicas associações obrigatórias — tudo o resto é
opcional.

### 3. Pré-visualização

Veja exatamente o que vai ser criado — nome, e-mail, e um estado por linha:

- **Pronto** — vai importar sem problemas.
- **Pronto com aviso** — algo secundário foi ignorado (por exemplo, uma data ilegível), a
  linha ainda assim é importada.
- **Erro** — falta o primeiro nome ou o apelido; esta linha será totalmente ignorada.

### 4. Importar

As linhas são criadas aos poucos, com uma contagem de progresso em tempo real. Ao terminar,
vai ver um resumo de criados/ignorados com o motivo de cada linha ignorada.

## Bom saber antes de importar

- **Não há deteção de duplicados.** Cada importação cria registos de membro totalmente novos
  — não há comparação com pessoas que já estejam no seu diretório. Se não tiver a certeza se
  alguém já está no HolyCRM, verifique primeiro; importá-lo de novo cria um segundo registo.
- **As etiquetas são criadas automaticamente** se o nome de uma etiqueta no seu ficheiro ainda
  não existir na sua igreja.
- **Os locais são associados apenas pelo nome, nunca criados automaticamente.** Se o nome de
  um local no seu ficheiro não corresponder a um que já tenha configurado, esse campo fica em
  branco para essa linha (com um aviso) em vez de criar um registo de local mal configurado.
- **Datas**: o HolyCRM tenta ler as datas de nascimento tanto no formato dia-primeiro como
  mês-primeiro, mas é uma estimativa de melhor esforço — vale a pena confirmar algumas datas de
  nascimento depois de uma importação real.
- O estado de menor de idade (`is_minor`) é calculado automaticamente a partir da data de
  nascimento importada, usando a idade limite configurada pela sua igreja — ver
  [Membros](#/members).

## O que ainda não faz

Importar algo além de Membros (Visitantes, histórico de ofertas, etc.), ficheiros Excel
`.xlsx` diretamente (exporte para CSV primeiro), ou associar/atualizar registos existentes em
vez de criar sempre novos.
