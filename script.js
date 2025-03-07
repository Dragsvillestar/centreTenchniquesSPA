

function DisplayPianos (filterType = null, filterValue = "") {
let pianoData = [];
let priceData;
let priceDataIf = false;

const itemsPerPage = 48;

// Global filter objects
let pianoType = { select: false, type: "" };
let makerType = { select: false, maker: "" };
let conditionType = { select: false, condition:"" }; 
const pianoDisplay = document.getElementById("pianoDisplay");
const shoppingBy = document.getElementById("shopping-by");


 document.getElementById('content').innerHTML = `
  <div class="sellers d-flex justify-content-center flex-wrap m-5 bg-white mx-auto" style="width: fit-content; border-radius: 10px;">
    <a href="https://www.broughtonpianos.co.uk/yamaha-pianos">
    <img src="images/Yamaha-Logo-Purple.jpg" alt="Yamaha" class="h-4 md:h-5 xl:h-6 px-2 my-2">
    </a>
    <a href="https://www.broughtonpianos.co.uk/danemann-pianos">
    <img src="images/Danemann-logo-Gold-onWhite-Web.jpg" alt="Danemann" class="h-4 md:h-5 xl:h-6 px-2 my-2">
    </a>
    <a href="https://www.broughtonpianos.co.uk/kawai-pianos">
    <img src="images/Kawai-Logo-2.JPG" alt="Kawai" class="h-4 md:h-5 xl:h-6 px-2 my-2">
    </a>
    <a href="https://www.broughtonpianos.co.uk/c-bechstein-pianos">
    <img src="images/C.Bechstein-Logo.jpg" alt="C Bechstein" class="h-4 md:h-5 xl:h-6 px-2 my-2">
    </a>
    <a href="https://www.broughtonpianos.co.uk/w-hoffmann-pianos">
    <img src="images/w-hoffmann.png" alt="W hoffmann" class="h-4 md:h-5 xl:h-6 px-2 my-2">
    </a>
    <a href="https://www.broughtonpianos.co.uk/hailun-pianos">
    <img src="images/logo-7.png" alt="Hailun" class="h-4 md:h-5 xl:h-6 px-2 my-2">
    </a>
    <img src="images/shigerukawai.png" alt="Shigerukawai" class="h-4 md:h-5 xl:h-6 px-2 my-2">
</div>

<div class="mx-auto bg-white py-5 px-1" style="width: 65%; min-height: 1000px;">
    <div class="row mx-auto" style="width: 90%;">
        <div class="col-3">
            <div class="row">
                <div class="col-12" id="filter-top" style="height: 50px;border: 5px solid #a1c255;border-top: none; border-left: none;">
                                                  
                </div>
                <div class="col-12" id="filter-bottom" style="border-right: 5px solid #a1c255;min-height: 900px;background-color: #184733;">
                    <div class="filters text-light text-start stylish p-2" style="font-size: 14px;">
                        <h4>Filter By:</h4>
                        <div class="stylish mb-4" id="shopping-by" style="width: 100%;display: none;">
                            <div id="currentSelection">
                                <h5>Current Selection</h5>  
                                <div class="filter m-2" id="pianoType" style="display: none;">
                                    <span>Piano type: <strong id="currentType"></strong></span>
                                    <button class="close-btn p-0" id="pianoTypeClose">&times;</button>
                                  </div>
                                  
                                  <div class="filter m-2" id="conditionFilter" style="display: none;">
                                    <span>Condition: <strong id="currentCondition"></strong></span>
                                    <button class="close-btn p-0" id="conditionClose">&times;</button>
                                  </div>
                                  
                                  <div class="filter m-2" id="makerFilter" style="display: none;">
                                    <span>Manufacturer: <strong id="currentMaker"></strong></span>
                                    <button class="close-btn p-0" id="makerClose">&times;</button>
                                  </div>                                                                                          
                            </div>                                        
                        </div>

                        <h5>Condition</h5>
                        <hr class="mt-0 mb-2" style = "height: 3px; background-color: #a1c255">
                        <ul>
                            <li id="new">New</li>
                            <li id="used">Used</li>
                        </ul>
                    
                        <h5 class="mt-4">Piano Type</h5>
                        <hr class="mt-0 mb-2" style = "height: 3px; background-color: #a1c255">
                        <ul>
                            <li id="grandPiano">Grand Pianos</li>
                            <li id="uprightPiano">Upright Pianos</li>
                            <li id="digitalPiano">Digital Pianos</li>
                        </ul>
                    
                        <h5 class="mt-4">Manufacturer</h5>
                        <hr class="mt-0 mb-2" style = "height: 3px; background-color: #a1c255">
                        <ul>
                            <li class="brand" id="yamahaMaker">Yamaha</li>
                            <li class="brand">Kawai Pianos</li>
                            <li class="brand">Hailun Pianos</li>
                            <li class="brand">W.Hoffmann</li>
                            <li class="brand">Steinway & Sons - Steinway Piano</li>
                            <li class="brand">A.Geyer</li>
                            <li class="brand">Apollo</li>
                            <li class="brand">C.Bechstein</li>
                            <li class="brand">Petrof</li>
                            <li class="brand">Danemann Pianos</li>
                            <li class="brand">Diapason</li>
                            <li class="brand">Reid-Sohn</li>
                            <li class="brand">Casio</li>
                            <li class="brand">Shigeru Kawai</li>
                            <li class="brand">Kimball</li>
                            <li class="brand">Samick</li>
                            <li class="brand">Welmar</li>
                            <li class="brand">Fuchs & Mohr</li>
                            <li class="brand">Rieger-Kloss</li>
                            <li class="brand">Petrof</li>
                            <li class="brand">Bentley</li>
                            <li class="brand">Kemble</li>
                            <li class="brand">Spencer</li>
                            <li class="brand">Kingsburg</li>
                            <li class="brand">C. Bechstein Used</li>
                            <li class="brand">PianoDisc</li>
                            <li class="brand">Hidrau Stools</li>
                            <li class="brand">Bosendorfer</li>
                            <li class="brand">Baldwin</li>
                            <li class="brand">Waldstein</li>
                            <li class="brand">Fazer</li>
                            <li class="brand">Wyman</li>
                            <li class="brand">Ed. Seiler</li>
                            <li class="brand">Ballindamm</li>
                            <li class="brand">Cristofori</li>
                            <li class="brand">Steinhoven</li>
                            <li class="brand">Knight</li>
                            <li class="brand">Tonica</li>
                        </ul>
                    
                        <h5 class="mt-4">Finish</h5>
                        <hr class="mt-0 mb-2" style = "height: 3px; background-color: #a1c255">
                        <ul>
                            <li>Polished Ebony</li>
                            <li>Polished Mahogany</li>
                            <li>Black Polyester</li>
                            <li>Natural Beech Satin</li>
                            <li>Polished Walnut</li>
                            <li>Polished White</li>
                            <li>Black Walnut</li>
                            <li>White</li>
                            <li>Rosewood</li>
                            <li>Dark Walnut Satin</li>
                            <li>White Ash</li>
                            <li>Premium Black Satin</li>
                            <li>Mahogany</li>
                            <li>Oak</li>
                            <li>American Walnut Satin</li>
                            <li>Premium Rosewood</li>
                            <li>Black Satin</li>
                            <li>White Satin</li>
                            <li>Open Pore Dark Walnut</li>
                            <li>Satin Walnut</li>
                            <li>Burl Walnut</li>
                            <li>Vavona Burl Walnut</li>
                            <li>Dark Walnut</li>
                            <li>Santos Rosewood</li>
                            <li>Polished Black</li>
                            <li>Black</li>
                            <li>Black with silver pedals</li>
                            <li>Walnut Satin</li>
                            <li>Harmonious Mustard</li>
                            <li>Light Autumn Brown</li>
                            <li>Mid-brown</li>
                            <li>Premium Satin White</li>
                            <li>Premium Satin Black</li>
                            <li>Walnut</li>
                            <li>Deep Polished Mahogany</li>
                            <li>Mid Walnut</li>
                            <li>Polished Black</li>
                            <li>Dark Mahogany</li>
                            <li>Red</li>
                            <li>White Birch</li>
                        </ul>
                        <div id="priceRangeFilter" class="filter m-3  d-flex flex-column">
                            <h5>Price Range</h5>
                            <div class="d-flex align-items-center justify-content-evenly">
                              <label for="minPrice">₦</label>
                              <input type="number" id="minPrice" value="" min="0" step="100" style="width: 100px;" required>
                              <span class="mx-2">to</span>
                              <label for="maxPrice">₦</label>
                              <input type="number" id="maxPrice" value="" min="0" step="100" style="width: 100px;" required>
                            </div>                                        
                            <button id="priceRangeUpdate" class="btn btn-primary btn-sm m-2 stylish" style="background-color: #a1c255;color: #184733;">Update results...</button>
                          </div>
                    </div>                                
                </div>
            </div>
        </div>
        <div class="col-9" id="pianoFilterRight" style="height: 100%;">
            <div class="row" style="height: 100%;">
                <div class="col-12" style="min-height: 50px;border-bottom: 5px solid #a1c255;background-color: #184733;">
                    <div class="piano-results p-2 text-light stylish">
                        <span class="results-count">Showing <span id="currentStart"></span><span id="currentEnd"></span> of <span id="totalAmount"></span> results</span>                                    
                        <div class="sort-container">
                            <label for="sort">Sort by:</label>
                            <select id="sort">
                                <option value="price-desc">Prices (High to Low)</option>
                                <option value="price-asc">Prices (Low to High)</option>
                                <option value="name-asc">Name (A - Z)</option>
                                <option value="name-desc">Name (Z - A)</option>
                            </select>
                        </div>
                    </div>                                
                </div>
                <div class="col-12 p-2" style="width: 100%; height: 100%;">
                    <div id="pianoDisplay" class= "p-1" style="min-height: 800px; width: 100%; outline: 3px solid #a1c255;"></div>
                    <div class="pagination-container mt-2">
                        <button class="pagination-arrow left">&larr;</button>
                        <div class="pagination">
                            
                        </div>
                        <button class="pagination-arrow right">&rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="info-section py-5" style="width: 100%;">
    <div class="info-text">
        <h2>Why choose a <br> Piano?</h2>
        <button class="contact-btn">Contact</button>
    </div>
    <p class="info-description text-start">
        The right piano can enhance your playing experience, making it possible to enjoy every moment of your practice.
        We have in our showroom and extensive range of acoustic and digital pianos from all the main manufacturers, 
        <a href="#">Yamaha</a>, <a href="#">Kawai</a>, <a href="#">Hailun</a>, <a href="#">C.Bechstein</a> and <a href="#">Danemann</a>. 
        If you are looking for an <a href="#">upright piano</a> or a <a href="#">grand piano</a>, we have the variety and choice 
        with availability to play in-store. We also have a large stock of quality 
        <a href="#">second-hand pianos</a>. We deliver across the UK and offer unrivaled services.
    </p>
</div> 
 `;


function updateShoppingByVisibility() {
  const shoppingBy = document.getElementById("shopping-by");
  if (pianoType.select || makerType.select || conditionType.select) {
    shoppingBy.style.display = "flex";
  } else {
    shoppingBy.style.display = "none";
  }
}

function updatePagination(totalItems) {
  const paginationContainer = document.querySelector('.pagination');
  // Clear existing pagination items
  paginationContainer.innerHTML = '';
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  
  // If there's only one page, hide the pagination container.
  if (numberOfPages <= 1) {
    paginationContainer.style.display = 'none';
  } else {
    paginationContainer.style.display = 'flex';
    for (let i = 1; i <= numberOfPages; i++) {
      const span = document.createElement('span');
      span.textContent = i;
      // Mark the first page as active
      if (i === 1) {
        span.classList.add('active');
      }
      span.addEventListener('click', function () {
        displayPage(i, pianoData);
        document.getElementById("pianoFilterRight").scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Remove active class from all spans and add it to the clicked one
        paginationContainer.querySelectorAll('span').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
      });
      paginationContainer.appendChild(span);
    }
  }
}

function displayPage(page, data) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = data.slice(start, end);
  document.getElementById("currentStart").textContent = data.length > 1 ? start + 1 + " - " : "0 - ";
  document.getElementById("currentEnd").textContent = data.length > end ? end : data.length;


  let htmlRows = "";
  // Group items in rows of 3 columns
  for (let i = 0; i < currentItems.length; i += 3) {
    const rowItems = currentItems.slice(i, i + 3);
    const rowHtml = rowItems
      .map(piano => {
        return `
          <div class="col-md-4 d-flex flex-column mb-4 displayed">
            <img class="img-fluid" src="${piano.imagesrc}.jpg" alt="${piano.name}" onerror="this.onerror=null; this.src='${piano.imagesrc}.jpeg';">
            <p>${piano.name}</p>
            <p>${piano.price}</p>
          </div>
        `;
      })
      .join("");
    htmlRows += `<div class="row">${rowHtml}</div>`;
  }
  document.getElementById("pianoDisplay").innerHTML = htmlRows;
}

