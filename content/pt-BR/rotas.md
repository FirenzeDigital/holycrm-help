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

**Quem pode ser escolhido.** Digite um nome em **Voluntários** para buscar. Igrejas novas
permitem que qualquer membro sirva. Se sua igreja desativou isso em Configurações da igreja
(*Qualquer membro pode ser voluntário*), aparecem só as pessoas marcadas como voluntárias no
cadastro de Membros; se ainda não houver nenhuma, o formulário explica o que fazer. A
disponibilidade nunca limita a lista: só sugere quem se encaixa melhor.

## Vendo o que precisa de cobertura

O controle de **foco de escala** do [Calendário](#/calendar) tem uma visão de **precisam de
voluntários** — tudo que tiver menos pessoas escaladas do que o necessário aparece ali,
destacado por cor, com um detalhamento "Função — escalados / necessários" nos detalhes do
evento. O [Painel](#/dashboard) também mostra as próximas escalas com falta de pessoal.

O **duplo agendamento** de um voluntário também é detectado automaticamente — se a mesma
pessoa estiver escalada em dois turnos que se sobrepõem, isso é sinalizado como conflito de
horário no calendário, independentemente do filtro de local selecionado.

## Planejando a semana

**Escalas** mostra uma semana por vez — use **‹ Esta semana ›** para navegar. Cada culto e
atividade daquela semana é um cartão com data e horário, e as atividades semanais aparecem na
data real (por exemplo *sex 9 out · 20:00*), então você sempre sabe qual dia está preenchendo.

- **Preencher** (ou **Editar**) abre uma janelinha no próprio quadro: busque pessoas pelo nome,
  toque para adicionar, toque no × para tirar alguém e **Salvar**. Você continua no quadro.
- Nas atividades semanais, a pessoa entra **só naquela data**, a menos que você marque
  **Repetir todas as semanas**. Quem serve toda semana tem um 🔁 ao lado do nome.
- **Copiar semana passada** repete a equipe da semana anterior nas atividades semanais, nas
  funções em que havia gente escalada só para aquela data. Só adiciona, não tira ninguém.
- **+ Função** adiciona uma função que o culto precisa (e quantas pessoas). Se a função ainda
  não existe, escolha **Nova função…** e digite o nome. Cultos e atividades sem funções aparecem
  embaixo, em *Também nesta semana, sem funções*.
- Se as pessoas cadastraram a disponibilidade, a janelinha sugere quem está livre naquele
  horário — um toque e ela entra.
- Se alguém que você adicionar já serve no mesmo horário naquela semana (em outra função, ou em
  outro culto ou atividade que se sobrepõe), a janelinha avisa com um ⚠️ e diz onde. É só um
  aviso: você ainda pode salvar.

Os voluntários veem suas datas em [Minhas escalas](#/my-serving) e podem confirmar por lá.

## Pedindo confirmação aos voluntários

No quadro de **Escalas**, cada culto ou atividade próxima tem um botão **Confirmações** que
mostra quantas pessoas já responderam (por exemplo *Confirmações · 3/5*). Abra-o para ver todos
que servem naquela data e a situação de cada um: ✅ confirmado, ❌ não pode, ⏳ aguardando
resposta, ou ainda não solicitado.

1. Clique em **Pedir confirmação**. Todos que têm email recebem uma mensagem com um botão para
   confirmar ou avisar que não podem. Não é preciso fazer login — o link é pessoal.
2. Para quem não tem email, ou quase não lê, clique em **WhatsApp** ao lado do nome. O WhatsApp
   abre no seu celular ou computador com a mensagem já escrita, incluindo o link pessoal — é só
   tocar em enviar. **Copiar link** permite mandar por qualquer outro meio.
3. As respostas aparecem no quadro na hora, ao lado de cada nome.
4. Se alguém não respondeu e falta menos de um dia para o culto, recebe automaticamente um email
   de lembrete.
5. Se alguém avisar que não pode, quem pediu a confirmação recebe um email (com a mensagem do
   voluntário, se ele deixou uma) para encontrar um substituto.

Nas atividades semanais, as confirmações são para a **próxima** data da atividade.

**WhatsApp e números de telefone:** preencha o **Código do país do telefone** em
[Configurações da igreja](#/church-settings) para que números salvos sem ele (como
*11 95555-1234*) abram a conversa certa. O mais seguro é salvar os números completos, como
*+55 11 95555-1234*.

## O que ainda não existe

Histórico de substituições, uma mensagem de WhatsApp automática sem que ninguém toque em enviar, mover ou cancelar uma única ocorrência de uma escala recorrente de forma
independente do resto da série, e um modelo de escala totalmente vinculado a eventos (o
modelo atual vincula uma escala a um evento ou atividade, mas a estrutura mais profunda
"série → ocorrência → requisito" descrita nas notas internas de arquitetura ainda não foi
construída).
