# Integrações

Em **Configurações de administração → Integrações**, um Administrador pode conectar serviços
que sua igreja já usa. Hoje isso é **seu próprio servidor de e-mail**: os Comunicados podem
enviar pela conta de e-mail da sua igreja em vez da do HolyCRM.

Você também pode conectar um **webhook** para repassar seus comunicados às suas próprias
automações (veja abaixo).

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

1. Vá em **Configurações de administração → Integrações**.
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

## Webhook (automações)

Um webhook envia cada comunicado que você escolher para um endereço web seu, normalmente uma
ferramenta de automação como **Zapier**, **Make** ou **n8n**, onde você decide o que acontece
depois: repassar por WhatsApp ou Telegram, adicionar as pessoas a uma planilha etc. É pensado para
quem cuida da tecnologia da sua igreja; para os membros nada muda.

**Privacidade:** cada envio inclui o nome, o e-mail e o telefone das pessoas a quem o comunicado
se destina. Conecte apenas um serviço em que sua igreja confie e com o qual possa compartilhar
essas informações.

1. Na sua ferramenta de automação, crie um fluxo que comece com "receber um webhook" (Zapier:
   *Webhooks by Zapier → Catch Hook*; Make: *Custom webhook*; n8n: nó *Webhook*). Copie o
   endereço que ela mostra; ele começa com `https://`.
2. Em **Integrações → Webhook**, cole-o como **URL do webhook** e clique em **Salvar**.
3. O HolyCRM mostra um **segredo de assinatura** uma única vez. Copie e guarde junto com a sua
   automação: ele permite confirmar que cada envio vem mesmo do HolyCRM. Se perder, clique em
   **Novo segredo de assinatura** (o anterior deixa de funcionar).
4. Clique em **Enviar teste**. A tela mostra o que o seu webhook respondeu.
5. Clique em **Ativar**.

Agora, em [Comunicados](#/bulk-email), escolha **Só webhook** ou marque **Enviar também para o
meu webhook**. Cada envio contém o assunto, a mensagem (em HTML e em texto) com as variáveis como
`{{first_name}}` sem preencher para a sua automação completar, e a lista de destinatários. Se o
seu webhook não responder, o HolyCRM tenta de novo várias vezes nas horas seguintes; o resultado
aparece em **Envios recentes** e aqui como **Último problema**.

Para desenvolvedores: toda requisição é assinada. O cabeçalho `X-HolyCRM-Signature` é `sha256=` +
o HMAC-SHA256 de `<X-HolyCRM-Timestamp>.<corpo bruto>` com o seu segredo de assinatura.
`X-HolyCRM-Delivery` não muda quando um envio é repetido, então você pode ignorar duplicados.

Só Administradores podem ver e alterar Integrações, e ela faz parte do plano pago.