function pianoFilter() {
  
  fetch("pianos.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    // Start with the full data set
    let filteredData = data;

    // Apply piano type filter if selected
    if (pianoType.select) {
      filteredData = filteredData.filter(piano => piano.type === pianoType.type);
    }

    // Apply manufacturer filter if selected
    if (makerType.select) {
      filteredData = filteredData.filter(piano => piano.manufacturer === makerType.maker);
    }

    // Apply condition filter (used) if selected
    if (conditionType.select) {
      if (conditionType.condition === "new") {
        filteredData = filteredData.filter(piano => piano.used === false || typeof piano.used === "undefined");
      } else if(conditionType.condition === "used"){
        filteredData = filteredData.filter(piano => piano.used === true);
      }        
    }

    
    pianoData = filteredData;
    document.getElementById("totalAmount").textContent = filteredData.length;
    displayPage(1,pianoData);

    // Set up pagination (assuming there are at least 1 page and pagination spans already exist)
    updatePagination(filteredData.length);
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });
}

pianoFilter();

function clearPrices () {
  priceDataIf = false 
  document.getElementById("minPrice").value = ""; 
  document.getElementById("maxPrice").value = "";
 
}
if (filterType === "piano") {
  pianoType.select = true;
  pianoType.type = filterValue;
  document.getElementById("pianoType").style.display = "flex";
  document.getElementById("pianoType").style.justifyContent = "space-between";
  document.getElementById("currentType").textContent = filterValue;
  pianoFilter();
  updateShoppingByVisibility();
  clearPrices();
} else if (filterType === "maker") {
  makerType.select = true;
  makerType.maker = filterValue;
} else if (filterType === "condition") {
  conditionType.select = true;
  conditionType.condition = filterValue;
}


