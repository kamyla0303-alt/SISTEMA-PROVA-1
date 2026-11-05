// Função responsável por validar o nome do aluno e alternar da tela inicial para a tela de provas
function iniciarProva() {
    const inputNome = document.getElementById('nome-aluno');
    const nome = inputNome.value.trim();

    if (nome === '') {
        alert('Por favor, digite o seu nome antes de continuar.');
        return;
    }

    document.getElementById('tela-entrada').style.display = 'none';
    document.getElementById('tela-prova').style.display = 'block';

    const saudacao = document.getElementById('saudacao-aluno');
    if (saudacao) {
        saudacao.innerText = `Aluno(a): ${nome}`;
    }
}

// Banco de Provas Organizado por Tópico (3 versões com 10 questões cada por matéria)
const bancoProvas = {
  java: {
    titulo: "Java",
    versoes: [
      {
        subtitulo: "Java - Prova 1",
        questoes: [
          { id: 1, pergunta: "1. Qual é a extensão correta dos arquivos de código-fonte em Java antes de serem compilados?", opcoes: ["a) .class", "b) .java", "c) .exe", "d) .js", "e) .txt"], correta: "b" },
          { id: 2, pergunta: "2. Qual comando é utilizado no Java para exibir uma mensagem na tela (console) e pular para a linha seguinte?", opcoes: ["a) Console.Write()", "b) print()", "c) System.out.println()", "d) echo", "e) escreva()"], correta: "c" },
          { id: 3, pergunta: "3. Qual é o método obrigatório que serve como ponto de entrada principal para a execução de uma aplicação Java?", opcoes: ["a) public void start()", "b) public static void main(String[] args)", "c) public static void run()", "d) void execute()", "e) System.main()"], correta: "b" },
          { id: 4, pergunta: "4. Qual tipo de dado primitivo em Java é utilizado para armazenar números inteiros simples, como a idade de uma pessoa?", opcoes: ["a) float", "b) double", "c) boolean", "d) int", "e) char"], correta: "d" },
          { id: 5, pergunta: "5. Qual palavra-chave é utilizada em Java para instanciar (criar) um novo objeto a partir de uma classe?", opcoes: ["a) create", "b) new", "c) build", "d) make", "e) instance"], correta: "b" },
          { id: 6, pergunta: "6. Como se escreve um comentário de uma única linha em Java?", opcoes: ["a)/s<!-- comentário -->", "b) /* comentário */", "c) // comentário", "d) # comentário", "e) -- comentário"], correta: "c" },
          { id: 7, pergunta: "7. Qual estrutura condicional é utilizada em Java para executar um bloco de código caso uma condição seja verdadeira e outro caso seja falsa?", opcoes: ["a) for / in", "b) try / catch", "c) switch / break", "d) if / else", "e) while / do"], correta: "d" },
          { id: 8, pergunta: "8. Qual classe/tipo de dado é utilizado em Java para armazenar sequências de caracteres de texto, como um nome ou mensagem?", opcoes: ["a) String", "b) Text", "c) CharSequence", "d) word", "e) Letters"], correta: "a" },
          { id: 9, pergunta: "9. Qual é o papel da JVM (Java Virtual Machine) no ecossistema Java?", opcoes: ["a) Compilar o código fonte de texto em um executável do Windows.", "b) Executar o bytecode Java (.class) de forma independente do sistema operacional.", "c) Formatar e organizar o estilo visual do código.", "d) Fazer backup automático dos arquivos de projeto na nuvem.", "e) Conectar o computador diretamente à internet."], correta: "b" },
          { id: 10, pergunta: "10. Qual é a sintaxe correta para declarar uma variável do tipo inteiro com o nome \"idade\" e atribuir a ela o valor 20 em Java?", opcoes: ["a) idade = 20 (int);", "b) variable int idade = 20;", "c) int idade = 20;", "d) integer idade : 20;", "e) declare idade as int = 20;"], correta: "c" }
        ]
      },
      {
        subtitulo: "Java - Prova 2",
        questoes: [
          { id: 1, pergunta: "1. Qual palavra-chave é usada para impedir que uma classe seja herdada em Java?", opcoes: ["a) static", "b) abstract", "c) final", "d) private", "e) void"], correta: "c" },
          { id: 2, pergunta: "2. Qual interface da API do Java Collection representa uma coleção que não permite elementos duplicados?", opcoes: ["a) List", "b) Set", "c) Map", "d) Queue", "e) ArrayList"], correta: "b" },
          { id: 3, pergunta: "3. Qual operador é utilizado em Java para verificar se um objeto é uma instância de determinada classe?", opcoes: ["a) typeof", "b) isInstance", "c) instanceof", "d) cast", "e) same"], correta: "c" },
          { id: 4, pergunta: "4. O que o bloco 'finally' faz dentro da estrutura de tratamento de exceções try-catch-finally?", opcoes: ["a) Executa apenas se ocorrer um erro.", "b) Executa apenas se não ocorrer erro.", "c) Executa sempre, independentemente de ocorrer exceção ou não.", "d) Cancela a execução do programa.", "e) Reinicia o loop atual."], correta: "c" },
          { id: 5, pergunta: "5. Qual modificador de acesso torna o membro acessível apenas dentro da própria classe?", opcoes: ["a) public", "b) protected", "c) default", "d) private", "e) static"], correta: "d" },
          { id: 6, pergunta: "6. Qual é a superclasse de todas as classes em Java?", opcoes: ["a) System", "b) Object", "c) Class", "d) Main", "e) Root"], correta: "b" },
          { id: 7, pergunta: "7. Qual palavra-chave é usada por uma subclasse para chamar o construtor da sua classe pai?", opcoes: ["a) this", "b) parent", "c) super", "d) base", "e) main"], correta: "c" },
          { id: 8, pergunta: "8. Qual dos seguintes tipos NÃO é um tipo primitivo em Java?", opcoes: ["a) int", "b) boolean", "c) String", "d) double", "e) char"], correta: "c" },
          { id: 9, pergunta: "9. Qual é a palavra-chave usada para declarar um contrato de interface em Java?", opcoes: ["a) class", "b) interface", "c) implements", "d) extends", "e) contract"], correta: "b" },
          { id: 10, pergunta: "10. Qual estrutura de repetição é recomendada quando sabemos exatamente o número de iterações?", opcoes: ["a) while", "b) do-while", "c) for", "d) if-else", "e) switch"], correta: "c" }
        ]
      },
      {
        subtitulo: "Java - Prova 3",
        questoes: [
          { id: 1, pergunta: "1. Qual palavra-chave é utilizada para que uma classe herde as características de outra classe?", opcoes: ["a) implements", "b) extends", "c) inherits", "d) instance", "e) super"], correta: "b" },
          { id: 2, pergunta: "2. O que significa a sigla JRE?", opcoes: ["a) Java Runtime Environment", "b) Java Real Engine", "c) Java Response Entity", "d) Java Render Execution", "e) Java Record Enterprise"], correta: "a" },
          { id: 3, pergunta: "3. Qual exceção é lançada em Java ao tentar acessar um objeto nulo?", opcoes: ["a) IOException", "b) ClassNotFoundException", "c) NullPointerException", "d) IllegalArgumentException", "e) IndexOutOfBoundsException"], correta: "c" },
          { id: 4, pergunta: "4. Qual classe wrapper é associada ao tipo primitivo 'int'?", opcoes: ["a) Int", "b) Integer", "c) Number", "d) Float", "e) Digit"], correta: "b" },
          { id: 5, pergunta: "5. Qual palavra-chave declara que um método pertence à classe e não às instâncias de objetos?", opcoes: ["a) static", "b) final", "c) void", "d) transient", "e) synchronized"], correta: "a" },
          { id: 6, pergunta: "6. Como converter uma String em um número inteiro em Java?", opcoes: ["a) Integer.parseInt(str)", "b) (int) str", "c) str.toInt()", "d) Convert.toInt(str)", "e) String.parse(str)"], correta: "a" },
          { id: 7, pergunta: "7. O que o comando 'break' faz em um laço de repetição?", opcoes: ["a) Pula para a próxima iteração", "b) Interrompe e sai imediatamente do laço", "c) Reinicia o laço", "d) Exibe uma mensagem de erro", "e) Limpa o console"], correta: "b" },
          { id: 8, pergunta: "8. Qual estrutura armazena dados no par chave-valor?", opcoes: ["a) ArrayList", "b) HashSet", "c) HashMap", "d) LinkedList", "e) Vector"], correta: "c" },
          { id: 9, pergunta: "9. Qual anotação indica formalmente a sobrescrita de um método em Java?", opcoes: ["a) @Override", "b) @Overload", "c) @Super", "d) @Implements", "e) @Static"], correta: "a" },
          { id: 10, pergunta: "10. Qual o operador utilizado para comparação de igualdade lógica entre dois valores primitivos?", opcoes: ["a) =", "b) ==", "c) ===", "d) equals", "e) :="], correta: "b" }
        ]
      }
    ]
  },
  logica: {
    titulo: "Lógica de Programação",
    versoes: [
      {
        subtitulo: "Lógica - Prova 1",
        questoes: [
          { id: 1, pergunta: "1. Dada a expressão lógica (A AND B) OR (NOT C), sabendo que as variáveis possuem os valores lógicos A = Verdadeiro, B = Falso e C = Falso, qual é o resultado final da avaliação?", opcoes: ["a) Falso", "b) Verdadeiro", "c) Nulo / Indefinido", "d) Erro de Sintaxe", "e) Depende do tipo de dado de A"], correta: "b" },
          { id: 2, pergunta: "2. Em lógica de programação, o operador de módulo (% ou mod) retorna o resto da divisão inteira entre dois números. Qual é o resultado da expressão 17 % 4?", opcoes: ["a) 4", "b) 4.25", "c) 1", "d) 0", "e) 2"], correta: "c" },
          { id: 3, pergunta: "3. Qual é a principal diferença entre uma estrutura de repetição com pré-teste (enquanto / while) e uma estrutura com pós-teste (faca...enquanto / do...while)?", opcoes: ["a) A estrutura com pré-teste executa o bloco de código obrigatoriamente pelo menos uma vez.", "b) A estrutura com pós-teste garante que o bloco de código seja executado ao menos uma vez, mesmo que a condição seja falsa no início.", "c) A estrutura com pós-teste não aceita condições com operadores lógicos.", "d) A estrutura com pré-teste roda em um loop infinito por padrão.", "e) Não há diferença funcional, apenas uma variação de sintaxe entre linguagens."], correta: "b" },
          { id: 4, pergunta: "4. Considere um vetor V de 5 posições contendo os elementos [10, 20, 30, 40, 50]. Em linguagens de programação com indexação baseada em zero (0-indexed), qual comando acessa o elemento 30 e qual é o índice do último elemento do vetor?", opcoes: ["a) V[3] e o índice do último elemento é 5.", "b) V[2] e o índice do último elemento é 4.", "c) V[3] e o índice do último elemento é 4.", "d) V[2] e o índice do último elemento é 5.", "e) V[1] e o índice do último elemento é 4."], correta: "b" },
          { id: 5, pergunta: "5. Em uma estrutura condicional encadeada (como se ... senao se ... senao), qual é o comportamento do programa ao avaliar a primeira condição como verdadeira?", opcoes: ["a) Executa o bloco de código correspondente e continua testando todas as condições seguintes.", "b) Executa apenas o bloco da condição verdadeira e ignora todas as demais condições encadeadas.", "c) Ignora o bloco correspondente e executa obrigatoriamente o bloco do senao.", "d) Interrompe a execução do programa e gera um aviso de erro de sintaxe.", "e) Executa o primeiro bloco e entra em um laço de repetição infinito."], correta: "b" },
          { id: 6, pergunta: "6. Em algoritmos que utilizam estruturas de repetição, qual é a função principal de uma variável atuando como acumulador?", opcoes: ["a) Incrementar exatamente uma unidade a cada iteração para contar as repetições do laço.", "b) Armazenar um valor lógico (booleano) para controlar a saída do laço.", "c) Somar ou agrupar progressivamente valores variáveis a cada iteração do laço.", "d) Guardar o índice da posição de memória de um vetor durante uma busca.", "e) Limpar a memória do sistema ao final de cada iteração."], correta: "c" },
          { id: 7, pergunta: "7. O que define o conceito de escopo local de uma variável dentro de um programa?", opcoes: ["a) A variável pode ser acessada e modificada de qualquer ponto do programa a qualquer momento.", "b) A variável é salva em disco e permanece disponível mesmo após o fechamento do programa.", "c) A variável é acessível apenas dentro do bloco, função ou procedimento onde foi declarada.", "d) A variável aceita exclusivamente tipos de dados numéricos inteiros.", "e) A variável é apagada da memória assim que é lida pela primeira vez."], correta: "c" },
          { id: 8, pergunta: "8. Para que uma função recursiva funcione corretamente e não cause um estouro da pilha de execução (stack overflow), qual elemento estrutural é indispensável?", opcoes: ["a) Uma variável global para armazenar o número de chamadas.", "b) Um caso base (condição de parada) que interrompa as chamadas encadeadas.", "c) O uso obrigatório de um vetor para guardar os resultados intermediários.", "d) Uma estrutura de repetição para (for) dentro do corpo da função.", "e) O uso da palavra-chave static na declaração dos parâmetros."], correta: "b" },
          { id: 9, pergunta: "9. Dadas duas variáveis A e B, qual sequência de atribuições realiza corretamente a troca de valores entre elas utilizando uma variável auxiliar AUX?", opcoes: ["a) A <- B; B <- AUX; AUX <- A;", "b) AUX <- A; A <- B; B <- AUX;", "c) A <- AUX; AUX <- B; B <- A;", "d) AUX <- B; B <- A; A <- B;", "e) B <- A; A <- AUX; AUX <- B;"], correta: "b" },
          { id: 10, pergunta: "10. Uma matriz bidimensional M de dimensão 3x3 possui 3 linhas e 3 colunas. Quantos elementos no total essa estrutura armazena e como se acessa a célula situada na segunda linha e terceira coluna (considerando índices iniciados em 0)?", opcoes: ["a) 9 elementos; M[2][3]", "b) 6 elementos; M[1][2]", "c) 9 elementos; M[1][2]", "d) 9 elementos; M[2][1]", "e) 6 elementos; M[2][2]"], correta: "c" }
        ]
      },
      {
        subtitulo: "Lógica - Prova 2",
        questoes: [
          { id: 1, pergunta: "1. Qual tabela de verdade resulta em VERDADEIRO apenas se ambas as proposições forem verdadeiras?", opcoes: ["a) Disjunção (OR)", "b) Conjunção (AND)", "c) Negação (NOT)", "d) Implicação", "e) Equivalência"], correta: "b" },
          { id: 2, pergunta: "2. O que é um algoritmo?", opcoes: ["a) Uma linguagem de programação de alto nível.", "b) Uma sequência finita de passos lógicos para resolver um problema.", "c) O hardware do computador responsável pelos cálculos.", "d) Uma biblioteca para desenvolvimento web.", "e) Um programa que remove vírus do sistema."], correta: "b" },
          { id: 3, pergunta: "3. Qual o valor da variável X após a execução: X = 5; X = X + 3; X = X * 2?", opcoes: ["a) 16", "b) 13", "c) 10", "d) 8", "e) 26"], correta: "a" },
          { id: 4, pergunta: "4. Qual tipo de estrutura é recomendada para testar múltiplos valores fixos de uma mesma variável?", opcoes: ["a) while", "b) if-else", "c) switch-case", "d) for", "e) try-catch"], correta: "c" },
          { id: 5, pergunta: "5. O que caracteriza um loop infinito?", opcoes: ["a) Um loop que roda exatamente 100 vezes.", "b) Um laço cuja condição de parada nunca se torna falsa.", "c) Uma função recursiva com retorno estático.", "d) Um erro de compilação imediato.", "e) Uma instrução que limpa a memória RAM."], correta: "b" },
          { id: 6, pergunta: "6. Qual operador lógico inverte o valor booleano de uma proposição?", opcoes: ["a) AND", "b) OR", "c) NOT", "d) XOR", "e) NAND"], correta: "c" },
          { id: 7, pergunta: "7. Como é chamada a estrutura de dados onde o primeiro a entrar é o primeiro a sair (FIFO)?", opcoes: ["a) Pilha", "b) Fila", "c) Árvore", "d) Grafo", "e) Matriz"], correta: "b" },
          { id: 8, pergunta: "8. Em um algoritmo, o que significa a instrução 'i++'?", opcoes: ["a) Decrementar i em 1", "b) Incrementar i em 1", "c) Multiplicar i por 2", "d) Dividir i por 2", "e) Zerar o valor de i"], correta: "b" },
          { id: 9, pergunta: "9. O que é um teste de mesa?", opcoes: ["a) Um exame físico nos componentes do computador.", "b) A simulação manual da execução de um algoritmo para verificar seu funcionamento.", "c) O processo de compilação automática do código.", "d) Um teste de desempenho da rede local.", "e) A criação da interface gráfica do sistema."], correta: "b" },
          { id: 10, pergunta: "10. O que significa uma variável ser do tipo Booleano?", opcoes: ["a) Armazena textos longos", "b) Armazena apenas números decimais", "c) Armazena apenas dois valores possíveis: verdadeiro ou falso", "d) Armazena endereços de memória", "e) Armazena data e hora"], correta: "c" }
        ]
      },
      {
        subtitulo: "Lógica - Prova 3",
        questoes: [
          { id: 1, pergunta: "1. Como é chamada a estrutura de dados LIFO (Last In, First Out)?", opcoes: ["a) Fila", "b) Pilha", "c) Lista Encadeada", "d) Vetor", "e) Matriz"], correta: "b" },
          { id: 2, pergunta: "2. Qual o resultado de (True OR False) AND (NOT False)?", opcoes: ["a) True", "b) False", "c) Null", "d) Indefinido", "e) Erro"], correta: "a" },
          { id: 3, pergunta: "3. O que é uma constante em programação?", opcoes: ["a) Uma variável cujo valor muda a cada linha", "b) Um espaço de memória cujo valor não pode ser alterado durante a execução", "c) Um laço de repetição com contador", "d) Uma função que não retorna dados", "e) Um comentário no código-fonte"], correta: "b" },
          { id: 4, pergunta: "4. Qual a função de um ponteiro em linguagens como C?", opcoes: ["a) Armazenar uma String longa", "b) Armazenar o endereço de memória de outra variável", "c) Limpar o terminal de comandos", "d) Converter números para texto", "e) Encerrar o programa"], correta: "b" },
          { id: 5, pergunta: "5. Se A = 10 e B = 20, qual a condição correta para testar se A é menor que B E A é diferente de 0?", opcoes: ["a) A < B OR A != 0", "b) A < B AND A != 0", "c) A > B AND A == 0", "d) A == B OR A != 0", "e) A <= B AND A == 0"], correta: "b" },
          { id: 6, pergunta: "6. Qual técnica divide um problema grande em subproblemas menores até que possam ser resolvidos facilmente?", opcoes: ["a) Força Bruta", "b) Divisão e Conquista", "c) Programação Linear", "d) Análise Léxica", "e) Compilação Cruzada"], correta: "b" },
          { id: 7, pergunta: "7. O que acontece quando se tenta acessar o índice 5 em um vetor de tamanho 5 (indexado em 0)?", opcoes: ["a) Acessa o último elemento normalmente", "b) Ocorre um erro de acesso fora dos limites (Out of Bounds)", "c) O vetor aumenta de tamanho automaticamente", "d) Retorna o valor 0", "e) O programa apaga o vetor"], correta: "b" },
          { id: 8, pergunta: "8. Em pseudocódigo, qual instrução é usada para ler dados digitados pelo usuário?", opcoes: ["a) escreva", "b) leia", "c) imprima", "d) exiba", "e) retorne"], correta: "b" },
          { id: 9, pergunta: "9. Qual operador é usado para verificar a desigualdade entre dois valores em muitas linguagens?", opcoes: ["a) ==", "b) !=", "c) =", "d) &&", "e) ||"], correta: "b" },
          { id: 10, pergunta: "10. O que significa modularização em algoritmos?", opcoes: ["a) Escrever todo o código dentro da função principal sem separar nada", "b) Dividir um programa em partes menores (funções/procedimentos) e independentes", "c) Executar o código em vários monitores simultaneamente", "d) Converter o algoritmo para linguagem de máquina", "e) Apagar variáveis não utilizadas"], correta: "b" }
        ]
      }
    ]
  },
  css: {
    titulo: "CSS - Estilização Web",
    versoes: [
      {
        subtitulo: "CSS - Prova 1",
        questoes: [
          { id: 1, pergunta: "1. Qual propriedade e valor altera o modelo de caixa (Box Model) do CSS para que padding e border sejam incluídos nos cálculos de largura (width) e altura (height) de um elemento?", opcoes: ["a) box-sizing: content-box", "b) box-sizing: border-box", "c) display: border-box", "d) margin-collapse: include", "e) box-model: border-box"], correta: "b" },
          { id: 2, pergunta: "2. Considerando as regras de especificidade do CSS, qual dos seletores abaixo possui a maior prioridade de aplicação sobre um mesmo elemento?", opcoes: ["a) p", "b) .nav-item a", "c) #header .nav-item a", "d) div p.text", "e) *"], correta: "c" },
          { id: 3, pergunta: "3. Em um container flexível (display: flex) com orientação padrão (flex-direction: row), qual propriedade é usada para alinhar os itens ao longo do eixo secundário (vertical)?", opcoes: ["a) justify-content", "b) align-items", "c) flex-wrap", "d) text-align", "e) align-content"], correta: "b" },
          { id: 4, pergunta: "4. Qual unidade do CSS Grid foi projetada especificamente para representar uma fração do espaço livre disponível no container?", opcoes: ["a) px", "b) %", "c) vw", "d) fr", "e) ch"], correta: "d" },
          { id: 5, pergunta: "5. Como se comporta um elemento quando configurado com a propriedade position: absolute?", opcoes: ["a) Permanece no fluxo normal da página e se desloca a partir de sua posição original.", "b) É removido do fluxo normal da página e posicionado em relação ao ancestral posicionado mais próximo.", "c) Fica fixo na tela em relação à janela do navegador (viewport), ignorando a rolagem.", "d) Mantém o espaço reservado no layout e flutua para a esquerda ou direita.", "e) Funciona exatamente como position: relative, mas com suporte a z-index."], correta: "b" },
          { id: 6, pergunta: "6. Qual das opções abaixo é um pseudoelemento do CSS utilizado para inserir conteúdo antes do conteúdo original de um elemento?", opcoes: ["a) :hover", "b) :first-child", "c) ::before", "d) ::after", "e) :focus"], correta: "c" },
          { id: 7, pergunta: "7. Qual é a diferença fundamental entre as unidades de medida relativas rem e em no CSS?", opcoes: ["a) rem é relativa à largura da tela, enquanto em é relativa à altura da tela.", "b) rem é relativa ao tamanho da fonte do elemento raiz (html), enquanto em é relativa ao tamanho da fonte do elemento pai.", "c) rem funciona apenas para margens e paddings, enquanto em é exclusiva para font-size.", "d) Ambas são absolutas e equivalem sempre a 16px.", "e) em é relativa ao elemento raiz, enquanto rem é relativa ao elemento atual."], correta: "b" },
          { id: 8, pergunta: "8. Qual valor especial em CSS força uma propriedade a herdar explicitamente o valor do seu elemento pai?", opcoes: ["a) initial", "b) unset", "c) inherit", "d) revert", "e) auto"], correta: "c" },
          { id: 9, pergunta: "9. Qual é a sintaxe correta de uma Media Query no CSS para aplicar estilos a partir de uma largura de tela mínima de 768 pixels?", opcoes: ["a) @media (max-width: 768px)", "b) @media (min-width: 768px)", "c) @screen and (width: 768px)", "d) @responsive (768px)", "e) @media device-width > 768px"], correta: "b" },
          { id: 10, pergunta: "10. Para que a propriedade z-index funcione e altere a camada visual de um elemento no fluxo da página, qual pré-requisito deve ser atendido?", opcoes: ["a) O elemento precisa estar dentro de um container display: grid.", "b) A propriedade opacity precisa ser definida como 0.", "c) O elemento precisa ter a propriedade position definida com um valor diferente de static (como relative, absolute ou fixed).", "d) O elemento precisa ter largura e altura fixas em pixels.", "e) O elemento deve ser obrigatoriamente um tag <div>."], correta: "c" }
        ]
      },
      {
        subtitulo: "CSS - Prova 2",
        questoes: [
          { id: 1, pergunta: "1. Qual propriedade CSS muda a cor de fundo de um elemento?", opcoes: ["a) color", "b) background-color", "c) border-color", "d) fill", "e) canvas-color"], correta: "b" },
          { id: 2, pergunta: "2. Como selecionar um elemento que possui o id 'menu' no CSS?", opcoes: ["a) .menu", "b) #menu", "c) *menu", "d) menu", "e) @menu"], correta: "b" },
          { id: 3, pergunta: "3. Qual pseudo-classe é acionada quando o usuário passa o ponteiro do mouse sobre um elemento?", opcoes: ["a) :active", "b) :focus", "c) :hover", "d) :visited", "e) :checked"], correta: "c" },
          { id: 4, pergunta: "4. Qual propriedade é usada para alterar a fonte de um texto?", opcoes: ["a) font-style", "b) font-family", "c) font-weight", "d) text-transform", "e) font-variant"], correta: "b" },
          { id: 5, pergunta: "5. Qual valor da propriedade 'display' oculta o elemento e remove seu espaço da página?", opcoes: ["a) hidden", "b) none", "c) visibility: hidden", "d) block: false", "e) collapse"], correta: "b" },
          { id: 6, pergunta: "6. Qual propriedade controla a transparência de um elemento?", opcoes: ["a) visibility", "b) display", "c) opacity", "d) filter", "e) shadow"], correta: "c" },
          { id: 7, pergunta: "7. Qual comando alinha texto no centro de um container em CSS?", opcoes: ["a) align-text: center", "b) text-align: center", "c) vertical-align: middle", "d) content-align: center", "e) font-align: center"], correta: "b" },
          { id: 8, pergunta: "8. Qual propriedade define o espaçamento interno de um elemento em relação à sua borda?", opcoes: ["a) margin", "b) padding", "c) gap", "d) border-spacing", "e) outline"], correta: "b" },
          { id: 9, pergunta: "9. Como arredondar os cantos de uma caixa usando CSS?", opcoes: ["a) corner-radius", "b) border-radius", "c) box-style: round", "d) border-shape", "e) curve-border"], correta: "b" },
          { id: 10, pergunta: "10. Qual propriedade define a espessura de uma fonte como negrito?", opcoes: ["a) font-size", "b) font-weight", "c) font-style", "d) text-decoration", "e) font-bold"], correta: "b" }
        ]
      },
      {
        subtitulo: "CSS - Prova 3",
        questoes: [
          { id: 1, pergunta: "1. Como transformar todas as letras de um texto em maiúsculas no CSS?", opcoes: ["a) text-transform: uppercase", "b) text-style: capitalize", "c) font-case: upper", "d) text-decoration: uppercase", "e) font-transform: upper"], correta: "a" },
          { id: 2, pergunta: "2. Qual propriedade alinha os itens no eixo principal de um container Flexbox?", opcoes: ["a) align-items", "b) justify-content", "c) flex-direction", "d) align-content", "e) justify-items"], correta: "b" },
          { id: 3, pergunta: "3. O que a propriedade 'margin: 0 auto;' faz em um bloco com largura definida?", opcoes: ["a) Zera as margens e ajusta a altura", "b) Centraliza o elemento horizontalmente na tela", "c) Aplica margem apenas no topo do elemento", "d) Oculta o elemento em telas móveis", "e) Deixa o texto interno justificado"], correta: "b" },
          { id: 4, pergunta: "4. Qual valor de position fixa um elemento em relação à janela (viewport) do navegador?", opcoes: ["a) relative", "b) absolute", "c) fixed", "d) sticky", "e) static"], correta: "c" },
          { id: 5, pergunta: "5. Qual seletor CSS escolhe todos os elementos de uma página?", opcoes: ["a) all", "b) *", "c) html", "d) body", "e) #all"], correta: "b" },
          { id: 6, pergunta: "6. Como remover o sublinhado padrão de um hiperlink (tag <a>)?", opcoes: ["a) text-decoration: none", "b) link-style: none", "c) text-underline: false", "d) font-decoration: clean", "e) border: none"], correta: "a" },
          { id: 7, pergunta: "7. Qual propriedade CSS permite criar animações de transição suaves ao mudar estilos?", opcoes: ["a) transform", "b) transition", "c) animation-delay", "d) keyframes", "e) speed"], correta: "b" },
          { id: 8, pergunta: "8. Qual das opções é uma cor representada em código Hexadecimal no CSS?", opcoes: ["a) rgb(255, 0, 0)", "b) #FF0000", "c) hsl(0, 100%, 50%)", "d) red", "e) color(red)"], correta: "b" },
          { id: 9, pergunta: "9. Qual pseudo-classe seleciona o primeiro filho de um elemento pai?", opcoes: ["a) :first-child", "b) :first-of-type", "c) :child(1)", "d) :top-child", "e) :root-child"], correta: "a" },
          { id: 10, pergunta: "10. Qual propriedade ajusta a distância entre as linhas de um texto?", opcoes: ["a) letter-spacing", "b) line-height", "c) word-spacing", "d) text-indent", "e) line-margin"], correta: "b" }
        ]
      }
    ]
  },
  git: {
    titulo: "Git e GitHub",
    versoes: [
      {
        subtitulo: "Git e GitHub - Prova 1",
        questoes: [
          { id: 1, pergunta: "1. Qual comando é utilizado para mover arquivos modificados do diretório de trabalho (Working Directory) para a área de preparação (Staging Area) no Git?", opcoes: ["a) git commit", "b) git add", "c) git push", "d) git status", "e) git init"], correta: "b" },
          { id: 2, pergunta: "2. Qual é a principal diferença entre os comandos git fetch e git pull ao interagir com um repositório remoto?", opcoes: ["a) git fetch envia arquivos para o servidor remoto, enquanto git pull baixa do servidor remoto.", "b) git fetch baixa os dados do repositório remoto sem mesclá-los, enquanto git pull baixa e realiza a mesclagem automaticamente.", "c) git fetch apaga as branches locais desatualizadas, enquanto git pull sincroniza tudo.", "d) git pull é usado apenas para a branch main, enquanto git fetch funciona para qualquer branch.", "e) Ambos fazem exatamente a mesma coisa, sendo git fetch apenas um alias para git pull."], correta: "b" },
          { id: 3, pergunta: "3. Qual opção do comando git reset desfaz os commits mais recentes, mantendo todas as alterações dos arquivos intactas na Staging Area?", opcoes: ["a) --hard", "b) --mixed", "c) --soft", "d) --keep", "e) --merge"], correta: "c" },
          { id: 4, pergunta: "4. Em relação ao histórico de commits, qual é o efeito principal do comando git rebase ao reintegrar uma branch secundária na branch principal?", opcoes: ["a) Criar um commit de merge adicional que une as duas histórias.", "b) Reaplicar os commits da branch atual sobre a ponta de outra branch, resultando em um histórico sequencial e linear.", "c) Apagar definitivamente o histórico de commits anteriores para economizar espaço de armazenamento.", "d) Reverter todas as alterações da branch secundária para o estado original da branch principal.", "e) Enviar as alterações diretamente para o repositório remoto do GitHub sem efetuar staging."], correta: "b" },
          { id: 5, pergunta: "5. Qual comando permite guardar temporariamente as alterações não commitadas do diretório de trabalho sem realizar um commit, deixando o repositório limpo?", opcoes: ["a) git stash", "b) git clean", "c) git pause", "d) git archive", "e) git save"], correta: "a" },
          { id: 6, pergunta: "6. Qual arquivo especial na raiz do projeto deve ser utilizado para indicar ao Git quais arquivos e diretórios nunca devem ser rastreados?", opcoes: ["a) .gitconfig", "b) .gitignore", "c) README.md", "d) .gitattributes", "e) LICENSE"], correta: "b" },
          { id: 7, pergunta: "7. No ecossistema do GitHub, qual é a função principal do recurso de Fork?", opcoes: ["a) Excluir permanentemente um repositório antigo.", "b) Bloquear outros desenvolvedores de acessarem o código do projeto.", "c) Criar uma cópia do repositório de outro usuário em sua própria conta do GitHub para permitir modificações independentes.", "d) Mesclar diretamente as branches de dois projetos completamente sem relação.", "e) Compilar e testar automaticamente o código da aplicação na nuvem."], correta: "c" },
          { id: 8, pergunta: "8. No fluxo de trabalho colaborativo do GitHub, qual é o objetivo de enviar um Pull Request (PR)?", opcoes: ["a) Baixar as atualizações do servidor local para a máquina remota.", "b) Notificar a equipe para que analise, comente e decida sobre a integração das alterações de uma branch em outra.", "c) Forçar a sobrescrita do repositório remoto com commits locais não validados.", "d) Clonar um repositório privado para uma máquina física pela primeira vez.", "e) Criar uma nova conta de desenvolvedor no GitHub."], correta: "b" },
          { id: 9, pergunta: "9. A partir da versão 2.23 do Git, qual comando foi introduzido com o objetivo específico de alternar entre branches, visando substituir o uso sobrecarregado do git checkout para essa tarefa?", opcoes: ["a) git switch", "b) git restore", "c) git branch-change", "d) git move", "e) git jump"], correta: "a" },
          { id: 10, pergunta: "10. Qual é a finalidade do comando git cherry-pick no Git?", opcoes: ["a) Selecionar aleatoriamente uma branch para mesclar com o repositório principal.", "b) Deletar commits antigos que contenham erros de sintaxe.", "c) Aplicar as alterações introduzidas por um commit específico de outra branch na branch atual.", "d) Listar todos os arquivos ignorados pelo arquivo .gitignore.", "e) Comparar as diferenças visuais entre dois arquivos de texto."], correta: "c" }
        ]
      },
      {
        subtitulo: "Git e GitHub - Prova 2",
        questoes: [
          { id: 1, pergunta: "1. Qual comando inicializa um novo repositório Git em um diretório existente?", opcoes: ["a) git start", "b) git init", "c) git create", "d) git new", "e) git setup"], correta: "b" },
          { id: 2, pergunta: "2. Qual comando envia os commits do repositório local para um repositório remoto?", opcoes: ["a) git pull", "b) git push", "c) git upload", "d) git send", "e) git sync"], correta: "b" },
          { id: 3, pergunta: "3. Como verificar o estado atual das alterações e arquivos na staging area?", opcoes: ["a) git log", "b) git status", "c) git check", "d) git diff", "e) git show"], correta: "b" },
          { id: 4, pergunta: "4. Qual comando exibe o histórico de commits do repositório?", opcoes: ["a) git log", "b) git history", "c) git list", "d) git status", "e) git commits"], correta: "a" },
          { id: 5, pergunta: "5. Qual comando cria uma nova branch chamada 'feature'?", opcoes: ["a) git branch feature", "b) git make feature", "c) git new branch feature", "d) git checkout --new feature", "e) git set branch feature"], correta: "a" },
          { id: 6, pergunta: "6. Qual comando salva as alterações da staging area com uma mensagem?", opcoes: ["a) git save -m \"msg\"", "b) git commit -m \"msg\"", "c) git push -m \"msg\"", "d) git record -m \"msg\"", "e) git store -m \"msg\""], correta: "b" },
          { id: 7, pergunta: "7. Como clonar um repositório remoto para a sua máquina local?", opcoes: ["a) git copy <url>", "b) git clone <url>", "c) git download <url>", "d) git get <url>", "e) git duplicate <url>"], correta: "b" },
          { id: 8, pergunta: "8. O que é o HEAD no Git?", opcoes: ["a) O primeiro commit do repositório", "b) O ponteiro que indica a branch ou commit atualmente ativo no workspace", "c) O servidor principal do GitHub", "d) O arquivo de configuração global", "e) O nome padrão da branch principal"], correta: "b" },
          { id: 9, pergunta: "9. Qual comando combina o histórico de uma branch em outra?", opcoes: ["a) git join", "b) git merge", "c) git connect", "d) git combine", "e) git attach"], correta: "b" },
          { id: 10, pergunta: "10. Como remover permanentemente uma branch local chamada 'teste'?", opcoes: ["a) git branch -d teste", "b) git delete teste", "c) git remove teste", "d) git clear branch teste", "e) git drop teste"], correta: "a" }
        ]
      },
      {
        subtitulo: "Git e GitHub - Prova 3",
        questoes: [
          { id: 1, pergunta: "1. Como desfazer as alterações do Working Directory não estagiadas em um arquivo com git restore?", opcoes: ["a) git restore <arquivo>", "b) git delete <arquivo>", "c) git reset --hard", "d) git clear <arquivo>", "e) git undo <arquivo>"], correta: "a" },
          { id: 2, pergunta: "2. O que faz o parâmetro -am no comando git commit?", opcoes: ["a) Adiciona todos os arquivos novos e faz o commit", "b) Adiciona automaticamente arquivos modificados rastreados e aplica a mensagem", "c) Cancela o commit anterior", "d) Faz commit apenas de arquivos de áudio e mídia", "e) Executa o commit em modo anônimo"], correta: "b" },
          { id: 3, pergunta: "3. O que acontece quando ocorre um 'Merge Conflict'?", opcoes: ["a) O Git escolhe uma versão aleatória e sobrescreve a outra", "b) O Git interrompe a mesclagem e pede para o desenvolvedor resolver manualmente as diferenças", "c) O repositório local é excluído por segurança", "d) O comando git push é bloqueado para sempre", "e) O GitHub envia um e-mail de aviso ao suporte"], correta: "b" },
          { id: 4, pergunta: "4. Qual comando permite visualizar a diferença exata de linhas entre o Working Directory e o último commit?", opcoes: ["a) git diff", "b) git compare", "c) git changes", "d) git status -v", "e) git detail"], correta: "a" },
          { id: 5, pergunta: "5. Qual a finalidade do comando 'git stash pop'?", opcoes: ["a) Excluir o último rascunho salvo", "b) Recupear e aplicar as alterações salvas do stash, removendo-as da pilha", "c) Criar uma nova branch a partir do rascunho", "d) Limpar todo o repositório", "e) Salvar um novo rascunho"], correta: "b" },
          { id: 6, pergunta: "6. Como conectar um repositório local a um repositório remoto no GitHub?", opcoes: ["a) git remote add origin <url>", "b) git link <url>", "c) git connect github <url>", "d) git server attach <url>", "e) git push --connect <url>"], correta: "a" },
          { id: 7, pergunta: "7. O que representa o arquivo README.md em um repositório?", opcoes: ["a) A licença de uso do software", "b) O código fonte principal da aplicação", "c) Um arquivo em Markdown com a documentação e explicação do projeto", "d) Histórico de erros do sistema", "e) A lista de dependências instaladas"], correta: "c" },
          { id: 8, pergunta: "8. Qual comando altera a mensagem do último commit realizado (caso ainda não tenha sido feito o push)?", opcoes: ["a) git commit --amend", "b) git commit --edit", "c) git re-commit", "d) git change-message", "e) git update-log"], correta: "a" },
          { id: 9, pergunta: "9. O que o comando 'git remote -v' exibe?", opcoes: ["a) A versão atual do software Git instalado", "b) As URLs dos servidores remotos associados ao repositório", "c) O número de modificações locais", "d) As variáveis de ambiente do sistema", "e) A lista de colaboradores do projeto"], correta: "b" },
          { id: 10, pergunta: "10. Qual branch era comumente usada como padrão histórica do Git antes da transição para 'main'?", opcoes: ["a) master", "b) primary", "c) root", "d) default", "e) home"], correta: "a" }
        ]
      }
    ]
  },
  html: {
    titulo: "HTML - Estruturação Web",
    versoes: [
      {
        subtitulo: "HTML - Prova 1",
        questoes: [
          { id: 1, pergunta: "1. O que significa a sigla HTML?", opcoes: ["a) HyperText Markup Language", "b) HighText Machine Language", "c) HyperTransfer Mode Language", "d) Home Tool Markup Language", "e) Nenhuma das opções anteriores"], correta: "a" },
          { id: 2, pergunta: "2. Qual é a função principal do HTML?", opcoes: ["a) Estruturar o conteúdo de uma página web.", "b) Estilizar as cores e o layout visual.", "c) Programar a lógica do servidor.", "d) Armazenar dados do usuário.", "e) Nenhuma das opções anteriores"], correta: "a" },
          { id: 3, pergunta: "3. Qual tag é usada para criar o título principal (nível 1) de uma página?", opcoes: ["a) &lt;title&gt;", "b) &lt;h1&gt;", "c) &lt;head&gt;", "d) &lt;header&gt;", "e) Nenhuma das opções anteriores"], correta: "b" },
          { id: 4, pergunta: "4. Qual tag HTML é utilizada para criar um parágrafo de texto?", opcoes: ["a) &lt;p&gt;", "b) &lt;paragrafo&gt;", "c) &lt;text&gt;", "d) &lt;pr&gt;", "e) Nenhuma das opções anteriores"], correta: "a" },
          { id: 5, pergunta: "5. Qual elemento HTML cria um link (hiperlink) para outra página?", opcoes: ["a) &lt;link&gt;", "b) &lt;a&gt;", "c) &lt;href&gt;", "d) &lt;url&gt;", "e) Nenhuma das opções anteriores"], correta: "b" },
          { id: 6, pergunta: "6. Qual atributo da tag &lt;img&gt; define o caminho da imagem?", opcoes: ["a) alt", "b) src", "c) href", "d) path", "e) Nenhuma das opções anteriores"], correta: "b" },
          { id: 7, pergunta: "7. Qual tag é usada para inserir uma quebra de linha simples no texto?", opcoes: ["a) &lt;br&gt;", "b) &lt;lb&gt;", "c) &lt;break&gt;", "d) &lt;space&gt;", "e) Nenhuma das opções anteriores"], correta: "a" },
          { id: 8, pergunta: "8. Qual tag define uma lista não ordenada (com marcadores de ponto)?", opcoes: ["a) &lt;ol&gt;", "b) &lt;list&gt;", "c) &lt;ul&gt;", "d) &lt;li&gt;", "e) Nenhuma das opções anteriores"], correta: "c" },
          { id: 9, pergunta: "9. Onde é o local correto para inserir a tag &lt;title&gt;?", opcoes: ["a) Dentro da &lt;body&gt;", "b) Dentro da &lt;head&gt;", "c) Dentro da &lt;footer&gt;", "d) Dentro da &lt;main&gt;", "e) Nenhuma das opções anteriores"], correta: "b" },
          { id: 10, pergunta: "10. Qual elemento HTML é utilizado para criar um botão clicável?", opcoes: ["a) &lt;btn&gt;", "b) &lt;click&gt;", "c) &lt;button&gt;", "d) &lt;input-btn&gt;", "e) Nenhuma das opções anteriores"], correta: "c" }
        ]
      },
      {
        subtitulo: "HTML - Prova 2",
        questoes: [
          { id: 1, pergunta: "1. Qual declaração deve ser inserida na primeira linha de um documento HTML5?", opcoes: ["a) &lt;doctype html5&gt;", "b) &lt;!DOCTYPE html&gt;", "c) &lt;xml version=\"1.0\"&gt;", "d) &lt;html version=\"5\"&gt;", "e) &lt;head-html&gt;"], correta: "b" },
          { id: 2, pergunta: "2. Qual tag semântica do HTML5 representa o rodapé de um documento ou seção?", opcoes: ["a) &lt;bottom&gt;", "b) &lt;footer&gt;", "c) &lt;end&gt;", "d) &lt;section-foot&gt;", "e) &lt;base&gt;"], correta: "b" },
          { id: 3, pergunta: "3. Qual elemento HTML é usado para definir uma tabela?", opcoes: ["a) &lt;grid&gt;", "b) &lt;table&gt;", "c) &lt;sheet&gt;", "d) &lt;tab&gt;", "e) &lt;matrix&gt;"], correta: "b" },
          { id: 4, pergunta: "4. Dentro de uma tabela HTML, qual tag representa uma linha?", opcoes: ["a) &lt;td&gt;", "b) &lt;th&gt;", "c) &lt;tr&gt;", "d) &lt;line&gt;", "e) &lt;row&gt;"], correta: "c" },
          { id: 5, pergunta: "5. Qual atributo fornece um texto alternativo para uma imagem caso ela não carregue?", opcoes: ["a) title", "b) alt", "c) description", "d) src", "e) caption"], correta: "b" },
          { id: 6, pergunta: "6. Qual elemento cria uma caixa de texto onde o usuário pode digitar várias linhas?", opcoes: ["a) &lt;input type=\"text\"&gt;", "b) &lt;textarea&gt;", "c) &lt;textbox&gt;", "d) &lt;multiline&gt;", "e) &lt;input type=\"box\"&gt;"], correta: "b" },
          { id: 7, pergunta: "7. Qual tag HTML5 é adequada para envolver os links de navegação principais do site?", opcoes: ["a) &lt;nav&gt;", "b) &lt;menu-bar&gt;", "c) &lt;links&gt;", "d) &lt;dir&gt;", "e) &lt;header&gt;"], correta: "a" },
          { id: 8, pergunta: "8. Qual atributo é usado em um link (&lt;a&gt;) para abrir a página em uma nova aba?", opcoes: ["a) target=\"_blank\"", "b) open=\"new\"", "c) window=\"newtab\"", "d) href=\"_new\"", "e) mode=\"popup\""], correta: "a" },
          { id: 9, pergunta: "9. Qual tag HTML insere um arquivo de áudio na página?", opcoes: ["a) &lt;sound&gt;", "b) &lt;audio&gt;", "c) &lt;music&gt;", "d) &lt;mp3&gt;", "e) &lt;media&gt;"], correta: "b" },
          { id: 10, pergunta: "10. Qual elemento HTML é usado para definir uma lista numerada (ordenada)?", opcoes: ["a) &lt;ul&gt;", "b) &lt;ol&gt;", "c) &lt;dl&gt;", "d) &lt;list-num&gt;", "e) &lt;order&gt;"], correta: "b" }
        ]
      },
      {
        subtitulo: "HTML - Prova 3",
        questoes: [
          { id: 1, pergunta: "1. Qual tag HTML5 é usada para incorporar reprodutores de vídeo diretamente na página?", opcoes: ["a) &lt;movie&gt;", "b) &lt;video&gt;", "c) &lt;media-player&gt;", "d) &lt;embed-video&gt;", "e) &lt;cinema&gt;"], correta: "b" },
          { id: 2, pergunta: "2. Qual atributo em um formulário especifica para onde os dados preenchidos serão enviados?", opcoes: ["a) method", "b) action", "c) target", "d) submit", "e) path"], correta: "b" },
          { id: 3, pergunta: "3. Qual tag semântica representa um conteúdo autônomo, como uma notícia ou post de blog?", opcoes: ["a) &lt;article&gt;", "b) &lt;section&gt;", "c) &lt;div&gt;", "d) &lt;aside&gt;", "e) &lt;span&gt;"], correta: "a" },
          { id: 4, pergunta: "4. Qual valor do atributo 'type' da tag &lt;input&gt; esconde os caracteres digitados (útil para senhas)?", opcoes: ["a) hidden", "b) password", "c) secret", "d) mask", "e) private"], correta: "b" },
          { id: 5, pergunta: "5. Qual tag define o cabeçalho de uma célula em uma tabela (texto em negrito e centralizado)?", opcoes: ["a) &lt;td&gt;", "b) &lt;th&gt;", "c) &lt;thead&gt;", "d) &lt;tf&gt;", "e) &lt;caption&gt;"], correta: "b" },
          { id: 6, pergunta: "6. Qual tag insere uma linha horizontal divisória na página?", opcoes: ["a) &lt;line&gt;", "b) &lt;hr&gt;", "c) &lt;border&gt;", "d) &lt;divider&gt;", "e) &lt;break-line&gt;"], correta: "b" },
          { id: 7, pergunta: "7. O que a tag &lt;meta charset=\"UTF-8\"&gt; faz em um documento HTML?", opcoes: ["a) Conecta a página a um servidor externo", "b) Define a codificação de caracteres suportando acentos e símbolos", "c) Ajusta a escala da tela para dispositivos móveis", "d) Importa arquivos de estilo CSS automaticamente", "e) Define o idioma padrão do navegador"], correta: "b" },
          { id: 8, pergunta: "8. Qual elemento cria uma lista suspensa de opções selecionáveis (dropdown)?", opcoes: ["a) &lt;select&gt;", "b) &lt;dropdown&gt;", "c) &lt;input type=\"list\"&gt;", "d) &lt;combo&gt;", "e) &lt;option-group&gt;"], correta: "a" },
          { id: 9, pergunta: "9. Qual elemento semântico é adequado para barras laterais com conteúdos relacionados ou publicidade?", opcoes: ["a) &lt;sidebar&gt;", "b) &lt;aside&gt;", "c) &lt;section&gt;", "d) &lt;div class=\"side\"&gt;", "e) &lt;nav&gt;"], correta: "b" },
          { id: 10, pergunta: "10. Qual tag HTML vincula um arquivo CSS externo ao documento HTML?", opcoes: ["a) &lt;style src=\"...\"&gt;", "b) &lt;link rel=\"stylesheet\" href=\"...\"&gt;", "c) &lt;script href=\"...\"&gt;", "d) &lt;css path=\"...\"&gt;", "e) &lt;import css=\"...\"&gt;"], correta: "b" }
        ]
      }
    ]
  },
  windows: {
    titulo: "Sistema Operacional Windows",
    versoes: [
      {
        subtitulo: "Windows - Prova 1",
        questoes: [
          { id: 1, pergunta: "1. Para selecionar todos os arquivos e pastas de um diretório no Windows 10, qual atalho de teclado é utilizado?", opcoes: ["a) Ctrl + D", "b) Ctrl + T", "c) Ctrl + A", "d) Ctrl + S", "e) Nenhuma das opções anteriores"], correta: "c" },
          { id: 2, pergunta: "2. Qual atalho de teclado é usado para alternar entre os aplicativos abertos no Windows?", opcoes: ["a) Ctrl + Alt + Del", "b) Alt + Tab", "c) Win + D", "d) Ctrl + F4", "e) Nenhuma das opções anteriores"], correta: "b" },
          { id: 3, pergunta: "3. Qual ferramenta nativa do Windows 10/11 permite exibir o desempenho do computador em tempo real, incluindo o uso de CPU, memória, disco e rede?", opcoes: ["a) DiskPart", "b) Prompt de Comando", "c) Gerenciador de Tarefas", "d) Painel de Controle", "e) Nenhuma das opções anteriores"], correta: "c" },
          { id: 4, pergunta: "4. Qual é o nome do programa nativo do Windows utilizado para navegar, organizar, copiar e mover arquivos e pastas?", opcoes: ["a) Internet Explorer", "b) Explorador de Arquivos", "c) Windows Update", "d) Bloco de Notas", "e) Nenhuma das opções anteriores"], correta: "b" },
          { id: 5, pergunta: "5. O que acontece, por padrão, quando um usuário exclui um arquivo no Windows usando apenas a tecla Delete?", opcoes: ["a) O arquivo é apagado permanentemente do disco rígido.", "b) O arquivo é movido para a Lixeira.", "c) O arquivo é enviado automaticamente para a nuvem OneDrive.", "d) O computador reinicia para confirmar a exclusão.", "e) Nenhuma das opções anteriores"], correta: "b" },
          { id: 6, pergunta: "6. Qual aplicativo é o antivírus padrão que já vem integrado ao Microsoft Windows?", opcoes: ["a) Avast Free", "b) Windows Defender (Segurança do Windows)", "c) McAfee Security", "d) Norton Antivirus", "e) Nenhuma das opções anteriores"], correta: "b" },
          { id: 7, pergunta: "7. O que caracteriza o Windows como um sistema operacional multitarefa?", opcoes: ["a) Ele só permite que um único usuário faça login por vez.", "b) Ele consegue executar vários programas e processos simultaneamente.", "c) Ele exige que o usuário feche um programa antes de abrir outro.", "d) Ele funciona apenas em computadores com mais de um processador físico.", "e) Nenhuma das opções anteriores"], correta: "b" },
          { id: 8, pergunta: "8. Qual é a função da \"Área de Transferência\" no Windows?", opcoes: ["a) Compactar arquivos pesados para economizar espaço em disco.", "b) Armazenar temporariamente dados (textos, imagens ou arquivos) que foram copiados ou recortados.", "c) Fazer backup automático de arquivos na internet.", "d) Limpar vírus e arquivos temporários do sistema.", "e) Nenhuma das opções anteriores"], correta: "b" },
          { id: 9, pergunta: "9. Onde os arquivos baixados da internet são salvos, por padrão, na maioria das configurações do Windows?", opcoes: ["a) Na pasta Documentos", "b) Na pasta Imagens", "c) Na pasta Downloads", "d) Na Lixeira", "e) Nenhuma das opções anteriores"], correta: "c" },
          { id: 10, pergunta: "10. Qual recurso do Windows permite realizar o backup automático de arquivos, fotos e configurações na nuvem da Microsoft?", opcoes: ["a) OneDrive", "b) Bluetooth", "c) DirectX", "d) PowerShell", "e) Nenhuma das opções anteriores"], correta: "a" }
        ]
      },
      {
        subtitulo: "Windows - Prova 2",
        questoes: [
          { id: 1, pergunta: "1. Qual atalho de teclado é usado para minimizar todas as janelas abertas e mostrar a Área de Trabalho?", opcoes: ["a) Win + D", "b) Ctrl + M", "c) Alt + F4", "d) Shift + Tab", "e) Win + E"], correta: "a" },
          { id: 2, pergunta: "2. Qual atalho abre diretamente o Explorador de Arquivos no Windows?", opcoes: ["a) Win + F", "b) Win + E", "c) Ctrl + E", "d) Alt + E", "e) Win + R"], correta: "b" },
          { id: 3, pergunta: "3. Qual atalho de teclado é usado para excluir um arquivo permanentemente sem enviá-lo para a Lixeira?", opcoes: ["a) Ctrl + Delete", "b) Shift + Delete", "c) Alt + Delete", "d) Win + Delete", "e) Tab + Delete"], correta: "b" },
          { id: 4, pergunta: "4. Como abrir a janela 'Executar' no Windows?", opcoes: ["a) Win + R", "b) Win + X", "c) Ctrl + R", "d) Alt + R", "e) Win + P"], correta: "a" },
          { id: 5, pergunta: "5. Qual o utilitário do Windows usado para formatar e gerenciar partições de disco via linha de comando?", opcoes: ["a) chkdsk", "b) diskpart", "c) sfc", "d) taskmgr", "e) formatgui"], correta: "b" },
          { id: 6, pergunta: "6. Qual atalho de teclado captura uma foto de toda a tela e a salva na Área de Transferência?", opcoes: ["a) Print Screen (PrtScn)", "b) Ctrl + P", "c) Alt + P", "d) Shift + P", "e) Win + P"], correta: "a" },
          { id: 7, pergunta: "7. Qual sistema de arquivos é o padrão moderno utilizado em instalações do Windows para gerenciar discos rígidos?", opcoes: ["a) FAT32", "b) NTFS", "c) EXT4", "d) exFAT", "e) ISO9660"], correta: "b" },
          { id: 8, pergunta: "8. Qual o atalho para fechar a janela do programa que está ativo no momento?", opcoes: ["a) Alt + F4", "b) Ctrl + W", "c) Esc", "d) Shift + Esc", "e) Win + Q"], correta: "a" },
          { id: 9, pergunta: "9. Qual o nome da ferramenta de prompt de comando avançada da Microsoft baseada em scripts e objetos?", opcoes: ["a) CMD", "b) PowerShell", "c) Bash", "d) Terminal DOS", "e) MS-Command"], correta: "b" },
          { id: 10, pergunta: "10. O que o atalho Ctrl + Shift + Esc faz no Windows?", opcoes: ["a) Abre a Lixeira", "b) Abre o Gerenciador de Tarefas diretamente", "c) Bloqueia o usuário atual", "d) Reinicia a placa de vídeo", "e) Desliga o computador"], correta: "b" }
        ]
      },
      {
        subtitulo: "Windows - Prova 3",
        questoes: [
          { id: 1, pergunta: "1. Qual atalho abre o painel de configurações do Windows 10/11?", opcoes: ["a) Win + I", "b) Win + C", "c) Ctrl + I", "d) Alt + I", "e) Win + S"], correta: "a" },
          { id: 2, pergunta: "2. Qual comando executado no campo 'Executar' abre o Prompt de Comando?", opcoes: ["a) terminal", "b) cmd", "c) console", "d) dos", "e) prompt"], correta: "b" },
          { id: 3, pergunta: "3. Qual atalho é usado para bloquear rapidamente a sessão do usuário no Windows?", opcoes: ["a) Win + L", "b) Ctrl + L", "c) Alt + L", "d) Win + K", "e) Shift + Lock"], correta: "a" },
          { id: 4, pergunta: "4. Qual utilitário de linha de comando verifica e repara arquivos corrompidos do sistema operacional?", opcoes: ["a) sfc /scannow", "b) ipconfig /renew", "c) ping /check", "d) cleanmgr", "e) defrag /all"], correta: "a" },
          { id: 5, pergunta: "5. Qual ferramenta nativa do Windows é usada para descompactar ou criar arquivos no formato .ZIP?", opcoes: ["a) WinRAR", "b) 7-Zip", "c) Explorador de Arquivos", "d) Windows Update", "e) BitLocker"], correta: "c" },
          { id: 6, pergunta: "6. Qual recurso de segurança do Windows criptografa completamente unidades de disco para proteger dados contra roubo?", opcoes: ["a) Windows Defender", "b) BitLocker", "c) Firewall", "d) SmartScreen", "e) UAC"], correta: "b" },
          { id: 7, pergunta: "7. Qual atalho de teclado abre a barra de busca/pesquisa do Windows?", opcoes: ["a) Win + S", "b) Ctrl + F", "c) Alt + S", "d) Win + F", "e) Shift + S"], correta: "a" },
          { id: 8, pergunta: "8. Qual comando no CMD exibe o endereço IP das placas de rede do computador?", opcoes: ["a) netstat", "b) ipconfig", "c) nslookup", "d) tracert", "e) ping"], correta: "b" },
          { id: 9, pergunta: "9. O que é a tecnologia Plug and Play do Windows?", opcoes: ["a) Permite jogar sem instalar programas", "b) Reconhece e configura novos dispositivos de hardware automaticamente ao serem conectados", "c) Atualiza o sistema automaticamente de madrugada", "d) Limpa arquivos temporários ao reiniciar", "e) Faz streaming de jogos pela internet"], correta: "b" },
          { id: 10, pergunta: "10. Qual utilitário limpa arquivos temporários e libera espaço em disco?", opcoes: ["a) Diskpart", "b) Limpeza de Disco (cleanmgr)", "c) Defrag", "d) Scandisk", "e) Regedit"], correta: "b" }
        ]
      }
    ]
  },
  terminal: {
    titulo: "Terminal Linux",
    versoes: [
      {
        subtitulo: "Terminal - Prova 1",
        questoes: [
          { id: 1, pergunta: "1. O que é um terminal?", opcoes: ["a) É um programa para jogar.", "b) É uma peça do computador.", "c) É um programa usado para digitar comandos no computador.", "d) É um aplicativo de música.", "e) É um tipo de vírus."], correta: "c" },
          { id: 2, pergunta: "2. Para que serve o terminal?", opcoes: ["a) Serve para aumentar a tela.", "b) Serve para executar tarefas usando comandos.", "c) Serve para desligar a internet.", "d) Serve só para assistir vídeos.", "e) Serve para criar senhas."], correta: "b" },
          { id: 3, pergunta: "3. O que é um comando?", opcoes: ["a) É um tipo de vírus.", "b) É uma peça do teclado.", "c) É uma senha do Wi-Fi.", "d) É um jogo de computador.", "e) É uma instrução que damos ao computador."], correta: "e" },
          { id: 4, pergunta: "4. Qual comando mostra os arquivos de uma pasta?", opcoes: ["a) pwd", "b) ls", "c) rm", "d) clear", "e) mkdir"], correta: "b" },
          { id: 5, pergunta: "5. Qual comando mostra a pasta atual?", opcoes: ["a) pwd", "b) ls", "c) cat", "d) touch", "e) cd"], correta: "a" },
          { id: 6, pergunta: "6. Qual comando serve para criar uma pasta?", opcoes: ["a) rm", "b) ls", "c) clear", "d) mkdir", "e) cat"], correta: "d" },
          { id: 7, pergunta: "7. Qual comando serve para apagar um arquivo?", opcoes: ["a) ls", "b) mkdir", "c) rm", "d) touch", "e) pwd"], correta: "c" },
          { id: 8, pergunta: "8. Qual comando serve para entrar em uma pasta?", opcoes: ["a) clear", "b) cd", "c) rm", "d) cat", "e) ls"], correta: "b" },
          { id: 9, pergunta: "9. Qual comando serve para limpar a tela?", opcoes: ["a) ls", "b) clear", "c) pwd", "d) mkdir", "e) rm"], correta: "b" },
          { id: 10, pergunta: "10. Qual comando cria um arquivo vazio?", opcoes: ["a) rm", "b) ls", "c) touch", "d) cat", "e) mkdir"], correta: "c" }
        ]
      },
      {
        subtitulo: "Terminal  - Prova 2",
        questoes: [
          { id: 1, pergunta: "1. Para que serve o comando whoami?", opcoes: ["a) Cria uma pasta.", "b) Apaga arquivos.", "c) Limpa a tela.", "d) Mostra o nome do usuário conectado.", "e) Mostra a data."], correta: "d" },
          { id: 2, pergunta: "2. O que significa cd ..?", opcoes: ["a) Cria uma pasta nova.", "b) Apaga a pasta atual.", "c) Mostra os arquivos.", "d) Volta para a pasta anterior.", "e) Entra na pasta inicial."], correta: "d" },
          { id: 3, pergunta: "3. Para que serve o comando cat?", opcoes: ["a) Cria uma pasta.", "b) Mostra o conteúdo de um arquivo.", "c) Limpa a tela.", "d) Apaga um arquivo.", "e) Mostra a data."], correta: "b" },
          { id: 4, pergunta: "4. Qual comando copia arquivos?", opcoes: ["a) mv", "b) cp", "c) rm", "d) cat", "e) ls"], correta: "b" },
          { id: 5, pergunta: "5. Qual comando move arquivos?", opcoes: ["a) rm", "b) cp", "c) mv", "d) ls", "e) touch"], correta: "c" },
          { id: 6, pergunta: "6. Para que serve o comando echo?", opcoes: ["a) Mostra a data.", "b) Mostra uma mensagem na tela.", "c) Apaga um arquivo.", "d) Cria uma pasta.", "e) Desliga o computador."], correta: "b" },
          { id: 7, pergunta: "7. O que acontece ao usar date?", opcoes: ["a) Limpa a tela.", "b) Mostra os processos.", "c) Mostra a data e o horário.", "d) Cria uma pasta.", "e) Apaga arquivos."], correta: "c" },
          { id: 8, pergunta: "8. Qual comando mostra o calendário?", opcoes: ["a) cal", "b) date", "c) ls", "d) clear", "e) pwd"], correta: "a" },
          { id: 9, pergunta: "9. Para que serve o comando history?", opcoes: ["a) Desliga o computador.", "b) Mostra os comandos usados anteriormente.", "c) Apaga o terminal.", "d) Cria uma pasta.", "e) Mostra a memória."], correta: "b" },
          { id: 10, pergunta: "10. O que o comando man faz?", opcoes: ["a) Limpa a tela.", "b) Apaga um comando.", "c) Mostra o manual de um comando.", "d) Cria um arquivo.", "e) Mostra os jogos."], correta: "c" }
        ]
      },
      {
        subtitulo: "Terminal - Prova 3",
        questoes: [
          { id: 1, pergunta: "1. Como criar uma pasta chamada escola?", opcoes: ["a) touch escola", "b) rm escola", "c) cd escola", "d) mkdir escola", "e) ls escola"], correta: "d" },
          { id: 2, pergunta: "2. Como entrar na pasta escola?", opcoes: ["a) touch escola", "b) cd escola", "c) ls escola", "d) rm escola", "e) mkdir escola"], correta: "b" },
          { id: 3, pergunta: "3. Como voltar para a pasta inicial?", opcoes: ["a) mkdir ~", "b) cd ..", "c) rm ~", "d) ls ~", "e) cd ~"], correta: "e" },
          { id: 4, pergunta: "4. Como criar um arquivo chamado texto.txt?", opcoes: ["a) rm texto.txt", "b) ls texto.txt", "c) cd texto.txt", "d) mkdir texto.txt", "e) touch texto.txt"], correta: "e" },
          { id: 5, pergunta: "5. Como apagar a pasta vazia escola?", opcoes: ["a) cd escola", "b) ls escola", "c) rmdir escola", "d) mkdir escola", "e) touch escola"], correta: "c" },
          { id: 6, pergunta: "6. Como listar arquivos com detalhes?", opcoes: ["a) rm -l", "b) pwd -l", "c) cd -l", "d) ls -a", "e) ls -l"], correta: "e" },
          { id: 7, pergunta: "7. O que faz o comando ls -a?", opcoes: ["a) Cria arquivos ocultos.", "b) Apaga os arquivos ocultos.", "c) Mostra só pastas.", "d) Mostra também os arquivos ocultos.", "e) Limpa a tela."], correta: "d" },
          { id: 8, pergunta: "8. Para que serve o comando sudo?", opcoes: ["a) Mostra jogos.", "b) Apaga o sistema.", "c) Desliga a internet.", "d) Executa comandos com permissão de administrador.", "e) Cria vírus."], correta: "d" },
          { id: 9, pergunta: "9. O que é um diretório?", opcoes: ["a) É um tipo de vírus.", "b) É um arquivo de foto.", "c) É um programa de música.", "d) É uma senha.", "e) É uma pasta que guarda arquivos."], correta: "e" },
          { id: 10, pergunta: "10. O que é um arquivo?", opcoes: ["a) É onde ficam guardadas informações.", "b) É uma pasta vazia.", "c) É um programa para jogar.", "d) É um vírus.", "e) É um cabo."], correta: "a" }
        ]
      }
    ]
  },
  hospedagem: {
    titulo: "Hospedagem de Sites",
    versoes: [
      {
        subtitulo: "Hospedagem - Prova 1",
        questoes: [
          { id: 1, pergunta: "1. O que é hospedagem de sites?", opcoes: ["a) É um jogo para celular.", "b) É um programa para baixar filmes.", "c) É um serviço que mantém um site na internet.", "d) É um cabo para ligar o computador na tomada.", "e) É um tipo de vírus de computador."], correta: "c" },
          { id: 2, pergunta: "2. Para que serve a hospedagem?", opcoes: ["a) Para deixar o computador mais rápido.", "b) Para aumentar a memória do celular.", "c) Para carregar a bateria do notebook.", "d) Para deixar um site disponível para as pessoas acessarem.", "e) Para criar senhas de e-mail."], correta: "d" },
          { id: 3, pergunta: "3. O que é um servidor?", opcoes: ["a) É um cabo de carregador.", "b) É um computador que armazena e disponibiliza informações.", "c) É um tipo de teclado.", "d) É um aplicativo de música.", "e) É uma pessoa que serve café no escritório."], correta: "b" },
          { id: 4, pergunta: "4. O que é um site?", opcoes: ["a) É um único arquivo de foto.", "b) É uma pasta do Windows.", "c) É um conjunto de páginas acessadas pela internet.", "d) É uma parte do computador.", "e) É um tipo de vírus."], correta: "c" },
          { id: 5, pergunta: "5. O que é domínio?", opcoes: ["a) É um programa de antivírus.", "b) É a senha do Wi-Fi.", "c) É o nome do dono do computador.", "d) É o endereço de um site na internet.", "e) É o número do celular."], correta: "d" },
          { id: 6, pergunta: "6. O que é URL?", opcoes: ["a) É a senha do e-mail.", "b) É um tipo de foto.", "c) É um aplicativo de banco.", "d) É o nome do navegador.", "e) É o endereço usado para acessar uma página."], correta: "e" },
          { id: 7, pergunta: "7. O que significa HTTP?", opcoes: ["a) É um tipo de impressora.", "b) É um protocolo de comunicação entre sites e navegadores.", "c) É um programa para editar fotos.", "d) É uma marca de celular.", "e) É um tipo de computador novo."], correta: "b" },
          { id: 8, pergunta: "8. O que significa HTTPS?", opcoes: ["a) É um tipo de e-mail.", "b) É uma rede social.", "c) É uma versão mais lenta do HTTP.", "d) É uma versão mais segura do HTTP.", "e) É um jogo online."], correta: "d" },
          { id: 9, pergunta: "9. O que é um navegador?", opcoes: ["a) É um aplicativo de mensagens.", "b) É um tipo de vírus.", "c) É um programa usado só para jogar.", "d) É uma peça do computador.", "e) É um programa usado para acessar sites."], correta: "e" },
          { id: 10, pergunta: "10. O que é armazenamento na hospedagem?", opcoes: ["a) É o botão de ligar o computador.", "b) É o espaço usado para guardar arquivos do site.", "c) É o espaço usado para guardar o mouse.", "d) É o lugar onde fica a senha do site.", "e) É a memória do teclado."], correta: "b" }
        ]
      },
      {
        subtitulo: "Hospedagem - Prova 2",
        questoes: [
          { id: 1, pergunta: "1. O que é hospedagem gratuita?", opcoes: ["a) É um serviço que cobra muito caro.", "b) É um serviço que apaga o site todo dia.", "c) É um serviço que permite hospedar sites sem pagar.", "d) É um serviço que só funciona de noite.", "e) É um serviço que só funciona sem internet."], correta: "c" },
          { id: 2, pergunta: "2. O que é hospedagem paga?", opcoes: ["a) É um serviço que só serve para celular.", "b) É um serviço que só funciona sem internet.", "c) É um serviço contratado por um valor.", "d) É um serviço que não tem suporte.", "e) É um serviço que é sempre gratuito."], correta: "c" },
          { id: 3, pergunta: "3. Qual a diferença entre hospedagem gratuita e paga?", opcoes: ["a) A gratuita tem mais espaço que a paga.", "b) Não há nenhuma diferença.", "c) A paga é sempre mais lenta.", "d) A gratuita nunca cai.", "e) A paga geralmente oferece mais recursos e suporte."], correta: "e" },
          { id: 4, pergunta: "4. O que é hospedagem compartilhada?", opcoes: ["a) É quando um site usa vários computadores em casa.", "b) É quando vários sites usam o mesmo servidor.", "c) É quando o site fica guardado no pen drive.", "d) É quando o site fica só no celular.", "e) É quando o site não precisa de internet."], correta: "b" },
          { id: 5, pergunta: "5. O que é hospedagem dedicada?", opcoes: ["a) É quando um servidor fica reservado para um cliente.", "b) É quando o servidor é dividido com 100 pessoas.", "c) É quando o site fica desligado.", "d) É quando o site é gratuito.", "e) É quando o site não tem domínio."], correta: "a" },
          { id: 6, pergunta: "6. O que é VPS?", opcoes: ["a) É um servidor virtual com recursos próprios.", "b) É um tipo de e-mail.", "c) É um tipo de vírus.", "d) É um cabo de rede.", "e) É um programa de desenho."], correta: "a" },
          { id: 7, pergunta: "7. O que é hospedagem em nuvem?", opcoes: ["a) É quando o site usa vários servidores conectados.", "b) É quando o site fica guardado nas nuvens do céu.", "c) É quando o site só funciona quando chove.", "d) É quando o site fica só no computador.", "e) É quando o site não tem arquivos."], correta: "a" },
          { id: 8, pergunta: "8. O que é banco de dados?", opcoes: ["a) É onde ficam armazenadas informações organizadas.", "b) É um programa de música.", "c) É um banco que guarda dinheiro.", "d) É um tipo de senha.", "e) É uma pasta de fotos no computador."], correta: "a" },
          { id: 9, pergunta: "9. Para que serve o MySQL?", opcoes: ["a) Para criar senhas.", "b) Para editar vídeos.", "c) Para armazenar e organizar dados.", "d) Para tocar música.", "e) Para desenhar."], correta: "c" },
          { id: 10, pergunta: "10. O que é WordPress?", opcoes: ["a) É uma ferramenta usada para criar sites.", "b) É um programa de antivírus.", "c) É um tipo de teclado.", "d) É uma marca de celular.", "e) É um jogo de computador."], correta: "a" }
        ]
      },
      {
        subtitulo: "Hospedagem - Prova 3",
        questoes: [
          { id: 1, pergunta: "1. O que é cPanel?", opcoes: ["a) É um tipo de impressora.", "b) É um painel para administrar a hospedagem.", "c) É um aplicativo de fotos.", "d) É um painel para ligar o computador.", "e) É um programa para jogar."], correta: "b" },
          { id: 2, pergunta: "2. O que é FTP?", opcoes: ["a) É um tipo de foto.", "b) É um programa de música.", "c) É um tipo de vírus.", "d) É um protocolo usado para transferir arquivos.", "e) É um cabo de internet."], correta: "d" },
          { id: 3, pergunta: "3. Para que serve o File Manager?", opcoes: ["a) Para criar jogos.", "b) Para aumentar a tela do computador.", "c) Para apagar o sistema do computador.", "d) Para desligar a internet.", "e) Para organizar arquivos da hospedagem."], correta: "e" },
          { id: 4, pergunta: "4. O que é backup?", opcoes: ["a) É um botão do teclado.", "b) É um vírus que apaga arquivos.", "c) É um programa para jogar.", "d) É um tipo de senha.", "e) É uma cópia de segurança dos arquivos."], correta: "e" },
          { id: 5, pergunta: "5. Por que fazer backup?", opcoes: ["a) Para deixar o site mais lento.", "b) Para evitar perder informações importantes.", "c) Para apagar os arquivos.", "d) Para gastar mais internet.", "e) Para deixar o computador mais pesado."], correta: "b" },
          { id: 6, pergunta: "6. O que é SSL?", opcoes: ["a) É uma tecnologia que protege a conexão do site.", "b) É um programa de desenho.", "c) É um vírus.", "d) É um tipo de foto.", "e) É um jogo."], correta: "a" },
          { id: 7, pergunta: "7. O que é certificado digital SSL?", opcoes: ["a) É um certificado que ajuda a proteger os dados.", "b) É um tipo de jogo.", "c) É um diploma de faculdade.", "d) É uma senha de e-mail.", "e) É uma foto do site."], correta: "a" },
          { id: 8, pergunta: "8. O que é largura de banda?", opcoes: ["a) É a velocidade do mouse.", "b) É o tamanho do monitor.", "c) É o tamanho do teclado.", "d) É a largura da tela do computador.", "e) É a quantidade de dados transferidos pela rede."], correta: "e" },
          { id: 9, pergunta: "9. O que é tráfego de um site?", opcoes: ["a) É a velocidade da internet.", "b) É a quantidade de fotos no computador.", "c) É a quantidade de acessos que ele recebe.", "d) É o trânsito de carros na rua.", "e) É o barulho do computador."], correta: "c" },
          { id: 10, pergunta: "10. O que é uptime?", opcoes: ["a) É o tempo para baixar um jogo.", "b) É o tempo para ligar o computador.", "c) É o tempo de carregar o celular.", "d) É o tempo que o computador fica desligado.", "e) É o tempo em que o site fica funcionando."], correta: "e" }
        ]
      }
    ]
  },
  react: {
    titulo: "React JS",
    versoes: [
      {
        subtitulo: "React - Prova 1",
        questoes: [
          { id: 1, pergunta: "1. Para que serve o export?", opcoes: ["a) Permitir que funções, componentes ou valores sejam utilizados em outros módulos.", "b) Aumentar a tela do site.", "c) Desligar o navegador.", "d) Apagar arquivos do projeto.", "e) Criar vírus no computador."], correta: "a" },
          { id: 2, pergunta: "2. Qual arquivo costuma ser responsável por iniciar a renderização de uma aplicação React?", opcoes: ["a) index.css", "b) node_modules", "c) package.json", "d) README.md", "e) main.jsx"], correta: "e" },
          { id: 3, pergunta: "3. Qual arquivo geralmente contém o componente principal de uma aplicação React?", opcoes: ["a) index.html", "b) vite.config.js", "c) package-lock.json", "d) App.jsx", "e) main.jsx"], correta: "d" },
          { id: 4, pergunta: "4. Qual é a função do CSS em um projeto React?", opcoes: ["a) Definir a aparência e a apresentação visual da interface.", "b) Apagar o código.", "c) Criar banco de dados.", "d) Criar vírus.", "e) Desligar a internet."], correta: "a" },
          { id: 5, pergunta: "5. O que é o Virtual DOM?", opcoes: ["a) Um vírus do React.", "b) Uma senha do projeto.", "c) Uma representação em memória da estrutura da interface.", "d) Um tipo de botão.", "e) Um programa para editar fotos."], correta: "c" },
          { id: 6, pergunta: "6. Qual é a vantagem do Virtual DOM?", opcoes: ["a) Deixar o site mais lento.", "b) Auxiliar na atualização eficiente da interface.", "c) Desligar o computador.", "d) Criar vírus.", "e) Apagar os arquivos."], correta: "b" },
          { id: 7, pergunta: "7. O que é React Router?", opcoes: ["a) Um programa para editar vídeos.", "b) Um banco de dados.", "c) Uma biblioteca utilizada para gerenciar rotas em aplicações React.", "d) Um jogo de computador.", "e) Um antivírus."], correta: "c" },
          { id: 8, pergunta: "8. Para que serve o useContext?", opcoes: ["a) Compartilhar dados entre componentes sem precisar passar Props manualmente por vários níveis.", "b) Apagar componentes.", "c) Desligar o site.", "d) Criar senhas.", "e) Aumentar a tela."], correta: "a" },
          { id: 9, pergunta: "9. Para que serve o useRef?", opcoes: ["a) Criar vírus.", "b) Criar uma nova página.", "c) Desligar a internet.", "d) Apagar a memória do computador.", "e) Manter uma referência mutável entre renderizações, inclusive para acessar elementos do DOM."], correta: "e" },
          { id: 10, pergunta: "10. O que é o useMemo?", opcoes: ["a) Um tipo de vírus.", "b) Uma senha do projeto.", "c) Um banco de dados.", "d) Um programa para editar fotos.", "e) Um Hook que memoriza resultados de cálculos entre renderizações."], correta: "e" }
        ]
      },
      {
        subtitulo: "React - Prova 2",
        questoes: [
          { id: 1, pergunta: "1. Para que serve o useCallback?", opcoes: ["a) Desligar o navegador.", "b) Aumentar a tela.", "c) Apagar funções.", "d) Memorizar uma função entre renderizações.", "e) Criar vírus."], correta: "d" },
          { id: 2, pergunta: "2. O que significa prop drilling?", opcoes: ["a) Passar Props por vários níveis de componentes até chegar ao componente que precisa delas.", "b) Furar o computador.", "c) Apagar o projeto.", "d) Desligar a internet.", "e) Criar vírus."], correta: "a" },
          { id: 3, pergunta: "3. O que é uma SPA (Single Page Application)?", opcoes: ["a) Um tipo de vírus.", "b) Um jogo de computador.", "c) Uma aplicação que funciona principalmente em uma única página, atualizando o conteúdo conforme necessário.", "d) Um programa para desligar o PC.", "e) Um site que só tem uma foto."], correta: "c" },
          { id: 4, pergunta: "4. O que é gerenciamento de estado?", opcoes: ["a) Apagar todos os dados.", "b) Aumentar a memória.", "c) Desligar o computador.", "d) Criar vírus.", "e) Organizar e controlar os dados que podem mudar durante a execução da aplicação."], correta: "e" },
          { id: 5, pergunta: "5. Por que é importante organizar os componentes em arquivos separados?", opcoes: ["a) Para desligar a internet.", "b) Para facilitar a manutenção e a organização do projeto.", "c) Para apagar o código.", "d) Para deixar o projeto mais confuso.", "e) Para criar vírus."], correta: "b" },
          { id: 6, pergunta: "6. Qual é uma boa prática ao desenvolver em React?", opcoes: ["a) Criar um componente gigante para tudo.", "b) Apagar o projeto todo dia.", "c) Copiar vírus.", "d) Criar componentes pequenos e reutilizáveis quando fizer sentido.", "e) Não usar componentes."], correta: "d" },
          { id: 7, pergunta: "7. O que é um componente reutilizável?", opcoes: ["a) Uma senha.", "b) Um componente que pode ser utilizado em diferentes partes da aplicação.", "c) Um programa para apagar arquivos.", "d) Um vírus do React.", "e) Um componente que só funciona uma vez."], correta: "b" },
          { id: 8, pergunta: "8. Qual ferramenta pode ajudar a identificar erros durante o desenvolvimento?", opcoes: ["a) Bloco de notas.", "b) Paint.", "c) Console do navegador.", "d) Calculadora.", "e) Explorador de arquivos."], correta: "c" },
          { id: 9, pergunta: "9. Por que devemos evitar atualizar o estado diretamente?", opcoes: ["a) Porque o computador desliga.", "b) Porque apaga a internet.", "c) Porque aumenta a tela.", "d) Porque o React precisa que as atualizações sigam seu mecanismo de estado.", "e) Porque cria vírus."], correta: "d" },
          { id: 10, pergunta: "10. Qual é a finalidade do StrictMode?", opcoes: ["a) Criar vírus.", "b) Ajudar a identificar problemas potenciais durante o desenvolvimento.", "c) Deixar o site mais lento de propósito.", "d) Apagar o projeto.", "e) Desligar o navegador."], correta: "b" }
        ]
      },
      {
        subtitulo: "React - Prova 3",
        questoes: [
          { id: 1, pergunta: "1. O que é React?", opcoes: ["a) É um programa para editar fotos.", "b) É um sistema operacional para celular.", "c) É uma biblioteca JavaScript de código aberto focada em criar interfaces de usuário (UI) para aplicações web.", "d) É uma linguagem para criar vírus.", "e) É um banco de dados para guardar sites."], correta: "c" },
          { id: 2, pergunta: "2. Qual o principal objetivo do React no desenvolvimento web?", opcoes: ["a) Aumentar a memória do computador.", "b) Deixar o computador mais rápido.", "c) Apagar arquivos do site.", "d) Criar interfaces interativas e reutilizáveis.", "e) Criar senhas de e-mail."], correta: "d" },
          { id: 3, pergunta: "3. Por que o React usa o algoritmo de reconciliação?", opcoes: ["a) Para desligar a internet.", "b) Para criar vírus no navegador.", "c) Para apagar o código do projeto.", "d) Para comparar o Virtual DOM com o DOM real e aplicar apenas as alterações estritamente necessárias.", "e) Para deixar o site mais lento."], correta: "d" },
          { id: 4, pergunta: "4. O React é um framework ou uma biblioteca?", opcoes: ["a) É um sistema operacional completo.", "b) É um banco de dados.", "c) É um programa de antivírus.", "d) É uma biblioteca, pois foca apenas na camada de visualização (View) e exige outras ferramentas para rotas ou estado global.", "e) É um jogo de computador."], correta: "d" },
          { id: 5, pergunta: "5. O que faz o comando npm run build?", opcoes: ["a) Modifica e otimiza o código do projeto para produção, gerando arquivos estáticos minificados.", "b) Apaga todo o projeto.", "c) Instala vírus no computador.", "d) Cria uma pasta de fotos.", "e) Desliga o servidor para sempre."], correta: "a" },
          { id: 6, pergunta: "6. Qual o equivalente da propriedade HTML class no JSX?", opcoes: ["a) classJS", "b) className", "c) cssClass", "d) classHTML", "e) classReact"], correta: "b" },
          { id: 7, pergunta: "7. Qual o equivalente da propriedade HTML for (usada em labels) no JSX?", opcoes: ["a) forJS", "b) htmlLabel", "c) htmlFor", "d) forClass", "e) labelFor"], correta: "c" },
          { id: 8, pergunta: "8. Por que o React usa o algoritmo de reconciliação?", opcoes: ["a) Para criar senhas.", "b) Para desligar o navegador.", "c) Para deixar o site mais pesado.", "d) Para apagar o Virtual DOM.", "e) Para comparar o Virtual DOM com o DOM real e aplicar apenas as alterações estritamente necessárias."], correta: "e" },
          { id: 9, pergunta: "9. O que são propTypes?", opcoes: ["a) Um tipo de vírus do React.", "b) Uma senha do projeto.", "c) Um programa para desenhar telas.", "d) Um banco de dados do React.", "e) Uma biblioteca antiga (ou padrão) usada para checar os tipos de dados das propriedades recebidas por um componente em tempo de execução."], correta: "e" },
          { id: 10, pergunta: "10. Qual a função do arquivo package.json em um projeto React?", opcoes: ["a) Apagar o código do projeto.", "b) Gerenciar as dependências, scripts de execução e metadados do projeto.", "c) Guardar fotos do projeto.", "d) Criar vírus no computador.", "e) Desligar a internet."], correta: "b" }
        ]
      }
    ]
  }
};

