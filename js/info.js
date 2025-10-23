const Animais = [
    {
        Nome: "Tarantula",

        Categoria: "Não-Letais",

        Resumo: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Aphonopelma spp. / Grammostola spp.</p></li>
        <li><p><span></span><strong>Distribuição:</strong> Encontrada em regiões tropicais e subtropicais das Américas, especialmente no Brasil, México e Chile.</p></li>
        <li><p><span></span><strong>Habitat:</strong> Vive em tocas subterrâneas, sob pedras ou troncos, mantendo um ambiente úmido e seguro.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Noturna e solitária; geralmente dócil, só ataca quando se sente ameaçada.</p></li>
        <li><p><span></span><strong>Veneno:</strong> De baixa toxicidade para humanos; causa dor leve e irritação local.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Prefere usar pelos urticantes e postura defensiva em vez de morder.</p></li>
        </ul>
        `,

        Detalhado: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Aphonopelma spp., Grammostola spp. e Lasiodora parahybana</p></li>
        <li><p><span></span><strong>Distribuição geográfica:</strong> Presente em florestas tropicais, cerrados e regiões semiáridas da América do Sul, Central e América do Norte.</p></li>
        <li><p><span></span><strong>Habitat natural:</strong> Vive em tocas escavadas no solo, sob troncos ou pedras, mantendo um ambiente úmido e protegido contra predadores.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Solitária e noturna; sai da toca apenas para caçar insetos, pequenos roedores e anfíbios. É calma, mas adota postura defensiva quando ameaçada.</p></li>
        <li><p><span></span><strong>Defesa:</strong> Lança pelos urticantes do abdômen ou ergue as patas dianteiras em sinal de advertência. A mordida é rara e usada apenas como último recurso.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Pouco tóxico para humanos; causa dor leve, vermelhidão e coceira. Reações alérgicas são raras, mas possíveis.</p></li>
        <li><p><span></span><strong>Importância ecológica:</strong> Atua como predadora natural, controlando populações de insetos e pequenos vertebrados.</p></li>
        <li><p><span></span><strong>Reprodução:</strong> O macho realiza cortejo vibrando os pedipalpos antes da cópula; a fêmea deposita os ovos em um casulo de seda protegido na toca.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Após a muda do exoesqueleto, pode regenerar patas perdidas e apresentar cores mais vibrantes. Algumas espécies podem viver mais de 15 anos.</p></li>
        </ul>
        `,
    },

    {
        Nome: "Escorpiao-Amarelo",

        Categoria: "Letais",

        Resumo: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Tityus serrulatus</p></li>
        <li><p><span></span><strong>Distribuição:</strong> Comum em áreas urbanas e rurais do Brasil, principalmente no Sudeste.</p></li>
        <li><p><span></span><strong>Habitat:</strong> Entulhos, fendas de muros, pilhas de madeira e locais escuros dentro de residências.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Noturno; abriga-se durante o dia e pica quando pressionado ou manipulado.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Neurotóxico potente; pode causar dor intensa, náuseas e, em casos graves, parada cardiorrespiratória.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Reproduz-se por partenogênese (fêmeas sem necessidade de macho).</p></li>
        </ul>
        `,

        Detalhado: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Tityus serrulatus</p></li>
        <li><p><span></span><strong>Distribuição geográfica:</strong> Amplamente encontrado no Brasil — com maior incidência nas regiões Sudeste, Centro-Oeste e Nordeste; adapta-se bem a áreas urbanas.</p></li>
        <li><p><span></span><strong>Habitat natural:</strong> Prefere locais escuros e úmidos, como entulhos, frestas de muros, pilhas de madeira, pedras e dentro de residências (sob móveis, em calçados, caixas etc.).</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Noturno e solitário. Evita contato, mas pica se for pressionado, manipulado ou surpreendido.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Predominantemente neurotóxico; provoca dor local intensa, sudorese, vômito, taquicardia, hipertensão e, em casos severos, convulsões e insuficiência cardiorrespiratória.</p></li>
        <li><p><span></span><strong>Periculosidade:</strong> Alto risco — picadas podem ser fatais sem atendimento médico rápido. Crianças, idosos e portadores de comorbidades correm maior risco.</p></li>
        <li><p><span></span><strong>Reprodução:</strong> Partenogênese (fêmeas podem gerar descendentes sem acasalamento), o que facilita a rápida expansão populacional em ambientes urbanos.</p></li>
        <li><p><span></span><strong>Importância ecológica:</strong> Controla populações de insetos, especialmente baratas, atuando como predador natural em ecossistemas urbanos e rurais.</p></li>
        <li><p><span></span><strong>Medidas de prevenção:</strong> Manter ambientes limpos e vedados; evitar entulhos; checar calçados e roupas antes de vestir; vedar frestas; procurar atendimento médico imediatamente após picada.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Pode sobreviver longos períodos sem alimento e tolerar grandes variações de temperatura, o que facilita sua presença em áreas humanas.</p></li>
        </ul>
        `,
    },

    {
        Nome: "Cobra-Taipan",

        Categoria: "Extremamente-Letais",

        Resumo:  `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Oxyuranus scutellatus</p></li>
        <li><p><span></span><strong>Distribuição:</strong> Norte e nordeste da Austrália, além de algumas regiões da Nova Guiné.</p></li>
        <li><p><span></span><strong>Habitat:</strong> Florestas tropicais, áreas costeiras e planícies abertas com vegetação densa.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Extremamente ágil e defensiva quando ameaçada, podendo atacar rapidamente.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Neurotóxico e hemotóxico, capaz de causar paralisia e falência de órgãos em poucos minutos.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Considerada uma das cobras mais venenosas do planeta, seu veneno pode matar dezenas de pessoas com uma única mordida.</p></li>
        </ul>
        `,

        Detalhado:  `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Oxyuranus scutellatus</p></li>
        <li><p><span></span><strong>Distribuição geográfica:</strong> Encontrada principalmente no norte e nordeste da Austrália, além de algumas ilhas da Nova Guiné.</p></li>
        <li><p><span></span><strong>Habitat natural:</strong> Prefere ambientes quentes e úmidos, como florestas tropicais, planícies costeiras e regiões com densa vegetação e abrigo natural.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Embora evite humanos, pode se tornar extremamente agressiva se acuada. É uma das cobras mais rápidas e precisas em ataque do mundo.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Altamente neurotóxico e hemotóxico; age rapidamente sobre o sistema nervoso central e o sangue, causando paralisia muscular, colapso respiratório e hemorragias internas. Uma única mordida pode conter veneno suficiente para matar cerca de 100 pessoas.</p></li>
        <li><p><span></span><strong>Periculosidade:</strong> Extremamente alta — mesmo com antídoto disponível, o tempo de resposta deve ser imediato para evitar morte por insuficiência respiratória.</p></li>
        <li><p><span></span><strong>Reprodução:</strong> Ovípara; as fêmeas depositam entre 10 e 20 ovos em locais protegidos e úmidos, como buracos no solo e troncos ocos.</p></li>
        <li><p><span></span><strong>Importância ecológica:</strong> Predadora natural de roedores e pequenos mamíferos, desempenhando papel essencial no controle populacional dessas espécies em ecossistemas australianos.</p></li>
        <li><p><span></span><strong>Medidas de prevenção:</strong> Evitar andar descalço ou abrir buracos em áreas rurais australianas; manter distância segura e acionar autoridades especializadas em caso de avistamento.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Seu veneno é tão potente que, antes da criação do soro antiofídico, nenhuma vítima confirmada sobreviveu a uma mordida.</p></li>
        </ul>
        `,
    },

    {
        Nome: "Aranha-de-Jardim",
        Categoria: "Não-Letais",
        Resumo: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Argiope argentata</p></li>
        <li><p><span></span><strong>Distribuição:</strong> Presente em toda a América Latina, especialmente em áreas quentes e úmidas.</p></li>
        <li><p><span></span><strong>Habitat:</strong> Jardins, quintais, matas e locais com vegetação onde possa fixar suas teias.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Pacífica e sedentária, raramente ataca; costuma permanecer no centro da teia aguardando presas.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Fraco; usado apenas para imobilizar pequenos insetos, não representa risco para humanos.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Suas teias possuem um padrão em forma de “X”, facilmente visível ao sol.</p></li>
        </ul>
        `,

        Detalhado: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Argiope argentata</p></li>
        <li><p><span></span><strong>Distribuição geográfica:</strong> Encontrada desde o sul dos Estados Unidos até o sul do Brasil, sendo muito comum em áreas rurais e urbanas.</p></li>
        <li><p><span></span><strong>Habitat natural:</strong> Vive em locais abertos e ensolarados, como jardins, plantações, bordas de matas e cercas, onde constrói suas grandes teias verticais.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Tranquila e não agressiva. Permanece imóvel no centro da teia e só reage se for diretamente perturbada.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Leve e inofensivo para humanos; serve apenas para paralisar presas pequenas, como moscas e mariposas.</p></li>
        <li><p><span></span><strong>Periculosidade:</strong> Mínima — picadas são raras e provocam apenas irritação passageira na pele.</p></li>
        <li><p><span></span><strong>Reprodução:</strong> Fêmeas maiores constroem casulos com dezenas de ovos, protegendo-os nas proximidades da teia principal.</p></li>
        <li><p><span></span><strong>Importância ecológica:</strong> Controla populações de insetos e auxilia na manutenção do equilíbrio ambiental.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> É facilmente reconhecida pelas faixas prateadas no corpo e pelo desenho em “X” de sua teia, que reflete a luz solar.</p></li>
        </ul>
        `
    },

    {
        Nome: "Escorpiao-Preto",
        Categoria: "Não-Letais",
        Resumo: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Bothriurus araguayae</p></li>
        <li><p><span></span><strong>Distribuição:</strong> Amplamente encontrado no Brasil, especialmente nas regiões Centro-Oeste e Sudeste.</p></li>
        <li><p><span></span><strong>Habitat:</strong> Vive em solos arenosos, sob pedras, troncos e folhas secas.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Noturno e discreto; evita contato com humanos e prefere ambientes secos.</p></li>
        <li><p><span></span><strong>Veneno:</strong> De baixa toxicidade; causa apenas dor leve e inchaço local.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Alimenta-se principalmente de cupins e pequenos insetos, ajudando no controle biológico.</p></li>
        </ul>
        `,

        Detalhado: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Bothriurus araguayae</p></li>
        <li><p><span></span><strong>Distribuição geográfica:</strong> Espécie típica do Brasil central, mas também encontrada em áreas de cerrado e caatinga.</p></li>
        <li><p><span></span><strong>Habitat natural:</strong> Prefere solos arenosos e secos, abrigando-se sob pedras, troncos caídos e folhas mortas.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Solitário e de hábitos noturnos; raramente se aproxima de ambientes humanos, exceto em busca de abrigo.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Possui baixa toxicidade; sua picada é comparável à de uma abelha, com dor e vermelhidão local passageiras.</p></li>
        <li><p><span></span><strong>Periculosidade:</strong> Muito baixa — não oferece risco à vida humana e raramente causa complicações.</p></li>
        <li><p><span></span><strong>Reprodução:</strong> Vivíparo; as fêmeas carregam os filhotes no dorso até que estejam prontos para caçar sozinhos.</p></li>
        <li><p><span></span><strong>Importância ecológica:</strong> Atua como predador natural de insetos e pequenos artrópodes, contribuindo para o controle de pragas.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Apesar do nome, sua coloração pode variar entre marrom-escuro e preto-acinzentado dependendo da região.</p></li>
        </ul>
        `
    },

    {
        Nome: "Cobra-Coral",
        Categoria: "Letais",
        Resumo: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Micrurus corallinus</p></li>
        <li><p><span></span><strong>Distribuição:</strong> Ocorre em várias regiões do Brasil, especialmente no Sudeste, Centro-Oeste e Sul.</p></li>
        <li><p><span></span><strong>Habitat:</strong> Vive em áreas florestais, matas ciliares e sob folhas secas ou troncos caídos.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Tímida e reclusa; raramente ataca, preferindo se esconder diante de ameaças.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Neurotóxico potente; afeta o sistema nervoso, podendo causar paralisia e dificuldade respiratória.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> É frequentemente confundida com cobras falsas-corais, que imitam sua coloração como forma de defesa.</p></li>
        </ul>
        `,

        Detalhado: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Micrurus corallinus</p></li>
        <li><p><span></span><strong>Distribuição geográfica:</strong> Encontrada em boa parte do território brasileiro, especialmente nas regiões Sudeste e Sul, com registros também no Cerrado e Mata Atlântica.</p></li>
        <li><p><span></span><strong>Habitat natural:</strong> Vive em florestas, áreas úmidas e locais com muita vegetação, geralmente sob troncos, folhas ou dentro de tocas abandonadas.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> É uma serpente tímida e de hábitos noturnos. Raramente morde, a não ser quando manipulada ou acuada.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Extremamente neurotóxico — afeta o sistema nervoso central, podendo causar visão turva, dificuldade para respirar e paralisia muscular. Requer tratamento rápido com soro antielapídico.</p></li>
        <li><p><span></span><strong>Periculosidade:</strong> Alta — sem atendimento médico, pode levar à insuficiência respiratória, embora acidentes sejam raros devido ao comportamento reservado da espécie.</p></li>
        <li><p><span></span><strong>Reprodução:</strong> Ovípara; coloca entre 3 e 10 ovos em locais úmidos e protegidos, que eclodem após cerca de 60 dias.</p></li>
        <li><p><span></span><strong>Importância ecológica:</strong> Controla populações de pequenas serpentes e lagartos, sendo importante no equilíbrio da cadeia alimentar.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Sua coloração alternada de faixas vermelhas, pretas e brancas serve como aviso visual para predadores — um exemplo clássico de aposematismo.</p></li>
        </ul>
        `
    },

    {
        Nome: "Aranha-Marrom",
        Categoria: "Letais",
        Resumo: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Loxosceles intermedia</p></li>
        <li><p><span></span><strong>Distribuição:</strong> Comum no Brasil, especialmente nas regiões Sul e Sudeste.</p></li>
        <li><p><span></span><strong>Habitat:</strong> Locais escuros e secos, como roupas guardadas, sapatos e frestas de parede.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> Discreta e não agressiva; pica apenas quando pressionada ou surpreendida.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Necrosante; causa destruição dos tecidos e, em casos graves, insuficiência renal.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Seu veneno é estudado na medicina por seu potencial uso em tratamentos de regeneração tecidual.</p></li>
        </ul>
        `,

        Detalhado: `
        <ul>
        <li><p><span></span><strong>Nome científico:</strong> Loxosceles intermedia</p></li>
        <li><p><span></span><strong>Distribuição geográfica:</strong> Espécie nativa da América do Sul, amplamente distribuída no Brasil, com maior ocorrência nas regiões Sul e Sudeste.</p></li>
        <li><p><span></span><strong>Habitat natural:</strong> Prefere ambientes escuros, secos e pouco movimentados — costuma ser encontrada em roupas, calçados, armários e porões.</p></li>
        <li><p><span></span><strong>Comportamento:</strong> É uma aranha tímida e de pequeno porte, que evita contato com humanos. As picadas geralmente ocorrem durante o sono, quando a aranha é pressionada.</p></li>
        <li><p><span></span><strong>Veneno:</strong> Potente e necrosante, destrói tecidos e vasos sanguíneos, podendo causar lesões graves na pele e necrose local. Em casos mais sérios, pode afetar órgãos internos.</p></li>
        <li><p><span></span><strong>Periculosidade:</strong> Alta — o tratamento deve ser imediato para evitar complicações. Casos fatais são raros, mas exigem atenção médica urgente.</p></li>
        <li><p><span></span><strong>Reprodução:</strong> Produz pequenos casulos de ovos escondidos em cantos escuros. Cada fêmea pode gerar dezenas de filhotes por ninhada.</p></li>
        <li><p><span></span><strong>Importância ecológica:</strong> Atua no controle natural de insetos domésticos, como baratas e mosquitos.</p></li>
        <li><p><span></span><strong>Curiosidade:</strong> Apesar da fama, vive em grande parte dentro de casas urbanas sem causar acidentes, pois raramente entra em contato direto com humanos.</p></li>
        </ul>
        `
    },

    {
        Nome: "Aranha-Teia-de-Funil",
        Categoria: "Extremamente-Letais",
        Resumo: `
        <ul>
            <li><p><span></span><strong>Nome científico:</strong> Atrax robustus</p></li>
            <li><p><span></span><strong>Distribuição:</strong> regiões costeiras próximas a Sydney, Austrália.</p></li>
            <li><p><span></span><strong>Habitat:</strong> vive em solos úmidos, sob troncos, pedras e entulhos, onde constrói teias em forma de funil.</p></li>
            <li><p><span></span><strong>Veneno:</strong> contém uma potente neurotoxina (atracotoxina) capaz de causar falência respiratória e cardíaca.</p></li>
            <li><p><span></span><strong>Perigosidade:</strong> considerada a aranha mais perigosa do mundo.</p></li>
            <li><p><span></span><strong>Curiosidade:</strong> apesar da fama, não há mortes registradas desde a introdução do antiveneno em 1981.</p></li>
        </ul>
        `,

        Detalhado: `
        <ul>
            <li><p><span></span><strong>Nome científico:</strong> Atrax robustus</p></li>
            <li><p><span></span><strong>Distribuição:</strong> encontrada principalmente nas regiões costeiras próximas a Sydney, na Austrália.</p></li>
            <li><p><span></span><strong>Habitat:</strong> prefere ambientes úmidos e sombreados, vivendo sob troncos, pedras e materiais empilhados. Constrói teias em formato de funil, com uma entrada estreita e um túnel onde espera a presa.</p></li>
            <li><p><span></span><strong>Veneno:</strong> seu veneno possui uma neurotoxina extremamente potente chamada atracotoxina, que age rapidamente no sistema nervoso, podendo causar espasmos, dificuldade respiratória e falência cardíaca.</p></li>
            <li><p><span></span><strong>Perigosidade:</strong> é considerada uma das aranhas mais letais do planeta. Antes do antiveneno (desenvolvido em 1981), houve diversos casos fatais. Hoje, com tratamento rápido, as mortes são evitáveis.</p></li>
            <li><p><span></span><strong>Medidas de prevenção:</strong> usar luvas e calçados em áreas rurais ou ao manusear materiais empilhados; verificar sapatos e roupas antes de vestir; procurar atendimento médico imediato em caso de picada.</p></li>
            <li><p><span></span><strong>Curiosidade:</strong> apenas o macho é perigoso para humanos, e apesar da fama mortal, não há mortes registradas desde a criação do soro antiveneno.</p></li>
        </ul>
        `
    },

    {
        Nome: "Peixe-Pedra",
        Categoria: "Extremamente-Letais",
        Resumo: `
        <ul>
            <li><p><span></span><strong>Nome científico:</strong> Synanceia verrucosa</p></li>
            <li><p><span></span><strong>Distribuição:</strong> recifes e zonas costeiras do Indo-Pacífico e do norte da Austrália.</p></li>
            <li><p><span></span><strong>Habitat:</strong> vive camuflado em fundos arenosos e rochosos, confundindo-se com o ambiente.</p></li>
            <li><p><span></span><strong>Veneno:</strong> espinhos dorsais liberam toxinas extremamente dolorosas e potencialmente fatais.</p></li>
            <li><p><span></span><strong>Perigosidade:</strong> considerado o peixe mais venenoso do mundo.</p></li>
            <li><p><span></span><strong>Curiosidade:</strong> sua camuflagem é tão eficiente que pode ser pisado inadvertidamente; o veneno pode ser liberado mesmo após a morte do animal.</p></li>
        </ul>
        `,

        Detalhado: `
        <ul>
            <li><p><span></span><strong>Nome científico:</strong> Synanceia verrucosa</p></li>
            <li><p><span></span><strong>Distribuição:</strong> encontrado nos recifes e zonas costeiras do Indo-Pacífico, incluindo as águas do norte da Austrália.</p></li>
            <li><p><span></span><strong>Habitat:</strong> vive em fundos arenosos e rochosos, muitas vezes camuflado entre corais e pedras, o que o torna difícil de ser identificado e aumenta o risco de acidentes.</p></li>
            <li><p><span></span><strong>Veneno:</strong> seus espinhos dorsais injetam uma potente toxina que provoca dor extrema, necrose, inchaço e pode levar a choque anafilático e falência cardiovascular.</p></li>
            <li><p><span></span><strong>Perigosidade:</strong> o envenenamento é potencialmente letal em poucas horas sem tratamento. É considerado o peixe mais venenoso conhecido.</p></li>
            <li><p><span></span><strong>Medidas de prevenção:</strong> evitar caminhar descalço em áreas com corais ou pedras, usar calçados adequados e procurar atendimento médico imediato em caso de ferimento.</p></li>
            <li><p><span></span><strong>Curiosidade:</strong> o peixe-pedra pode liberar seu veneno mesmo depois de morto e sua camuflagem é tão perfeita que pode se confundir totalmente com uma rocha.</p></li>
        </ul>
        `
    }
]