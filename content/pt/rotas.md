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

**Quem pode ser escolhido.** Escreva um nome em **Voluntários** para pesquisar. Igrejas novas
permitem que qualquer membro sirva. Se a sua igreja desativou isso nas Configurações da igreja
(*Qualquer membro pode ser voluntário*), aparecem apenas as pessoas marcadas como voluntárias na
ficha de Membros; se ainda não houver nenhuma, o formulário explica o que fazer. A
disponibilidade nunca limita a lista: apenas sugere quem se encaixa melhor.

## Ver o que precisa de cobertura

O controlo de **foco de escala** do [Calendário](#/calendar) tem uma vista de **precisam de
voluntários** — tudo o que tiver menos pessoas escaladas do que o necessário aparece ali,
destacado por cor, com um detalhe "Função — escalados / necessários" nos detalhes do evento.
O [Painel](#/dashboard) também mostra as próximas escalas com falta de pessoal.

A **dupla marcação** de um voluntário também é detetada automaticamente — se a mesma pessoa
estiver escalada em duas funções que se sobrepõem, isso é assinalado como conflito de horário
no calendário, independentemente do filtro de local selecionado.

## Planear a semana

**Escalas** mostra uma semana de cada vez — use **‹ Esta semana ›** para navegar. Cada culto e
atividade dessa semana é um cartão com data e hora, e as atividades semanais aparecem na data
real (por exemplo *sex 9 out · 20:00*), para saber sempre que dia está a preencher.

- **Preencher** (ou **Editar**) abre uma pequena janela no próprio quadro: pesquise pessoas pelo
  nome, toque para acrescentar, toque no × para retirar alguém e **Guardar**. Continua no
  quadro.
- Nas atividades semanais, a pessoa entra **apenas nessa data**, a não ser que marque
  **Repetir todas as semanas**. Quem serve todas as semanas tem um 🔁 junto ao nome.
- **Copiar semana passada** repete a equipa da semana anterior nas atividades semanais, nas
  funções em que havia pessoas escaladas só para essa data. Só acrescenta, não retira ninguém.
- **+ Função** acrescenta uma função de que o culto precisa (e quantas pessoas). Se a função
  ainda não existe, escolha **Nova função…** e escreva o nome. Cultos e atividades sem funções
  aparecem em baixo, em *Também esta semana, sem funções*.
- Se as pessoas registaram a disponibilidade, a janela sugere quem está livre a essa hora — um
  toque e entra.

Os voluntários veem as suas datas em [As minhas escalas](#/my-serving) e podem confirmar aí.

## Pedir confirmação aos voluntários

No quadro de **Escalas**, cada culto ou atividade próxima tem um botão **Confirmações** que
mostra quantas pessoas já responderam (por exemplo *Confirmações · 3/5*). Abra-o para ver todos
os que servem nessa data e a situação de cada um: ✅ confirmado, ❌ não pode, ⏳ a aguardar
resposta, ou ainda não pedido.

1. Clique em **Pedir confirmação**. Todos os que têm email recebem uma mensagem com um botão
   para confirmar ou avisar que não podem. Não é preciso iniciar sessão — a ligação é pessoal.
2. Para quem não tem email, ou quase não o lê, clique em **WhatsApp** ao lado do nome. O
   WhatsApp abre no seu telemóvel ou computador com a mensagem já escrita, incluindo a ligação
   pessoal — basta tocar em enviar. **Copiar link** permite enviá-la por qualquer outro meio.
3. As respostas aparecem no quadro de imediato, ao lado de cada nome.
4. Se alguém não respondeu e falta menos de um dia para o culto, recebe automaticamente um email
   de lembrete.
5. Se alguém avisar que não pode, quem pediu a confirmação recebe um email (com a mensagem do
   voluntário, se a deixou) para encontrar um substituto.

Nas atividades semanais, as confirmações são para a **próxima** data da atividade.

**WhatsApp e números de telefone:** preencha o **Código do país do telefone** nas
[Configurações da igreja](#/church-settings) para que os números guardados sem ele (como
*912 345 678*) abram a conversa certa. O mais seguro é guardá-los completos, como
*+351 912 345 678*.

## O que ainda não existe

Histórico de substituições, uma mensagem de WhatsApp automática sem que ninguém toque em enviar, mover ou cancelar uma única ocorrência de uma escala recorrente de forma
independente do resto da série, e um modelo de escalonamento totalmente associado a eventos (o
modelo atual associa uma escala a um evento ou atividade, mas a estrutura mais profunda "série
→ ocorrência → requisito" descrita nas notas internas de arquitetura ainda não foi construída).
