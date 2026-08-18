/*
=====================================================

DADOS DAS OCORRÊNCIAS

=====================================================
*/


const menuButton = document.getElementById("menu-button");

const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    // função de toggle
    menu.classList.toggle("open");
});

const ocorrencias = [
  {
    maquina: "M001",
    imagem: "https://placehold.co/180x120",
    status: "Aberta",
    prioridade: "Crítica",
    tecnico: "Carlos Silva",
    setor: "Produção",
    data: "03/08/2026",
    descricao: "Vibração excessiva detectada no motor principal.",
  },

  {
    maquina: "M002",
    imagem: "https://placehold.co/180x120",
    status: "Em manutenção",
    prioridade: "Alta",
    tecnico: "Ana Souza",
    setor: "Acabamento",
    data: "02/08/2026",
    descricao: "Temperatura acima do limite recomendado.",
  },

  {
    maquina: "M003",
    imagem: "https://placehold.co/180x120",
    status: "Resolvida",
    prioridade: "Baixa",
    tecnico: "Marcos Oliveira",
    setor: "Corte",
    data: "01/08/2026",
    descricao: "Substituição preventiva realizada.",
  },

  {
    maquina: "M004",
    imagem: "https://placehold.co/180x120",
    status: "Em análise",
    prioridade: "Média",
    tecnico: "João Santos",
    setor: "Produção",
    data: "31/07/2026",
    descricao: "Ruído identificado durante operação.",
  },

  {
    maquina: "M005",
    imagem: "https://placehold.co/180x120",
    status: "Aberta",
    prioridade: "Alta",
    tecnico: "Fernanda Lima",
    setor: "Fiação",
    data: "30/07/2026",
    descricao: "Falha intermitente no painel elétrico.",
  },

  {
    maquina: "M006",
    imagem: "https://placehold.co/180x120",
    status: "Resolvida",
    prioridade: "Média",
    tecnico: "Pedro Costa",
    setor: "Embalagem",
    data: "29/07/2026",
    descricao: "Sensor substituído durante manutenção.",
  },

  {
    maquina: "M007",
    imagem: "https://placehold.co/180x120",
    status: "Em manutenção",
    prioridade: "Crítica",
    tecnico: "Lucas Mendes",
    setor: "Produção",
    data: "28/07/2026",
    descricao: "Parada total do equipamento.",
  },

  {
    maquina: "M008",
    imagem: "https://placehold.co/180x120",
    status: "Aberta",
    prioridade: "Média",
    tecnico: "Mariana Alves",
    setor: "Controle",
    data: "27/07/2026",
    descricao: "Oscilação de energia identificada.",
  },

  {
    maquina: "M009",
    imagem: "https://placehold.co/180x120",
    status: "Em análise",
    prioridade: "Alta",
    tecnico: "Ricardo Souza",
    setor: "Fiação",
    data: "26/07/2026",
    descricao: "Necessária avaliação técnica.",
  },

  {
    maquina: "M010",
    imagem: "https://placehold.co/180x120",
    status: "Resolvida",
    prioridade: "Baixa",
    tecnico: "Paulo Lima",
    setor: "Expedição",
    data: "25/07/2026",
    descricao: "Manutenção preventiva concluída.",
  },
];

/*
=====================================================

PUXANDO OS ELEMENTOS HTML

=====================================================
*/

const container = document.querySelector("#lista-ocorrencias");

const campoBusca = document.querySelector("#campo-busca");

const filtroStatus = document.querySelector("#filtro-status");

const filtroPrioridade = document.querySelector("#filtro-prioridade");

/*
=====================================================

FUNÇÃO PARA CRIAR UM CARD

Essa função recebe uma ocorrência e transforma os dados em elementos HTML.

Fluxo:

1 - Criar elementos

2 - Personalizar elementos

3 - Adicionar elementos no card

4 - Adicionar card na página

=====================================================
*/

