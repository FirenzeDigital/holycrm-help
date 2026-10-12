# Importar dados

Se sua igreja já tem uma lista de membros em uma planilha, o Importar dados permite trazê-la
em vez de digitar tudo de novo. Ele importa **Membros**.

## Antes de começar

- **Use o seu arquivo do jeito que está.** Funcionam arquivos do Excel (`.xlsx`, `.xls`),
  LibreOffice (`.ods`) e CSV. As colunas podem ter qualquer nome e estar em qualquer ordem, e
  pode haver colunas a mais: na próxima etapa você escolhe o que cada uma preenche.
- **Começando do zero?** Clique em **Baixar modelo** (Excel ou CSV). Ele tem as colunas
  certas, uma linha de exemplo e, na versão do Excel, uma aba de *Instruções* que diz o que
  escrever em cada coluna. Preencha e importe aqui.
- **Primeiro os campos personalizados.** Se o seu arquivo tem informações para as quais o
  HolyCRM não tem um campo (data de batismo, turma de membresia…), crie um campo
  personalizado em **Configurações → Campos personalizados** (app completo) antes de
  importar. Assim ele aparece na lista de colunas e no modelo. A tela de Importar dados
  mostra os campos personalizados que você já tem.

## As quatro etapas

### 1. Enviar arquivo

Envie o arquivo. Se um Excel tiver várias abas com dados, escolha a que tem as suas pessoas.
A primeira linha deve ser a dos cabeçalhos. Arquivos com mais de **500 linhas** são
recusados: divida um arquivo maior e importe em partes.

### 2. Associar colunas

Para cada coluna do seu arquivo, escolha qual campo do HolyCRM ela preenche — nome,
sobrenome, e-mail, telefone, data de nascimento, situação, etiquetas, unidade, seus campos
personalizados e mais — ou **Não importar**. O HolyCRM sugere as associações a partir dos
cabeçalhos, em português, espanhol ou inglês ("Sobrenome", "Apellido", "Celular"…), e um
modelo preenchido se associa sozinho. Ao lado de cada coluna aparecem alguns dos seus
valores, para você conferir o que há de fato nas células.

**Nome** e **Sobrenome** são os únicos campos obrigatórios.

### 3. Prévia

Veja cada linha exatamente como será salva, com todas as colunas que você associou. Cada
linha mostra se está **Pronta**, pronta com um **aviso** (algo pequeno ficou em branco, como
uma data ilegível; a linha é importada mesmo assim) ou tem um **erro** (falta o nome ou o
sobrenome; a linha é ignorada). Com **Mostrar** você vê só as linhas com avisos, com erros
ou as pessoas que já estão no HolyCRM.

### 4. Importar

As linhas são salvas aos poucos, com uma contagem ao vivo. No fim você vê quantas pessoas
foram criadas, atualizadas e ignoradas, e o motivo do que tiver falhado.

## Pessoas que já estão no HolyCRM

A prévia compara cada linha com o seu cadastro:

- **Mesma pessoa** — o mesmo e-mail, o mesmo telefone (mesmo escrito de outro jeito:
  `+55 11 91234-5678` e `11 91234 5678` coincidem) ou o mesmo nome e sobrenome (acentos e
  maiúsculas não importam).
- **Possível correspondência** — um nome parecido: um erro de digitação
  ("Jonatan" / "Jonathan"), um apelido ("Zé" / "José", "Chico" / "Francisco"), um nome curto
  ("Bia" / "Beatriz", "Joãozinho" / "João") ou um de dois sobrenomes
  ("Maria Silva" / "Maria Silva Santos").

Para as linhas da **mesma pessoa**, você escolhe uma vez o que acontece com todas:

- **Ignorar** (o padrão) — os cadastros existentes ficam como estão.
- **Atualizar as pessoas existentes** — preenche as colunas do seu arquivo. Células vazias
  nunca apagam nada, as etiquetas são somadas às que a pessoa já tem e **o nome nunca muda**.
- **Importar mesmo assim como pessoas novas.**

As **possíveis correspondências** são importadas como pessoas novas, a menos que você
escolha outra opção, porque um nome parecido pode ser outra pessoa. Além disso, cada linha
com correspondência tem a sua própria opção na tabela — **Ignorar**, **Atualizar esta
pessoa** ou **Importar como nova** —, para você decidir uma a uma.

Se a mesma pessoa aparece duas vezes no seu arquivo, a segunda linha mostra um aviso
("Parece a linha 4"). As duas são importadas, então apague uma do arquivo se for o caso.
Para arrumar pessoas que já foram cadastradas duas vezes, use
[Encontrar duplicados](#/find-duplicates); a tela final tem um botão para abri-lo.

## Bom saber

- **As etiquetas são criadas automaticamente** se o nome de uma etiqueta do arquivo ainda
  não existe.
- **As unidades são buscadas pelo nome e nunca criadas.** Se uma unidade do arquivo não
  coincide com uma que você configurou, essa célula fica em branco, com um aviso.
- **Datas:** uma célula de data do Excel é lida exatamente. Datas digitadas como texto são
  lidas como dia-mês ou mês-dia da melhor forma possível, então confira algumas datas de
  nascimento depois de importar. Um CSV guarda datas e números longos como a planilha os
  *exibia* (`3/7/85`, `5,49E+12`), então, quando puder, envie o próprio Excel.
- **Os campos personalizados** são lidos pelo seu tipo: um número, uma data, sim/não ou uma
  das opções de um campo de lista. Um valor que não se encaixa fica em branco, com um aviso.
- A condição de menor de idade é calculada com a data de nascimento e a idade-limite da sua
  igreja — veja [Membros](#/members).

## O que ainda não faz

Importar algo que não sejam Membros (visitantes, histórico de ofertas…) ou mais de 500
linhas de uma vez.
