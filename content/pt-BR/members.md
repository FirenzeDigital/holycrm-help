# Membros

Membros é o diretório da sua igreja — cada pessoa da sua congregação, com seus dados de
contato, status e as tags/relações que a conectam ao resto do app.

## Adicionando um membro

Use **+ Membro**, preencha os campos que souber (só o nome é obrigatório) e salve. Você
sempre pode voltar depois e preencher o resto.

Campos úteis:

- **Status** — ativo, inativo, etc. A maioria dos relatórios e seletores só conta membros
  *ativos*.
- **Voluntário** — uma caixa de seleção marcando alguém como disponível para servir. Isso
  importa para o agendamento de escalas — veja [Ministérios e escalas](#/ministries).
- **Tags** — um seletor flexível de tags (veja [Tags e funções de tag](#/tags)) para agrupar
  pessoas da forma que fizer sentido para sua igreja, além de ministérios e grupos.
- **Data de nascimento** — usada para lembretes de aniversário e para calcular
  automaticamente se alguém é menor de idade.

## Menores e responsáveis

Se a data de nascimento de um membro o coloca abaixo da "idade limite para menores"
configurada pela sua igreja (Configurações da igreja → Idade limite para menores, padrão 18),
um campo **Responsáveis** aparece no cadastro dele — escolha o(s) pai/mãe/responsável entre o
resto dos seus membros. É isso que faz o **Check-in infantil** conseguir buscar alguém pelo
nome do responsável — veja [Presença e check-in](#/attendance).

Se um membro não tiver data de nascimento cadastrada, "menor" vira uma simples caixa de
seleção que você marca manualmente, em vez de ser calculado automaticamente.

## O e-mail fica bloqueado para membros com login

Se um membro também tiver um login no HolyCRM (é Voluntário, Gestor ou Admin e já entrou no
sistema), o campo de e-mail dele fica bloqueado no formulário de Membros, com uma nota
apontando para a tela de Usuários. Isso é intencional: o e-mail de login e o e-mail do
cadastro de membro são mantidos sincronizados automaticamente, e editar em dois lugares faria
uma edição desfazer silenciosamente a outra. Altere pela tela
**Configurações administrativas → Usuários** — veja
[Usuários, funções e permissões](#/users-roles).

## Trazendo membros que você já tem

Não digite todo o seu diretório de novo à mão — veja [Importar dados](#/data-import) para
trazer uma planilha.

## Pesquisando e filtrando

A lista de Membros tem busca e filtros por coluna (status, tags, etc.) para você conseguir
rapidamente chegar a, por exemplo, "voluntários ativos com a tag Equipe de Louvor."
