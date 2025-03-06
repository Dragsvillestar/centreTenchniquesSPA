// Export a function that returns the HTML string for the piano page
export function getPianoPageHTML() {
  return `
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
          <div class="col-12" id="filter-top" style="height: 50px; border: 5px solid #a1c255; border-top: none; border-left: none;">
          </div>
          <div class="col-12" id="filter-bottom" style="border-right: 5px solid #a1c255; min-height: 900px; background-color: #184733;">
            <div class="filters text-light text-start stylish p-2" style="font-size: 14px;">
              <h4>Filter By:</h4>
              <div class="stylish mb-4" id="shopping-by" style="width: 100%; display: none;">
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
              <hr class="mt-0 mb-2" style="height: 3px; background-color: #a1c255">
              <ul>
                <li id="new">New</li>
                <li id="used">Used</li>
              </ul>
              <h5 class="mt-4">Piano Type</h5>
              <hr class="mt-0 mb-2" style="height: 3px; background-color: #a1c255">
              <ul>
                <li id="grandPiano">Grand Pianos</li>
                <li id="uprightPiano">Upright Pianos</li>
                <li id="digitalPiano">Digital Pianos</li>
              </ul>
              <h5 class="mt-4">Manufacturer</h5>
              <hr class="mt-0 mb-2" style="height: 3px; background-color: #a1c255">
              <ul>
                <li class="brand" id="yamahaMaker">Yamaha</li>
                <!-- Other brands... -->
              </ul>
              <h5 class="mt-4">Finish</h5>
              <hr class="mt-0 mb-2" style="height: 3px; background-color: #a1c255">
              <ul>
                <li>Polished Ebony</li>
                <!-- Other finishes... -->
              </ul>
              <div id="priceRangeFilter" class="filter m-3 d-flex flex-column">
                <h5>Price Range</h5>
                <div class="d-flex align-items-center justify-content-evenly">
                  <label for="minPrice">₦</label>
                  <input type="number" id="minPrice" value="" min="0" step="100" style="width: 100px;" required>
                  <span class="mx-2">to</span>
                  <label for="maxPrice">₦</label>
                  <input type="number" id="maxPrice" value="" min="0" step="100" style="width: 100px;" required>
                </div>
                <button id="priceRangeUpdate" class="btn btn-primary btn-sm m-2 stylish" style="background-color: #a1c255; color: #184733;">Update results...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9" id="pianoFilterRight" style="height: 100%;">
        <div class="row" style="height: 100%;">
          <div class="col-12" style="min-height: 50px; border-bottom: 5px solid #a1c255; background-color: #184733;">
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
            <div id="pianoDisplay" class="p-1" style="min-height: 800px; width: 100%; outline: 3px solid #a1c255;"></div>
            <div class="pagination-container mt-2">
              <button class="pagination-arrow left">&larr;</button>
              <div class="pagination"></div>
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
}
