# Escopo MVP: Sistema de Apoio à Separação de Almoxarifado (SASA)

## 1. Problema
Divergência entre o lote físico e o lote lançado no MV Soul devido a pré-anotações manuais e falta de conferência rigorosa no momento da separação, gerando erros de rastreabilidade hospitalar.

## 2. Objetivo
Digitalizar a conferência de separação e segunda conferência via smartphone, garantindo que o lote físico seja validado antes do lançamento final no MV.

## 3. Escopo
- **Dentro:** Importação de pedidos/estoque (via Excel/PDF), guia de separação por item, registro de lotes e quantidades, validação de 2ª conferência e relatório de divergências.
- **Fora:** Integração via API com MV Soul (será via importação de arquivos), leitura de código de barras (inicialmente), gestão de compras ou inventário total.

## 4. Dados de Entrada
- **Do MV:** Código do item, nome, unidade, quantidade solicitada, código da solicitação e saldo de estoque por lote.
- **Do Usuário:** Lote físico encontrado, quantidade separada, nome do conferente.

## 5. Fluxo Adaptado (Celular sem Coletor)
1. **Carga:** Administrador sobe o Excel do pedido e estoque.
2. **Separação:** O almoxarife abre o pedido no celular -> Seleciona o item -> O app mostra os lotes disponíveis -> O usuário seleciona/digita o lote físico e a quantidade -> Confirma.
3. **Multi-Lote:** Para itens com até 6 lotes, o app apresenta uma lista de "Check-list" onde o usuário marca a quantidade retirada de cada lote até completar a quantidade total solicitada.
4. **2ª Conferência:** O segundo almoxarife abre o pedido "Separado" -> Valida item a item -> Assina digitalmente (clique).
5. **Fechamento:** O app gera uma lista final de "Atendimento Realizado" para ser lançada no MV.

## 6. Telas Mínimas
- **Telas de Login/Perfil:** Identificação do almoxarife.
- **Dashboard de Pedidos:** Lista de pedidos pendentes, em separação e aguardando conferência.
- **Tela de Separação:** Detalhe do item -> Seleção de Lote -> Input de Quantidade.
- **Tela de Conferência:** Check-list de validação rápida dos itens já separados.
- **Relatório de Divergências:** Lista de itens onde o lote físico != lote sistema.

## 7. Regras de Divergência
- Se o usuário selecionar um lote que não consta no arquivo de estoque -> Alerta de "Lote Não Cadastrado" -> Registro obrigatório da divergência para correção no MV.
- Se a soma dos lotes for menor que a solicitação -> Alerta de "Saldo Insuficiente".

## 8. Indicadores do Piloto
- % de divergência de lote (Lote Físico vs Sistema).
- Tempo médio de separação por pedido.
- Número de erros detectados na 2ª conferência.

## 9. Plano de Piloto
- **Semana 1:** Importação de dados reais e teste de fluxo com 1 único almoxarife.
- **Semana 2:** Operação com os 3 almoxarifes em paralelo ao processo de papel (espelhamento).
- **Semana 3:** Análise de divergências e ajuste de interface.

## 10. Riscos e Decisões Pendentes
- **Risco:** Resistência à mudança ou demora na digitação manual dos lotes no celular.
- **Decisão:** Definir se o app será Web (acesso via browser) ou Mobile Nativo (PWA é a recomendação inicial para agilidade).
