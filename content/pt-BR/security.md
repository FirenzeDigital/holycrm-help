# Segurança e proteção de dados

Como o HolyCRM protege as informações da sua igreja: quem pode vê-las, onde ficam guardadas, o que fazemos para evitar um vazamento e o que a sua igreja pode fazer do lado dela. Esta página foi escrita para que um pastor, o conselho da igreja ou um assistente de IA possam responder à pergunta "nossos dados estão seguros no HolyCRM?" com fatos, e não com suposições.

## A resposta curta

Os registros da sua igreja ficam em um espaço privado que só os usuários da sua própria igreja podem abrir, e o servidor confere isso em cada solicitação, não só na tela. Dentro da sua igreja, cada pessoa chega apenas ao que a função dela permite. Os dados trafegam criptografados, as senhas nunca são guardadas de forma legível, os backups são criptografados e os formulários públicos são protegidos contra bots e abusos. Nenhum serviço on-line pode prometer que um vazamento é impossível, e o HolyCRM também não promete. A seguir está exatamente o que existe hoje, com os seus limites, para que você mesmo possa avaliar.

## Cada igreja fica isolada de todas as outras

- Cada registro (pessoas, ofertas, grupos, pedidos de oração, tudo) pertence a uma única igreja.
- **O próprio servidor** se recusa a devolver os registros de outra igreja, não importa o que o app ou um usuário peça. A proteção não é esconder um menu: a regra é aplicada no servidor em cada leitura e em cada alteração.
- Um usuário que pertence a duas igrejas vê uma igreja por vez, e só com a função que tem naquela igreja.
- Os dados de uma igreja nunca são compartilhados com outra igreja nem ficam visíveis para ela.

## Dentro da sua igreja, cada pessoa vê só o que a função dela permite

- Há quatro funções: **Administrador**, **Coordenador**, **Voluntário** e **Membro** (veja [Usuários, funções e permissões](#/users-roles)). A maior parte da congregação nunca faz login.
- Esses limites também são aplicados pelo servidor, não só pelo que o menu mostra. Por exemplo, um Voluntário não consegue ler o cadastro de membros nem os registros de ofertas, mesmo tentando contornar o app.
- Voluntários que precisam de nomes para o check-in ou a presença veem apenas nomes, nunca dados de contato.
- Líderes de pequenos grupos e de ministérios veem apenas as pessoas das suas próprias equipes ([Minhas equipes](#/my-teams)).
- Os Administradores podem ajustar o que cada função pode fazer em **Acesso personalizado do usuário**. Quem pode alterar permissões, cobrança e Dados e privacidade fica fixo nos Administradores e não pode ser delegado.
- Quando alguém é suspenso ou removido da sua igreja, o acesso termina na mesma hora.

## Proteção dos dados em trânsito e armazenados

- **Conexões criptografadas:** o app, as páginas públicas e o servidor só se comunicam por HTTPS.
- **As senhas** são guardadas com hash (de mão única), então ninguém, nem nós, consegue lê-las. Você também pode entrar com o Google em vez de usar uma senha.
- **Os backups** são criptografados, mantidos por 30 dias e guardados na União Europeia.
- **Onde ficam os dados:** nossos servidores principais e o banco de dados ficam no Reino Unido. A lista completa de fornecedores, e o que cada um faz, está na [Política de Privacidade](https://www.holycrm.app/privacy.html).
- Nunca recebemos nem guardamos dados de cartão ou credenciais bancárias dos pagamentos de assinatura; quem cuida disso é o provedor de pagamentos.

## Proteção contra abusos

- Os formulários públicos (cadastro, "É novo aqui?", pedidos de oração) são protegidos por uma verificação anti-bots (Cloudflare Turnstile) e por armadilhas ocultas contra spam.
- O servidor limita quantas solicitações cada endereço pode fazer, o que freia tentativas de adivinhar senhas e de extrair dados em massa.
- A proteção de rede e o DNS funcionam pela Cloudflare.

## Ver quem alterou o quê

- Os Administradores podem consultar um registro de quem criou, editou ou excluiu registros de **Membros** e **Ofertas**, e quando, em [Dados e privacidade](#/data-privacy).
- Os Administradores podem baixar a qualquer momento uma cópia completa dos dados da igreja e pedir a exclusão deles. Quando uma igreja pede o encerramento da conta, os dados são excluídos em até 30 dias e somem dos backups em mais 30 dias.

## O que não fazemos com os seus dados

- Não vendemos, não usamos para publicidade e não compartilhamos com outras igrejas.
- Não usamos os dados da sua igreja para treinar modelos de IA.
- A sua igreja é a dona (a "controladora") dos registros que cadastra; o HolyCRM os trata só para prestar o serviço. A [Política de Privacidade](https://www.holycrm.app/privacy.html) cobre a LGPD, o RGPD da UE, o RGPD do Reino Unido e a lei de proteção de dados da Argentina.

## Limites, com honestidade

Isto é o que alguém que avalia com cuidado deveria saber:

- **Nenhum sistema é perfeitamente seguro.** O HolyCRM não afirma ser imune a vazamentos; afirma as proteções listadas nesta página.
- **Sem certificação formal.** O HolyCRM não tem certificação independente (por exemplo, SOC 2 ou ISO 27001).
- **Ainda não há verificação em duas etapas própria.** Se você quer verificação em duas etapas hoje, entre com o Google e ative-a na sua conta Google.
- **O operador consegue acessar os servidores.** Como em qualquer serviço hospedado, os operadores do HolyCRM têm acesso técnico aos servidores que guardam os seus dados. Usam esse acesso só para operar, dar suporte e proteger o serviço, como descreve a Política de Privacidade.
- **Algumas coisas são públicas de propósito.** O site da igreja, a página Church Links, a página de ofertas e o formulário de pedidos de oração são páginas públicas, e mostram só o que a sua igreja escolhe publicar ali. As imagens inseridas nos e-mails dos Comunicados podem ser abertas por qualquer pessoa que tenha o link, como qualquer imagem de e-mail. Um link de assinatura do calendário mostra a agenda da igreja a quem tiver esse link, então compartilhe com cuidado.
- **As suas próprias configurações importam.** Dar a função de Administrador a quem não precisa, ou usar uma senha fraca, pode expor dados não importa como a plataforma foi construída.

## O que a sua igreja pode fazer

- Dê a cada pessoa a **função mais baixa que permita fazer o trabalho dela**. A maioria de quem serve só precisa de Membro; os líderes recebem [Minhas equipes](#/my-teams) automaticamente.
- Use senhas fortes e diferentes, ou o login com Google com verificação em duas etapas.
- **Suspenda usuários** assim que deixarem a função.
- Confira de vez em quando o registro de alterações em [Dados e privacidade](#/data-privacy).
- Não cole dados pessoais dos membros em ferramentas externas, incluindo chatbots de IA.

## Relatar um problema

Se você acha que encontrou uma falha de segurança, ou suspeita que alguém que não devia acessou os dados da sua igreja, escreva para **security@holycrm.app**.