// Objeto que guardará a versão da prova selecionada no momento
let provasSorteadas = {};

// Sorteia uma nova prova para cada tópico, garantindo que não seja igual à prova anterior
function realizarNovoSorteio() {
  const ultimasVersoes = JSON.parse(localStorage.getItem('versoesAtuaisProvas')) || {};
  const novasVersoes = {};

  Object.keys(bancoProvas).forEach(chaveTopico => {
    const topico = bancoProvas[chaveTopico];
    const totalVersoes = topico.versoes.length;
    const versaoAnterior = ultimasVersoes[chaveTopico];

    let indiceSorteado;

    // Se houver registro da versão anterior, sorteia apenas entre as OUTRAS versões
    if (versaoAnterior !== undefined && totalVersoes > 1) {
      const opcoesDisponiveis = [];
      for (let i = 0; i < totalVersoes; i++) {
        if (i !== versaoAnterior) {
          opcoesDisponiveis.push(i);
        }
      }
      const indiceAleatorio = Math.floor(Math.random() * opcoesDisponiveis.length);
      indiceSorteado = opcoesDisponiveis[indiceAleatorio];
    } else {
      // Primeira execução: sorteia qualquer versão
      indiceSorteado = Math.floor(Math.random() * totalVersoes);
    }

    novasVersoes[chaveTopico] = indiceSorteado;
  });

  // Salva no LocalStorage as novas versões sorteadas
  localStorage.setItem('versoesAtuaisProvas', JSON.stringify(novasVersoes));
  return novasVersoes;
}

