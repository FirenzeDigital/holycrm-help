# Perguntas frequentes

<details class="help-faq-item" open>
<summary>Não estou a ver um item de menu que esperava ver. Porquê?</summary>

O que vê depende da sua função (Admin, Gestor, Voluntário ou Membro) e de qualquer permissão
personalizada que a sua igreja lhe tenha configurado. Peça a um Admin ou Gestor para verificar
[Utilizadores, funções e permissões](#/users-roles) — ou a sua função precisa de mudar, ou uma
permissão personalizada precisa de ser concedida para esse módulo.
</details>

<details class="help-faq-item">
<summary>Como trago membros que já tenho numa folha de cálculo?</summary>

Exporte a sua folha de cálculo para CSV e use [Importar dados](#/data-import) em Pessoas. Vai
associar as suas colunas aos campos do HolyCRM e ver uma pré-visualização exata do que vai ser
criado antes de guardar seja o que for. Note que isto cria sempre registos novos — não
verifica se já registou essa pessoa manualmente antes.
</details>

<details class="help-faq-item">
<summary>Porque é que o e-mail de um membro está bloqueado e não consigo editar?</summary>

Esse membro também tem um acesso ao HolyCRM (é Voluntário, Gestor ou Admin). O e-mail de
acesso dele e o e-mail da ficha de membro são mantidos sincronizados automaticamente, pelo que
editá-lo a partir do formulário de Membros faria com que essa edição fosse substituída.
Altere a partir de **Configurações administrativas → Utilizadores** — ver
[Utilizadores, funções e permissões](#/users-roles).
</details>

<details class="help-faq-item">
<summary>Como é que o HolyCRM decide quem é "menor de idade"?</summary>

A sua igreja define uma **Idade limite para menores** em
[Configurações da igreja](#/church-settings) (predefinição 18). Qualquer membro com data de
nascimento abaixo dessa idade é tratado automaticamente como menor em toda a aplicação — é
isto que faz o campo Responsáveis e a elegibilidade para Check-in de crianças funcionarem. Um
membro sem data de nascimento registada usa antes uma caixa de verificação manual. Ver
[Membros](#/members).
</details>

<details class="help-faq-item">
<summary>Qual é a diferença entre Check-in e Check-in de crianças?</summary>

Parecem quase idênticos, mas o **Check-in de crianças** só permite fazer check-in de menores
de idade e imprime uma etiqueta de responsável correspondente, enquanto o **Check-in** normal
permite qualquer membro ativo e destina-se a cultos/eventos abertos a todos. Use o Check-in de
crianças especificamente para ministérios restritos a menores (como um ministério de crianças
durante um culto). Ver [Presenças e check-in](#/attendance).
</details>

<details class="help-faq-item">
<summary>Como escalo voluntários para um culto de domingo ou evento?</summary>

Configure as suas **Funções de serviço** uma vez (Som, Receção, etc.), depois crie uma
**Escala** (Requisito de função) associada ao evento ou atividade de ministério indicando
quantas pessoas essa função precisa — pode fazer isto diretamente a partir do painel de um
evento no [Calendário](#/calendar). Depois escale voluntários para preencher. Ver
[Escalas de serviço](#/rotas).
</details>

<details class="help-faq-item">
<summary>Porque é que um evento mostra um horário diferente do que eu esperava?</summary>

Todo o horário está ligado ao fuso horário do seu **local**, não ao fuso que está a usar para
ver o calendário. Se o seu fuso de visualização for diferente, os detalhes do evento mostram
ambos os horários para que não haja ambiguidade. Confirme se o Local do evento tem o fuso
horário correto configurado — ver [Calendário](#/calendar) e
[Configurações da igreja e locais](#/church-settings).
</details>

<details class="help-faq-item">
<summary>Posso personalizar um e-mail em massa com o nome de cada destinatário?</summary>

Sim — clique num campo de texto no editor, depois clique numa variável como **Primeiro nome**
na barra de ferramentas para inserir `{{first_name}}`. É substituída pelo valor real de cada
destinatário no envio. Ver [E-mails em massa e modelos](#/bulk-email).
</details>

<details class="help-faq-item">
<summary>Há um limite de quantas pessoas posso enviar um e-mail de uma vez?</summary>

Sim, 500 destinatários por envio, e o mesmo limite aplica-se a um único ficheiro de Importar
dados. Se precisar de alcançar mais pessoas, divida o público ou o ficheiro em lotes.
</details>

<details class="help-faq-item">
<summary>Como removo a linha "Sent with HolyCRM" dos meus e-mails?</summary>

Não pode — é uma pequena parte fixa de todo o e-mail enviado através da plataforma. É mantida
deliberadamente discreta e não aparece em mais nenhum lugar da aplicação.
</details>

<details class="help-faq-item">
<summary>A minha igreja recebe ofertas em mais do que uma moeda. Como funciona isso?</summary>

Configure uma **moeda predefinida** em [Configurações da igreja](#/church-settings), com a
opção de a substituir por [Local](#/church-settings). Qualquer transação registada numa moeda
diferente precisa de uma **taxa de câmbio** (introduzida manualmente, à data da transação)
para que os totais em [Ofertas e finanças](#/finance) possam ser combinados corretamente. Não
há consulta automática de taxa de câmbio.
</details>

<details class="help-faq-item">
<summary>Como adiciono um logótipo da igreja, e onde é que aparece?</summary>

Carregue-o em [Configurações da igreja](#/church-settings). Fica disponível como um botão
"Inserir logótipo da igreja" com um clique no editor de [E-mails em massa](#/bulk-email).
</details>

<details class="help-faq-item">
<summary>Esqueci-me da palavra-passe. O que faço?</summary>

No ecrã de acesso, use **Esqueceu-se da palavra-passe?** e introduza o seu e-mail. Vai sempre
receber a mesma mensagem neutra de confirmação, e um link para a redefinir caso exista uma
conta com esse endereço — isto é intencional, para que o ecrã de acesso não possa ser usado
para verificar se um e-mail está registado.
</details>

<details class="help-faq-item">
<summary>Os Membros podem iniciar sessão no HolyCRM sozinhos?</summary>

Só se lhes tiver sido dado um acesso com a função Membro — a maioria dos membros são apenas
registos no seu diretório, sem qualquer acesso. Um acesso com função Membro é apenas de
leitura e vê principalmente o seu próprio [Perfil](#/profile). Para dar um acesso a alguém,
ver [Utilizadores, funções e permissões](#/users-roles).
</details>

<details class="help-faq-item">
<summary>Os convidados podem inscrever-se num evento sozinhos, online?</summary>

Ainda não — as [Inscrições em eventos](#/events) são por agora apenas registadas pela equipa
(um membro da equipa procura e adiciona um membro que já está no seu diretório). A inscrição
pública por autosserviço é uma funcionalidade planeada para o futuro.
</details>

<details class="help-faq-item">
<summary>Algo parece estar avariado ou tenho uma dúvida que não está aqui. E agora?</summary>

Contacte quem gere a sua conta HolyCRM na sua igreja, ou diretamente o suporte do HolyCRM.
Esta Central de Ajuda cobre como cada módulo deveria funcionar hoje; se algo se comportar de
forma diferente do descrito aqui, vale a pena reportar.
</details>
