# Usar o HolyCRM no ChatGPT ou no Claude

Pode ligar o HolyCRM ao ChatGPT, ao Claude ou a outro assistente de IA e perguntar sobre a sua
igreja pelas suas próprias palavras. Por exemplo:

- *"Que visitantes vieram no último mês e ainda ninguém contactou?"*
- *"Quem não veio à célula nas últimas três semanas?"*
- *"Que eventos temos em novembro?"*
- *"Adiciona a María Gómez como visitante. Veio hoje e tem interesse no grupo de jovens."*

O assistente procura a resposta no HolyCRM e explica-a, sem ter de percorrer os ecrãs.

## O que pode fazer

- **Consultar:** pessoas, [visitantes](#/visitors) (incluindo quem ainda não foi contactado),
  faltas nas [células](#/groups) e [eventos](#/events).
- **Fazer algumas alterações:** adicionar um visitante, registar um acompanhamento (uma
  chamada, um WhatsApp, uma visita) e mudar a etapa de um visitante. **Nada é guardado até
  confirmar**: o assistente mostra exatamente o que vai mudar e espera pelo seu "sim".
- Só vê o que a **sua função** pode ver no HolyCRM e **nunca vê os registos de crianças**.
- Transformar um visitante em membro continua a ser feito na app.

## Antes de começar: um Administrador ativa

Os assistentes de IA estão desativados em todas as igrejas até um Administrador os ativar:

1. Vá a **Definições → Assistentes de IA**.
2. Leia o que é partilhado (abaixo) e clique em **Ativar**.

No mesmo ecrã aparecem o endereço a adicionar no seu assistente de IA e **quem o usa**: cada
pessoa, as apps que usou e quando. Um Administrador pode **Bloquear** uma pessoa (para de
imediato, seja qual for a app) ou desativar os assistentes de IA para todos.

## Ligar o Claude

O HolyCRM está no diretório de conectores do Claude:

1. Abra [o HolyCRM no diretório do Claude](https://claude.ai/directory/holycrm-app) ou, no Claude
   (web, computador ou app do telemóvel), vá a **Personalizar → Conectores** e procure *HolyCRM*.
2. Clique em **Ligar**. Abre-se uma página do HolyCRM: inicie sessão como habitualmente se lhe
   for pedido, confirme que diz que o Claude se quer ligar e clique em **Permitir**.
3. Volte ao Claude e faça a sua pergunta.

Se a sua organização no Claude não permitir conectores do diretório, um administrador pode
adicioná-lo como conector personalizado, com o endereço de **Definições → Assistentes de IA**
(`https://mcp.holycrm.app/mcp`).

## Ligar o ChatGPT

No ChatGPT, adicionar uma ligação própria exige um plano pago com o **Modo de programador**
ativado (**Definições → Apps → Definições avançadas**). Depois crie uma app com o mesmo
endereço, escolha início de sessão OAuth e aprove-a na página do HolyCRM como acima. Estamos a
trabalhar para que o HolyCRM apareça no diretório de apps do ChatGPT e seja mais fácil de
adicionar.

Os menus destas apps mudam de vez em quando; se não encontrar uma opção, procure na ajuda
delas por "conector personalizado" ou "MCP".

## Dicas

- **Se pertence a mais do que uma igreja**, diga qual: *"Na Igreja Graça, quem…?"*.
- **Verifique antes de confirmar.** Leia a alteração que o assistente mostra antes de dizer sim.
- **As datas e horas** vêm do HolyCRM em tempo universal (UTC); o assistente costuma
  convertê-las, mas confirme a hora do evento na app se for importante.

## Privacidade e controlo

- **O que consulta é enviado ao assistente de IA que usa**, por exemplo nomes, telefones,
  visitantes, grupos e eventos, e aplicam-se os termos e a política de privacidade dessa
  empresa. Ligue apenas assistentes com que a sua igreja concorde. Ver
  [Dados e privacidade](#/data-privacy).
- Cada pessoa liga a **sua própria** conta; não existe um acesso partilhado da igreja.
- A sua ligação mantém-se ativa enquanto a usar. Ao fim de **14 dias** sem a usar, ou se mudar
  a sua palavra-passe, ser-lhe-á pedido que se ligue de novo.
- Para desligar, remova o HolyCRM dos conectores da sua app de IA.

## Se algo não funcionar

- **"AI assistants are turned off for…"** (os assistentes de IA estão desativados): peça a um
  Administrador que os ative em **Definições → Assistentes de IA**.
- **"…has turned off AI assistant access for your account"** (um administrador desativou o seu
  acesso): fale com um Administrador da sua igreja.
- **"Your HolyCRM sign-in has expired"** (o seu início de sessão expirou): remova o HolyCRM da
  sua app de IA e ligue-o de novo.
