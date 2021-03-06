

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
    alert ("?? uma mem??ria presente dentro do CPU, est?? no topo da hierarquia de mem??ria de um computador, portanto apresentam pequenas quantidades e s??o limitadas quanto ao seu tamanho, por??m s??o de alta velocidade. ?? capaz de armazenar instru????es que manipulam dados. S??o muito utilizados na execu????o de programas, os processadores s??o capazes de acess??-los diretamente. ")
}

function dica02() {
    alert ("?? o circuito digital capaz de combinar uma variedade de opera????es l??gicas e aritm??ticas a serem executadas no computador, tamb??m conhecida como ???grande calculadora eletr??nica??? ")
}

function dica03() {
    alert ("Parte de um sistema computacional que realiza as instru????es de um programa de computador, para executar a aritm??tica b??sica, l??gica, e a entrada e sa??da de dados.")
}

function dica04() {
    alert ("?? um tipo de dispositivo de armazenamento n??o vol??til, trata-se de um chip re-escrev??vel que preserva seu conte??do sem necessidade de fonte de alimenta????o. Apresenta maior resist??ncia comparado aos discos r??gidos e possuem altas velocidades de transfer??ncia, por??m apresentam uma n??mero finito de escritas/exclus??es. Usada atualmente em cart??es de mem??ria, pen drives, Unidades de Estado S??lido (SSD). ")
}

function dica05() {
    alert ("Ele ?? um tipo de mem??ria de acesso aleat??rio, que as informa????es s??o gravadas uma ??nica vez e ap??s isso n??o podem ser alteradas ou apagadas, somente acessadas, mem??rias cujo conte??do ?? gravado permanentemente.")
}

function dica06() {
    alert ("?? uma mem??ria vol??til capaz de carregar os programas em execu????o e os respectivos dados do utilizador, usada pelo processador para armazenamento tempor??rio de arquivos e programas que est??o sendo processados no momento. O seu funcionamento permite uma troca de dados mais r??pida pelo processador do que pelo acesso ao disco r??gido devido sua maior velocidade de largura de banda.")
}

function dica07() {
    alert (" ?? utilizado tanto em computadores residenciais quanto em comerciais. O i5 ?? conhecido como um processador de alto desempenho, capaz de lidar com jogos modernos e alguns programas de edi????o pesados. Seus modelos podem vir em duas configura????es diferentes: 2 n??cleos com hyperthreading ou 4 n??cleos sem hyperthreading. No entanto, seu grande diferencial para os modelos i3 ?? a tecnologia Turboboost que possibilita que o processador trabalhe em uma maior frequ??ncia. ")
}

function dica08() {
    alert ("?? um tipo de mem??ria n??o vol??til, ou seja, capaz de realizar armazenamento de dados em massa. Uma vez programada, ela ?? capaz de ser lida ilimitadas vezes e pode ser apagada apenas por exposi????o a uma forte luz ultravioleta. Usada antigamente em chips de BIOS de PCs. ")
}

function dica09() {
    alert ("Possui como fun????o armazenar grandes quantidades de informa????es, portanto ?? uma mem??ria n??o-vol??til que mant??m os dados mesmo com seu desligamento, possui uma velocidade menor comparada ??s outras mem??rias de computador devido sua alta capacidade de armazenamento de dados. Presente comumente em unidades de disco r??gido. ")
}

function dica10() {
    alert ("?? uma linha de controle que habilita a mem??ria para que as portas de entrada e sa??da (I/O) sejam liberadas para a opera????o desejada. Ele ?? um pino de comando presente em v??rios circuitos integrados que conecta as portas de entrada e sa??da no dispositivo para o circuito interno daquele dispositivo. Um exemplo ?? o protocolo ???Serial Peripheral Interface??? (SPI). ")
}

function dica11() {
    alert ("?? considerado o modelo mais potente da fam??lia Core, sendo amplamente usado para rodar jogos de ??ltima gera????o e softwares de produ????o de conte??do, projetos e edi????o de imagens. Seu foco ?? a alta velocidade e o desempenho m??ximo. Ao contr??rio dos demais, o i7 apresenta uma variedade de configura????es, partindo de 6 n??cleos at?? incr??veis 10. Todas as vers??es do i7 apresentam as tecnologias de hyperthreading e TurboBoost disponibilizadas nos modelos anteriores. Al??m disso, o grande diferencial desse processador ?? contar com uma quantidade maior de cache L3, a cache de uso comum dos n??cleos, o que aumenta muito a capacidade de processamento deste modelo. ")
}

function dica12() {
    alert ("Ele realiza o acesso a mem??ria RAM do sistema sem depender do processador, realizando este acesso direto, a transfer??ncia de dados ocorre de uma forma muito mais r??pida, que com deste processo, ele permite que o processador n??o seja sobrecarregado. Utilizado comumente em controladores de disco, placas gr??ficas, placas de rede ou placas de som. ")
}

function dica13() {
    alert ("A ???Comunica????o de Endere??os??? possui como fun????o indicar o endere??o de mem??ria dos dados que o processador deve retirar ou enviar. A largura da comunica????o de endere??o determina quanta mem??ria o sistema pode endere??ar. Por exemplo: um sistema com comunica????o de endere??o de 32  bits pode endere??ar 2???? loca????es de mem??ria, se cada loca????o de mem??ria for de 1 byte ent??o o espa??o de mem??ria endere????vel ?? de 4GB.")
}

function dica14() {
    alert ("Um processador que em sua arquitetura possui suas opera????es divididas em quatro partes, permitindo que seu trabalho seja realizado em um ambiente multitarefa. Portanto possuem um poder de processamento muito maior em rela????o aos antecessores devido sua presen??a do dobro de n??cleos f??sicos o que auxilia em maiores capacidades de multitarefa. Exemplos: AMD Athlon II X4, Intel Core 2 Quad, Intel Core i5, Intel Core i7, AMD Ryzen 5. ")
}

function dica15() {
    alert ("A ???Comunica????o de Dados??? possui como fun????o o transporte dos dados de um computador. Ele ?? um sistema de comunica????o que transfere os dados entre diferentes componentes de um computador ou entre diferentes computadores, possuindo seus diversos barramentos como o de, mem??ria, de ???Peripheral Component Interconnect standard??? (PCI), e ???Universal Serial Bus??? (USB). ")
}

function dica16() {
    alert ("Um processador que possui suas opera????es divididas em duas partes, permitindo que seu trabalho seja realizado em um ambiente multitarefa. Podendo dividir suas tarefas, apresentam concentra????es de calor menores e de maiores largura de banda de dados. Exemplos: AMD Athlon 64 X2, Intel Celeron Dual-Core, Intel Pentium D, Intel Core 2 Duo, Intel Core i3. ")
}