

const crosswords = [
    {
        word: "CPU",
        ids: [
            1, 2, 3
        ]
    },
    {
        word: "ULA",
        ids: [
            3, 4, 5
        ]
    },
    {
        word: "REGISTRADORES",
        ids: [
            6, 7, 8, 9, 10, 11, 12, 5, 13, 14, 15, 16, 17
        ]
    },
    {
        word: "FLASH",
        ids: [
            18, 19, 20, 17, 21
        ]
    },
    {
        word: "ROM",
        ids: [
          15,  22, 23
        ]
    },
    {
        word: "RAM",
        ids: [
          12,  24, 25
        ]
    },
    {
        word: "I5",
        ids: [
          9, 26
        ]
    },
    {
        word: "EPROM",
        ids: [
          7, 27, 28, 29, 30
        ]
    },
    {
        word: "MEMORIADEMASSA",
        ids: [
          30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43
        ]
    },
    {
        word: "CS",
        ids: [
          44, 42
        ]
    },
    {
        word: "I7",
        ids: [
          35, 45
        ]
    },
    {
        word: "DMA",
        ids: [
          37, 46, 47
        ]
    },
    {
        word: "ADDRESSBUS",
        ids: [
          43, 48, 49, 50, 51, 52, 53, 54, 55, 56
        ]
    },
    {
        word: "QUADCORE",
        ids: [
          57, 58, 59, 60, 61, 62, 63, 64
        ]
    },
    {
        word: "DATABUS",
        ids: [
          65, 59, 66, 67, 68, 69, 52
        ]
    },
    {
        word: "DUALCORE",
        ids: [
          70, 55, 71 ,72, 73, 74, 75, 76
        ]
    },
]


const validateCrosswords = () => {
    // para cada crossword criada
    let correctWords = []
    for (let crosswordsObj of crosswords) {
        let word = crosswordsObj['word']
        let ids = crosswordsObj['ids']
        let wordMustBe = joinWords(ids)
        if (wordMustBe != word) {
            invalidateInputs(ids)
        } else {
            correctWords.push(wordMustBe)
            validateInputs(ids)
        }
    }

    showCorrectWords(correctWords)
}

const joinWords = (ids) => {
    let tempWord = ''
    for (let id of ids) {
        tempWord += document.getElementById(id).value.toUpperCase();
    }
    return tempWord;
}

const invalidateInputs = (ids) => {
    for (let id of ids) {
        document.getElementById(id).style = "border: 1px solid red"
    }
}

const validateInputs = (ids) => {
    for (let id of ids) {
        document.getElementById(id).style = "border: 1px solid green"
    }
}

const showCorrectWords = (words) => {
    for (let word of words) {
        let html = document.getElementById("correctWords").innerHTML.toString();
        if (!html.includes(word)) {
            document.getElementById("correctWords").innerHTML += `<span>${word}</span><br>`
        }
    }
}

const resetCrosswords = () => {
    document.getElementById("correctWords").innerHTML = ""
    for (let word of crosswords) {
        let ids = word['ids']
        for (let id of ids) {
            document.getElementById(id).value = ""
            document.getElementById(id).style = "border-width: 2px; border-style: inset; border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133)); border-image: initial;"
        }
    }
}

function dica01() {
    alert ("É uma memória presente dentro do CPU, está no topo da hierarquia de memória de um computador, portanto apresentam pequenas quantidades e são limitadas quanto ao seu tamanho, porém são de alta velocidade. É capaz de armazenar instruções que manipulam dados. São muito utilizados na execução de programas, os processadores são capazes de acessá-los diretamente. ")
}

function dica02() {
    alert ("É o circuito digital capaz de combinar uma variedade de operações lógicas e aritméticas a serem executadas no computador, também conhecida como “grande calculadora eletrônica” ")
}

function dica03() {
    alert ("Parte de um sistema computacional que realiza as instruções de um programa de computador, para executar a aritmética básica, lógica, e a entrada e saída de dados.")
}

function dica04() {
    alert ("É um tipo de dispositivo de armazenamento não volátil, trata-se de um chip re-escrevível que preserva seu conteúdo sem necessidade de fonte de alimentação. Apresenta maior resistência comparado aos discos rígidos e possuem altas velocidades de transferência, porém apresentam uma número finito de escritas/exclusões. Usada atualmente em cartões de memória, pen drives, Unidades de Estado Sólido (SSD). ")
}

function dica05() {
    alert ("Ele é um tipo de memória de acesso aleatório, que as informações são gravadas uma única vez e após isso não podem ser alteradas ou apagadas, somente acessadas, memórias cujo conteúdo é gravado permanentemente.")
}