// Carrega as provas mantendo a versão sorteada ou realiza o sorteio inicial
function carregarProvas() {
  let versoesAtuais = JSON.parse(localStorage.getItem('versoesAtuaisProvas'));

  // Se for a primeira vez acessando e não existir versão salva, realiza o primeiro sorteio
  if (!versoesAtuais) {
    versoesAtuais = realizarNovoSorteio();
  }

  provasSorteadas = {};
  Object.keys(bancoProvas).forEach(chaveTopico => {
    const topico = bancoProvas[chaveTopico];
    const indiceVersao = versoesAtuais[chaveTopico] !== undefined ? versoesAtuais[chaveTopico] : 0;

    provasSorteadas[chaveTopico] = {
      titulo: topico.titulo,
      subtitulo: topico.versoes[indiceVersao].subtitulo,
      questoes: topico.versoes[indiceVersao].questoes
    };
  });

  const containerProvas = document.getElementById('conteudo-provas');
  const containerAbas = document.getElementById('abas-provas');
  
  if (containerProvas) containerProvas.innerHTML = '';
  if (containerAbas) containerAbas.innerHTML = '';

  Object.keys(provasSorteadas).forEach((chaveProva, index) => {
    const prova = provasSorteadas[chaveProva];
    const isFirst = index === 0;

    if (containerAbas) {
      const btnAba = document.createElement('button');
      btnAba.type = 'button';
      btnAba.className = `tab-btn ${isFirst ? 'active' : ''}`;
      btnAba.dataset.chave = chaveProva;
      btnAba.innerText = prova.titulo;
      btnAba.onclick = () => trocarProva(chaveProva);
      containerAbas.appendChild(btnAba);
    }

    if (containerProvas) {
      let html = `<div id="prova-${chaveProva}" class="prova-container ${isFirst ? 'active' : ''}">
                    <h2 class="prova-titulo">${prova.subtitulo}</h2>
                    <form id="form-${chaveProva}">`;

      prova.questoes.forEach(q => {
        html += `<div class="questao">
                  <p><strong>${q.pergunta}</strong></p>`;
        
        q.opcoes.forEach(opt => {
          const val = opt.charAt(0).toLowerCase();
          html += `<label class="opcao">
                    <input type="radio" name="${chaveProva}_q${q.id}" value="${val}" onchange="salvarRascunho('${chaveProva}', ${q.id}, '${val}')">
                    ${opt}
                  </label>`;
        });
        html += `</div>`;
      });

      html += `<button type="button" class="btn-calcular" onclick="calcularNota('${chaveProva}')">Calcular e Salvar Nota</button>
               <div id="resultado-${chaveProva}" class="resultado"></div>
               </form></div>`;

      containerProvas.innerHTML += html;
    }
  });

  restaurarRespostas();
  atualizarPainelNotas();
}

