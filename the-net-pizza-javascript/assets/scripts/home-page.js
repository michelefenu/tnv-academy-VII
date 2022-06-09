const buildMenuCard = (menuItem) => {
  return `
        <div class="card shadow">
            <img
            src="${menuItem.imageUrl}"
            class="card-img-top"
            alt="${menuItem.title}"
            />
            <div class="card-body">
                <h5 class="card-title"><a href="pages/menu-detail.html?itemId=${menuItem.id}">${menuItem.title}</a> - ${menuItem.price}€</h5>
                <p class="card-text">
                    ${menuItem.description}
                </p>
            </div>
        </div>
      `;
};

const buildMenuSection = (data, sectionId) => {
  const sectionContainer = document.getElementById(sectionId);
  for (let menuItem of data) {
    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("col-12", "col-sm-6", "col-md-4", "py-2")
    menuItemContainer.innerHTML = buildMenuCard(menuItem);

    sectionContainer.appendChild(menuItemContainer);
  }
};

const buildMenu = (data) => {
    console.log(data);
    const antipastiSection = data.filter(x => x.category === 'antipasti');
    buildMenuSection(antipastiSection, 'antipasti');
    
    const primiSection = data.filter(x => x.category === 'primi');
    buildMenuSection(primiSection, 'primi');
    
    const dolciSection = data.filter(x => x.category === 'dolci');
    buildMenuSection(dolciSection, 'dolci');
}

const data = fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-VII/piatti')
    .then(res => res.json())
    .then(res => buildMenu(res));