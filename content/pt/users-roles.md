# Utilizadores, funções e permissões

Existe uma diferença importante entre um **Membro** (uma pessoa da sua congregação) e um
**Utilizador** (alguém com acesso a esta aplicação). A maioria dos membros nunca inicia
sessão; um utilizador é alguém da sua equipa/voluntariado que precisa de acesso ao HolyCRM.

## Convidar alguém

**Configurações administrativas → Utilizadores → Convidar utilizador**. Procure e escolha
primeiro um Membro existente (se já estiver no seu diretório) — isto associa o acesso dele à
ficha existente em vez de criar uma pessoa duplicada. Se ainda não for membro, pode convidá-lo
apenas com nome e e-mail.

Associar importa especialmente para a função **Membro**: é isso que lhe permite ver os
seus próprios dados de contacto e histórico de ofertas (ver [O Meu Perfil](#/profile) e
[As minhas ofertas](#/my-giving)) — um Membro convidado sem ficha associada só vê um
Perfil vazio.

Escolha a sua **função**:

| Função | O que pode fazer (por predefinição) |
|---|---|
| **Administrador** | Tudo, incluindo utilizadores, permissões personalizadas, Dados e privacidade e faturação. |
| **Coordenador** | O dia a dia do ministério e da administração: pessoas, pequenos grupos, ministérios e escalas, eventos, presenças, finanças, e-mail e configurações da igreja. Não pode alterar permissões, Dados e privacidade nem faturação, nem promover alguém a Coordenador/Administrador. |
| **Voluntário** | Serviço prático à porta e nos cultos: receber visitantes, registar presenças e fazer o check-in, encontrando as pessoas só pelo nome. Sem acesso ao registo de membros, finanças, pedidos de oração, pequenos grupos, ministérios, planeamento de escalas, e-mail nem relatórios. |
| **Membro** | Apenas autosserviço: o seu próprio perfil, as suas escalas, a sua disponibilidade e o seu histórico de ofertas. Sem acesso aos dados de mais ninguém. |

Estes limites são aplicados pelo servidor do HolyCRM, não apenas escondidos do menu, por isso
ninguém consegue chegar por outro caminho a dados que a sua função não permite. Um utilizador
**suspenso** perde todo o acesso à igreja imediatamente.

A maioria de quem serve nas escalas só precisa da função **Membro**: estar numa escala depende de **Serve nas escalas** na ficha do membro, não do login, e os Membros já veem as suas próprias escalas e disponibilidade.

A pessoa convidada recebe um e-mail com um link para definir a palavra-passe. Até o fazer, o
seu estado aparece como **Convidado**; assim que define a palavra-passe — ou entra com
**Continuar com o Google** usando esse mesmo e-mail — passa a **Ativo** automaticamente.

## Gerir utilizadores existentes

Na lista de Utilizadores pode **alterar a função** de alguém, **suspender** (perde o acesso
sem eliminar a conta nem o histórico), **reativar**, **remover da igreja** por completo,
**reenviar um convite** que ainda não foi aceite, ou **editar o e-mail de acesso**.

Algumas regras de segurança incorporadas: só pode atribuir ou gerir funções *abaixo* da sua
(um Coordenador não pode mexer num Administrador nem noutro Coordenador), não pode editar a sua própria linha
neste ecrã, e uma igreja mantém sempre pelo menos um Administrador — o último não pode ser removido
nem despromovido.

## Associar um utilizador a um membro

Um utilizador funciona melhor associado à **ficha de membro** da pessoa: dela vêm o nome, As
minhas escalas, As minhas ofertas e A minha disponibilidade. Na lista de Utilizadores, quem não
tem associação aparece como *Sem membro associado*.

- Clique em **Associar membro** (ou **Alterar membro**) na linha, pesquise o membro e
  **Guardar**. **Desassociar** remove a associação sem apagar nada.
- Também pode associar **o seu próprio** utilizador, na sua linha.
- Cada membro só pode estar associado a um utilizador. Quem já tem um aparece como *já tem
  utilizador* na pesquisa.

## Permissões personalizadas

Cada função vem com o acesso recomendado pelo HolyCRM. Um Administrador pode alterá-lo para a
sua igreja em **Configurações de administração → Acesso personalizado do usuário**:

1. Escolha a função no topo (Coordenador, Voluntário ou Membro). Um número ao lado da função
   mostra quantos ecrãs personalizou para ela.
2. Cada ecrã tem até quatro caixas: **Ver**, **Adicionar**, **Editar** e **Excluir**. Um
   traço significa que essa ação não existe nesse ecrã. Marcar Adicionar, Editar ou Excluir
   marca também Ver; desmarcar Ver limpa as restantes.
3. As linhas alteradas ficam assinaladas; nada se aplica até carregar em **Salvar
   alterações**. As alterações aplicam-se a todas as pessoas com essa função, e o HolyCRM
   aplica-as em todo o lado, não só no menu.

Alguns ecrãs partilham o mesmo ajuste — por exemplo, Check-in e Check-in das crianças seguem
**Presença** — e aparecem como "Também se aplica a" por baixo dela. **Repor predefinição**
desfaz um ecrã; **Repor todas as predefinições** desfaz tudo para essa função.

Duas coisas não podem ser alteradas aqui: a função **Administrador** tem sempre acesso
completo (para que ninguém deixe a igreja sem acesso a este ecrã), e Faturação, Dados e
Privacidade e Acesso personalizado do usuário ficam com os Administradores (Usuários, com
Administradores e Coordenadores).

## O Meu Perfil vs. Utilizadores

**O Meu Perfil** (em Conta) é onde qualquer pessoa gere o seu *próprio* acesso — nome, avatar,
palavra-passe e e-mail. O ecrã de Utilizadores é onde um Administrador/Coordenador gere o acesso *dos
outros*. Ver [O Meu Perfil](#/profile).
