# Presença e check-in

Três telas relacionadas cobrem presença, dependendo do que você está registrando:

| Tela | Use para |
|---|---|
| **Presença** | Registrar quem esteve em um evento, atividade de ministério ou reunião de pequeno grupo — a ferramenta geral de lista de presença. |
| **Check-in** | Um fluxo rápido de recepção para cultos/eventos abertos a qualquer pessoa — buscar, fazer check-in, imprimir uma etiqueta. |
| **Check-in infantil** | O mesmo fluxo de recepção, mas restrito a menores de idade, com uma etiqueta de responsável correspondente. |

As três, no fim, gravam os mesmos registros de presença, então uma sessão iniciada em uma
delas aparece corretamente no histórico das outras também.

## Presença

**+ Registrar presença** → escolha para o que você está registrando presença:

- **Culto/Evento** — escolha entre eventos dos últimos/próximos 90 dias.
- **Atividade de ministério** — escolha a atividade e uma data (uma atividade semanal é uma
  única série, então você escolhe qual semana).
- **Reunião de pequeno grupo** — escolha o grupo e uma data; um registro de reunião é criado
  automaticamente se ainda não existir um para essa data.

A lista é pré-preenchida a partir da participação relevante (os membros de um grupo, ou os
membros de um ministério pelo [Membros de ministério](#/ministries)) — eventos não têm
conceito de participação, então a lista deles começa vazia. Uma **busca** permite adicionar
qualquer pessoa pelo nome de qualquer forma, útil para um substituto ou alguém que está
comparecendo pela primeira vez. Marque cada pessoa como Presente, Ausente, Atrasado ou
Justificado (ou use **Marcar todos presentes**), depois **Salvar presença** — nada é gravado
até você salvar.

A lista de sessões mostra suas sessões recentes com uma contagem de presentes/total; clique
em uma para reabrir e editar.

## Check-in

Um fluxo mais rápido para um culto, conferência, ou qualquer evento **não** restrito a
menores. Escolha um tipo (Culto/Evento ou Atividade de ministério) e uma data, depois busque
e toque para fazer o check-in de alguém — isso imprime uma etiqueta com um código curto de
retirada. Se a ocorrência for um evento com pessoas pré-inscritas (veja
[Eventos e inscrições](#/events)), elas aparecem em uma lista de atalho de
**Pré-inscritos** acima da busca.

## Check-in infantil

O mesmo fluxo, mas só mostra como possíveis de check-in os **menores de idade** — um adulto
que não é menor nem está listado como responsável de ninguém nunca aparece nos resultados de
busca. Buscar pelo nome de um responsável encontra os filhos dele (pelo campo
**Responsáveis** configurado no próprio cadastro da criança — veja [Membros](#/members));
buscar pelo nome da própria criança a encontra diretamente.

Fazer o check-in de uma criança imprime **duas etiquetas correspondentes** — uma para a
criança, outra para o responsável — cada uma com o mesmo código de retirada, grande o
suficiente para ler à distância. Na retirada, um voluntário compara o canhoto do responsável
com o da criança, e toca em **Registrar saída**.

Se a sessão de ministério selecionada tiver uma **faixa etária** configurada (veja
[Ministérios e membros de ministério](#/ministries)), só as crianças dentro dessa faixa são
oferecidas, mesmo que sejam menores pela definição geral da igreja.

**Não há integração com leitor de código ou impressora de etiquetas** — uma "etiqueta" é um
papel da sua impressora comum, e o modelo de segurança é uma pessoa comparando visualmente
dois códigos impressos. Isso condiz com a forma como a maioria das igrejas já funciona com
canhotos de papel; isso só mantém o registro digital.

## Configurando quem conta como menor de idade

Veja [Membros](#/members) — um membro é menor de idade a partir do momento em que sua data de
nascimento fica abaixo do limite configurado pela sua igreja (Configurações da igreja →
Idade limite para menores), ou por uma caixa de seleção manual se ele não tiver data de
nascimento cadastrada. Responsáveis só podem ser configurados depois que alguém é marcado
como menor de idade.

## O que ainda não existe

Editar ou remover um vínculo de responsável pela própria tela de check-in (faça isso pelo
cadastro de Membro da criança), rodar várias sessões de check-in simultâneas em uma mesma
tela, integração com hardware de leitor/impressora, e relatórios de tendência de presença além
da simples lista de sessões.