document.getElementById("grandPiano").addEventListener("click", () => {
  pianoType.select = true;
  pianoType.type = "Grand Piano";
  pianoFilter();
  document.getElementById("pianoType").style.display = "flex";
  document.getElementById("pianoType").style.justifyContent = "space-between";
  document.getElementById("currentType").textContent = "Grand Piano";
  updateShoppingByVisibility();
  clearPrices();
});

document.getElementById("uprightPiano").addEventListener("click", () => {
  pianoType.select = true;
  pianoType.type = "Upright Piano";
  pianoFilter();
  document.getElementById("pianoType").style.display = "flex";
  document.getElementById("pianoType").style.justifyContent = "space-between";
  document.getElementById("currentType").textContent = "Upright Piano";
  updateShoppingByVisibility();
  clearPrices();
});

document.getElementById("digitalPiano").addEventListener("click", () => {
  pianoType.select = true;
  pianoType.type = "Digital Piano";
  pianoFilter();
  document.getElementById("pianoType").style.display = "flex";
  document.getElementById("pianoType").style.justifyContent = "space-between";
  document.getElementById("currentType").textContent = "Digital Piano";
  updateShoppingByVisibility();
  clearPrices();
});

document.querySelectorAll(".brand").forEach(brandEl => {
  brandEl.addEventListener("click", (e) => {
    makerType.select = true;
    makerType.maker = e.target.textContent;
    pianoFilter();
    const makerFilterElem = document.getElementById("makerFilter");
    makerFilterElem.style.display = "flex";
    makerFilterElem.style.justifyContent = "space-between";
    document.getElementById("currentMaker").textContent = makerType.maker;
    updateShoppingByVisibility();
    clearPrices();
  });
});


