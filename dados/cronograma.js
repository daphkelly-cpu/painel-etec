// Cronograma ETEC - Reescrito dia a dia
// Início: terça-feira, 06/10/2026
// Prova: domingo, 06/12/2026 (9 semanas de estudo)
// Cada dia tem uma disciplina principal com vídeo(s)
// "assuntos" liga o dia aos assuntos do banco de questões (lista em relatorios/classificacao_duvidas.md);
// é o que a aba Estudar usa nos "Exercícios do dia". Dia sem "assuntos" usa só a disciplina.

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
            { titulo: "Mapas e Coordenadas", url: "https://www.youtube.com/watch?v=_tRJjhkV-0I" }
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
            { titulo: "Brasil Colônia Completo", url: "https://www.youtube.com/watch?v=6uO5Ey5MVow" }
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
          tema: "Célula e Organelas",
          assuntos: ["Célula", "Seres vivos (animais e plantas)"],
          videos: [
            { titulo: "Célula e Organelas", url: "https://www.youtube.com/watch?v=8Z0MdYoZzeM" }
          ],
          tempo: "40 min",
          resumo: "Estrutura celular, núcleo, mitocôndria, plastos, membrana"
        },
        {
          data: "2026-10-13",
          dia_semana: "Terça",
          disciplina: "Física",
          tema: "Movimento e Força",
          assuntos: ["Movimento e velocidade", "Forças e máquinas simples"],
          videos: [
            { titulo: "Movimento e Força", url: "https://www.youtube.com/watch?v=Z8oHvBf8oQg" }
          ],
          tempo: "40 min",
          resumo: "Velocidade, aceleração, leis de Newton, trabalho"
        },
        {
          data: "2026-10-14",
          dia_semana: "Quarta",
          disciplina: "Química",
          tema: "Estrutura Atômica",
          assuntos: ["Átomo e tabela periódica"],
          videos: [
            { titulo: "Estrutura Atômica", url: "https://www.youtube.com/watch?v=X0jNKx0BkMg" }
          ],
          tempo: "40 min",
          resumo: "Próton, nêutron, elétron, números atômicos, massas"
        },
        {
          data: "2026-10-15",
          dia_semana: "Quinta",
          disciplina: "Português",
          tema: "Tipos de Texto e Gêneros",
          assuntos: ["Gêneros e tipos textuais", "Charge, tirinha e imagem"],
          videos: [
            { titulo: "Tipos de Texto", url: "https://www.youtube.com/watch?v=XwPIcvHHE5A" }
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
            { titulo: "Biomas Brasileiros", url: "https://www.youtube.com/watch?v=E0Yt3d3kIFk" }
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
            { titulo: "Fotossíntese", url: "https://www.youtube.com/watch?v=8Z0MdYoZzeM" }
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
            { titulo: "Energia e Potência", url: "https://www.youtube.com/watch?v=7DjOud20prk" }
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
            { titulo: "Ligações Químicas", url: "https://www.youtube.com/watch?v=b5_cSgplUWg" }
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
            { titulo: "Figuras de Linguagem", url: "https://www.youtube.com/watch?v=MQj-MFd-K5k" }
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
            { titulo: "Geometria Plana", url: "https://www.youtube.com/watch?v=8sddg0gXeEg" }
          ],
          tempo: "40 min",
          resumo: "Triângulos, quadriláteros, círculos, áreas, perímetros"
        },
        {
          data: "2026-10-28",
          dia_semana: "Quarta",
          disciplina: "Geografia",
          tema: "Clima e Mudanças Climáticas",
          assuntos: ["Clima", "Meio ambiente e sustentabilidade"],
          videos: [
            { titulo: "Clima e Mudanças Climáticas", url: "https://www.youtube.com/watch?v=OaLCe5L5Foc" }
          ],
          tempo: "40 min",
          resumo: "Tipos de clima, fatores climáticos, aquecimento global, efeito estufa"
        },
        {
          data: "2026-10-29",
          dia_semana: "Quinta",
          disciplina: "História",
          tema: "República Velha (1889-1930)",
          assuntos: ["Brasil República"],
          videos: [
            { titulo: "República Velha", url: "https://www.youtube.com/watch?v=f2kP0f-nq5s" }
          ],
          tempo: "40 min",
          resumo: "Coronelismo, voto de cabresto, política do café-com-leite"
        },
        {
          data: "2026-10-30",
          dia_semana: "Sexta",
          disciplina: "Biologia",
          tema: "Respiração Celular",
          assuntos: ["Fotossíntese e respiração", "Corpo humano e saúde"],
          videos: [
            { titulo: "Respiração Celular", url: "https://www.youtube.com/watch?v=8Z0MdYoZzeM" }
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
          tema: "Ondas e Som",
          assuntos: ["Ondas e som"],
          videos: [
            { titulo: "Ondas e Som", url: "https://www.youtube.com/watch?v=1vvFnAH0j1c" }
          ],
          tempo: "40 min",
          resumo: "Frequência, comprimento de onda, velocidade do som, eco"
        },
        {
          data: "2026-11-03",
          dia_semana: "Terça",
          disciplina: "Química",
          tema: "Reações Químicas",
          assuntos: ["Transformações e reações químicas", "Ácidos, bases, sais e óxidos"],
          videos: [
            { titulo: "Reações Químicas", url: "https://www.youtube.com/watch?v=dOm65kWO-O8" }
          ],
          tempo: "40 min",
          resumo: "Balanceamento, oxidação-redução, ácido-base, combustão"
        },
        {
          data: "2026-11-04",
          dia_semana: "Quarta",
          disciplina: "Português",
          tema: "Análise Sintática",
          assuntos: ["Gramática e conectivos", "Coesão e pronomes"],
          videos: [
            { titulo: "Análise Sintática", url: "https://www.youtube.com/watch?v=XwPIcvHHE5A" }
          ],
          tempo: "40 min",
          resumo: "Sujeito, predicado, complementos, adjuntos, orações"
        },
        {
          data: "2026-11-05",
          dia_semana: "Quinta",
          disciplina: "Matemática",
          tema: "Sistemas de Equações",
          assuntos: ["Equações e sistemas", "Funções e expressões algébricas"],
          videos: [
            { titulo: "Sistemas de Equações", url: "https://www.youtube.com/watch?v=4tYzMFbvm70" }
          ],
          tempo: "40 min",
          resumo: "Método da substituição, adição, 1º e 2º grau"
        },
        {
          data: "2026-11-06",
          dia_semana: "Sexta",
          disciplina: "Geografia",
          tema: "Recursos Naturais e Economia",
          assuntos: ["Energia e recursos naturais", "Economia, agropecuária e transportes"],
          videos: [
            { titulo: "Recursos Naturais", url: "https://www.youtube.com/watch?v=J-d_cVfYPDo" }
          ],
          tempo: "40 min",
          resumo: "Petróleo, minérios, água, fontes de energia, sustentabilidade"
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
          tema: "Era Vargas e Populismo",
          assuntos: ["Brasil República"],
          videos: [
            { titulo: "Era Vargas", url: "https://www.youtube.com/watch?v=DfgZGLZGi-g" }
          ],
          tempo: "40 min",
          resumo: "Governo provisório, Constituição, Estado Novo, consolidação de leis"
        },
        {
          data: "2026-11-10",
          dia_semana: "Terça",
          disciplina: "Biologia",
          tema: "Evolução e Seleção Natural",
          assuntos: ["Evolução e genética"],
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
          tema: "Eletricidade",
          assuntos: ["Eletricidade e magnetismo"],
          videos: [
            { titulo: "Eletricidade", url: "https://www.youtube.com/watch?v=Ixk9gqU_S0A" }
          ],
          tempo: "40 min",
          resumo: "Carga elétrica, corrente, voltagem, resistência, Lei de Ohm"
        },
        {
          data: "2026-11-12",
          dia_semana: "Quinta",
          disciplina: "Português",
          tema: "Tempos e Modos Verbais",
          assuntos: ["Verbos e reescrita de frases", "Gramática e conectivos"],
          videos: [
            { titulo: "Tempos Verbais", url: "https://www.youtube.com/watch?v=T8MB4vzTAv4" }
          ],
          tempo: "40 min",
          resumo: "Presente, passado, futuro, indicativo, subjuntivo, imperativo"
        },
        {
          data: "2026-11-13",
          dia_semana: "Sexta",
          disciplina: "Química",
          tema: "Tabela Periódica",
          assuntos: ["Átomo e tabela periódica"],
          videos: [
            { titulo: "Tabela Periódica", url: "https://www.youtube.com/watch?v=q48uaLyHyAc" }
          ],
          tempo: "40 min",
          resumo: "Grupos, períodos, propriedades periódicas, eletronegatividade"
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
            { titulo: "Trigonometria", url: "https://www.youtube.com/watch?v=49vYVzWN8HY" }
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
            { titulo: "Urbanização", url: "https://www.youtube.com/watch?v=KpNnlq_JQ48" }
          ],
          tempo: "40 min",
          resumo: "Êxodo rural, favelas, segregação urbana, metrópoles"
        },
        {
          data: "2026-11-18",
          dia_semana: "Quarta",
          disciplina: "História",
          tema: "Golpe de 1964 e Ditadura Militar",
          assuntos: ["Brasil República", "Século XX"],
          videos: [
            { titulo: "Ditadura Militar", url: "https://www.youtube.com/watch?v=3pRV8AyknFQ" }
          ],
          tempo: "40 min",
          resumo: "Contexto do golpe, regime militar, repressão, anistia"
        },
        {
          data: "2026-11-19",
          dia_semana: "Quinta",
          disciplina: "Biologia",
          tema: "Reprodução e Desenvolvimento",
          assuntos: ["Seres vivos (animais e plantas)", "Evolução e genética"],
          videos: [
            { titulo: "Reprodução", url: "https://www.youtube.com/watch?v=8Z0MdYoZzeM" }
          ],
          tempo: "40 min",
          resumo: "Mitose, meiose, gametogênese, fecundação, desenvolvimento embrionário"
        },
        {
          data: "2026-11-20",
          dia_semana: "Sexta",
          disciplina: "Física",
          tema: "Magnetismo",
          assuntos: ["Eletricidade e magnetismo"],
          videos: [
            { titulo: "Magnetismo", url: "https://www.youtube.com/watch?v=IZvxzNqVt84" }
          ],
          tempo: "40 min",
          resumo: "Campo magnético, polos, força magnética, indução"
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
            { titulo: "Estatística e Probabilidade", url: "https://www.youtube.com/watch?v=L9e9B9lIqJE" }
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
            { titulo: "Soluções", url: "https://www.youtube.com/watch?v=ib5aCcpWUf4" }
          ],
          tempo: "40 min",
          resumo: "Soluto, solvente, concentração, molalidade, diluição, titulação"
        },
        {
          data: "2026-11-26",
          dia_semana: "Quinta",
          disciplina: "Geografia",
          tema: "Geopolítica e Blocos Econômicos",
          assuntos: ["Economia, agropecuária e transportes", "Território brasileiro e regiões"],
          videos: [
            { titulo: "Geopolítica", url: "https://www.youtube.com/watch?v=IZvxz7KYkFM" }
          ],
          tempo: "40 min",
          resumo: "ONU, OTAN, MERCOSUL, BRICS, conflitos geopolíticos"
        },
        {
          data: "2026-11-27",
          dia_semana: "Sexta",
          disciplina: "História",
          tema: "Redemocratização e Constituinte",
          assuntos: ["Brasil República", "Século XX"],
          videos: [
            { titulo: "Redemocratização", url: "https://www.youtube.com/watch?v=c-kvWtGN7UE" }
          ],
          tempo: "40 min",
          resumo: "Anistia, eleições diretas, Constituição de 1988"
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
            { titulo: "Revisão Ciências", url: "https://www.youtube.com/watch?v=8Z0MdYoZzeM" },
            { titulo: "Revisão Humanas", url: "https://www.youtube.com/watch?v=6uO5Ey5MVow" }
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
            { titulo: "Questões Comentadas", url: "https://www.youtube.com/watch?v=PLACEHOLDER_QUEST_COM" }
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
            { titulo: "Dicas de Prova", url: "https://www.youtube.com/watch?v=PLACEHOLDER_DICAS" }
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