// Alterna a visualização entre as abas
function trocarProva(chaveProva) {
  document.querySelectorAll('.prova-container').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

  const elProva = document.getElementById(`prova-${chaveProva}`);
  if (elProva) elProva.classList.add('active');

  const btnAba = document.querySelector(`.tab-btn[data-chave="${chaveProva}"]`);
  if (btnAba) btnAba.classList.add('active');
}

// Salva a resposta no rascunho do LocalStorage
function salvarRascunho(chaveProva, questaoId, opcao) {
  const rascunho = JSON.parse(localStorage.getItem('rascunhoProvas')) || {};
  if (!rascunho[chaveProva]) rascunho[chaveProva] = {};
  
  rascunho[chaveProva][questaoId] = opcao.toLowerCase();
  localStorage.setItem('rascunhoProvas', JSON.stringify(rascunho));
}

// Restaura os radio buttons selecionados previamente
function restaurarRespostas() {
  const rascunho = JSON.parse(localStorage.getItem('rascunhoProvas'));
  if (!rascunho) return;

  Object.keys(rascunho).forEach(chaveProva => {
    Object.keys(rascunho[chaveProva]).forEach(qId => {
      const val = rascunho[chaveProva][qId];
      const input = document.querySelector(`input[name="${chaveProva}_q${qId}"][value="${val}"]`);
      if (input) input.checked = true;
    });
  });
}

