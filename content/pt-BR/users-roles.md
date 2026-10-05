# Usuários, funções e permissões

Existe uma diferença importante entre um **Membro** (uma pessoa da sua congregação) e um
**Usuário** (alguém com login neste app). A maioria dos membros nunca faz login; um usuário é
alguém da sua equipe/voluntariado que precisa de acesso ao HolyCRM.

## Convidando alguém

**Configurações administrativas → Usuários → Convidar usuário**. Busque e escolha primeiro um
Membro existente (se ele já estiver no seu diretório) — isso vincula o login dele ao cadastro
existente, em vez de criar uma pessoa duplicada. Se ele ainda não for membro, você pode
convidá-lo só com nome e e-mail.

Vincular importa especialmente para a função **Membro**: é isso que permite que ele veja
seus próprios dados de contato e histórico de ofertas (veja [Meu Perfil](#/profile) e
[Minhas ofertas](#/my-giving)) — um Membro convidado sem cadastro vinculado só vê um
Perfil vazio.

Escolha a **função** dele:

| Função | O que pode fazer (por padrão) |
|---|---|
| **Administrador** | Tudo, incluindo usuários, permissões personalizadas, Dados e privacidade e cobrança. |
| **Coordenador** | O dia a dia do ministério e da administração: pessoas, pequenos grupos, ministérios e escalas, eventos, presença, finanças, e-mail e configurações da igreja. Não pode alterar permissões, Dados e privacidade nem cobrança, nem promover alguém a Coordenador/Administrador. |
| **Voluntário** | Serviço prático na porta e nos cultos: receber visitantes, registrar presença e fazer o check-in, encontrando as pessoas só pelo nome. Sem acesso ao cadastro de membros, finanças, pedidos de oração, pequenos grupos, ministérios, planejamento de escalas, e-mail nem relatórios. |
| **Membro** | Apenas autoatendimento: o próprio perfil, suas escalas, sua disponibilidade e seu histórico de ofertas. Sem acesso aos dados de mais ninguém. |

Esses limites são aplicados pelo servidor do HolyCRM, não apenas escondidos do menu, então
ninguém consegue chegar por outro caminho a dados que sua função não permite. Um usuário
**suspenso** perde todo o acesso à igreja imediatamente.

A maioria de quem serve nas escalas só precisa da função **Membro**: estar numa escala depende de **Serve nas escalas** no cadastro do membro, não do login, e os Membros já veem suas próprias escalas e disponibilidade.

Liderar um pequeno grupo ou ministério acrescenta acesso **àquela equipe** — veja [Minhas equipes](#/my-teams).

A pessoa convidada recebe um e-mail com um link para definir a senha. Até ela fazer isso, o
status aparece como **Convidado**; assim que ela define a senha — ou entra com **Continuar
com o Google** usando esse mesmo e-mail — passa a **Ativo** automaticamente.

## Gerenciando usuários existentes

Na lista de Usuários você pode **mudar a função** de alguém, **suspender** (perde o acesso
sem excluir a conta nem o histórico), **reativar**, **remover da igreja** por completo,
**reenviar um convite** que ainda não foi aceito, ou **editar o e-mail de login**.

Algumas regras de segurança embutidas: você só pode atribuir ou gerenciar funções *abaixo* da
sua (um Coordenador não pode mexer em um Administrador nem em outro Coordenador), você não pode editar sua
própria linha nesta tela, e uma igreja sempre mantém pelo menos um Administrador — o último não pode
ser removido nem rebaixado.

## Vinculando um usuário a um membro

Um usuário funciona melhor vinculado ao **cadastro de membro** da pessoa: dele vêm o nome,
Minhas escalas, Minhas ofertas e Minha disponibilidade. Na lista de Usuários, quem não tem
vínculo aparece como *Sem membro vinculado*.

- Clique em **Vincular membro** (ou **Alterar membro**) na linha, busque o membro e **Salvar**.
  **Desvincular** remove o vínculo sem apagar nada.
- Você também pode vincular **o seu próprio** usuário, na sua linha.
- Cada membro pode ser vinculado a um único usuário. Quem já tem um aparece como *já tem
  usuário* na busca.

## Permissões personalizadas

Cada função vem com o acesso recomendado pelo HolyCRM. Um Administrador pode alterá-lo para
sua igreja em **Configurações de administração → Acesso personalizado do usuário**:

1. Escolha a função no topo (Coordenador, Voluntário ou Membro). Um número ao lado da função
   mostra quantas telas você personalizou para ela.
2. Cada tela tem até quatro caixas: **Ver**, **Adicionar**, **Editar** e **Excluir**. Um traço
   significa que essa ação não existe naquela tela. Marcar Adicionar, Editar ou Excluir também
   marca Ver; desmarcar Ver limpa as demais.
3. As linhas alteradas ficam marcadas; nada vale até você tocar em **Salvar alterações**. As
   alterações valem para todas as pessoas com essa função, e o HolyCRM as aplica em todo
   lugar, não só no menu.

Algumas telas compartilham o mesmo ajuste — por exemplo, Check-in e Check-in das crianças seguem
**Presença** — e aparecem como "Também se aplica a" abaixo dela. **Restaurar padrão** desfaz
uma tela; **Restaurar todos os padrões** desfaz tudo para essa função.

Duas coisas não podem ser alteradas aqui: a função **Administrador** sempre tem acesso completo
(para que ninguém deixe a igreja sem acesso a esta tela), e Faturamento, Dados e Privacidade e
Acesso personalizado do usuário ficam com os Administradores (Usuários, com Administradores e
Coordenadores).

## Meu Perfil vs. Usuários

**Meu Perfil** (em Conta) é onde qualquer pessoa gerencia o *próprio* login — nome, avatar,
senha e e-mail. A tela de Usuários é onde um Administrador/Coordenador gerencia o acesso *dos outros*.
Veja [Meu Perfil](#/profile).
