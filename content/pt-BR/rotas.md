# Escalas de serviço

Escalas são como você agenda voluntários em funções de serviço para uma ocorrência específica
de um evento ou atividade de ministério — "quem está no Som neste domingo", "quem está na
recepção do culto das 9h".

## Os blocos que compõem isso

1. **Funções de serviço** — defina as funções nas quais sua igreja escala pessoas (Som,
   Projeção, Recepção, Voluntário de Check-in infantil, etc.). Configure isso uma vez.
2. **Escalas (Requisitos de função)** — diga que uma função é necessária para um Evento ou
   Atividade de ministério específico, e quantas pessoas são necessárias. Pode ser acessado
   diretamente do painel de um evento no [Calendário](#/calendar), já preenchido com esse
   evento ou atividade.
3. **Atribuição de escala** — quem vai efetivamente cobrir esse requisito. Uma escala vinculada
   a um requisito herda automaticamente sua data, horário e local — você não digita o horário
   de novo, só escolhe o(s) voluntário(s).

## Vendo o que precisa de cobertura

O controle de **foco de escala** do [Calendário](#/calendar) tem uma visão de **precisam de
voluntários** — tudo que tiver menos pessoas escaladas do que o necessário aparece ali,
destacado por cor, com um detalhamento "Função — escalados / necessários" nos detalhes do
evento. O [Painel](#/dashboard) também mostra as próximas escalas com falta de pessoal.

O **duplo agendamento** de um voluntário também é detectado automaticamente — se a mesma
pessoa estiver escalada em dois turnos que se sobrepõem, isso é sinalizado como conflito de
horário no calendário, independentemente do filtro de local selecionado.

## O que ainda não existe

Respostas individuais de aceitar/recusar por parte dos voluntários, histórico de
substituições, mover ou cancelar uma única ocorrência de uma escala recorrente de forma
independente do resto da série, e um modelo de escala totalmente vinculado a eventos (o
modelo atual vincula uma escala a um evento ou atividade, mas a estrutura mais profunda
"série → ocorrência → requisito" descrita nas notas internas de arquitetura ainda não foi
construída).
