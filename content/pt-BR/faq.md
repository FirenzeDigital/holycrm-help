# Perguntas frequentes

<details class="help-faq-item" open>
<summary>Não estou vendo um item de menu que eu esperava ver. Por quê?</summary>

O que você vê depende da sua função (Admin, Gestor, Voluntário ou Membro) e de qualquer
permissão personalizada que sua igreja tenha configurado para você. Peça a um Admin ou Gestor
para conferir [Usuários, funções e permissões](#/users-roles) — ou sua função precisa mudar,
ou uma permissão personalizada precisa ser concedida para aquele módulo.
</details>

<details class="help-faq-item">
<summary>Como eu trago membros que já tenho em uma planilha?</summary>

Exporte sua planilha para CSV e use [Importar dados](#/data-import) em Pessoas. Você vai
associar suas colunas aos campos do HolyCRM e ver uma pré-visualização exata do que será
criado antes de qualquer coisa ser salva. Note que isso sempre cria registros novos — não
verifica se você já cadastrou essa pessoa manualmente antes.
</details>

<details class="help-faq-item">
<summary>Por que o e-mail de um membro está bloqueado e eu não consigo editar?</summary>

Esse membro também tem um login no HolyCRM (é Voluntário, Gestor ou Admin). O e-mail de login
dele e o e-mail do cadastro de membro são mantidos sincronizados automaticamente, então
editar pelo formulário de Membros faria essa edição ser sobrescrita. Altere pela tela
**Configurações administrativas → Usuários** — veja
[Usuários, funções e permissões](#/users-roles).
</details>

<details class="help-faq-item">
<summary>Como o HolyCRM decide quem é "menor de idade"?</summary>

Sua igreja define uma **Idade limite para menores** em
[Configurações da igreja](#/church-settings) (padrão 18). Qualquer membro com data de
nascimento abaixo dessa idade é tratado automaticamente como menor em todo o app — é isso que
faz o campo Responsáveis e a elegibilidade para Check-in infantil funcionarem. Um membro sem
data de nascimento cadastrada usa uma caixa de seleção manual em vez disso. Veja
[Membros](#/members).
</details>

<details class="help-faq-item">
<summary>Qual a diferença entre Check-in e Check-in infantil?</summary>

Eles parecem quase idênticos, mas o **Check-in infantil** só permite fazer check-in de
menores de idade e imprime uma etiqueta de responsável correspondente, enquanto o **Check-in**
normal permite qualquer membro ativo e é voltado para cultos/eventos abertos a todos. Use o
Check-in infantil especificamente para ministérios restritos a menores (como um ministério
infantil durante um culto). Veja [Presença e check-in](#/attendance).
</details>

<details class="help-faq-item">
<summary>Como eu escalo voluntários para um culto de domingo ou evento?</summary>

Configure suas **Funções de serviço** uma vez (Som, Recepção, etc.), depois crie uma
**Escala** (Requisito de função) vinculada ao evento ou atividade de ministério dizendo
quantas pessoas aquela função precisa — você pode fazer isso direto do painel de um evento no
[Calendário](#/calendar). Depois escale voluntários para preencher. Veja
[Escalas de serviço](#/rotas).
</details>

<details class="help-faq-item">
<summary>Por que um evento mostra um horário diferente do que eu esperava?</summary>

Todo horário está ligado ao fuso horário do **local** dele, não ao fuso que você está usando
para visualizar o calendário. Se seu fuso de visualização for diferente, os detalhes do
evento mostram os dois horários para que não haja ambiguidade. Confira se o Local do evento
tem o fuso horário correto configurado — veja [Calendário](#/calendar) e
[Configurações da igreja e locais](#/church-settings).
</details>

<details class="help-faq-item">
<summary>Posso personalizar um e-mail em massa com o nome de cada destinatário?</summary>

Sim — clique em um campo de texto no editor, depois clique em uma variável como **Primeiro
nome** na barra de ferramentas para inserir `{{first_name}}`. Ela é substituída pelo valor
real de cada destinatário no envio. Veja [E-mails em massa e modelos](#/bulk-email).
</details>

<details class="help-faq-item">
<summary>Existe um limite de quantas pessoas eu posso enviar um e-mail de uma vez?</summary>

Sim, 500 destinatários por envio, e o mesmo limite se aplica a um único arquivo de Importar
dados. Se você precisar alcançar mais gente, divida o público ou o arquivo em lotes.
</details>

<details class="help-faq-item">
<summary>Como eu removo a linha "Sent with HolyCRM" dos meus e-mails?</summary>

Você não pode — é uma pequena parte fixa de todo e-mail enviado pela plataforma. Ela é mantida
deliberadamente discreta e não aparece em nenhum outro lugar do app.
</details>

<details class="help-faq-item">
<summary>Minha igreja recebe ofertas em mais de uma moeda. Como isso funciona?</summary>

Configure uma **moeda padrão** em [Configurações da igreja](#/church-settings), com a opção
de sobrepor por [Local](#/church-settings). Qualquer transação registrada em uma moeda
diferente precisa de uma **taxa de câmbio** (digitada manualmente, na data da transação) para
que os totais em [Ofertas e finanças](#/finance) possam ser combinados corretamente. Não há
consulta automática de taxa de câmbio.
</details>

<details class="help-faq-item">
<summary>Como eu adiciono um logo da igreja, e onde ele aparece?</summary>

Faça o upload em [Configurações da igreja](#/church-settings). Ele fica disponível como um
botão "Inserir logo da igreja" com um clique no editor de [E-mails em massa](#/bulk-email).
</details>

<details class="help-faq-item">
<summary>Esqueci minha senha. O que eu faço?</summary>

Na tela de login, use **Esqueceu sua senha?** e digite seu e-mail. Você sempre vai receber a
mesma mensagem neutra de confirmação, e um link para redefinir se existir uma conta com esse
endereço — isso é intencional, para que a tela de login não possa ser usada para verificar se
um e-mail está cadastrado.
</details>

<details class="help-faq-item">
<summary>Membros podem fazer login no HolyCRM sozinhos?</summary>

Só se tiverem recebido um login com função Membro — a maioria dos membros são apenas
registros no seu diretório, sem nenhum login. Um login com função Membro é somente leitura e
vê principalmente o próprio [Perfil](#/profile). Para dar um login a alguém, veja
[Usuários, funções e permissões](#/users-roles).
</details>

<details class="help-faq-item">
<summary>Convidados podem se inscrever em um evento sozinhos, on-line?</summary>

Ainda não — [Inscrições em eventos](#/events) por enquanto é só cadastrado pela equipe (um
membro da equipe busca e adiciona um membro que já está no seu diretório). A inscrição pública
por autoatendimento é um recurso planejado para o futuro.
</details>

<details class="help-faq-item">
<summary>Algo parece estar quebrado ou tenho uma dúvida que não está aqui. E agora?</summary>

Entre em contato com quem gerencia sua conta do HolyCRM na sua igreja, ou diretamente com o
suporte do HolyCRM. Esta Central de Ajuda cobre como cada módulo deveria funcionar hoje; se
algo se comportar de forma diferente do descrito aqui, vale a pena reportar.
</details>