// For condition filter (Used):
document.getElementById("new").addEventListener("click", () => {
  conditionType.select = true;
  conditionType.condition = "new"
  pianoFilter();
  const conditionFilterElem = document.getElementById("conditionFilter");
  conditionFilterElem.style.display = "flex";
  conditionFilterElem.style.justifyContent = "space-between";
  document.getElementById("currentCondition").textContent = "New";
  updateShoppingByVisibility();
  clearPrices();
});

document.getElementById("used").addEventListener("click", () => {
  conditionType.select = true;
  conditionType.condition = "used"
  pianoFilter();
  const conditionFilterElem = document.getElementById("conditionFilter");
  conditionFilterElem.style.display = "flex";
  conditionFilterElem.style.justifyContent = "space-between";
  document.getElementById("currentCondition").textContent = "Used";
  updateShoppingByVisibility();
  clearPrices();
});

document.getElementById("conditionClose").addEventListener("click", () => {
  conditionType.select = false;
  conditionType.condition = ""
  pianoFilter();
  document.getElementById("conditionFilter").style.display = "none";
  updateShoppingByVisibility();
  clearPrices();
});

// Assuming pianoData is your global (filtered) data array and itemsPerPage is defined
document.getElementById("pianoTypeClose").addEventListener("click", () => {
  pianoType.select = false;
  pianoType.type = "";
  pianoFilter();
  document.getElementById("pianoType").style.display = "none";
  updateShoppingByVisibility();  
  clearPrices();
});

