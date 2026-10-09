# Integrações

Em **Configurações → Integrações**, um Administrador pode conectar serviços
que sua igreja já usa. Hoje isso é **seu próprio servidor de e-mail**: os Comunicados podem
enviar pela conta de e-mail da sua igreja em vez da do HolyCRM.

Você também pode conectar até cinco **webhooks** para repassar os comunicados e o que acontece
na sua igreja (novos visitantes, membros, pedidos de oração, inscrições, respostas às escalas)
às suas próprias automações (veja abaixo).

## Por que enviar pela sua própria conta de e-mail

- **Os e-mails saem do endereço da sua igreja** (por exemplo `secretaria@suaigreja.org`),
  então as respostas chegam direto para você e as pessoas reconhecem quem enviou.
- **Sem o limite mensal do HolyCRM.** Os e-mails enviados pela sua conta não contam para os
  [1.000 e-mails por mês](#/bulk-email) incluídos no HolyCRM. Valem os limites de envio do seu
  provedor de e-mail (veja abaixo).

## Antes de começar

Você precisa de uma conta de e-mail que permita enviar por **SMTP**, e das configurações dela.
A maioria permite:

- **Google (Gmail ou Google Workspace):** servidor `smtp.gmail.com`, porta 587. Use uma
  **senha de app**, não sua senha normal: na sua Conta do Google vá em Segurança →
  Verificação em duas etapas → Senhas de app. Contas do Google Workspace podem enviar cerca de
  2.000 e-mails por dia.
- **Microsoft 365 / Outlook:** servidor `smtp.office365.com`, porta 587. Talvez o
  administrador do Microsoft 365 precise habilitar "SMTP autenticado" para a caixa de correio.
- **Mailgun, SendGrid, Amazon SES, Brevo** e serviços de envio parecidos: use as credenciais
  SMTP da sua conta nesse serviço.

Se não tiver certeza, peça as "configurações SMTP" a quem cuida do e-mail da sua igreja.

## Como configurar

1. Vá em **Configurações → Integrações**.
2. Escolha seu **Provedor**. Isso preenche o servidor e a porta e mostra uma dica para esse
   provedor.
3. Informe o **Usuário** e a **Senha**, o **Endereço do remetente** de onde os e-mails devem
   sair e o **Nome do remetente** que as pessoas vão ver (normalmente o nome da sua igreja). O
   endereço precisa ser um que sua conta possa usar para enviar.
4. Clique em **Salvar**.
5. Clique em **Enviar e-mail de teste**. O HolyCRM envia um teste para o seu próprio endereço
   pelo seu servidor e mostra o resultado em alguns segundos. Confira se chegou (veja também
   no spam).
6. Clique em **Ativar**.

A partir daí, os Comunicados mostram **"Enviando pelo seu próprio servidor de e-mail"** no
lugar do limite mensal, e todos os e-mails saem pela sua conta.

Só é possível ativar depois de um teste bem-sucedido, e **salvar qualquer alteração desativa
de novo** até você enviar um novo teste. Assim ele nunca fica ativado com configurações que
não funcionam.

## Se o teste falhar

A tela explica o que aconteceu em palavras simples, com a mensagem técnica embaixo:

- **O servidor recusou o usuário ou a senha:** confira-os. No Google, verifique se usou uma
  senha de app.
- **Não foi possível conectar ao servidor:** confira o nome do servidor e a porta.
- **A conexão segura falhou:** a porta 587 usa STARTTLS e a 465 usa SSL/TLS.
- **O servidor recusou o e-mail:** provavelmente o endereço do remetente não é um que esta
  conta pode usar.

Problemas em envios reais aparecem no mesmo lugar, como **Último problema**, e abaixo do envio
em **Envios recentes** dos Comunicados. Se o seu servidor não conseguir entregar um e-mail,
esse e-mail falha: o HolyCRM nunca o envia pelo próprio e-mail no lugar.

## Desativar ou remover

**Desativar** volta a enviar pelo e-mail do HolyCRM, que de novo conta para o limite mensal.
Suas configurações continuam salvas, então você pode ativar de novo depois. **Remover** apaga
as configurações; os e-mails que ainda estiverem aguardando envio pelo seu servidor vão falhar.

## Webhooks (automações)

Um webhook envia coisas para um endereço web seu, normalmente uma ferramenta de automação como
**Zapier**, **Make** ou **n8n**, onde você decide o que acontece depois: repassar por WhatsApp ou
Telegram, adicionar a pessoa a uma planilha, avisar a equipe de boas-vindas etc. É pensado para
quem cuida da tecnologia da sua igreja; para os membros nada muda. Você pode adicionar até **5
webhooks**, cada um com o seu endereço e com o que quer receber.

### O que um webhook pode receber

Marque o que cada webhook deve receber:

- **Os comunicados que você escolher enviar aos webhooks** (veja [Comunicados](#/bulk-email)).
- **Novo visitante**: quem preencher o formulário "Primeira vez aqui?" ou for adicionado em Visitantes.
- **Novo membro** (nunca crianças).
- **Novo pedido de oração**: quem pediu e como contatar. **O pedido em si nunca é enviado**: a
  sua equipe o lê dentro do HolyCRM.
- **Inscrição em um evento**.
- **Um voluntário confirmou** ou **recusou uma escala**.

**Privacidade:** os envios incluem nomes, e-mails e telefones. Crianças (membros marcados como
menores, com responsáveis ou abaixo da idade de menor da sua igreja) nunca são incluídas em nada
enviado a um webhook, e anotações, endereços e datas de nascimento nunca são enviados. Conecte
apenas serviços em que sua igreja confie e com os quais possa compartilhar essas informações.

### Como configurar um

1. Na sua ferramenta de automação, crie um fluxo que comece com "receber um webhook" (Zapier:
   *Webhooks by Zapier → Catch Hook*; Make: *Custom webhook*; n8n: nó *Webhook*). Copie o
   endereço que ela mostra; ele começa com `https://`.
2. Em **Integrações → Webhooks**, clique em **Adicionar um webhook**, dê um nome se quiser, cole o
   endereço como **URL do webhook**, marque **O que enviar** e clique em **Salvar**.
3. O HolyCRM mostra um **segredo de assinatura** uma única vez. Copie e guarde junto com a sua
   automação: ele permite confirmar que cada envio vem mesmo do HolyCRM. Se perder, clique em
   **Novo segredo de assinatura** (o anterior deixa de funcionar).
4. Clique em **Enviar teste**. A tela mostra o que o seu webhook respondeu.
5. Clique em **Ativar**.

Alterar o endereço ou o formato desativa o webhook até que um novo teste dê certo; alterar o que
ele recebe, não. Se um webhook não responder, o HolyCRM tenta de novo várias vezes nas horas
seguintes; os problemas aparecem nesse webhook como **Último problema** e, nos comunicados,
também abaixo do envio em **Envios recentes**.

### Formato: JSON do HolyCRM ou personalizado

Por padrão cada envio é o mesmo JSON para qualquer ferramenta, que Zapier, Make e n8n leem sem
configurar nada. Cada envio inclui uma linha pronta no idioma da sua igreja, `summary` (por
exemplo "Novo visitante: João Silva").

Se o lugar para onde você envia espera outra coisa, escolha **Personalizado (para
desenvolvedores)** e escreva o corpo você mesmo, com marcadores que o HolyCRM preenche, e
cabeçalhos adicionais se precisar. **Começar de um exemplo** preenche para dois casos comuns:

- **ntfy** (notificações no celular): uma mensagem de texto com título.
- **Telegram** (um bot que publica em um grupo): troque `YOUR_CHAT_ID` pelo id do seu chat e use
  `https://api.telegram.org/bot<o token do seu bot>/sendMessage` como URL.

Para desenvolvedores: toda requisição é assinada. O cabeçalho `X-HolyCRM-Signature` é `sha256=` +
o HMAC-SHA256 de `<X-HolyCRM-Timestamp>.<corpo bruto>` com o seu segredo de assinatura (também no
formato personalizado, sobre o corpo realmente enviado). `X-HolyCRM-Event` diz o que aconteceu, e
`X-HolyCRM-Delivery` não muda quando um envio é repetido, então você pode ignorar duplicados. Os
modelos usam a sintaxe de templates do Go sobre o envio: `{{.data.summary}}`, `{{.data.subject}}`,
`{{.church.name}}`, `{{range .data.recipients}}…{{end}}` e `{{json …}}` para inserir um valor
como JSON. Um erro no modelo faz o teste falhar com esse erro.

Só Administradores podem ver e alterar Integrações, e ela faz parte do plano pago.
