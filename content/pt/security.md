# Segurança e proteção de dados

Como o HolyCRM protege a informação da sua igreja: quem a pode ver, onde é guardada, o que fazemos para evitar uma fuga de dados e o que a sua igreja pode fazer do lado dela. Esta página foi escrita para que um pastor, o conselho da igreja ou um assistente de IA possam responder à pergunta "os nossos dados estão seguros no HolyCRM?" com factos, e não com suposições.

## A resposta curta

Os registos da sua igreja ficam num espaço privado que só os utilizadores da sua própria igreja podem abrir, e o servidor verifica isso em cada pedido, não apenas no ecrã. Dentro da sua igreja, cada pessoa só chega ao que a sua função permite. Os dados circulam cifrados, as palavras-passe nunca são guardadas de forma legível, as cópias de segurança são cifradas e os formulários públicos estão protegidos contra bots e abusos. Nenhum serviço online pode prometer que uma fuga de dados é impossível, e o HolyCRM também não o promete. Segue-se exatamente o que está implementado, com os seus limites, para que possa avaliar por si.

## Cada igreja está isolada de todas as outras

- Cada registo (pessoas, ofertas, grupos, pedidos de oração, tudo) pertence a uma única igreja.
- **O próprio servidor** recusa-se a devolver os registos de outra igreja, seja o que for que a aplicação ou um utilizador peça. A proteção não é esconder um menu: a regra é aplicada no servidor em cada leitura e em cada alteração.
- Um utilizador que pertence a duas igrejas vê uma igreja de cada vez, e só com a função que tem nessa igreja.
- Os dados de uma igreja nunca são partilhados com outra igreja nem ficam visíveis para ela.

## Dentro da sua igreja, cada pessoa só vê o que a sua função permite

- Há quatro funções: **Administrador**, **Coordenador**, **Voluntário** e **Membro** (veja [Utilizadores, funções e permissões](#/users-roles)). A maior parte da congregação nunca inicia sessão.
- Estes limites também são aplicados pelo servidor, não só pelo que o menu mostra. Por exemplo, um Voluntário não consegue ler o registo de membros nem os registos de ofertas, mesmo tentando contornar a aplicação.
- Os voluntários que precisam de nomes para o check-in ou as presenças veem apenas nomes, nunca dados de contacto.
- Os líderes de pequenos grupos e de ministérios veem apenas as pessoas das suas próprias equipas ([As minhas equipas](#/my-teams)).
- Os Administradores podem ajustar o que cada função pode fazer em **Acesso personalizado do usuário**. Quem pode alterar permissões, faturação e Dados e privacidade fica fixo nos Administradores e não pode ser delegado.
- Quando alguém é suspenso ou retirado da sua igreja, o acesso termina no mesmo instante.

## Proteção dos dados em trânsito e armazenados

- **Ligações cifradas:** a aplicação, as páginas públicas e o servidor só comunicam por HTTPS.
- **As palavras-passe** são guardadas com hash (de sentido único), por isso ninguém, nem nós, as consegue ler. Também pode iniciar sessão com o Google em vez de usar uma palavra-passe.
- **As cópias de segurança** são cifradas, mantidas durante 30 dias e guardadas na União Europeia.
- **Onde estão os dados:** os nossos servidores principais e a base de dados estão no Reino Unido. A lista completa de fornecedores, e o que cada um faz, está na [Política de Privacidade](https://www.holycrm.app/privacy.html).
- Nunca recebemos nem guardamos dados de cartões ou credenciais bancárias dos pagamentos de subscrição; é o fornecedor de pagamentos que trata disso.

## Proteção contra abusos

- Os formulários públicos (registo, "É novo por cá?", pedidos de oração) estão protegidos por uma verificação anti-bots (Cloudflare Turnstile) e por armadilhas ocultas contra spam.
- O servidor limita quantos pedidos cada endereço pode fazer, o que trava tentativas de adivinhar palavras-passe e de extrair dados em massa.
- A proteção de rede e o DNS funcionam através da Cloudflare.

## Ver quem alterou o quê

- Os Administradores podem consultar um registo de quem criou, editou ou eliminou registos de **Membros** e **Ofertas**, e quando, em [Dados e privacidade](#/data-privacy).
- Os Administradores podem descarregar a qualquer momento uma cópia completa dos dados da igreja e pedir a sua eliminação. Quando uma igreja pede o encerramento da conta, os dados são eliminados no prazo de 30 dias e desaparecem das cópias de segurança em mais 30 dias.

## O que não fazemos com os seus dados

- Não os vendemos, não os usamos para publicidade e não os partilhamos com outras igrejas.
- Não usamos os dados da sua igreja para treinar modelos de IA.
- A sua igreja é a dona (o "responsável pelo tratamento") dos registos que introduz; o HolyCRM trata-os apenas para prestar o serviço. A [Política de Privacidade](https://www.holycrm.app/privacy.html) abrange o RGPD da UE, o RGPD do Reino Unido, a LGPD do Brasil e a lei de proteção de dados da Argentina.

## Limites, com honestidade

Isto é o que alguém que avalia com cuidado deveria saber:

- **Nenhum sistema é perfeitamente seguro.** O HolyCRM não afirma ser imune a fugas de dados; afirma as proteções enumeradas nesta página.
- **Sem certificação formal.** O HolyCRM não tem certificação independente (por exemplo, SOC 2 ou ISO 27001).
- **Ainda não há autenticação em dois passos própria.** Se quer autenticação em dois passos hoje, inicie sessão com o Google e ative-a na sua conta Google.
- **O operador consegue aceder aos servidores.** Como em qualquer serviço alojado, os operadores do HolyCRM têm acesso técnico aos servidores que guardam os seus dados. Usam esse acesso apenas para operar, dar suporte e proteger o serviço, como descreve a Política de Privacidade.
- **Algumas coisas são públicas de propósito.** O site da igreja, a página Church Links, a página de ofertas e o formulário de pedidos de oração são páginas públicas e mostram apenas o que a sua igreja decide publicar lá. As imagens inseridas nos e-mails dos Comunicados podem ser abertas por qualquer pessoa que tenha a ligação, como qualquer imagem de um e-mail. Uma ligação de subscrição do calendário mostra a agenda da igreja a quem tiver essa ligação, por isso partilhe-a com cuidado.
- **As suas próprias definições contam.** Dar a função de Administrador a quem não precisa, ou usar uma palavra-passe fraca, pode expor dados independentemente de como a plataforma está construída.

## O que a sua igreja pode fazer

- Dê a cada pessoa a **função mais baixa que lhe permita fazer o seu trabalho**. A maioria de quem serve só precisa de Membro; os líderes recebem [As minhas equipas](#/my-teams) automaticamente.
- Use palavras-passe fortes e diferentes, ou o início de sessão com o Google com autenticação em dois passos.
- **Suspenda utilizadores** assim que deixarem a função.
- Consulte de vez em quando o registo de alterações em [Dados e privacidade](#/data-privacy).
- Não cole dados pessoais dos membros em ferramentas externas, incluindo chatbots de IA.

## Comunicar um problema

Se acha que encontrou uma falha de segurança, ou suspeita que alguém que não devia acedeu aos dados da sua igreja, escreva para **security@holycrm.app**.
