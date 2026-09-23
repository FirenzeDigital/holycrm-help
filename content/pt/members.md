# Membros

Membros é o diretório da sua igreja — cada pessoa da sua congregação, com os seus dados de
contacto, estado, e as etiquetas/relações que a ligam ao resto da aplicação.

## Adicionar um membro

Use **+ Membro**, preencha os campos que souber (só o nome é obrigatório) e guarde. Pode
sempre voltar mais tarde e preencher o resto.

Campos úteis:

- **Estado** — ativo, inativo, etc. A maioria dos relatórios e seletores só contam membros
  *ativos*.
- **Voluntário** — uma caixa de verificação que marca alguém como disponível para servir. Isto
  é importante para o agendamento de escalas — ver [Ministérios e escalas](#/ministries).
- **Etiquetas** — um seletor flexível de etiquetas (ver
  [Etiquetas e funções de etiqueta](#/tags)) para agrupar pessoas da forma que fizer sentido
  para a sua igreja, além de ministérios e grupos.
- **Data de nascimento** — usada para lembretes de aniversário e para calcular
  automaticamente se alguém é menor de idade.
- **Etapa de crescimento** — em que ponto do percurso com a igreja essa pessoa está: Novo,
  A frequentar, Conectado, A servir ou A liderar. Ver
  [Escada de crescimento](#/growth-ladder).

## Menores e responsáveis

Se a data de nascimento de um membro o colocar abaixo da "idade limite para menores"
configurada pela sua igreja (Configurações da igreja → Idade limite para menores, predefinido
18), aparece um campo **Responsáveis** na sua ficha — escolha o(s) pai/mãe/responsável de
entre os restantes membros. É isto que permite ao **Check-in de crianças** procurar alguém
pelo nome do responsável — ver [Presenças e check-in](#/attendance).

Se um membro não tiver data de nascimento registada, "menor" passa a ser uma simples caixa de
verificação que assinala manualmente, em vez de ser calculado automaticamente.

## O e-mail fica bloqueado para membros com acesso

Se um membro também tiver um acesso ao HolyCRM (é Voluntário, Gestor ou Admin e já iniciou
sessão), o campo de e-mail fica bloqueado no formulário de Membros, com uma nota a remeter
para o ecrã de Utilizadores. Isto é intencional: o e-mail de acesso e o e-mail da ficha de
membro são mantidos sincronizados automaticamente, e editá-lo em dois sítios diferentes faria
com que uma edição anulasse silenciosamente a outra. Altere a partir de
**Configurações administrativas → Utilizadores** — ver
[Utilizadores, funções e permissões](#/users-roles).

## Trazer membros que já tem

Não volte a escrever todo o seu diretório à mão — ver [Importar dados](#/data-import) para
trazer uma folha de cálculo.

## Pesquisar e filtrar

A lista de Membros tem pesquisa e filtros por coluna (estado, etiquetas, etc.) para conseguir
rapidamente chegar a, por exemplo, "voluntários ativos com a etiqueta Equipa de Louvor."
