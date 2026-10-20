# Encontrar duplicados

Às vezes a mesma pessoa acaba cadastrada duas vezes: foi importada de duas listas,
cadastrada uma vez como "Zé" e outra como "José", ou registrada na entrada e de novo na
secretaria. **Encontrar duplicados** (em **Configurações**) mostra essas pessoas lado a lado
para você mesclá-las em um só cadastro.

Administradores e Coordenadores podem usar: quem pode editar e excluir membros.

## O que encontra

- **Mesmo e-mail**, **mesmo telefone** (mesmo escrito de outro jeito) ou **mesmo nome** —
  quase com certeza é a mesma pessoa.
- **Nome parecido** — um erro de digitação ("Jonatan" / "Jonathan"), um apelido ("Zé" /
  "José", "Chico" / "Francisco"), um nome curto ("Bia" / "Beatriz", "Joãozinho" / "João") ou
  um de dois sobrenomes ("Maria Silva" / "Maria Silva Santos"). Esses vêm marcados com
  **Confira antes de mesclar**: dois irmãos ou mãe e filha podem ter nomes muito parecidos.

## Mesclar dois cadastros

1. Compare os dois cartões: nome, e-mail, telefone, data de nascimento, endereço, sexo, situação, quando cada
   um foi cadastrado e se algum tem acesso ao HolyCRM.
2. Escolha **Manter esta** no cadastro que quer manter. O HolyCRM escolhe o que tem acesso
   ou, se não houver, o mais antigo, mas você pode mudar.
3. Onde os dois cadastros têm um valor **diferente** (dois telefones, duas grafias de um
   nome…), cada lado mostra **Usar este**: escolha o valor que deve ficar.
4. Clique em **Mesclar** e confirme.

Ao mesclar:

- **Tudo o que está ligado ao outro cadastro passa para o que você mantém:** presenças e
  check-ins, células e ministérios, datas de serviço e confirmações, ofertas, inscrições em
  eventos, responsáveis e filhos, atribuições de visitantes e de pedidos de oração, e o
  acesso.
- **Os campos vazios são preenchidos** com o outro cadastro (um e-mail, um telefone, uma data
  de nascimento…). Etiquetas e responsáveis são somados, as observações são juntadas e os
  campos personalizados são combinados. Quando os dois têm um valor, fica o do cadastro que
  você mantém.
- Se as duas pessoas estavam no mesmo grupo, evento ou culto, ficam lá **uma vez só**.
- O outro cadastro é excluído. Onde os dois tinham um valor, fica o que você escolheu com
  **Usar este**.

**Alguém cadastrado três vezes?** Depois da primeira mesclagem, a lista mostra o cadastro que
ficou junto com a terceira cópia: mescle de novo.

## Desfazendo uma mesclagem

**Uniões recentes**, no topo da página, lista as mesclagens dos últimos 30 dias. **Desfazer**
traz de volta a pessoa removida como estava, com tudo o que estava vinculado a ela, e devolve os
dados da pessoa mantida — exceto o que alguém mudou desde então, que fica. Depois de 30 dias,
uma mesclagem não pode mais ser desfeita.

**As duas têm acesso?** Não dá para mesclar até remover um. Vá em
[Usuários](#/users-roles), remova o acesso que sobra e depois mescle.

## Não é a mesma pessoa

Se o par são duas pessoas diferentes, clique em **Não é a mesma pessoa** e ele some da
lista. Isso fica salvo só naquele dispositivo e navegador: outro administrador, ou você em
outro computador, pode ver o par de novo.

## Dicas

- Depois de [importar](#/data-import), a tela final tem um botão **Encontrar duplicados**.
- A lista mostra 25 pares por vez; **Mostrar mais** carrega os próximos.
- Importar de novo não cria duplicados de quem já está cadastrado: a prévia da importação
  identifica essas pessoas e deixa você ignorá-las ou atualizá-las.
