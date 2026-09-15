# Escalas de serviço

As escalas são a forma de agendar voluntários em funções de serviço para uma ocorrência
específica de um evento ou atividade de ministério — "quem está no Som este domingo", "quem
recebe no culto das 9h".

## Os elementos que compõem isto

1. **Funções de serviço** — defina as funções nas quais a sua igreja escala pessoas (Som,
   Projeção, Receção, Voluntário de Check-in de crianças, etc.). Configure isto uma vez.
2. **Escalas (Requisitos de função)** — indique que uma função é necessária para um Evento ou
   Atividade de ministério específico, e quantas pessoas são precisas. Acessível diretamente a
   partir do painel de um evento no [Calendário](#/calendar), já pré-preenchido com esse
   evento ou atividade.
3. **Atribuição de escala** — quem vai efetivamente cobrir esse requisito. Uma escala associada
   a um requisito herda automaticamente a sua data, hora e local — não volta a introduzir o
   horário, apenas escolhe o(s) voluntário(s).

## Ver o que precisa de cobertura

O controlo de **foco de escala** do [Calendário](#/calendar) tem uma vista de **precisam de
voluntários** — tudo o que tiver menos pessoas escaladas do que o necessário aparece ali,
destacado por cor, com um detalhe "Função — escalados / necessários" nos detalhes do evento.
O [Painel](#/dashboard) também mostra as próximas escalas com falta de pessoal.

A **dupla marcação** de um voluntário também é detetada automaticamente — se a mesma pessoa
estiver escalada em duas funções que se sobrepõem, isso é assinalado como conflito de horário
no calendário, independentemente do filtro de local selecionado.

## O que ainda não existe

Respostas individuais de aceitar/recusar por parte dos voluntários, histórico de
substituições, mover ou cancelar uma única ocorrência de uma escala recorrente de forma
independente do resto da série, e um modelo de escalonamento totalmente associado a eventos (o
modelo atual associa uma escala a um evento ou atividade, mas a estrutura mais profunda "série
→ ocorrência → requisito" descrita nas notas internas de arquitetura ainda não foi construída).