// Corrige e exibe o resultado da prova selecionada
function calcularNota(chaveProva) {
  const prova = provasSorteadas[chaveProva];
  const rascunho = JSON.parse(localStorage.getItem('rascunhoProvas')) || {};
  const respostasUsuario = rascunho[chaveProva] || {};

  let acertos = 0;
  
  prova.questoes.forEach(q => {
    if (respostasUsuario[q.id] && respostasUsuario[q.id].toLowerCase() === q.correta.toLowerCase()) {
      acertos++;
    }
  });

  const nota = ((acertos / prova.questoes.length) * 10).toFixed(1);

  const notasFinais = JSON.parse(localStorage.getItem('notasFinaisProvas')) || {};
  notasFinais[chaveProva] = { 
    titulo: prova.subtitulo,
    nota: nota, 
    acertos: `${acertos}/${prova.questoes.length}` 
  };
  localStorage.setItem('notasFinaisProvas', JSON.stringify(notasFinais));

  const elRes = document.getElementById(`resultado-${chaveProva}`);
  if (elRes) {
    elRes.className = "resultado visivel";
    elRes.style.background = nota >= 6 ? '#d4edda' : '#f8d7da';
    elRes.style.color = nota >= 6 ? '#155724' : '#721c24';
    elRes.innerText = `Resultado da Prova (${prova.subtitulo}): Nota ${nota} (${acertos} de ${prova.questoes.length} acertos)`;
  }

  atualizarPainelNotas();
}

