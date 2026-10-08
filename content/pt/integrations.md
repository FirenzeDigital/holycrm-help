# Integrações

Em **Configurações de administração → Integrações**, um Administrador pode ligar serviços que a
sua igreja já usa. Hoje isso é **o seu próprio servidor de e-mail**: os Comunicados podem
enviar pela conta de e-mail da sua igreja em vez da do HolyCRM.

Também pode ligar até cinco **webhooks** para passar os comunicados e o que acontece na sua
igreja (novos visitantes, membros, pedidos de oração, inscrições, respostas às escalas) às suas
próprias automações (ver abaixo).

## Porquê enviar pela sua própria conta de e-mail

- **Os e-mails saem do endereço da sua igreja** (por exemplo `secretaria@asuaigreja.org`),
  por isso as respostas chegam diretamente a si e as pessoas reconhecem quem enviou.
- **Sem o limite mensal do HolyCRM.** Os e-mails enviados pela sua conta não contam para os
  [1000 e-mails por mês](#/bulk-email) incluídos no HolyCRM. Aplicam-se os limites de envio
  do seu fornecedor de e-mail (ver abaixo).

## Antes de começar

Precisa de uma conta de e-mail que permita enviar por **SMTP**, e das respetivas
configurações. A maioria permite:

- **Google (Gmail ou Google Workspace):** servidor `smtp.gmail.com`, porta 587. Use uma
  **palavra-passe de aplicação**, não a sua palavra-passe normal: na sua Conta Google vá a
  Segurança → Validação em dois passos → Palavras-passe de aplicações. As contas Google
  Workspace podem enviar cerca de 2000 e-mails por dia.
- **Microsoft 365 / Outlook:** servidor `smtp.office365.com`, porta 587. Pode ser necessário
  que o administrador do Microsoft 365 ative "SMTP autenticado" para a caixa de correio.
- **Mailgun, SendGrid, Amazon SES, Brevo** e serviços de envio semelhantes: use as credenciais
  SMTP da sua conta nesse serviço.

Se não tiver a certeza, peça as "configurações SMTP" a quem trata do e-mail da sua igreja.

## Como configurar

1. Vá a **Configurações de administração → Integrações**.
2. Escolha o seu **Fornecedor**. Isto preenche o servidor e a porta e mostra uma dica para
   esse fornecedor.
3. Indique o **Utilizador** e a **Palavra-passe**, o **Endereço do remetente** de onde os
   e-mails devem sair e o **Nome do remetente** que as pessoas vão ver (normalmente o nome da
   sua igreja). O endereço tem de ser um que a sua conta possa usar para enviar.
4. Clique em **Salvar**.
5. Clique em **Enviar e-mail de teste**. O HolyCRM envia um teste para o seu próprio endereço
   pelo seu servidor e mostra o resultado dentro de alguns segundos. Confirme que chegou (veja
   também no spam).
6. Clique em **Ativar**.

A partir daí, os Comunicados mostram **"A enviar pelo seu próprio servidor de e-mail"** em
vez do limite mensal, e todos os e-mails saem pela sua conta.

Só é possível ativar depois de um teste bem-sucedido, e **guardar qualquer alteração desativa
novamente** até enviar um novo teste. Assim nunca fica ativado com configurações que não
funcionam.

## Se o teste falhar

O ecrã explica o que aconteceu em palavras simples, com a mensagem técnica por baixo:

- **O servidor recusou o utilizador ou a palavra-passe:** verifique-os. Com a Google,
  confirme que usou uma palavra-passe de aplicação.
- **Não foi possível ligar ao servidor:** verifique o nome do servidor e a porta.
- **A ligação segura falhou:** a porta 587 usa STARTTLS e a 465 usa SSL/TLS.
- **O servidor recusou o e-mail:** provavelmente o endereço do remetente não é um que esta
  conta possa usar.

Os problemas em envios reais aparecem no mesmo sítio, como **Último problema**, e por baixo do
envio em **Envios recentes** dos Comunicados. Se o seu servidor não conseguir entregar um
e-mail, esse e-mail falha: o HolyCRM nunca o envia pelo seu próprio e-mail em vez disso.

## Desativar ou remover

**Desativar** volta a enviar pelo e-mail do HolyCRM, que volta a contar para o limite mensal.
As suas configurações ficam guardadas, por isso pode voltar a ativar mais tarde. **Remover**
apaga as configurações; os e-mails que ainda estejam à espera de envio pelo seu servidor vão
falhar.

## Webhooks (automações)

Um webhook envia coisas para um endereço web seu, normalmente uma ferramenta de automação como
**Zapier**, **Make** ou **n8n**, onde decide o que acontece a seguir: reencaminhar por WhatsApp ou
Telegram, adicionar a pessoa a uma folha de cálculo, avisar a equipa de boas-vindas, etc.
Destina-se a quem trata da tecnologia da sua igreja; para os membros nada muda. Pode adicionar
até **5 webhooks**, cada um com o seu endereço e com o que quer receber.

### O que um webhook pode receber

Marque o que cada webhook deve receber:

- **Os comunicados que escolher enviar aos webhooks** (ver [Comunicados](#/bulk-email)).
- **Novo visitante**: quem preencher o formulário "Primeira vez aqui?" ou for adicionado em Visitantes.
- **Novo membro** (nunca crianças).
- **Novo pedido de oração**: quem pediu e como contactar. **O pedido em si nunca é enviado**: a
  sua equipa lê-o dentro do HolyCRM.
- **Inscrição num evento**.
- **Um voluntário confirmou** ou **recusou uma escala**.

**Privacidade:** os envios incluem nomes, e-mails e telefones. As crianças (membros marcados como
menores, com encarregados de educação ou abaixo da idade de menor da sua igreja) nunca são
incluídas em nada enviado a um webhook, e notas, moradas e datas de nascimento nunca são
enviadas. Ligue apenas serviços em que a sua igreja confie e com os quais possa partilhar estas
informações.

### Como configurar um

1. Na sua ferramenta de automação, crie um fluxo que comece com "receber um webhook" (Zapier:
   *Webhooks by Zapier → Catch Hook*; Make: *Custom webhook*; n8n: nó *Webhook*). Copie o
   endereço que ela indica; começa por `https://`.
2. Em **Integrações → Webhooks**, clique em **Adicionar um webhook**, dê-lhe um nome se quiser,
   cole o endereço como **URL do webhook**, marque **O que enviar** e clique em **Salvar**.
3. O HolyCRM mostra um **segredo de assinatura** uma única vez. Copie-o e guarde-o com a sua
   automação: permite confirmar que cada envio vem mesmo do HolyCRM. Se o perder, clique em
   **Novo segredo de assinatura** (o anterior deixa de funcionar).
4. Clique em **Enviar teste**. O ecrã mostra o que o seu webhook respondeu.
5. Clique em **Ativar**.

Alterar o endereço ou o formato desativa o webhook até que um novo teste corra bem; alterar o que
recebe, não. Se um webhook não responder, o HolyCRM volta a tentar várias vezes nas horas
seguintes; os problemas aparecem nesse webhook como **Último problema** e, nos comunicados, também
por baixo do envio em **Envios recentes**.

### Formato: JSON do HolyCRM ou personalizado

Por omissão cada envio é o mesmo JSON para qualquer ferramenta, que o Zapier, o Make e o n8n leem
sem configurar nada. Cada envio inclui uma linha pronta no idioma da sua igreja, `summary` (por
exemplo "Novo visitante: João Silva").

Se o sítio para onde envia espera outra coisa, escolha **Personalizado (para programadores)** e
escreva o corpo, com marcadores que o HolyCRM preenche, e cabeçalhos adicionais se forem
precisos. **Começar a partir de um exemplo** preenche-o para dois casos comuns:

- **ntfy** (notificações no telemóvel): uma mensagem de texto com título.
- **Telegram** (um bot que publica num grupo): substitua `YOUR_CHAT_ID` pelo id do seu chat e use
  `https://api.telegram.org/bot<o token do seu bot>/sendMessage` como URL.

Para programadores: todos os pedidos são assinados. O cabeçalho `X-HolyCRM-Signature` é `sha256=`
+ o HMAC-SHA256 de `<X-HolyCRM-Timestamp>.<corpo em bruto>` com o seu segredo de assinatura
(também no formato personalizado, sobre o corpo realmente enviado). `X-HolyCRM-Event` diz o que
aconteceu, e `X-HolyCRM-Delivery` não muda quando um envio é repetido, por isso pode ignorar
duplicados. Os modelos usam a sintaxe de templates do Go sobre o envio: `{{.data.summary}}`,
`{{.data.subject}}`, `{{.church.name}}`, `{{range .data.recipients}}…{{end}}` e `{{json …}}` para
inserir um valor como JSON. Um erro no modelo faz o teste falhar com esse erro.

Só os Administradores podem ver e alterar Integrações, e fazem parte do plano pago.
