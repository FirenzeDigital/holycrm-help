# Usuários, funções e permissões

Existe uma diferença importante entre um **Membro** (uma pessoa da sua congregação) e um
**Usuário** (alguém com login neste app). A maioria dos membros nunca faz login; um usuário é
alguém da sua equipe/voluntariado que precisa de acesso ao HolyCRM.

## Convidando alguém

**Configurações administrativas → Usuários → Convidar usuário**. Busque e escolha primeiro um
Membro existente (se ele já estiver no seu diretório) — isso vincula o login dele ao cadastro
existente, em vez de criar uma pessoa duplicada. Se ele ainda não for membro, você pode
convidá-lo só com nome e e-mail.

Escolha a **função** dele:

| Função | Pode tipicamente |
|---|---|
| **Admin** | Tudo, incluindo Configurações da igreja e convidar/gerenciar outros usuários. |
| **Gestor (Manager)** | Operação do dia a dia na maioria dos módulos, mas não Configurações da igreja nem promover alguém a Gestor/Admin. |
| **Voluntário** | Acesso restrito e focado em uma tarefa — comumente presença/check-in — conforme sua igreja configurar. |
| **Membro** | Autoatendimento somente leitura, principalmente o próprio Perfil. |

A pessoa convidada recebe um e-mail com um link para definir a senha. Até ela fazer isso, o
status aparece como **Convidado**; assim que ela define a senha, passa a **Ativo**
automaticamente.

## Gerenciando usuários existentes

Na lista de Usuários você pode **mudar a função** de alguém, **suspender** (perde o acesso
sem excluir a conta nem o histórico), **reativar**, **remover da igreja** por completo,
**reenviar um convite** que ainda não foi aceito, ou **editar o e-mail de login**.

Algumas regras de segurança embutidas: você só pode atribuir ou gerenciar funções *abaixo* da
sua (um Gestor não pode mexer em um Admin nem em outro Gestor), você não pode editar sua
própria linha nesta tela, e uma igreja sempre mantém pelo menos um Admin — o último não pode
ser removido nem rebaixado.

## Permissões personalizadas

Além das quatro funções padrão, um Admin pode ajustar o acesso por módulo em
**Configurações administrativas → Acesso personalizado de usuário** — por exemplo, permitindo
que Voluntários criem Eventos mesmo que isso não faça parte da função padrão de Voluntário.
Esses ajustes se aplicam por cima dos padrões da função, especificamente para sua igreja.

## Meu Perfil vs. Usuários

**Meu Perfil** (em Conta) é onde qualquer pessoa gerencia o *próprio* login — nome, avatar,
senha e e-mail. A tela de Usuários é onde um Admin/Gestor gerencia o acesso *dos outros*.
Veja [Meu Perfil](#/profile).