// Atualiza o quadro geral de notas
function atualizarPainelNotas() {
  const notasFinais = JSON.parse(localStorage.getItem('notasFinaisProvas')) || {};
  const elPainel = document.getElementById('historico-notas');
  if (!elPainel) return;

  let html = '<ul class="lista-notas">';
  
  Object.keys(bancoProvas).forEach(chave => {
    const item = notasFinais[chave];
    if (item) {
      html += `<li><span><strong>${item.titulo || bancoProvas[chave].titulo}</strong></span> <span class="status-concluido">Nota ${item.nota} (${item.acertos} acertos)</span></li>`;
    } else {
      html += `<li><span><strong>${bancoProvas[chave].titulo}</strong></span> <span class="status-pendente">Não realizada</span></li>`;
    }
  });
  html += '</ul>';

  elPainel.innerHTML = html;
}

// Limpa todas as notas/rascunhos E REALIZA UM NOVO SORTEIO de provas diferentes
function limparDados() {
  if (confirm("Tem certeza que deseja apagar todo o progresso e gerar novas provas?")) {
    localStorage.removeItem('rascunhoProvas');
    localStorage.removeItem('notasFinaisProvas');
    
    // Realiza o novo sorteio garantindo que as provas sejam trocadas
    realizarNovoSorteio();
    
    // Recarrega a página para exibir as novas provas sorteadas
    location.reload();
  }
}

// Carrega as provas quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', carregarProvas);