# Integrações

Em **Configurações de administração → Integrações**, um Administrador pode ligar serviços que a
sua igreja já usa. Hoje isso é **o seu próprio servidor de e-mail**: os Comunicados podem
enviar pela conta de e-mail da sua igreja em vez da do HolyCRM.

Também pode ligar um **webhook** para passar os seus comunicados às suas próprias
automações (ver abaixo).

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

## Webhook (automações)

Um webhook envia cada comunicado que escolher para um endereço web seu, normalmente uma
ferramenta de automação como **Zapier**, **Make** ou **n8n**, onde decide o que acontece a
seguir: reencaminhar por WhatsApp ou Telegram, adicionar as pessoas a uma folha de cálculo, etc.
Destina-se a quem trata da tecnologia da sua igreja; para os membros nada muda.

**Privacidade:** cada envio inclui o nome, o e-mail e o telefone das pessoas a quem o comunicado
se destina. Ligue apenas um serviço em que a sua igreja confie e com o qual possa partilhar estas
informações.

1. Na sua ferramenta de automação, crie um fluxo que comece com "receber um webhook" (Zapier:
   *Webhooks by Zapier → Catch Hook*; Make: *Custom webhook*; n8n: nó *Webhook*). Copie o
   endereço que ela indica; começa por `https://`.
2. Em **Integrações → Webhook**, cole-o como **URL do webhook** e clique em **Salvar**.
3. O HolyCRM mostra um **segredo de assinatura** uma única vez. Copie-o e guarde-o com a sua
   automação: permite confirmar que cada envio vem mesmo do HolyCRM. Se o perder, clique em
   **Novo segredo de assinatura** (o anterior deixa de funcionar).
4. Clique em **Enviar teste**. O ecrã mostra o que o seu webhook respondeu.
5. Clique em **Ativar**.

Agora, em [Comunicados](#/bulk-email), escolha **Só webhook** ou marque **Enviar também para o
meu webhook**. Cada envio contém o assunto, a mensagem (em HTML e em texto) com as variáveis como
`{{first_name}}` por preencher para a sua automação completar, e a lista de destinatários. Se o
seu webhook não responder, o HolyCRM volta a tentar várias vezes nas horas seguintes; o resultado
aparece em **Envios recentes** e aqui como **Último problema**.

Para programadores: todos os pedidos são assinados. O cabeçalho `X-HolyCRM-Signature` é
`sha256=` + o HMAC-SHA256 de `<X-HolyCRM-Timestamp>.<corpo em bruto>` com o seu segredo de
assinatura. `X-HolyCRM-Delivery` não muda quando um envio é repetido, por isso pode ignorar
duplicados.

Só os Administradores podem ver e alterar Integrações, e fazem parte do plano pago.
