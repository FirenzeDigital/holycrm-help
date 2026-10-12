# Importar dados

Se a sua igreja já tem uma lista de membros numa folha de cálculo, o Importar dados permite
trazê-la em vez de a escrever toda outra vez. Importa **Membros**.

## Antes de começar

- **Use o seu ficheiro tal como está.** Funcionam ficheiros do Excel (`.xlsx`, `.xls`),
  LibreOffice (`.ods`) e CSV. As colunas podem ter qualquer nome e estar por qualquer ordem,
  e pode haver colunas a mais: no passo seguinte escolhe o que cada uma preenche.
- **A começar do zero?** Clique em **Descarregar modelo** (Excel ou CSV). Tem as colunas
  certas, uma linha de exemplo e, na versão do Excel, uma folha de *Instruções* que diz o
  que escrever em cada coluna. Preencha-o e importe-o aqui.
- **Primeiro os campos personalizados.** Se o seu ficheiro tem informação para a qual o
  HolyCRM não tem um campo (data de batismo, turma de membros…), crie um campo personalizado
  em **Definições → Campos personalizados** (app completa) antes de importar. Assim aparece
  na lista de colunas e no modelo. O ecrã de Importar dados mostra os campos personalizados
  que já tem.

## Os quatro passos

### 1. Enviar ficheiro

Envie o ficheiro. Se um Excel tiver várias folhas com dados, escolha a que tem as suas
pessoas. A primeira linha deve ser a dos cabeçalhos. Ficheiros com mais de **500 linhas**
são recusados: divida um ficheiro maior e importe-o por partes.

### 2. Associar colunas

Para cada coluna do seu ficheiro, escolha que campo do HolyCRM preenche — nome, apelido,
e-mail, telefone, data de nascimento, estado, etiquetas, unidade, os seus campos
personalizados e mais — ou **Não importar**. O HolyCRM sugere as associações a partir dos
cabeçalhos, em português, espanhol ou inglês ("Apelido", "Apellido", "Telemóvel"…), e um
modelo preenchido associa-se sozinho. Ao lado de cada coluna aparecem alguns dos seus
valores, para confirmar o que há realmente nas células.

**Nome** e **Apelido** são os únicos campos obrigatórios.

### 3. Pré-visualização

Veja cada linha exatamente como vai ser guardada, com todas as colunas que associou. Cada
linha mostra se está **Pronta**, pronta com um **aviso** (algo pequeno ficou em branco, como
uma data ilegível; a linha é importada na mesma) ou tem um **erro** (falta o nome ou o
apelido; a linha é ignorada). Com **Mostrar** vê só as linhas com avisos, com erros ou as
pessoas que já estão no HolyCRM.

### 4. Importar

As linhas são guardadas aos poucos, com uma contagem em tempo real. No fim vê quantas
pessoas foram criadas, atualizadas e ignoradas, e o motivo do que tiver falhado.

## Pessoas que já estão no HolyCRM

A pré-visualização compara cada linha com o seu registo de membros:

- **A mesma pessoa** — o mesmo e-mail, o mesmo telefone (mesmo escrito de outra forma:
  `+351 912 345 678` e `912 345 678` coincidem) ou o mesmo nome e apelido (acentos e
  maiúsculas não contam).
- **Possível correspondência** — um nome parecido: um erro de escrita
  ("Jonatan" / "Jonathan"), uma alcunha ("Zé" / "José", "Chico" / "Francisco"), um nome
  curto ("Bia" / "Beatriz", "Joãozinho" / "João") ou um de dois apelidos
  ("Maria Silva" / "Maria Silva Santos").

Para as linhas da **mesma pessoa**, escolhe uma vez o que acontece a todas:

- **Ignorá-las** (o predefinido) — os registos existentes ficam como estão.
- **Atualizar as pessoas existentes** — preenche as colunas do seu ficheiro. Células vazias
  nunca apagam nada, as etiquetas juntam-se às que a pessoa já tem e **o nome nunca muda**.
- **Importá-las mesmo assim como pessoas novas.**

As **possíveis correspondências** são importadas como pessoas novas, a não ser que escolha
outra opção, porque um nome parecido pode ser outra pessoa. Além disso, cada linha com
correspondência tem a sua própria opção na tabela — **Ignorar**, **Atualizar esta pessoa**
ou **Importar como nova** —, para decidir uma a uma.

Se a mesma pessoa aparece duas vezes no seu ficheiro, a segunda linha mostra um aviso
("Parece a linha 4"). As duas são importadas, por isso apague uma do ficheiro se for o caso.
Para arrumar pessoas que já foram registadas duas vezes, use
[Procurar duplicados](#/find-duplicates); o ecrã final tem um botão para o abrir.

## Bom saber

- **As etiquetas são criadas automaticamente** se o nome de uma etiqueta do ficheiro ainda
  não existe.
- **As unidades são procuradas pelo nome e nunca criadas.** Se uma unidade do ficheiro não
  coincide com uma que configurou, essa célula fica em branco, com um aviso.
- **Datas:** uma célula de data do Excel é lida exatamente. Datas escritas como texto são
  lidas como dia-mês ou mês-dia o melhor possível, por isso confirme algumas datas de
  nascimento depois de importar. Um CSV guarda datas e números longos como a folha de
  cálculo os *mostrava* (`3/7/85`, `5,49E+12`), por isso, sempre que possível, envie o
  próprio Excel.
- **Os campos personalizados** são lidos pelo seu tipo: um número, uma data, sim/não ou uma
  das opções de um campo de lista. Um valor que não encaixa fica em branco, com um aviso.
- A condição de menor de idade é calculada com a data de nascimento e a idade-limite da sua
  igreja — veja [Membros](#/members).

## O que ainda não faz

Importar algo que não sejam Membros (visitantes, histórico de ofertas…) ou mais de 500
linhas de uma vez.