function criarCard(ocorrencia) {
  /*
    ================================================
    1 - CRIAR ELEMENTOS
    ================================================
    */

  const card = document.createElement("div");

  const imagem = document.createElement("img");

  const titulo = document.createElement("h2");

  const status = document.createElement("p");

  const prioridade = document.createElement("p");

  const tecnico = document.createElement("p");

  const setor = document.createElement("p");

  const data = document.createElement("p");

  const descricao = document.createElement("p");

  const botao = document.createElement("button");

  /*
    ================================================
    2 - PERSONALIZAR ELEMENTOS
    ================================================
    */

  card.classList.add("card-ocorrencia");

  imagem.classList.add("imagem-maquina");

  imagem.src = ocorrencia.imagem;

  imagem.alt = "Imagem da máquina " + ocorrencia.maquina;

  titulo.innerText = ocorrencia.maquina;

  status.innerText = "Status: " + ocorrencia.status;

  status.classList.add("status");

  prioridade.innerText = "Prioridade: " + ocorrencia.prioridade;

  /*
    Adiciona uma classe específica
    para permitir destaque visual.

    Exemplo:

    Crítica -> vermelho
    Alta -> laranja
    Média -> amarelo
    Baixa -> verde

    */

  if (ocorrencia.prioridade === "Crítica") {
    prioridade.classList.add("prioridade-critica");
  }

  if (ocorrencia.prioridade === "Alta") {
    prioridade.classList.add("prioridade-alta");
  }

  if (ocorrencia.prioridade === "Média") {
    prioridade.classList.add("prioridade-media");
  }

  if (ocorrencia.prioridade === "Baixa") {
    prioridade.classList.add("prioridade-baixa");
  }

  tecnico.innerText = "Técnico: " + ocorrencia.tecnico;

  setor.innerText = "Setor: " + ocorrencia.setor;

  data.innerText = "Data: " + ocorrencia.data;

  descricao.innerText = ocorrencia.descricao;

  botao.innerText = "Ver detalhes";

  botao.classList.add("botao-detalhes");

  /*
    O botão é criado junto com o card.

    Dessa forma ele já conhece
    exatamente qual ocorrência representa.

    */

  botao.addEventListener("click", function () {
    alert(
      "Máquina: " +
        ocorrencia.maquina +
        "\n\nStatus: " +
        ocorrencia.status +
        "\nPrioridade: " +
        ocorrencia.prioridade +
        "\n\nDescrição: " +
        ocorrencia.descricao,
    );
  });

  /*
    ================================================
    3 - ADICIONAR ELEMENTOS NO CARD
    ================================================
    */

  card.appendChild(imagem);

  card.appendChild(titulo);

  card.appendChild(status);

  card.appendChild(prioridade);

  card.appendChild(tecnico);

  card.appendChild(setor);

  card.appendChild(data);

  card.appendChild(descricao);

  card.appendChild(botao);

  /*
    ================================================
    4 - ADICIONAR CARD NO CONTAINER PRINCIPAL
    ================================================
    */

  container.appendChild(card);
}

/*
=====================================================

FUNÇÃO DE FILTRO

Ela verifica:

- texto digitado;
- status selecionado;
- prioridade selecionada.

Depois cria apenas os cards
que atendem aos critérios.

=====================================================
*/

function filtrarOcorrencias() {
  const texto = campoBusca.value.toLowerCase();

  const statusSelecionado = filtroStatus.value;

  const prioridadeSelecionada = filtroPrioridade.value;

  /*
    Limpa os cards atuais.

    Eles serão recriados
    conforme o resultado do filtro.

    */

  container.innerHTML = "";

  ocorrencias.forEach(function (ocorrencia) {
    const encontrouTexto =
      ocorrencia.maquina.toLowerCase().includes(texto) ||
      ocorrencia.descricao.toLowerCase().includes(texto);

    const encontrouStatus =
      statusSelecionado === "Todos" || ocorrencia.status === statusSelecionado;

    const encontrouPrioridade =
      prioridadeSelecionada === "Todas" ||
      ocorrencia.prioridade === prioridadeSelecionada;

    if (encontrouTexto && encontrouStatus && encontrouPrioridade) {
      criarCard(ocorrencia);
    }
  });
}

/*
=====================================================

EVENTOS DOS FILTROS

Sempre que o usuário altera algum filtro,
a lista é atualizada automaticamente.

=====================================================
*/

campoBusca.addEventListener("input", filtrarOcorrencias);

filtroStatus.addEventListener("change", filtrarOcorrencias);

filtroPrioridade.addEventListener("change", filtrarOcorrencias);

/*
=====================================================

CARREGAMENTO INICIAL

Ao abrir a página,
mostra todas as ocorrências.

=====================================================
*/

filtrarOcorrencias();
