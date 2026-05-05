// ==================================================
// LISTA DE PRODUTOS (VOCÊ EDITA AQUI)
// ==================================================
const produtos = [
    // JAQUETAS (5)
    { id: "j1", categoria: "jaquetas", titulo: "Jaqueta Jeans Masculina Azul", preco: 112.00, descricao: "Jaqueta Jeans Masculina  Azul Clara Destroyer, Rasgada No Estilo.", imagens: [
    "imagens/jaquetas/jaqueta-jeans-over-1.png",
    "imagens/jaquetas/jaqueta-jeans-over-2.png",
    "imagens/jaquetas/jaqueta-jeans-over-3.png",
    "imagens/jaquetas/jaqueta-jeans-over-4.png",
    "imagens/jaquetas/jaqueta-jeans-over-5.png"], link: "https://shopee.com.br/jaqueta1" },
    { id: "j2", categoria: "jaquetas", titulo: "Jaqueta Jeans Masculina, com Elastano, Jeans Premium", preco: 159.00, descricao: "Jaqueta Jeans Masculina , com Elastano, Jeans Premium.",  imagens: ["imagens/jaquetas/jaqueta-bomber-1.png",
    "imagens/jaquetas/jaqueta-bomber-2.png",
    "imagens/jaquetas/jaqueta-bomber-3.png",
    "imagens/jaquetas/jaqueta-bomber-4.png",
     "imagens/jaquetas/jaqueta-bomber-5.png", ], link: "https://shopee.com.br/jaqueta2" },
    { id: "j3", categoria: "jaquetas", titulo: "Jaqueta Couro", preco: 449.90, descricao: "Jaqueta de couro ecológico, acabamento premium, estilo rocker. Zíper diagonal e gola de camurça.", imagens: ["https://via.placeholder.com/600x600?text=Couro+1","https://via.placeholder.com/600x600?text=Couro+2","https://via.placeholder.com/600x600?text=Couro+3","https://via.placeholder.com/600x600?text=Couro+4","https://via.placeholder.com/600x600?text=Couro+5","https://via.placeholder.com/600x600?text=Couro+6"], link: "https://shopee.com.br/jaqueta3" },
    { id: "j4", categoria: "jaquetas", titulo: "Jaqueta Puffer", preco: 389.90, descricao: "Jaqueta puffer acolchoada com enchimento térmico, impermeável, capuz destacável.", imagens: ["https://via.placeholder.com/600x600?text=Puffer+1","https://via.placeholder.com/600x600?text=Puffer+2","https://via.placeholder.com/600x600?text=Puffer+3","https://via.placeholder.com/600x600?text=Puffer+4","https://via.placeholder.com/600x600?text=Puffer+5","https://via.placeholder.com/600x600?text=Puffer+6"], link: "https://shopee.com.br/jaqueta4" },
    { id: "j5", categoria: "jaquetas", titulo: "Jaqueta Skatista", preco: 299.90, descricao: "Jaqueta estilo skatista com patches, tecido resistente e corte largo. Bolsos frontais.", imagens: ["https://via.placeholder.com/600x600?text=Skatista+1","https://via.placeholder.com/600x600?text=Skatista+2","https://via.placeholder.com/600x600?text=Skatista+3","https://via.placeholder.com/600x600?text=Skatista+4","https://via.placeholder.com/600x600?text=Skatista+5","https://via.placeholder.com/600x600?text=Skatista+6"], link: "https://shopee.com.br/jaqueta5" },
    
    // MOLETOM (5)
    { id: "m1", categoria: "moletom", titulo: "Moletom Canguru", preco: 199.90, descricao: "Moletom canguru 100% algodão, capuz ajustável, bolso frontal. Tecido felpado.", imagens: ["https://via.placeholder.com/600x600?text=Moletom1","https://via.placeholder.com/600x600?text=Moletom2","https://via.placeholder.com/600x600?text=Moletom3","https://via.placeholder.com/600x600?text=Moletom4","https://via.placeholder.com/600x600?text=Moletom5","https://via.placeholder.com/600x600?text=Moletom6"], link: "https://shopee.com.br/moletom1" },
    { id: "m2", categoria: "moletom", titulo: "Moletom Oversized", preco: 229.90, descricao: "Moletom oversized, modelagem larga, estilo y2k, tecido 350g.", imagens: ["https://via.placeholder.com/600x600?text=Oversized1","https://via.placeholder.com/600x600?text=Oversized2","https://via.placeholder.com/600x600?text=Oversized3","https://via.placeholder.com/600x600?text=Oversized4","https://via.placeholder.com/600x600?text=Oversized5","https://via.placeholder.com/600x600?text=Oversized6"], link: "https://shopee.com.br/moletom2" },
    { id: "m3", categoria: "moletom", titulo: "Moletom Zip Up", preco: 239.90, descricao: "Moletom com zíper frontal, gola alta, bolsos laterais. Forro em fleece.", imagens: ["https://via.placeholder.com/600x600?text=Zip+1","https://via.placeholder.com/600x600?text=Zip+2","https://via.placeholder.com/600x600?text=Zip+3","https://via.placeholder.com/600x600?text=Zip+4","https://via.placeholder.com/600x600?text=Zip+5","https://via.placeholder.com/600x600?text=Zip+6"], link: "https://shopee.com.br/moletom3" },
    { id: "m4", categoria: "moletom", titulo: "Moletom Urbana Story", preco: 259.90, descricao: "Moletom com bordado exclusivo, felpa macia, 350g. Tamanhos P ao GG.", imagens: ["https://via.placeholder.com/600x600?text=Logo+1","https://via.placeholder.com/600x600?text=Logo+2","https://via.placeholder.com/600x600?text=Logo+3","https://via.placeholder.com/600x600?text=Logo+4","https://via.placeholder.com/600x600?text=Logo+5","https://via.placeholder.com/600x600?text=Logo+6"], link: "https://shopee.com.br/moletom4" },
    { id: "m5", categoria: "moletom", titulo: "Moletom Cropped", preco: 189.90, descricao: "Moletom cropped, modelagem unissex, moderna. Combina com cintura alta.", imagens: ["https://via.placeholder.com/600x600?text=Cropped+1","https://via.placeholder.com/600x600?text=Cropped+2","https://via.placeholder.com/600x600?text=Cropped+3","https://via.placeholder.com/600x600?text=Cropped+4","https://via.placeholder.com/600x600?text=Cropped+5","https://via.placeholder.com/600x600?text=Cropped+6"], link: "https://shopee.com.br/moletom5" },
    
    // CAMISETAS (5)
    { id: "c1", categoria: "camisetas", titulo: "Camiseta Básica", preco: 79.90, descricao: "Camiseta básica algodão penteado, gola canelada. 5 cores.", imagens: ["https://via.placeholder.com/600x600?text=Basica+1","https://via.placeholder.com/600x600?text=Basica+2","https://via.placeholder.com/600x600?text=Basica+3","https://via.placeholder.com/600x600?text=Basica+4","https://via.placeholder.com/600x600?text=Basica+5","https://via.placeholder.com/600x600?text=Basica+6"], link: "https://shopee.com.br/camiseta1" },
    { id: "c2", categoria: "camisetas", titulo: "Camiseta Oversized", preco: 99.90, descricao: "Camiseta oversized, corte street, mangas largas. 100% algodão.", imagens: ["https://via.placeholder.com/600x600?text=Over+1","https://via.placeholder.com/600x600?text=Over+2","https://via.placeholder.com/600x600?text=Over+3","https://via.placeholder.com/600x600?text=Over+4","https://via.placeholder.com/600x600?text=Over+5","https://via.placeholder.com/600x600?text=Over+6"], link: "https://shopee.com.br/camiseta2" },
    { id: "c3", categoria: "camisetas", titulo: "Regata Muscle", preco: 69.90, descricao: "Regata muscle com elastano, ideal para treino ou dia a dia.", imagens: ["https://via.placeholder.com/600x600?text=Regata+1","https://via.placeholder.com/600x600?text=Regata+2","https://via.placeholder.com/600x600?text=Regata+3","https://via.placeholder.com/600x600?text=Regata+4","https://via.placeholder.com/600x600?text=Regata+5","https://via.placeholder.com/600x600?text=Regata+6"], link: "https://shopee.com.br/camiseta3" },
    { id: "c4", categoria: "camisetas", titulo: "Camiseta Urban Print", preco: 89.90, descricao: "Estampa exclusiva de grafite urbano, manga curta, gola redonda.", imagens: ["https://via.placeholder.com/600x600?text=Print+1","https://via.placeholder.com/600x600?text=Print+2","https://via.placeholder.com/600x600?text=Print+3","https://via.placeholder.com/600x600?text=Print+4","https://via.placeholder.com/600x600?text=Print+5","https://via.placeholder.com/600x600?text=Print+6"], link: "https://shopee.com.br/camiseta4" },
    { id: "c5", categoria: "camisetas", titulo: "Camiseta Gola V", preco: 84.90, descricao: "Decote em V, modelagem slim, ideal para sobreposição.", imagens: ["https://via.placeholder.com/600x600?text=GolaV+1","https://via.placeholder.com/600x600?text=GolaV+2","https://via.placeholder.com/600x600?text=GolaV+3","https://via.placeholder.com/600x600?text=GolaV+4","https://via.placeholder.com/600x600?text=GolaV+5","https://via.placeholder.com/600x600?text=GolaV+6"], link: "https://shopee.com.br/camiseta5" }
];