function dica06() {
    alert ("É uma memória volátil capaz de carregar os programas em execução e os respectivos dados do utilizador, usada pelo processador para armazenamento temporário de arquivos e programas que estão sendo processados no momento. O seu funcionamento permite uma troca de dados mais rápida pelo processador do que pelo acesso ao disco rígido devido sua maior velocidade de largura de banda.")
}

function dica07() {
    alert (" É utilizado tanto em computadores residenciais quanto em comerciais. O i5 é conhecido como um processador de alto desempenho, capaz de lidar com jogos modernos e alguns programas de edição pesados. Seus modelos podem vir em duas configurações diferentes: 2 núcleos com hyperthreading ou 4 núcleos sem hyperthreading. No entanto, seu grande diferencial para os modelos i3 é a tecnologia Turboboost que possibilita que o processador trabalhe em uma maior frequência. ")
}

function dica08() {
    alert ("É um tipo de memória não volátil, ou seja, capaz de realizar armazenamento de dados em massa. Uma vez programada, ela é capaz de ser lida ilimitadas vezes e pode ser apagada apenas por exposição a uma forte luz ultravioleta. Usada antigamente em chips de BIOS de PCs. ")
}

function dica09() {
    alert ("Possui como função armazenar grandes quantidades de informações, portanto é uma memória não-volátil que mantém os dados mesmo com seu desligamento, possui uma velocidade menor comparada às outras memórias de computador devido sua alta capacidade de armazenamento de dados. Presente comumente em unidades de disco rígido. ")
}

function dica10() {
    alert ("É uma linha de controle que habilita a memória para que as portas de entrada e saída (I/O) sejam liberadas para a operação desejada. Ele é um pino de comando presente em vários circuitos integrados que conecta as portas de entrada e saída no dispositivo para o circuito interno daquele dispositivo. Um exemplo é o protocolo “Serial Peripheral Interface” (SPI). ")
}

function dica11() {
    alert ("É considerado o modelo mais potente da família Core, sendo amplamente usado para rodar jogos de última geração e softwares de produção de conteúdo, projetos e edição de imagens. Seu foco é a alta velocidade e o desempenho máximo. Ao contrário dos demais, o i7 apresenta uma variedade de configurações, partindo de 6 núcleos até incríveis 10. Todas as versões do i7 apresentam as tecnologias de hyperthreading e TurboBoost disponibilizadas nos modelos anteriores. Além disso, o grande diferencial desse processador é contar com uma quantidade maior de cache L3, a cache de uso comum dos núcleos, o que aumenta muito a capacidade de processamento deste modelo. ")
}

function dica12() {
    alert ("Ele realiza o acesso a memória RAM do sistema sem depender do processador, realizando este acesso direto, a transferência de dados ocorre de uma forma muito mais rápida, que com deste processo, ele permite que o processador não seja sobrecarregado. Utilizado comumente em controladores de disco, placas gráficas, placas de rede ou placas de som. ")
}

function dica13() {
    alert ("A “Comunicação de Endereços” possui como função indicar o endereço de memória dos dados que o processador deve retirar ou enviar. A largura da comunicação de endereço determina quanta memória o sistema pode endereçar. Por exemplo: um sistema com comunicação de endereço de 32  bits pode endereçar 2³² locações de memória, se cada locação de memória for de 1 byte então o espaço de memória endereçável é de 4GB.")
}

function dica14() {
    alert ("Um processador que em sua arquitetura possui suas operações divididas em quatro partes, permitindo que seu trabalho seja realizado em um ambiente multitarefa. Portanto possuem um poder de processamento muito maior em relação aos antecessores devido sua presença do dobro de núcleos físicos o que auxilia em maiores capacidades de multitarefa. Exemplos: AMD Athlon II X4, Intel Core 2 Quad, Intel Core i5, Intel Core i7, AMD Ryzen 5. ")
}

function dica15() {
    alert ("A “Comunicação de Dados” possui como função o transporte dos dados de um computador. Ele é um sistema de comunicação que transfere os dados entre diferentes componentes de um computador ou entre diferentes computadores, possuindo seus diversos barramentos como o de, memória, de “Peripheral Component Interconnect standard” (PCI), e “Universal Serial Bus” (USB). ")
}

function dica16() {
    alert ("Um processador que possui suas operações divididas em duas partes, permitindo que seu trabalho seja realizado em um ambiente multitarefa. Podendo dividir suas tarefas, apresentam concentrações de calor menores e de maiores largura de banda de dados. Exemplos: AMD Athlon 64 X2, Intel Celeron Dual-Core, Intel Pentium D, Intel Core 2 Duo, Intel Core i3. ")
}