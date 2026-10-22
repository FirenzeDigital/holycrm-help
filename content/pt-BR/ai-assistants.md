# Usar o HolyCRM no ChatGPT ou no Claude

Você pode conectar o HolyCRM ao ChatGPT, ao Claude ou a outro assistente de IA e perguntar
sobre a sua igreja com as suas próprias palavras. Por exemplo:

- *"Quais visitantes vieram no último mês e ninguém contatou ainda?"*
- *"Quem não veio à célula nas últimas três semanas?"*
- *"Quais eventos temos em novembro?"*
- *"Adicione a María Gómez como visitante. Ela veio hoje e tem interesse no grupo de jovens."*

O assistente busca a resposta no HolyCRM e explica para você, sem precisar procurar pelas
telas.

## O que ele pode fazer

- **Consultar:** pessoas, [visitantes](#/visitors) (inclusive quem ainda não foi contatado),
  faltas nas [células](#/groups) e [eventos](#/events).
- **Fazer algumas alterações:** adicionar um visitante, registrar um acompanhamento (uma
  ligação, um WhatsApp, uma visita) e mudar a etapa de um visitante. **Nada é salvo até você
  confirmar**: o assistente mostra exatamente o que vai mudar e espera o seu "sim".
- Ele só vê o que a **sua função** pode ver no HolyCRM e **nunca vê os registros de crianças**.
- Transformar um visitante em membro continua sendo feito no app.

## Antes de começar: um Administrador ativa

Os assistentes de IA ficam desativados em todas as igrejas até que um Administrador os ative:

1. Vá em **Configurações → Assistentes de IA**.
2. Leia o que é compartilhado (abaixo) e clique em **Ativar**.

Na mesma tela aparecem o endereço para adicionar no seu assistente de IA e **quem usa**: cada
pessoa, os apps que usou e quando. Um Administrador pode **Bloquear** uma pessoa (para na
hora, seja qual for o app) ou desativar os assistentes de IA para todos.

## Conectar o Claude

1. No Claude (web, desktop ou app do celular), abra **Configurações → Conectores** e escolha
   **Adicionar conector personalizado**.
2. Dê o nome *HolyCRM* e cole o endereço de **Configurações → Assistentes de IA**
   (`https://mcp.holycrm.app/mcp`).
3. Clique em **Conectar**. Uma página do HolyCRM se abre: entre normalmente se for pedido,
   confira que diz que o Claude quer se conectar e clique em **Permitir**.
4. Volte ao Claude e faça a sua pergunta.

O plano gratuito do Claude permite um número limitado de conectores personalizados.

## Conectar o ChatGPT

No ChatGPT, adicionar uma conexão própria exige um plano pago com o **Modo desenvolvedor**
ativado (**Configurações → Apps → Configurações avançadas**). Depois crie um app com o mesmo
endereço, escolha login OAuth e aprove na página do HolyCRM como acima. Estamos trabalhando
para que o HolyCRM apareça no diretório de apps do ChatGPT e seja mais fácil de adicionar.

Os menus desses apps mudam de vez em quando; se não encontrar uma opção, procure na ajuda
deles por "conector personalizado" ou "MCP".

## Dicas

- **Se você participa de mais de uma igreja**, diga qual: *"Na Igreja Graça, quem…?"*.
- **Confira antes de confirmar.** Leia a alteração que o assistente mostra antes de dizer sim.
- **Datas e horários** vêm do HolyCRM em horário universal (UTC); o assistente costuma
  convertê-los, mas confira o horário do evento no app se for importante.

## Privacidade e controle

- **O que você consulta é enviado ao assistente de IA que você usa**, por exemplo nomes,
  telefones, visitantes, grupos e eventos, e os termos e a política de privacidade dessa
  empresa se aplicam. Conecte apenas assistentes com os quais a sua igreja concorda. Veja
  [Dados e privacidade](#/data-privacy).
- Cada pessoa conecta a **própria** conta; não existe um login compartilhado da igreja.
- A sua conexão continua ativa enquanto você a usa. Depois de **14 dias** sem usar, ou se você
  mudar a sua senha, será pedido que se conecte de novo.
- Para desconectar, remova o HolyCRM dos conectores do seu app de IA.

## Se algo não funcionar

- **"AI assistants are turned off for…"** (os assistentes de IA estão desativados): peça a um
  Administrador que os ative em **Configurações → Assistentes de IA**.
- **"…has turned off AI assistant access for your account"** (um administrador desativou o seu
  acesso): fale com um Administrador da sua igreja.
- **"Your HolyCRM sign-in has expired"** (o seu login expirou): remova o HolyCRM do seu app de
  IA e conecte de novo.
