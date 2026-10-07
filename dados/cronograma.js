// Cronograma ETEC - Reescrito dia a dia
// Início: terça-feira, 06/10/2026
// Prova: domingo, 06/12/2026 (9 semanas de estudo)
// Cada dia tem uma disciplina principal com vídeo(s)
// "assuntos" liga o dia aos assuntos do banco de questões (lista em relatorios/classificacao_duvidas.md);
// é o que a aba Estudar usa nos "Exercícios do dia". Dia sem "assuntos" usa só a disciplina.
// "min" em cada vídeo é a duração em minutos, mostrada na aba Cronograma (opcional).

window.CRONOGRAMA = {
  meta: "Preparação de 9 semanas para o Vestibulinho ETEC",
  datainicio: "2026-10-06",
  dataprova: "2026-12-06",
  resumo: "Fundamentos → Aprofundamento → Simulados → Revisão",
  diasTotais: 45,

  semanas: [
    // SEMANA 1: Início (4 dias) + Revisão
    {
      numero: 1,
      titulo: "Semana 1: Fundamentos Iniciais (06-10/10)",
      data_inicio: "2026-10-06",
      dias: [
        {
          data: "2026-10-06",
          dia_semana: "Terça",
          disciplina: "Português",
          tema: "Leitura e Interpretação de Textos",
          assuntos: ["Interpretação de texto"],
          videos: [
            { titulo: "Leitura e Interpretação", url: "https://www.youtube.com/watch?v=XsN0e_xPyNI" }
          ],
          tempo: "40 min",
          resumo: "Técnicas de leitura, compreensão, intenção do autor"
        },
        {
          data: "2026-10-07",
          dia_semana: "Quarta",
          disciplina: "Matemática",
          tema: "Frações e Operações",
          assuntos: ["Operações e problemas", "Razão e proporção"],
          videos: [
            { titulo: "Frações - Operações", url: "https://www.youtube.com/watch?v=YJyY6A_MOQc" }
          ],
          tempo: "40 min",
          resumo: "Soma, subtração, multiplicação e divisão de frações"
        },
        {
          data: "2026-10-08",
          dia_semana: "Quinta",
          disciplina: "Geografia",
          tema: "Mapas e Coordenadas Geográficas",
          assuntos: ["Cartografia e orientação", "Território brasileiro e regiões"],
          videos: [
            { titulo: "Coordenadas Geográficas (Geobrasil)", url: "https://www.youtube.com/watch?v=oDouTDx2-dY" }
          ],
          tempo: "40 min",
          resumo: "Latitude, longitude, escala, projeções cartográficas"
        },
        {
          data: "2026-10-09",
          dia_semana: "Sexta",
          disciplina: "História",
          tema: "Brasil Colônia (1500-1822)",
          assuntos: ["Brasil Colônia"],
          videos: [
            { titulo: "Brasil Colônia Completo", url: "https://www.youtube.com/watch?v=6uO5Ey5MVow", min: 29 }
          ],
          tempo: "40 min",
          resumo: "Descobrimento, capitanias hereditárias, economia colonial"
        }
      ],
      sabado: {
        data: "2026-10-10",
          dia_semana: "Sábado",
        tipo: "Revisão + Questões",
        descricao: "Revisão das 4 disciplinas da semana com questões do banco"
      }
    },

    // SEMANA 2: Fundamentos continu + Revisão
    {
      numero: 2,
      titulo: "Semana 2: Fundamentos Continuação (12-17/10)",
      data_inicio: "2026-10-12",
      dias: [
        {
          data: "2026-10-12",
          dia_semana: "Segunda",
          disciplina: "Biologia",
          tema: "Célula, Microrganismos e Doenças",
          assuntos: ["Célula", "Doenças e saneamento"],
          videos: [
            { titulo: "Célula e Organelas", url: "https://www.youtube.com/watch?v=8Z0MdYoZzeM", min: 12 },
            { titulo: "Vírus, Bactérias e Fungos (Descomplica)", url: "https://www.youtube.com/watch?v=XYyHBwXfxyk", min: 6 },
            { titulo: "Soro e Vacina (Samuel Cunha)", url: "https://www.youtube.com/watch?v=Ltu7uYneynk", min: 12 }
          ],
          tempo: "40 min",
          resumo: "Estrutura celular e organelas; vírus, bactérias, protozoários e vermes; doenças, prevenção, vacina e soro"
        },
        {
          data: "2026-10-13",
          dia_semana: "Terça",
          disciplina: "Física",
          tema: "Movimento e Força",
          assuntos: ["Movimento e velocidade", "Forças e máquinas simples"],
          videos: [
            { titulo: "Velocidade Média (Professor Boaro)", url: "https://www.youtube.com/watch?v=wlTa_yTElGM", min: 11 },
            { titulo: "Leis de Newton (Hexag)", url: "https://www.youtube.com/watch?v=dU14qCv5AuI", min: 14 }
          ],
          tempo: "40 min",
          resumo: "Velocidade, aceleração, leis de Newton, trabalho"
        },
        {
          data: "2026-10-14",
          dia_semana: "Quarta",
          disciplina: "Química",
          tema: "Átomo e Tabela Periódica",
          assuntos: ["Átomo e tabela periódica"],
          videos: [
            { titulo: "Átomos e moléculas - 9º ano (Canal Futura)", url: "https://www.youtube.com/watch?v=YMyyg1hzNfw", min: 13 },
            { titulo: "Tabela Periódica em 10 minutos (Toda Matéria)", url: "https://www.youtube.com/watch?v=Vsnq2hJ2UZc", min: 9 }
          ],
          tempo: "40 min",
          resumo: "Próton, nêutron, elétron, número atômico e de massa; grupos e períodos da tabela"
        },
        {
          data: "2026-10-15",
          dia_semana: "Quinta",
          disciplina: "Português",
          tema: "Tipos de Texto e Gêneros",
          assuntos: ["Gêneros e tipos textuais", "Charge, tirinha e imagem"],
          videos: [
            { titulo: "Tipos e Gêneros Textuais (Português com Letícia)", url: "https://www.youtube.com/watch?v=keri15mSleA" }
          ],
          tempo: "40 min",
          resumo: "Narrativo, descritivo, dissertativo, carta, artigo, resenha"
        },
        {
          data: "2026-10-16",
          dia_semana: "Sexta",
          disciplina: "Matemática",
          tema: "Porcentagem e Acréscimos",
          assuntos: ["Porcentagem"],
          videos: [
            { titulo: "Porcentagem", url: "https://www.youtube.com/watch?v=nUgAGtEBleM" }
          ],
          tempo: "40 min",
          resumo: "Cálculo de porcentagem, aumento, desconto, juros simples"
        }
      ],
      sabado: {
        data: "2026-10-17",
          dia_semana: "Sábado",
        tipo: "Revisão + Questões",
        descricao: "Revisão das 5 disciplinas da semana 2 com questões"
      }
    },

    // SEMANA 3: Simulado 1º sem/2023
    {
      numero: 3,
      titulo: "Semana 3: Aprofundamento I (19-24/10)",
      data_inicio: "2026-10-19",
      dias: [
        {
          data: "2026-10-19",
          dia_semana: "Segunda",
          disciplina: "Geografia",
          tema: "Biomas Brasileiros",
          assuntos: ["Vegetação e biomas", "Meio ambiente e sustentabilidade"],
          videos: [
            { titulo: "Biomas Brasileiros (Toda Matéria)", url: "https://www.youtube.com/watch?v=eEPabXAVzNA" }
          ],
          tempo: "40 min",
          resumo: "Amazônia, Cerrado, Caatinga, Pantanal, Mata Atlântica"
        },
        {
          data: "2026-10-20",
          dia_semana: "Terça",
          disciplina: "História",
          tema: "Escravidão e Abolição",
          assuntos: ["Povos indígenas e cultura afro-brasileira", "Brasil Império"],
          videos: [
            { titulo: "Escravidão no Brasil", url: "https://www.youtube.com/watch?v=qqSRyVsbjXE" }
          ],
          tempo: "40 min",
          resumo: "Tráfico negreiro, resistência escrava, Lei Áurea"
        },
        {
          data: "2026-10-21",
          dia_semana: "Quarta",
          disciplina: "Biologia",
          tema: "Fotossíntese",
          assuntos: ["Fotossíntese e respiração", "Ecologia"],
          videos: [
            { titulo: "Resumo sobre Fotossíntese (Samuel Cunha)", url: "https://www.youtube.com/watch?v=fHC6M7xncds" }
          ],
          tempo: "40 min",
          resumo: "Fotossíntese clara e escura, cloroplasto, produção de glicose"
        },
        {
          data: "2026-10-22",
          dia_semana: "Quinta",
          disciplina: "Física",
          tema: "Energia e Potência",
          assuntos: ["Energia e potência"],
          videos: [
            { titulo: "Trabalho, Potência e Energia (Ítalo Feitosa)", url: "https://www.youtube.com/watch?v=Ml_NyaV6oNk" }
          ],
          tempo: "40 min",
          resumo: "Energia cinética, potencial, conservação, trabalho, potência"
        },
        {
          data: "2026-10-23",
          dia_semana: "Sexta",
          disciplina: "Química",
          tema: "Ligações Químicas",
          assuntos: ["Fórmulas e ligações químicas", "Substâncias e misturas"],
          videos: [
            { titulo: "Ligações Químicas (Professor Igor Química)", url: "https://www.youtube.com/watch?v=UjXlHX3EEi0" }
          ],
          tempo: "40 min",
          resumo: "Iônica, covalente, metálica, diferença de eletronegatividade"
        }
      ],
      sabado: {
        data: "2026-10-24",
          dia_semana: "Sábado",
        tipo: "Simulado",
        simulado: "1º sem/2023",
        descricao: "Simulado com 52 questões de todas as disciplinas"
      }
    },

    // SEMANA 4: Simulado 2º sem/2023
    {
      numero: 4,
      titulo: "Semana 4: Aprofundamento II (26-31/10)",
      data_inicio: "2026-10-26",
      dias: [
        {
          data: "2026-10-26",
          dia_semana: "Segunda",
          disciplina: "Português",
          tema: "Figura de Linguagem",
          assuntos: ["Figuras de linguagem", "Vocabulário e sentido das palavras"],
          videos: [
            { titulo: "Figuras de Linguagem (Professor Noslen)", url: "https://www.youtube.com/watch?v=n0e75nRstcU" }
          ],
          tempo: "40 min",
          resumo: "Metáfora, metonímia, antítese, hipérbole, ironia"
        },
        {
          data: "2026-10-27",
          dia_semana: "Terça",
          disciplina: "Matemática",
          tema: "Geometria Plana",
          assuntos: ["Geometria plana", "Geometria espacial e volume"],
          videos: [
            { titulo: "Área das Figuras Planas (Sandro Curió)", url: "https://www.youtube.com/watch?v=th5k6bzSDTA" }
          ],
          tempo: "40 min",
          resumo: "Triângulos, quadriláteros, círculos, áreas, perímetros"
        },
        {
          data: "2026-10-28",
          dia_semana: "Quarta",
          disciplina: "Geografia",
          tema: "Clima e Mudanças Climáticas",
          assuntos: ["Clima", "Hidrografia e oceanos", "Meio ambiente e sustentabilidade"],
          videos: [
            { titulo: "Clima: Elementos e Fatores (Descomplica)", url: "https://www.youtube.com/watch?v=D3YQ6zl3-2M", min: 16 },
            { titulo: "O que é o Efeito Estufa? (Toda Matéria)", url: "https://www.youtube.com/watch?v=nTmWFWWbzkQ", min: 7 }
          ],
          tempo: "40 min",
          resumo: "Tipos de clima, fatores climáticos, aquecimento global, efeito estufa"
        },
        {
          data: "2026-10-29",
          dia_semana: "Quinta",
          disciplina: "História",
          tema: "Da Antiguidade às Grandes Navegações",
          assuntos: ["Antiguidade", "Fontes e conceitos históricos", "Idade Média e Moderna"],
          videos: [
            { titulo: "Egito Antigo (Toda Matéria)", url: "https://www.youtube.com/watch?v=2T8ereEFd58", min: 6 },
            { titulo: "Grécia Antiga (Toda Matéria)", url: "https://www.youtube.com/watch?v=H7tY0E7--GY", min: 9 },
            { titulo: "Idade Média (Toda Matéria)", url: "https://www.youtube.com/watch?v=xYRsIQT-Qmc", min: 13 },
            { titulo: "Expansão Marítima: Grandes Navegações (Toda Matéria)", url: "https://www.youtube.com/watch?v=Xay4R-cB7OA", min: 6 },
            { titulo: "O Renascimento em 5 Minutos (Toda Matéria)", url: "https://www.youtube.com/watch?v=hYTQ7VnQ5lU", min: 6 }
          ],
          tempo: "40 min",
          resumo: "Egito e Grécia antigos, Idade Média, Grandes Navegações e Renascimento"
        },
        {
          data: "2026-10-30",
          dia_semana: "Sexta",
          disciplina: "Biologia",
          tema: "Respiração Celular",
          assuntos: ["Fotossíntese e respiração", "Corpo humano e saúde"],
          videos: [
            { titulo: "Resumo sobre Respiração Celular (Samuel Cunha)", url: "https://www.youtube.com/watch?v=exX6EtKL6PU" }
          ],
          tempo: "40 min",
          resumo: "Glicólise, Ciclo de Krebs, cadeia respiratória, ATP"
        }
      ],
      sabado: {
        data: "2026-10-31",
          dia_semana: "Sábado",
        tipo: "Simulado",
        simulado: "2º sem/2023",
        descricao: "Simulado com questões variadas"
      }
    },

    // SEMANA 5: Simulado 1º sem/2024
    {
      numero: 5,
      titulo: "Semana 5: Conceitos Intermediários (02-07/11)",
      data_inicio: "2026-11-02",
      dias: [
        {
          data: "2026-11-02",
          dia_semana: "Segunda",
          disciplina: "Física",
          tema: "Ondas, Som e Luz",
          assuntos: ["Ondas e som", "Luz e óptica"],
          videos: [
            { titulo: "Ondulatória: Características das Ondas (Curso Enem Gratuito)", url: "https://www.youtube.com/watch?v=Rmgqv8ETn6o", min: 8 },
            { titulo: "Ondas Sonoras (Brasil Escola)", url: "https://www.youtube.com/watch?v=kR5FSlOPrhI", min: 8 },
            { titulo: "Introdução à Óptica: Fenômenos Ópticos (Partiu Universidade)", url: "https://www.youtube.com/watch?v=ObDG87IPzFE", min: 11 },
            { titulo: "Defeitos da Visão: Miopia e Hipermetropia (Maurício Física)", url: "https://www.youtube.com/watch?v=K8GCpMgUJsg", min: 5 }
          ],
          tempo: "40 min",
          resumo: "Frequência, comprimento de onda, velocidade do som, eco; reflexão e refração da luz, olho humano e lentes"
        },
        {
          data: "2026-11-03",
          dia_semana: "Terça",
          disciplina: "Química",
          tema: "Reações Químicas e Combustíveis",
          assuntos: ["Transformações e reações químicas", "Ácidos, bases, sais e óxidos", "Química ambiental e combustíveis"],
          videos: [
            { titulo: "Reações Químicas (Brasil Escola)", url: "https://www.youtube.com/watch?v=VrUvy1N66U0", min: 11 },
            { titulo: "Combustíveis Fósseis (Brasil Escola)", url: "https://www.youtube.com/watch?v=o3zrvIYme_w", min: 8 }
          ],
          tempo: "40 min",
          resumo: "Transformações químicas, ácido-base, combustão; petróleo, combustíveis fósseis e gases do efeito estufa"
        },
        {
          data: "2026-11-04",
          dia_semana: "Quarta",
          disciplina: "Português",
          tema: "Análise Sintática",
          assuntos: ["Gramática e conectivos", "Coesão e pronomes"],
          videos: [
            { titulo: "Análise Sintática (Professor Noslen)", url: "https://www.youtube.com/watch?v=ZR_Ou01WsK0" },
            { titulo: "Exercícios de Sujeito (Professor Noslen)", url: "https://www.youtube.com/watch?v=XwPIcvHHE5A" }
          ],
          tempo: "40 min",
          resumo: "Sujeito, predicado, complementos, adjuntos, orações"
        },
        {
          data: "2026-11-05",
          dia_semana: "Quinta",
          disciplina: "Matemática",
          tema: "Sistemas de Equações e Notação Científica",
          assuntos: ["Equações e sistemas", "Funções e expressões algébricas", "Potências e notação científica"],
          videos: [
            { titulo: "Sistemas de Equações do 1º Grau (Professor Ferretto)", url: "https://www.youtube.com/watch?v=oT4k6bhB4Dk", min: 21 },
            { titulo: "Notação Científica (Sandro Curió)", url: "https://www.youtube.com/watch?v=2C4T0qfs_o8", min: 7 }
          ],
          tempo: "40 min",
          resumo: "Método da substituição e da adição; potências de 10 e notação científica"
        },
        {
          data: "2026-11-06",
          dia_semana: "Sexta",
          disciplina: "Geografia",
          tema: "Recursos Naturais, Economia e Relevo",
          assuntos: ["Energia e recursos naturais", "Economia, agropecuária e transportes", "Relevo e geologia"],
          videos: [
            { titulo: "Fontes de Energia (Brasil Escola)", url: "https://www.youtube.com/watch?v=BRaJVqRwU38", min: 13 },
            { titulo: "Terremotos e Tsunamis (geo ilustrada)", url: "https://www.youtube.com/watch?v=pHShanCExgQ", min: 6 },
            { titulo: "Deriva Continental e Placas Tectônicas (geo ilustrada)", url: "https://www.youtube.com/watch?v=DX19JF7R13g", min: 5 }
          ],
          tempo: "40 min",
          resumo: "Petróleo, minérios, água, fontes de energia; placas tectônicas, terremotos e tsunamis"
        }
      ],
      sabado: {
        data: "2026-11-07",
          dia_semana: "Sábado",
        tipo: "Simulado",
        simulado: "1º sem/2024",
        descricao: "Simulado com 49 questões"
      }
    },

    // SEMANA 6: Simulado 2º sem/2024
    {
      numero: 6,
      titulo: "Semana 6: Prática e Aplicações (09-14/11)",
      data_inicio: "2026-11-09",
      dias: [
        {
          data: "2026-11-09",
          dia_semana: "Segunda",
          disciplina: "História",
          tema: "República Velha e Era Vargas",
          assuntos: ["Brasil República"],
          videos: [
            { titulo: "República Velha (Descomplica)", url: "https://www.youtube.com/watch?v=Vw4HGHDWMjs", min: 13 },
            { titulo: "Resumo: Era Vargas (Débora Aladim)", url: "https://www.youtube.com/watch?v=ZcTDWBqUju8", min: 26 }
          ],
          tempo: "40 min",
          resumo: "Coronelismo, café-com-leite, ciclo da borracha; governo provisório, Estado Novo, industrialização"
        },
        {
          data: "2026-11-10",
          dia_semana: "Terça",
          disciplina: "Biologia",
          tema: "Evolução e Seleção Natural",
          assuntos: ["Evolução e genética", "Ecologia"],
          videos: [
            { titulo: "Evolução e Darwin", url: "https://www.youtube.com/watch?v=piRSx5SvYv8" }
          ],
          tempo: "40 min",
          resumo: "Seleção natural, especiação, evidências da evolução, Darwin"
        },
        {
          data: "2026-11-11",
          dia_semana: "Quarta",
          disciplina: "Física",
          tema: "Eletricidade e Magnetismo",
          assuntos: ["Eletricidade e magnetismo", "Energia e potência"],
          videos: [
            { titulo: "Circuitos Elétricos no Cotidiano (Canal Futura)", url: "https://www.youtube.com/watch?v=N0DnSlhijOU", min: 13 },
            { titulo: "Magnetismo: Ímãs e Campo Magnético (Pura Física)", url: "https://www.youtube.com/watch?v=h0dYRTYiKDY", min: 20 }
          ],
          tempo: "40 min",
          resumo: "Corrente, tensão, resistência, circuitos; ímãs, polos e campo magnético da Terra"
        },
        {
          data: "2026-11-12",
          dia_semana: "Quinta",
          disciplina: "Português",
          tema: "Tempos e Modos Verbais",
          assuntos: ["Verbos e reescrita de frases", "Gramática e conectivos"],
          videos: [
            { titulo: "Tempos e Modos Verbais (Português com Letícia)", url: "https://www.youtube.com/watch?v=WK6WqY3iRU8" }
          ],
          tempo: "40 min",
          resumo: "Presente, passado, futuro, indicativo, subjuntivo, imperativo"
        },
        {
          data: "2026-11-13",
          dia_semana: "Sexta",
          disciplina: "Física",
          tema: "Pressão e Flutuação",
          assuntos: ["Pressão e flutuação"],
          videos: [
            { titulo: "Hidrostática: Densidade e Pressão (Curso Enem Gratuito)", url: "https://www.youtube.com/watch?v=raBp9dY__WE", min: 11 },
            { titulo: "Empuxo e o Princípio de Arquimedes (Ciência Todo Dia)", url: "https://www.youtube.com/watch?v=57qs91GBscU", min: 10 }
          ],
          tempo: "40 min",
          resumo: "Pressão (força por área), pressão atmosférica e na água, empuxo e flutuação"
        }
      ],
      sabado: {
        data: "2026-11-14",
          dia_semana: "Sábado",
        tipo: "Simulado",
        simulado: "2º sem/2024",
        descricao: "Simulado com 50 questões"
      }
    },

    // SEMANA 7: Simulado 1º sem/2025
    {
      numero: 7,
      titulo: "Semana 7: Intensificação (16-21/11)",
      data_inicio: "2026-11-16",
      dias: [
        {
          data: "2026-11-16",
          dia_semana: "Segunda",
          disciplina: "Matemática",
          tema: "Trigonometria Básica",
          assuntos: ["Triângulo retângulo (Pitágoras e trigonometria)", "Geometria plana"],
          videos: [
            { titulo: "Trigonometria no Triângulo Retângulo (Sandro Curió)", url: "https://www.youtube.com/watch?v=C7NrVLmEYcs" }
          ],
          tempo: "40 min",
          resumo: "Seno, cosseno, tangente, ciclo trigonométrico, ângulos"
        },
        {
          data: "2026-11-17",
          dia_semana: "Terça",
          disciplina: "Geografia",
          tema: "Urbanização e Cidades",
          assuntos: ["Urbanização e população"],
          videos: [
            { titulo: "Urbanização (Brasil Escola)", url: "https://www.youtube.com/watch?v=4ayDPXtQR5w" }
          ],
          tempo: "40 min",
          resumo: "Êxodo rural, favelas, segregação urbana, metrópoles"
        },
        {
          data: "2026-11-18",
          dia_semana: "Quarta",
          disciplina: "História",
          tema: "Ditadura Militar e Redemocratização",
          assuntos: ["Brasil República"],
          videos: [
            { titulo: "Ditadura Militar no Brasil (Toda Matéria)", url: "https://www.youtube.com/watch?v=phR8Lys4g8E", min: 12 },
            { titulo: "Redemocratização do Brasil (Toda Matéria)", url: "https://www.youtube.com/watch?v=DAxqtxYnqU0", min: 5 },
            { titulo: "Nova República (Parabólica)", url: "https://www.youtube.com/watch?v=Sy29kcGqqjI", min: 10 }
          ],
          tempo: "40 min",
          resumo: "Golpe de 1964, regime militar, repressão, anistia, Diretas Já, Constituição de 1988"
        },
        {
          data: "2026-11-19",
          dia_semana: "Quinta",
          disciplina: "Biologia",
          tema: "Reprodução e Desenvolvimento",
          assuntos: ["Seres vivos (animais e plantas)", "Evolução e genética"],
          videos: [
            { titulo: "Tipos de Reprodução: Sexuada e Assexuada (Samuel Cunha)", url: "https://www.youtube.com/watch?v=eAaJ4H7OKDA" }
          ],
          tempo: "40 min",
          resumo: "Mitose, meiose, gametogênese, fecundação, desenvolvimento embrionário"
        },
        {
          data: "2026-11-20",
          dia_semana: "Sexta",
          disciplina: "Física",
          tema: "Calor, Temperatura e Astronomia",
          assuntos: ["Calor e temperatura", "Astronomia e gravitação"],
          videos: [
            { titulo: "Formas de Propagação de Calor - 7º ano (Canal Futura)", url: "https://www.youtube.com/watch?v=ecYI7GUVKPM", min: 11 },
            { titulo: "Temperatura e Calor (Matemática no Papel)", url: "https://www.youtube.com/watch?v=dgDqJp4ppN4", min: 8 },
            { titulo: "Estações do Ano (Brasil Escola)", url: "https://www.youtube.com/watch?v=GnJdnzOp7a4", min: 7 },
            { titulo: "Efeito de Maré (O Incrível Pontinho Azul)", url: "https://www.youtube.com/watch?v=sH4DiW2wRds", min: 3 }
          ],
          tempo: "40 min",
          resumo: "Calor x temperatura, condução, convecção, irradiação, evaporação; estações do ano, equinócio e marés"
        }
      ],
      sabado: {
        data: "2026-11-21",
          dia_semana: "Sábado",
        tipo: "Simulado",
        simulado: "1º sem/2025",
        descricao: "Simulado com 50 questões"
      }
    },

    // SEMANA 8: Simulado 1º sem/2026
    {
      numero: 8,
      titulo: "Semana 8: Simulados Consecutivos (23-28/11)",
      data_inicio: "2026-11-23",
      dias: [
        {
          data: "2026-11-23",
          dia_semana: "Segunda",
          disciplina: "Português",
          tema: "Interpretação de Textos Complexos",
          assuntos: ["Interpretação de texto", "Competências e projeto de vida"],
          videos: [
            { titulo: "Interpretação Avançada", url: "https://www.youtube.com/watch?v=XsN0e_xPyNI" }
          ],
          tempo: "40 min",
          resumo: "Leitura crítica, inferências, contexto, discurso indireto"
        },
        {
          data: "2026-11-24",
          dia_semana: "Terça",
          disciplina: "Matemática",
          tema: "Estatística e Probabilidade",
          assuntos: ["Média e estatística", "Contagem e probabilidade", "Gráficos e tabelas"],
          videos: [
            { titulo: "Média, Moda e Mediana (Gis com Giz)", url: "https://www.youtube.com/watch?v=GIzwKJL33_g" },
            { titulo: "Probabilidade (Sandro Curió)", url: "https://www.youtube.com/watch?v=iNCkGogNtKI" }
          ],
          tempo: "40 min",
          resumo: "Média, mediana, moda, probabilidade, combinatória"
        },
        {
          data: "2026-11-25",
          dia_semana: "Quarta",
          disciplina: "Química",
          tema: "Soluções e Concentração",
          assuntos: ["Densidade e propriedades da matéria", "Separação de misturas", "Substâncias e misturas"],
          videos: [
            { titulo: "Concentração das Soluções (Curso Enem Gratuito)", url: "https://www.youtube.com/watch?v=ZwT6epapk-A" }
          ],
          tempo: "40 min",
          resumo: "Soluto, solvente, concentração, molalidade, diluição, titulação"
        },
        {
          data: "2026-11-26",
          dia_semana: "Quinta",
          disciplina: "Geografia",
          tema: "Geopolítica e Blocos Econômicos",
          assuntos: ["Economia, agropecuária e transportes"],
          videos: [
            { titulo: "Blocos Econômicos (Descomplica)", url: "https://www.youtube.com/watch?v=tFGlxXZSTqY" }
          ],
          tempo: "40 min",
          resumo: "ONU, OTAN, MERCOSUL, BRICS, conflitos geopolíticos"
        },
        {
          data: "2026-11-27",
          dia_semana: "Sexta",
          disciplina: "História",
          tema: "Revolução Industrial, Imperialismo e Século XX",
          assuntos: ["Revolução Industrial e Imperialismo", "Século XX"],
          videos: [
            { titulo: "Revolução Industrial (Toda Matéria)", url: "https://www.youtube.com/watch?v=aVQ_1srdzK4", min: 11 },
            { titulo: "O que foi o Imperialismo? (Toda Matéria)", url: "https://www.youtube.com/watch?v=_fyQjzR6Sm0", min: 7 },
            { titulo: "Segunda Guerra Mundial: Resumão (Toda Matéria)", url: "https://www.youtube.com/watch?v=ZffDTZTmLGI", min: 9 },
            { titulo: "Guerra Fria em 6 Minutos (Toda Matéria)", url: "https://www.youtube.com/watch?v=6QOkLu4kOOI", min: 6 }
          ],
          tempo: "40 min",
          resumo: "Máquina a vapor e fábricas, neocolonialismo na África e na Ásia, guerras mundiais, Guerra Fria e descolonização"
        }
      ],
      sabado: {
        data: "2026-11-28",
          dia_semana: "Sábado",
        tipo: "Simulado",
        simulado: "1º sem/2026",
        descricao: "Simulado com questões variadas"
      }
    },

    // SEMANA 9: Revisão Final + Simulado 2º sem/2026
    {
      numero: 9,
      titulo: "Semana 9: Revisão Final e Prova (30/11-05/12)",
      data_inicio: "2026-11-30",
      dias: [
        {
          data: "2026-11-30",
          dia_semana: "Segunda",
          disciplina: "Revisão Geral",
          tema: "Tópicos Críticos de Todas as Disciplinas",
          videos: [
            { titulo: "Revisão Port", url: "https://www.youtube.com/watch?v=XsN0e_xPyNI" },
            { titulo: "Revisão Mat", url: "https://www.youtube.com/watch?v=YJyY6A_MOQc" }
          ],
          tempo: "60 min",
          resumo: "Revisão intensiva de português, matemática, tópicos principais"
        },
        {
          data: "2026-12-01",
          dia_semana: "Terça",
          disciplina: "Revisão Geral",
          tema: "Tópicos Críticos de Ciências e Humanas",
          videos: [
            { titulo: "Revisão Ciências", url: "https://www.youtube.com/watch?v=8Z0MdYoZzeM", min: 12 },
            { titulo: "Revisão Humanas", url: "https://www.youtube.com/watch?v=6uO5Ey5MVow", min: 29 }
          ],
          tempo: "60 min",
          resumo: "Revisão Bio, Fís, Quím, Geo, Hist, tópicos principais"
        },
        {
          data: "2026-12-02",
          dia_semana: "Quarta",
          disciplina: "Revisão Geral",
          tema: "Questões Comentadas de Provas Anteriores",
          videos: [
            { titulo: "ETEC 2026 1º semestre - Correção, parte 1 (Vestibulinho Digital)", url: "https://www.youtube.com/watch?v=MGaEFqJko0c" }
          ],
          tempo: "60 min",
          resumo: "Análise de questões difíceis de simulados anteriores"
        },
        {
          data: "2026-12-03",
          dia_semana: "Quinta",
          disciplina: "Relaxamento",
          tema: "Revisão Leve e Dicas de Prova",
          videos: [
            { titulo: "3 Dicas de Ouro para a Prova da ETEC (Oficina da Aprovação)", url: "https://www.youtube.com/watch?v=3aC6amAVx1o" }
          ],
          tempo: "30 min",
          resumo: "Estratégia de prova, gestão de tempo, ansiedade"
        },
        {
          data: "2026-12-04",
          dia_semana: "Sexta",
          disciplina: "Repouso",
          tema: "Dia Livre - Repouso antes da prova",
          videos: [],
          tempo: "0 min",
          resumo: "Descanso. Releia seus resumos e respire fundo!"
        }
      ],
      sabado: {
        data: "2026-12-05",
          dia_semana: "Sábado",
        tipo: "Simulado",
        simulado: "2º sem/2026",
        descricao: "Último simulado completo antes da prova"
      }
    }
  ]
};
