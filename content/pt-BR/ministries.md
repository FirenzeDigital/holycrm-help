# Ministérios e membros de ministério

Um **Ministério** é uma equipe fixa — Louvor, Infantil, Recepção, Tecnologia, e assim por
diante. Ministérios guardam a identidade da equipe; **Membros de ministério** e **Atividades
de ministério** dependem de um ministério.

## Ministérios

Crie um ministério com um nome, um **Líder**, e opcionalmente uma **faixa etária** (`Idade
mínima` / `Idade máxima`). O seletor de líder, se sua igreja mapeou a função de tag `líder de
ministério` (veja [Tags e funções de tag](#/tags)), só oferece membros com essa tag; caso
contrário, todos são oferecidos.

A faixa etária é usada pelo **Check-in infantil** para restringir quem pode fazer check-in
nas sessões daquele ministério — por exemplo, um "Ministério Infantil" com faixa 0–12 não vai
oferecer um adolescente de 15 anos, mesmo que ele ainda seja menor de idade; esse adolescente
apareceria corretamente em um "Ministério de Jovens" com faixa 13–17. Deixe os dois campos em
branco para um ministério sem restrição de idade (o padrão). Veja
[Presença e check-in](#/attendance) para ver como isso funciona na prática no check-in.

## Atividades de ministério

Os encontros/cultos recorrentes ou pontuais de um ministério (por exemplo, "Culto de
domingo, semanal às 10h"). Uma única linha de atividade cobre toda a série recorrente — não
existe uma linha separada por semana. As atividades são o que
[Presença](#/attendance), [Escalas](#/rotas) e o [Calendário](#/calendar) agendam.

## Membros de ministério

Escolha um ministério no menu suspenso, e gerencie quem faz parte dele — adicione um membro
com uma função (líder, colíder, voluntário), ou remova. Remover tira a pessoa da lista
imediatamente; não apenas marca como inativa.

Essa lista é o que alimenta o preenchimento automático de **Presença** para uma atividade de
ministério — adicione alguém aqui primeiro, e ele já vai aparecer listado quando você for
registrar presença no próximo encontro daquele ministério.

## O que ainda não faz

Alterar a função de um membro depois de adicionado (remova e adicione novamente com outra
função), ver/gerenciar membros que foram removidos, e adicionar em massa um grupo inteiro
marcado com uma tag de uma vez.
