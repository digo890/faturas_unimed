# Changelog — Tela de Faturas Unimed

## 2026-04-24

### Plano Previdência
| # | Alteração |
|---|-----------|
| 1 | Adicionado plano **Previdência** com dados reais (Lucas Salgado e Eduardo Salgado como titulares) |
| 2 | Card de Previdência convertido de demonstrativo para interativo, abrindo painel de faturas |
| 3 | Coluna **Titular** na tabela, exibida exclusivamente no plano Previdência |
| 4 | Filtro dropdown **Todos os titulares** na barra de filtros da tabela, exclusivo para Previdência |
| 5 | Chevron movido da coluna Vencimento para a coluna Titular |
| 6 | Valor das faturas de Eduardo Salgado corrigido para R$ 210,00 |

### Carrossel de cards de planos
| # | Alteração |
|---|-----------|
| 7 | Cards de planos convertidos de grid estático para **carrossel horizontal** com scroll drag |
| 8 | Barra de scroll horizontal ocultada (`scrollbar-width: none`) |
| 9 | Quarto card (Previdência) aparece parcialmente cortado à direita, sinalizando mais conteúdo |
| 10 | Efeito de **momentum/inércia** ao soltar o drag — carrossel desacelera suavemente |
| 11 | Clique no card não disparado acidentalmente após drag (supressão por distância > 4px) |
| 12 | Visão mini (toggle) mantém layout em grid, sem herdar comportamento do carrossel |

### Dropdown de troca de usuário (topbar)
| # | Alteração |
|---|-----------|
| 13 | Ícone **chevron** adicionado ao lado do nome no chip de usuário |
| 14 | Chevron anima rotação 180° ao abrir o dropdown |
| 15 | Efeito de hover no chip alinhado ao padrão dos ícones da topbar (`background: --color-neutral-200`) |
| 16 | Janela suspensa **"Visualizar como"** com opções Lucas Salgado e Eduardo Salgado |
| 17 | Dropdown abre com animação de `opacity` + `translateY`, fecha ao clicar fora |
| 18 | Opção selecionada destacada com fundo azul e ícone de check |
| 19 | Labels "Titular" e "Dependente" removidas — exibe apenas o nome de cada usuário |
| 20 | Posicionamento do dropdown corrigido via wrapper `position: relative` |