document.getElementById("makerClose").addEventListener("click", () => {
  makerType.select = false;
  makerType.maker = "";
  pianoFilter();
  document.getElementById("makerFilter").style.display = "none";
  updateShoppingByVisibility();
  clearPrices();
});

const sortSelect = document.getElementById("sort");
  
sortSelect.addEventListener("change", (e) => {
    console.log("Sort event fired", e.target.value);
    // Place your sorting logic here
    const sortValue = e.target.value;
    console.log("Sorting by:", sortValue);
    let sortedData;

    if (priceDataIf === true) {
      sortedData =[...priceData]
    } else {
      sortedData = [...pianoData];
    }

    if (sortValue === "price-desc") {
      sortedData.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
        const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
        return priceB - priceA;
      });
    } else if (sortValue === "price-asc") {
      sortedData.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
        const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
        return priceA - priceB;
      });
    } else if (sortValue === "name-asc") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "name-desc") {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    console.log("Sorted data:", sortedData.map(p => p.name));
  
    displayPage(1, sortedData);
});

document.getElementById("priceRangeUpdate").addEventListener("click", () => {
  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;
  
  // Clone the original data so we don't alter the original dataset
  priceData = [...pianoData];
  
  // Filter the cloned data by price range
  priceData = priceData.filter(piano => {
    const priceNumber = parseFloat(piano.price.replace(/[^\d.]/g, "")) || 0;
    return priceNumber >= minPrice && priceNumber <= maxPrice;
  });
  
  // Update the display based on the filtered data
  document.getElementById("totalAmount").textContent = priceData.length;
  updatePagination(priceData.length);
  displayPage(1, priceData);
  document.getElementById("pianoFilterRight").scrollIntoView({ behavior: 'smooth', block: 'start' });
  priceDataIf = true;
});

}

