export interface Loja {
  id: string;
  nome: string;
  razaoSocial: string;
  endereco: string;
  telefone: string;
  latitude: number;
  longitude: number;
}

export const LOJAS: Loja[] = [
  {
    "id": "LJ1",
    "nome": "VENDA DAS PEDRAS FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "AV 22 DE MAIO, 7619 - VENDA DAS PEDRAS – ITABORAÍ - RJ - CEP: 24.804-706",
    "telefone": "(21) 99860-0926",
    "latitude": -22.7415297,
    "longitude": -42.8452123
  },
  {
    "id": "LJ2",
    "nome": "OUTEIRO DAS PEDRAS FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "RUA DUQUE DE CAXIAS, 3656 - OUTEIRO DAS PEDRAS - ITABORAI - RJ - CEP: 24812-336",
    "telefone": "(21) 99860-4022",
    "latitude": -22.7497694,
    "longitude": -42.8780664
  },
  {
    "id": "LJ3",
    "nome": "CABO FRIO MATRIZ REGIÃO DOS LAGOS",
    "razaoSocial": "BETA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "RUA TEIXEIRA E SOUZA, 1027 - CENTRO CABO FRIO RJ - CEP: 28.907-410",
    "telefone": "(22) 99984-1337 / (22) 99973-1985",
    "latitude": -22.885046,
    "longitude": -42.027203
  },
  {
    "id": "LJ4",
    "nome": "ARARUAMA FILIAL REGIÃO DOS LAGOS",
    "razaoSocial": "BETA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "ROD AMARAL PEIXOTO, 91101 KM 85 - VILA CAPRI – ARARUAMA - RJ - CEP: 28.970-000",
    "telefone": "(22) 99984-6258",
    "latitude": -22.869078,
    "longitude": -42.323445
  },
  {
    "id": "LJ5",
    "nome": "SANTA CATARINA FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "DR. GETÚLIO VARGAS, 2076 - BARRO VERMELHO – SÃO GONÇALO - RJ - CEP: 24.416-000",
    "telefone": "(21) 99964-8341",
    "latitude": -22.8426661,
    "longitude": -43.0747398
  },
  {
    "id": "LJ6",
    "nome": "BACAXÁ I FILIAL REGIÃO DOS LAGOS",
    "razaoSocial": "BETA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "RUA PROFESSOR SOUZA, 22 - BACAXA - SAQUAREMA - RJ - CEP: 28.994-750",
    "telefone": "(22) 99999-7150",
    "latitude": -22.891545,
    "longitude": -42.473001
  },
  {
    "id": "LJ7",
    "nome": "ROCHA MATRIZ COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "RUA JOSE LOURENCO DE AZEVEDO, 15 LOJAS 01 E 02 - ROCHA - SÃO GONCALO - RJ - CEP: 24.421-300",
    "telefone": "(21) 99964-8761",
    "latitude": -22.832255,
    "longitude": -43.038514
  },
  {
    "id": "LJ8",
    "nome": "CEASA FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA (Ceasa)",
    "endereco": "RUA CAPITÃO JUVENAL FIGUEREDO, 1406 - COLUBANDÊ – SÃO GONÇALO - RJ - CEP: 24.744-560",
    "telefone": "(21) 99662-4461 / (21) 99797-0841",
    "latitude": -22.840581,
    "longitude": -43.014107
  },
  {
    "id": "LJ9",
    "nome": "MANILHA FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "ROD GOVERNADOR MARIO COVAS, 7049 LOJA - MANILHA - ITABORAÍ - CEP: 24855-144",
    "telefone": "(21) 99731-9273 / (21) 99509-6304 / (21) 99826-7622",
    "latitude": -22.771788,
    "longitude": -42.924561
  },
  {
    "id": "LJ10",
    "nome": "TRINDADE FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "AVN DOMINGOS DAMASCENO DUARTE, 829 LOJA A - TRINDADE – SÃO GONÇALO - RJ - CEP: 24456-422",
    "telefone": "(21) 99649-6841",
    "latitude": -22.809667,
    "longitude": -43.016244 
  },
  {
    "id": "LJ11",
    "nome": "ALCÂNTARA I FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "ETR RAUL VEIGA, 361 LOJA 02, 03 E PARTE - RAUL VEIGA - SAO GONCALO - RJ - CEP: 24710-480",
    "telefone": "(21) 99730-6502",
    "latitude": -22.822505,
    "longitude": -42.998192 
  },
  {
    "id": "LJ12",
    "nome": "SHOPPING FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "ROD GOVERNADOR MARIO COVAS, SN KM 295 LOJA 1017 A/B - TRÊS PONTES – ITABORAÍ - RJ - CEP: 24.809.234",
    "telefone": "3785-8663 / 99835-9112",
    "latitude": -22.763907,
    "longitude": -42.902601 
  },
  {
    "id": "LJ13",
    "nome": "BARCELOS / COSTA AZUL ITA FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "AVN VINTE E DOIS DE MAIO (FILIAL 08), 4908 LOJA: 17 E 19; LOTEAMENTO 1041 - RIO VARZEA - ITABORAÍ - RJ - CEP: 24.812-082",
    "telefone": "(21) 99732-3315",
    "latitude": -22.748411,
    "longitude": -42.868235 
  },
  {
    "id": "LJ14",
    "nome": "BARCELOS / COSTA AZUL SG FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "AVN PRESIDENTE ROOSEVELT (FILIAL 09), 930 LOJA: 01; LOTE: AGRÍCOLA 08 - VISTA ALEGRE - SÃO GONÇALO - RJ - CEP: 24.722-070",
    "telefone": "(21) 99732-2408",
    "latitude": -22.797602,
    "longitude": -42.956885 
  },
  {
    "id": "LJ15",
    "nome": "BACAXÁ II FILIAL REGIÃO DOS LAGOS",
    "razaoSocial": "BETA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "RUA REGOCIANO OLIVEIRA,130 LOJAS 02, 03, 04 E 05 - BACAXA - SAQUAREMA - RJ CEP: 28.994-780",
    "telefone": "(22) 99881-8237",
    "latitude": -22.88608,
    "longitude": -42.391098
  },
  {
    "id": "LJ16",
    "nome": "ALCÂNTARA II FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "RUA MANUEL JOAO GONCALVE, 434 LOJA: A; LOTE:44 B - ALCANTARA - SÃO GONÇALO - RJ - CEP: 24.711-080",
    "telefone": "(21) 99872-9257",
    "latitude": -22.820349,
    "longitude": -43.00085 
  },
  {
    "id": "LJ17",
    "nome": "FONSECA FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "R DESEMBARGADOR LIMA CASTRO, 12 AO 22 BOX 01 - FONSECA – NITEROI - RJ - CEP: 24.120-350",
    "telefone": "(21) 99670-7145 / (21) 99849-5329",
    "latitude": -22.882089,
    "longitude": -43.08598 
  },
  {
    "id": "LJ18",
    "nome": "CAMPO GRANDE (GUANABARA) FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "ETR RIO Do A, 1415 LOJAS 215, 216 E 217 - CAMPO GRANDE - RIO DE JANEIRO - RJ - CEP: 23.080-300",
    "telefone": "(21) 99818-6510",
    "latitude": -22.8625,
    "longitude": -43.60118 
  },
  {
    "id": "LJ19",
    "nome": "CAMPINHO (GUANABARA) FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "AV ERNANI CARDOSO, 350 LOJAS 211/212/213 - CASCADURA - RIO DE JANEIRO - RJ - CEP: 21.310-310",
    "telefone": "(21) 99531-4383",
    "latitude": -22.880891,
    "longitude": -43.339725 
  },
  {
    "id": "LJ20",
    "nome": "NITEROÍ FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "R DA CONCEICAO, 21 - CENTRO – NITEROI - RJ - CEP: 24.020-080",
    "telefone": "(21) 99892-3656",
    "latitude": -22.8940404,
    "longitude": -43.1230803
  },
  {
    "id": "LJ21",
    "nome": "NOVA IGUAÇU (COSTAZUL) FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "Av. Calos Marques Rollo, 995 lojas 02 03 e 04 - Jardim Império / NOVA IAGUAÇU / RJ - CEP 26.225-290",
    "telefone": "(21) 97167-1106 / 21-99807-3701",
    "latitude": -22.76185,
    "longitude": -43.427297
  },
  {
    "id": "LJ22",
    "nome": "CABO FRIO 2 FILIAL REGIÃO DOS LAGOS",
    "razaoSocial": "BETA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "Rua Almirante Tamandaré, 386 - Loja F - São Cristóvão, Cabo Frio/RJ CEP 28.909-450",
    "telefone": "(22) 99853-5826",
    "latitude": -22.893498,
    "longitude": -42.042873
  },
  {
    "id": "LJ23",
    "nome": "GUANABARA SG FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "AV JORNALISTA ROBERTO MARINHO, 221 - BOX 101 A e 101B - MUTONDO/ SAO GONCALO - CEP 24.451-715",
    "telefone": "21 99816-7302 / (21) 97227-9334",
    "latitude": -22.826096,
    "longitude": -43.015612
  },
  {
    "id": "LJ24",
    "nome": "GUANABARA TIJUCA FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "Rua Almirante Cochrane, nº 146 - Lojas 103, 104, 105 e 106 - TIJUCA / RIO DE JANEIRO - CEP 20.550.040",
    "telefone": "(21) 99773-4340",
    "latitude": -22.918444,
    "longitude": -43.213192
  },
  {
    "id": "LJ25",
    "nome": "COSTAZUL GUADALUPE FILIAL RIO (NOVA)",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "Avenida Brasil, n° 22.155 - Espaço comercial nº 10501 - Guadalupe, Rio de Janeiro CEP: 21.670-000",
    "telefone": "(21) 99817-1982",
    "latitude": -22.841865,
    "longitude": -43.371304
  },
  {
    "id": "LJ26",
    "nome": "NITERÓI 2 MATRIZ RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "Rua Visconde de Uruguai, 458 - CENTRO - NITERÓI - RJ - CEP: 24030-079",
    "telefone": "(21) 99740-3142",
    "latitude": -22.8852331,
    "longitude": -43.1231909
  },
  {
    "id": "LJ27",
    "nome": "CENTRO DE SÃO GONÇALO FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "Rua Dr. Nilo Peçanha nº.34 - CENTRO - SÃO GONÇALO- RJ - CEP: 24.445.360",
    "telefone": "(21) 97241-1872",
    "latitude": -22.823366,
    "longitude": -43.045023 
  },
  {
    "id": "LJ28",
    "nome": "PREZUNIC CAXIAS FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "RUA JOSÉ DE ALVARENGA, N° 95, 95A Lojas D, E, F, G, H, I, J, K e L - DUQUE DE CAXIAS RIO DE JANEIRO CEP: 25.020.140",
    "telefone": "(21) 97161-5020",
    "latitude": -22.785267,
    "longitude": -43.311833 
  },
  {
    "id": "LJ29",
    "nome": "CARREFOUR BELFORD ROXO FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "AV PREFEITO JORGE JULIO COSTA DOS SANTOS, n° 200 LOJA ANCORA 02 LOJA 15 16 17 E 18 - CENTRO BELFORD ROXO RIO DE JANEIRO CEP: 26.130-010",
    "telefone": "21-99919-3760",
    "latitude": -22.775588,
    "longitude": -43.397622 
  },
  {
    "id": "LJ30",
    "nome": "MAGÉ FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "R. Dr. Siqueira, 268 - Centro, Magé - RJ, 25900-094 - MAGÉ RIO DE JANEIRO CEP: 25.900-094",
    "telefone": "(21) 97252-7501",
    "latitude": -22.6559628,
    "longitude": -43.0391951
  },
  {
    "id": "LJ31",
    "nome": "PREZUNIC SANTA CRUZ FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "R DOM PEDRO I, 53 BOX M/N - SANTA CRUZ RIO DE JANEIRO CEP: 23.510-010",
    "telefone": "(21) 99716-9706",
    "latitude": -22.915464,
    "longitude": -43.682335 
  },
  {
    "id": "LJ32",
    "nome": "ARARUAMA II FILIAL REGIÃO DOS LAGOS",
    "razaoSocial": "BETA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "AV. GETÚLIO VARGAS, 195 - CENTRO - ARARUAMA - RJ CEP: 28.970-000",
    "telefone": "(22) 99709-1227",
    "latitude": -22.8744115,
    "longitude": -42.3384076
  },
  {
    "id": "LJ33",
    "nome": "PARAÍSO SÃO GONÇALO FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "RUA COMANDANTE ARI PARREIRAS, Nº 1381, LJ 01 E LJ 02 - PARAÍSO - SÃO GONÇALO RIO DE JANEIRO",
    "telefone": "(21) 99712-8189",
    "latitude": -22.834571,
    "longitude": -43.083361 
  },
  {
    "id": "LJ34",
    "nome": "RIO DAS OSTRAS FILIAL REGIÃO",
    "razaoSocial": "BETA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "Rod. Ernani do Amaral Peixoto, 4608 LOJA A - CENTRO Rio das Ostras - RIO DE JANEIRO - RJ CEP: 28890-000",
    "telefone": "(22) 99758-0597",
    "latitude": -22.527003,
    "longitude": -41.943859 
  },
  {
    "id": "LJ35",
    "nome": "LARGO DA BATALHA NITERÓI 3 FILIAL RIO",
    "razaoSocial": "PÉS E PATAS RIO COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "RUA REVERENDO ARMANDO FERREIRA, N° 31 - LARGO DA BATALHA - NITERÓI - RJ CEP: 24.310-400",
    "telefone": "(21) 99833-7461",
    "latitude": -22.9073336,
    "longitude": -43.0671097
  },
  {
    "id": "LJ36",
    "nome": "GUANABARA PENHA FILIAL RIO",
    "razaoSocial": "PÉS E PATAS RIO COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "AVENIDA BRÁS DE PINA, 201 LOJA 104, 105, 106 E 107 - PENHA - RIO DE JANEIRO - RJ CEP: 21.070-031",
    "telefone": "(21) 99931-7140",
    "latitude": -22.839516,
    "longitude": -43.29694 
  },
  {
    "id": "LJ37",
    "nome": "BÚZIOS FILIAL REGIÃO",
    "razaoSocial": "BETA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "AV JOSE BENTO RIBEIRO DANTAS, 1755 LOJA 12 - MANGUINHOS ARMACAO DOS BUZIOS RJ CEP: 28.950-000",
    "telefone": "(22) 99740-6492",
    "latitude": -22.758339,
    "longitude": -41.890436 
  },
  {
    "id": "LJ38",
    "nome": "ICARAÍ MATRIZ BRASIL",
    "razaoSocial": "PÉS E PATAS BRASIL COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "RUA ATOR PAULO GUSTAVO, 112 LOJA 101 - ICARAÍ - NITERÓI - RJ CEP: 24.230-062",
    "telefone": "(21) 97207-7622",
    "latitude": -22.904906,
    "longitude": -43.112941 
  },
  {
    "id": "LJ39",
    "nome": "REDE ECONOMIA QUEIMADOS FILIAL RIO",
    "razaoSocial": "PÉS E PATAS RIO COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "AV DOUTOR PEDRO JORGE, N° 342 Loja 02, 03 e 04 - CENTRO - QUEIMADOS - RJ - CEP: 26.383-060",
    "telefone": "(21) 99854-1942",
    "latitude": -22.705314,
    "longitude": -43.555729 
  },
  {
    "id": "LJ40",
    "nome": "TUBARÃO FILIAL COMERCIO",
    "razaoSocial": "PÉS E PATAS COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "ROD GOVERNADOR MARIO COVAS, S/N, LOJAS 01 E 02 FAZENDA SÃO JOAQUIM - TRÊS PONTES, ITABORAÍ - RJ CEP 24.809-234",
    "telefone": "(21) 99635-3414",
    "latitude": -19.277091,
    "longitude": -40.087679 
  },
  {
    "id": "LJ41",
    "nome": "Inhaúma FILIAL RIO",
    "razaoSocial": "PÉS E PATAS RIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "AV ITAOCA, N° 02650 - INHAUMA RIO DE JANEIRO CEP: 21.061-770",
    "telefone": "(21) 99663-6581",
    "latitude": -22.8731697,
    "longitude": -43.2779997
  },
  {
    "id": "LJ42",
    "nome": "PINDAMONHANGABA FILIAL BRASIL",
    "razaoSocial": "PÉS E PATAS BRASIL COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "RUA DR. FREDERICO MACHADO, 67 LT 01 PARQUE SÃO BENEDITO - PINDAMONHANGABA SÃO PAULO CEP 12410040",
    "telefone": "(12) 99678-5463",
    "latitude": -22.9326535,
    "longitude": -45.4593432
  },
  {
    "id": "LJ43",
    "nome": "MUNDIAL CURICICA FILIAL RIO",
    "razaoSocial": "PÉS E PATAS RIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "ESTR DOS BANDEIRANTES, N° 5.450 LJ O - CURICICA - RIO DE JANEIRO - CEP 22.780-083",
    "telefone": "(21) 99519-9975",
    "latitude": -22.923108,
    "longitude": -43.373975 
  },
  {
    "id": "LJ44",
    "nome": "COSTAZUL CAMPO GRANDE II FILIAL RIO",
    "razaoSocial": "PÉS E PATAS RIO COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "AV CESÁRIO DE MELO, N° 5.400 LJ 04,05,06 E 07 - CAMPO GRANDE - RJ CEP: 23055-002",
    "telefone": "(21) 99666-2142",
    "latitude": -22.910677,
    "longitude": -43.589438 
  },
  {
    "id": "LJ45",
    "nome": "PENDOTIBA FILIAL RIO",
    "razaoSocial": "PÉS E PATAS RIO COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "ETR CAETANO MONTEIRO, 1875 LOJA:101 A - PENDOTIBA NITEROÍ RIO DE JANEIRO CEP: 24.320-570",
    "telefone": "(21) 99974-3261",
    "latitude": -22.906335,
    "longitude": -43.055684 
  },
  {
    "id": "LJ46",
    "nome": "COSTAZUL JARDIM ALCÂNTARA FILIAL COMÉRCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "RUA CAPITÃO JUVENAL FIGUEREDO, 482 loja 09 - JARDIM ALCÂNTARA, SÃO GONAÇALO - RJ 24.744-560",
    "telefone": "(21) 96721-2102",
    "latitude": -22.833023,
    "longitude": -43.005992 
  },
  {
    "id": "LJ47",
    "nome": "MACAÉ FILIAL REGIÃO DOS LAGOS",
    "razaoSocial": "BETA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "Av. Rui Barbosa nº 969 – Loja 02 - Centro - Macaé–RJ. 27.915-011",
    "telefone": "(22) 99706-1340",
    "latitude": -22.378724,
    "longitude": -41.776592 
  },
  {
    "id": "LJ48",
    "nome": "MARICÁ 1 FILIA COMÉRCIO",
    "razaoSocial": "PÉS E PATAS COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "Rua Vereador Luiz Antônio da Cunha, 35 - LOJA 29 QUADRAAREA LOTE A - Centro Marica CEP 24.900-410",
    "telefone": "(21) 97233-4540",
    "latitude": -22.915704,
    "longitude": -42.817005 
  },
  {
    "id": "LJ49",
    "nome": "CABO FRIO 3 FILIAL REGIÃO DOS LAGOS",
    "razaoSocial": "BETA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "AV EZIO CARDOSO DA FONSECA, N° 26 - JARDIM ESPERANÇA CABO FRIO CEP 28920-000",
    "telefone": "(22) 99810-9111",
    "latitude": -22.840229,
    "longitude": -42.026449 
  },
  {
    "id": "LJ50",
    "nome": "MUNDIAL FREGUESIA FILIAL RIO",
    "razaoSocial": "PÉS E PATAS RIO COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "ESTR DE JACAREPAGUÁ, N° 7.563 BOX 10 e 11 - FREGUESIA RIO DE JANEIRO CEP 22.755-155",
    "telefone": "(21) 97129-1276",
    "latitude": -22.940912,
    "longitude": -43.341403 
  },
  {
    "id": "LJ51",
    "nome": "DOM CAXIAS 2 FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "AV. 15 DE NOVEMBRO, S/N QUADRA08 LOJA 02 - VILA SAO LUIZ DUQUE DE CAXIAS RIO DE JANEIRO CEP: 25.065-135",
    "telefone": "(21) 97152-9222",
    "latitude": -22.775233,
    "longitude": -43.291963 
  },
  {
    "id": "LJ52",
    "nome": "SANTA ROSA (CUBANGO) FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "RUA NORONHA TORREZÃO, 19 - CUBANGO SANTA ROSA NITEROI RIO DE JANEIRO CEP: 24.240-185",
    "telefone": "(21) 97284-5981",
    "latitude": -22.8939885,
    "longitude": -43.0996652
  },
  {
    "id": "LJ53",
    "nome": "BALDEADOR FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "RODOVIA AMARAL PEIXOTO, N° 1549 - BALDEADOR - NITERÓI - RIO DE JANEIRO - CEP 24.140-005",
    "telefone": "(21) 99819-7305",
    "latitude": -22.8821929,
    "longitude": -43.0590313
  },
  {
    "id": "LJ54",
    "nome": "CARREFOUR ALCÂNTARA FILIAL COMÉRCIO",
    "razaoSocial": "PÉS E PATAS COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "RUA DR° ALFREDO BACKER, N 500 - ALCÂNTARA - SÃO GONÇALO - RIO DE JANEIRO",
    "telefone": "(21) 99649-2341",
    "latitude": -22.8191555,
    "longitude": -43.0061513
  },
  {
    "id": "LJ55",
    "nome": "UBATUBA FILIAL BRASIL",
    "razaoSocial": "PÉS E PATAS BRASIL COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "RODOVIA OSWALDO CRUZ, 754 - MATO DENTRO - UBATUBA - SP - CEP: 11691-032",
    "telefone": "(12) 99617-1117",
    "latitude": -23.437404,
    "longitude": -45.090239 
  },
  {
    "id": "LJ56",
    "nome": "DOM CENTRO ANGRA DOS REIS FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "Av. Almirante Jair Carneiro Toscano de Brito nº 531 - PRAIA DA CHÁCARA - ANGRA DOS REIS – RJ CEP: 23906-805",
    "telefone": "(24) 99851-4231",
    "latitude": -23.001284,
    "longitude": -44.300162
  },
  {
    "id": "LJ57",
    "nome": "PREZUNIC MARICA FILIAL COMERCIO",
    "razaoSocial": "PES E PATAS COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "RUA ABREU SODRÉ, 27 loja 133/134 - Centro - Marica - Rio de Janeiro CEP 24900-105",
    "telefone": "(21) 99667-2156",
    "latitude": -22.91575,
    "longitude": -42.818199 
  },
  {
    "id": "LJ58",
    "nome": "ICARAI 2 GAVIÃO PEIXOTO FILIAL RIO",
    "razaoSocial": "PES E PATAS RIO COMERCIO DE RACAO ANIMAL E ACESSORIOS LTDA",
    "endereco": "Rua Gavião Peixoto, 144 - ICARAÍ - NITERÓI - RJ CEP: 24.230.101",
    "telefone": "(21) 99664-5750",
    "latitude": -22.9049571,
    "longitude": -43.1087498
  },
  {
    "id": "LJ59",
    "nome": "SUZANO FILIAL BRASIL",
    "razaoSocial": "PÉS E PATAS BRASIL COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "Av Armando Salles de Oliveira 1520 - CJ Res Irai - Suzano - SÃO PAULO CEP 08673-115",
    "telefone": "(11) 91949-6107",
    "latitude": -23.546,
    "longitude": -46.319066 
  },
  {
    "id": "LJ60",
    "nome": "ANTIGA ROCHA TRINTIM FILIAL COMÉRCIO",
    "razaoSocial": "PÉS E PATAS COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "Rua AV 22 de Maio, 6328 loja, lote 033 - Nova Cidade - Itaboraí RIO DE JANEIRO CEP 24.804-000",
    "telefone": "(21) 99921-8265",
    "latitude": -22.744808,
    "longitude": -42.851589 
  },
  {
    "id": "LJ61",
    "nome": "PIRATININGA MATRIZ OMEGA",
    "razaoSocial": "OMEGA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "AV. ERNANI FARIA ALVES,PROF, 45 / LOJA 101 - PIRATININGA - NITERÓI - RJ CEP 24350-000",
    "telefone": "21-99846-8834",
    "latitude": -22.902437,
    "longitude": -43.104116 
  },
  {
    "id": "LJ62",
    "nome": "ITAIPU FILIAL OMEGA",
    "razaoSocial": "OMEGA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "AVENIDA CENTRAL EWERTON XAVIER, Nº 1.800, LOJAS 101 E 102 - MARAVISTA, NITERÓI, RIO DE JANEIRO, CEP 24.340-100",
    "telefone": "(21) 99930-7403",
    "latitude": -22.948289,
    "longitude": -43.03441 
  },
  {
    "id": "LJ63",
    "nome": "COPACABANA 1 (PET SANTA CLARA) MATRIZ ALFA",
    "razaoSocial": "ALFA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "Rua Santa Clara, nº 110, loja A - Copacabana – Rio de Janeiro – RJ CEP: 22.041-010",
    "telefone": "21-99744-3985",
    "latitude": -22.97259,
    "longitude": -43.186045 
  },
  {
    "id": "LJ64",
    "nome": "BOTAFOGO (PATAS E PENAS) FILIAL ALFA",
    "razaoSocial": "ALFA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "Rua Voluntários da Pátria, n° 374, Loja B - Botafogo – Rio de Janeiro – CEP 22.270-010",
    "telefone": "21-99848-5361",
    "latitude": -22.954484,
    "longitude": -43.193466 
  },
  {
    "id": "LJ65",
    "nome": "GÁVEA (AGF) FILIAL ALFA",
    "razaoSocial": "ALFA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "Rua Marquês de São Vicente, 07 - Gávea – Rio de Janeiro – CEP 22451-041",
    "telefone": "21 96741-0602",
    "latitude": -22.9772741,
    "longitude": -43.2311289
  },
  {
    "id": "LJ66",
    "nome": "COPACABANA 2 (COPACABANA PET) FILIAL ALFA",
    "razaoSocial": "ALFA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "Rua Ronald de Carvalho, n° 253, Loja A - Copacabana – Rio de Janeiro – CEP 22.021-020",
    "telefone": "21 99884-9864",
    "latitude": -22.963953,
    "longitude": -43.17756
  },
  {
    "id": "LJ67",
    "nome": "URCA (PET PLANET) FILIAL ALFA",
    "razaoSocial": "ALFA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "Rua Marechal Cantuaria, n° 70, loja A - Urca – Rio de Janeiro – CEP 22.291-060",
    "telefone": "21 96705-8771",
    "latitude": -22.949616,
    "longitude": -43.166565
  },
  {
    "id": "LJ68",
    "nome": "TANQUE (GUANABARA) FILIAL ALFA",
    "razaoSocial": "ALFA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "RUA CÂNDIDO BENÍCIO, NÚMERO 3936, LOJA 115 - JACAREPAGUÁ, Rio de Janeiro, RJ CEP 22733-003",
    "telefone": "21 99579-4919",
    "latitude": -22.9123548,
    "longitude": -43.3602928
  },
  {
    "id": "LJ69",
    "nome": "IRAJA FILIAL ALFA",
    "razaoSocial": "ALFA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "Rua André Filho, número 13, LOJA A - Irajá, Rio de Janeiro, CEP 21230-340",
    "telefone": "21 99907-3062",
    "latitude": -22.82461,
    "longitude": -43.325599
  },
  {
    "id": "LJ70",
    "nome": "CRUZEIRO FILIAL BRASIL",
    "razaoSocial": "PÉS E PATAS BRASIL COMÉRCIO DE RAÇÃO ANIMAL E ACESSÓRIOS LTDA",
    "endereco": "Rua Dr° Othon Barcelos, 05 lojas 01, 02 e 03 - Itagacaba - Cruzeiro - São Paulo CEP 12.701-080",
    "telefone": "(12) 98885-7900",
    "latitude": -22.583065,
    "longitude": -44.960643
  },
  {
    "id": "LJ71",
    "nome": "CIDADE DE DEUS PREZUNIC FILIAL ALFA",
    "razaoSocial": "ALFA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "ESTRADA MARECHAL MIGUEL SALAZAR MENDES DE MORAES, N°906 LOJA 101 e 102 - TAQUARA - JACAREPAGUÁ - RIO DE JANEIRO - CEP 22770-959",
    "telefone": "(21) 97122-1992",
    "latitude": -22.942859,
    "longitude": -43.367149
  },
  {
    "id": "LJ72",
    "nome": "RECREIO DOS BANDEIRANTES GUANABARA FILIAL ALFA",
    "razaoSocial": "ALFA EMPORIO COMERCIO & SERVICOS LTDA",
    "endereco": "AV DAS AMÉRICAS, n° 16.880 lojas 135,136,137,138,139 e 140 - RECREIOS DOS BANDEIRANTES - RIO DE JANEIRO - CEP 22.790-704",
    "telefone": "(21) 97230-1952",
    "latitude": -22.841865,
    "longitude": -43.371304
  }
];
