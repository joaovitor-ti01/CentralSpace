# Central de Monitoramento de Missões Espaciais

## Global Solution — Cross-Platform Application Development

Aplicativo mobile desenvolvido em **React Native + Expo** que simula uma central de monitoramento espacial em tempo real.

O sistema permite cadastrar missões espaciais, visualizar telemetria da nave, acompanhar sensores críticos e gerenciar informações das missões através de uma interface moderna inspirada em centros espaciais da NASA e SpaceX.

---

# Integrantes

| Nome | RM |
|---|---|
| João Vitor Lima Caldeira | RM566541 |
| Miguel Vanucci Delgado | RM563491 |


---

# Objetivo do Projeto

Desenvolver um aplicativo cross-platform utilizando React Native com Expo, aplicando os conceitos aprendidos na disciplina:

- Navegação entre telas
- Gerenciamento de estado global
- Persistência de dados
- Formulários com validação
- Interface moderna e responsiva
- Desenvolvimento mobile multiplataforma

---

# Funcionalidades Implementadas

## Dashboard Espacial

Monitoramento de:

- Energia
- Comunicação
- Estabilidade orbital
- Temperatura

---

## Alertas Automáticos

O sistema identifica automaticamente estados críticos:

- Energia baixa
- Falha de comunicação
- Instabilidade orbital

---

## Cadastro de Missões

Cadastro completo contendo:

- Nome da missão
- Destino
- Tipo de missão
- Número de astronautas
- Descrição
- Data de lançamento

---

## Gerenciamento de Missões

- Missões em andamento
- Missões concluídas
- Status em tempo real
- Barra de progresso

---

## Persistência Local

Os dados ficam salvos no dispositivo utilizando:

```bash
AsyncStorage
```

---

## Navegação Entre Telas

Navegação realizada com:

```bash
Expo Router
```

---

## Gerenciamento Global de Estado

Implementado utilizando:

```bash
Context API
```

---

# Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| React Native | Desenvolvimento mobile |
| Expo | Ambiente de desenvolvimento |
| Expo Router | Navegação |
| TypeScript | Tipagem |
| Context API | Estado global |
| AsyncStorage | Persistência local |
| React Native StyleSheet | Estilização |

---

# Layout do Aplicativo

O design foi inspirado em:

- Painéis espaciais futuristas
- Interfaces sci-fi
- Centros de controle espacial

### Características visuais

- Fundo espacial com galáxias
- Neon azul
- Cards futuristas
- Indicadores de telemetria
- Interface dark mode

---

# Estrutura do Projeto

```bash
CentralEspacial/
│
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── missoes.tsx
│   └── lancamento.tsx
│
├── context/
│   └── MissionContext.tsx
│
├── assets/
│
├── package.json
├── app.json
└── tsconfig.json
```

---

# Como Executar o Projeto

## Instalar o Node.js

Baixe:

```bash
https://nodejs.org/
```

---

## Instalar o Expo CLI

```bash
npm install -g expo-cli
```

---

## Clonar o repositório

```bash
git clone LINK_DO_GITHUB
```

---

## Entrar na pasta do projeto

```bash
cd CentralEspacial
```

---

## Instalar as dependências

```bash
npm install
```

---

## Executar o projeto

```bash
npx expo start
```

---

## Abrir no celular

Instale o aplicativo:

```bash
Expo Go
```

Depois escaneie o QR Code exibido no terminal.

---

# Persistência de Dados

O aplicativo salva automaticamente:

- Missões cadastradas
- Configurações
- Informações da central

Utilizando:

```bash
AsyncStorage
```

---

# Gerenciamento de Estado

Toda a aplicação utiliza:

```bash
Context API
```

Permitindo compartilhamento global das missões entre telas.

---

# Validações Implementadas

## Formulários

- Campos obrigatórios
- Limite de caracteres
- Validação numérica
- Verificação de preenchimento

---

# Evolução do Projeto

O desenvolvimento foi realizado utilizando commits contínuos no GitHub demonstrando:

- Criação da estrutura inicial
- Desenvolvimento das telas
- Implementação do Context API
- Persistência com AsyncStorage
- Melhorias visuais
- Correções de bugs

---

# Repositório GitHub

```bash
https://github.com/joaovitor-ti01/CentralSpace.git
```

---

# Requisitos Atendidos

| Requisito | Status |
|---|---|
| React Native + Expo | ✅ |
| Expo Router | ✅ |
| Context API | ✅ |
| AsyncStorage | ✅ |
| Dashboard | ✅ |
| Alertas automáticos | ✅ |
| Formulários com validação | ✅ |
| Interface temática | ✅ |

---

# Considerações Finais

Este projeto permitiu aplicar conceitos fundamentais do desenvolvimento mobile cross-platform utilizando React Native e Expo, simulando um ambiente tecnológico futurista com foco em experiência do usuário, organização de código e persistência de dados.

---