function setActiveLink(page) {
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove("active"));

  const activeLink = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (activeLink) {
      activeLink.classList.add("active");
  }
}

function loadContent(page, title, event) {
  if (event) event.preventDefault();  
  if (!page || page === "#") return;
  document.getElementById("topDiv").scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Update URL hash instead of modifying history state
  location.hash = `#${page}`;

  // Handle the special case for "pianos"
  if (page === "pianos") {
      setActiveLink("pianos");
      DisplayPianos();
      document.getElementById("pageHeaderText").textContent = "Pianos";
      document.title = "Pianos";
      return;
  }

  if (page === "pianos/grand") {
    DisplayPianos("piano", "Grand Piano"); 
    setActiveLink("pianos"); 
    document.getElementById("pageHeaderText").textContent = "Grand Pianos";
    document.title = "Grand Pianos";
    return;
}
  
  if (page === "pianos/upright") {
    DisplayPianos("piano", "Upright Piano"); 
    setActiveLink("pianos"); 
    document.getElementById("pageHeaderText").textContent = "Upright Pianos";
    document.title = "Upright Pianos";
    return;
  }

  if (page === "pianos/digital") {
    DisplayPianos("piano", "Digital Piano"); 
    setActiveLink("pianos"); 
    document.getElementById("pageHeaderText").textContent = "Digital Pianos";
    document.title = "Digital Pianos";
    return;
}
// Load other pages dynamically
  fetch(`${page}.html`)
      .then(response => response.text())
      .then(html => {
          document.getElementById('content').innerHTML = html;
          setActiveLink(page);
          document.getElementById("pageHeaderText").textContent = title || "Home";
          document.title = title;
      })
      .catch(err => console.error('Failed to load content:', err));
}

// Handle browser back/forward navigation with hash-based routing
window.addEventListener("hashchange", function () {
  let page = location.hash.slice(1) || "home";
  loadContent(page, page.replace(/-/g, ' '), null);
});

// Ensure correct page loads on first visit
document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content"); 
  if (!contentDiv) {
      console.error("contentDiv not found");
      return;
  }

  // Check the current hash and load the correct page
  let page = location.hash.slice(1) || "home";
  loadContent(page, page, null);
  setActiveLink(page);

  // Click event for dynamically changing pianos
  contentDiv.addEventListener("click", function (event) {
      if (event.target && event.target.id === "grandPianoLink") {
          location.hash = "#pianos/grand";
          DisplayPianos("piano", "Grand Piano"); 
          setActiveLink("pianos");   
          document.getElementById("topDiv").scrollIntoView({ behavior: 'smooth', block: 'start' });  
      }

      if (event.target && event.target.id === "uprightPianoLink") {
          location.hash = "#pianos/upright";
          DisplayPianos("piano", "Upright Piano");  
          setActiveLink("pianos");   
          document.getElementById("topDiv").scrollIntoView({ behavior: 'smooth', block: 'start' });    
      }

      if (event.target && event.target.id === "digitalPianoLink") {
          location.hash = "#pianos/digital";
          DisplayPianos("piano", "Digital Piano"); 
          setActiveLink("pianos");  
          document.getElementById("topDiv").scrollIntoView({ behavior: 'smooth', block: 'start' });     
      }
  });
});