// ==================================================
// RENDERIZAR PRODUTOS
// ==================================================
function renderizarProdutos() {
    const jaquetasGrid = document.getElementById('jaquetas-grid');
    const moletomGrid = document.getElementById('moletom-grid');
    const camisetasGrid = document.getElementById('camisetas-grid');
    
    jaquetasGrid.innerHTML = '';
    moletomGrid.innerHTML = '';
    camisetasGrid.innerHTML = '';
    
    produtos.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${prod.imagens[0]}" alt="${prod.titulo}">
            </div>
            <div class="product-info">
                <h3>${prod.titulo}</h3>
                <p class="description">${prod.descricao.substring(0, 60)}...</p>
                <p class="price">R$ ${prod.preco.toFixed(2)}</p>
                <button class="details-btn">VER DETALHES →</button>
            </div>
        `;
        const btn = card.querySelector('.details-btn');
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            abrirModal(prod);
        });
        
        if (prod.categoria === 'jaquetas') jaquetasGrid.appendChild(card);
        else if (prod.categoria === 'moletom') moletomGrid.appendChild(card);
        else if (prod.categoria === 'camisetas') camisetasGrid.appendChild(card);
    });
}

// ==================================================
// MODAL COM CARROSSEL (SETAS LATERAIS)
// ==================================================
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalMainImg = document.getElementById('modalMainImg');
const modalBuyBtn = document.getElementById('modalBuyBtn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.getElementById('carouselDots');

let currentProduto = null;
let currentImageIndex = 0;
let currentImagesArray = [];

function abrirModal(produto) {
    currentProduto = produto;
    currentImagesArray = produto.imagens;
    currentImageIndex = 0;
    
    modalTitle.innerText = produto.titulo;
    modalPrice.innerText = `R$ ${produto.preco.toFixed(2)}`;
    modalDescription.innerText = produto.descricao;
    updateCarrossel();
    
    modalBuyBtn.onclick = () => window.open(produto.link, '_blank');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateCarrossel() {
    if (currentImagesArray.length > 0) {
        modalMainImg.src = currentImagesArray[currentImageIndex];
    }
    updateDots();
}

function updateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < currentImagesArray.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentImageIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentImageIndex = i;
            updateCarrossel();
        });
        dotsContainer.appendChild(dot);
    }
}

prevBtn.addEventListener('click', () => {
    if (currentImagesArray.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + currentImagesArray.length) % currentImagesArray.length;
    updateCarrossel();
});

nextBtn.addEventListener('click', () => {
    if (currentImagesArray.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentImagesArray.length;
    updateCarrossel();
});

closeModal.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

function scrollToProducts() {
    document.getElementById('jaquetas').scrollIntoView({ behavior: 'smooth' });
}

// Inicializar
renderizarProdutos();