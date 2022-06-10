const buildMenuItem = (menuItem) => {
  return `
        <div class="card shadow">
            <img
            src="${menuItem.imageUrl}"
            class="card-img-top"
            alt="${menuItem.title}"
            />
            <div class="card-body">
            <h5 class="card-title"><a href="pages/menu-detail.html?menuItemId=${menuItem.id}">${menuItem.title}</a> - ${menuItem.price}€</h5>
            <p class="card-text">
                ${menuItem.description}
            </p>
            </div>
        </div>
    `;
};

const buildMenuSection = (menuData, sectionName) => {
    const menuSectionDiv = document.getElementById(sectionName);
    const menuSectionData = menuData.filter(x => x.category === sectionName);

    for(let menuItem of menuSectionData) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');
        itemDiv.innerHTML = buildMenuItem(menuItem);

        menuSectionDiv.appendChild(itemDiv);
    }
}

const buildMenu = (data) => {
    document.getElementById('caricamento').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    buildMenuSection(data, 'antipasti');
    buildMenuSection(data, 'primi');
    buildMenuSection(data, 'dolci');
}


fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-VII/piatti')
  .then(res => res.json())
  .then(res => buildMenu(res))
  .catch(err => console.log(err))
