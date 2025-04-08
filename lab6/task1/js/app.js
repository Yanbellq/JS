const productList = document.getElementById('product-list');
const emptyMessage = document.getElementById('empty-message');
const addProductBtn = document.getElementById('add-product-btn');
const modal = document.getElementById('modal');
const form = document.getElementById('product-form');
const cancelBtn = document.getElementById('cancel-btn');
const toast = document.getElementById('toast');
const totalCost = document.getElementById('total-cost');
let editMode = false;
let editingProductId = null;
let activeFilter = null;
let activeSort = null;


let products = [];
let nextId = 1;

const updateEmptyMessage = () => {
    emptyMessage.style.display = products.length === 0 ? 'block' : 'none';
};

const showToast = (message) => {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
};

const updateTotalCost = () => {
    const total = products.reduce((sum, p) => sum + p.price, 0);
    totalCost.textContent = `Загальна вартість: ${total} грн`;
};

const renderProducts = () => {
    productList.innerHTML = '';

    let filteredProducts = activeFilter
        ? products.filter(p => p.category === activeFilter)
        : [...products];

    if (activeSort === 'price') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'createdAt') {
        filteredProducts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (activeSort === 'updatedAt') {
        filteredProducts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }

    filteredProducts.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <p><strong>ID:</strong> ${p.id}</p>
            <p><strong>Назва:</strong> ${p.name}</p>
            <p><strong>Ціна:</strong> ${p.price} грн</p>
            <p><strong>Категорія:</strong> ${p.category}</p>
            <img src="${p.image}" alt="${p.name}">
            <button onclick="deleteProduct(${p.id})">Видалити</button>
            <button onclick="editProduct(${p.id})">Редагувати</button>
        `;
        productList.appendChild(card);
    });

    updateEmptyMessage();
    updateTotalCost();
    renderFilters();
    renderSorting(); // обов’язково
};



const deleteProduct = (id) => {
    const card = [...productList.children].find(c => c.querySelector('p')?.textContent?.includes(`ID: ${id}`));
    if (card) {
        card.classList.add('fade-out');
        setTimeout(() => {
            products = products.filter(p => p.id !== id);
            renderProducts();
            showToast(`Товар ID ${id} видалено`);
        }, 300); // збігається з transition
    }
};


addProductBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    form.reset();
    editMode = false;
    editingProductId = null;
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        price: parseFloat(formData.get('price')),
        category: formData.get('category'),
        image: formData.get('image'),
    };

    if (editMode && editingProductId !== null) {
        // Редагування товару
        products = products.map(p =>
            p.id === editingProductId ? {
                ...p,
                ...data,
                updatedAt: new Date()
            } : p
        );
        showToast(`Товар ID ${editingProductId} оновлено: ${data.name}`);
    } else {
        // Додавання нового товару
        const newProduct = {
            id: nextId++,
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        products.push(newProduct);
        showToast(`Товар "${newProduct.name}" додано`);
    }

    renderProducts();
    form.reset();
    modal.classList.add('hidden');
    editMode = false;
    editingProductId = null;
});

const editProduct = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    editMode = true;
    editingProductId = id;

    form.name.value = product.name;
    form.price.value = product.price;
    form.category.value = product.category;
    form.image.value = product.image;

    modal.classList.remove('hidden');
};

const renderFilters = () => {
    const categories = [...new Set(products.map(p => p.category))];
    const container = document.getElementById('filters');
    container.innerHTML = '';

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        btn.onclick = () => {
            activeFilter = cat;
            renderProducts();
        };
        container.appendChild(btn);
    });

    if (categories.length > 0) {
        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Скинути фільтр';
        resetBtn.onclick = () => {
            activeFilter = null;
            renderProducts();
        };
        container.appendChild(resetBtn);
    }
};

const renderSorting = () => {
    const container = document.getElementById('sorting');
    container.innerHTML = '';

    const buttons = [
        { label: 'Сортувати за ціною', value: 'price' },
        { label: 'Сортувати за створенням', value: 'createdAt' },
        { label: 'Сортувати за оновленням', value: 'updatedAt' },
    ];

    buttons.forEach(({ label, value }) => {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.onclick = () => {
            activeSort = value;
            renderProducts();
        };
        container.appendChild(btn);
    });

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Скинути сортування';
    resetBtn.onclick = () => {
        activeSort = null;
        renderProducts();
    };
    container.appendChild(resetBtn);
};
