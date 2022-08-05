// The original object given by you
const givenAssets = [{
  1: ['1', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  2: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  3: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  4: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  5: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  6: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  7: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  8: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  9: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  10: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  11: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  12: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  13: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  14: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  15: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  16: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
}, {
  1: ['2', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  2: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  3: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  4: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  5: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  6: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  7: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  8: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  9: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  10: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  11: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  12: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  13: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  14: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  15: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  16: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
}, {
  1: ['3', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  2: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  3: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  4: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  5: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  6: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  7: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  8: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  9: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  10: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  11: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  12: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  13: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  14: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  15: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  16: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
}, {
  1: ['4', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  2: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  3: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  4: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  5: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  6: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  7: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  8: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  9: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  10: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  11: ['Tamam', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  12: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  13: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  14: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  15: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
  16: ['Udin', "H1101211037", 'https://i.pinimg.com/564x/86/07/84/86078420477da218561e91a716eed147.jpg'],
}];

// Get #all_asset
const assetContainer = document.querySelector('#all_asset');

// Define a class
class Asset {
  // Set parameters
  constructor(id, name, nim, image) {
    this.id = id;
    this.name = name;
    this.nim = nim;
    this.image = image;
  }

  // Create HTML
  addHtml() {
    // HTML elements as string
    let html = `
    <div class='columnProfil' id="list_asset${this.id}">
    <div style="width:100%;"><img src="${this.image}" id="asset_image${this.id}" class='imageProfil'>
    </div>
    <h4 id="asset_name${this.id}">${this.name}</h4>
        <p id="asset_nim${this.id}">${this.nim}</p>
      </div>`;

    // Add HTML element before the end of #all_asset
    assetContainer.insertAdjacentHTML('beforeend', html);
  }
}

// Make instances and put them into an array




// for (const key in givenAssets[indexCarousel]) {
//   assets.push(new Asset(key, givenAssets[indexCarousel][key][0], givenAssets[indexCarousel][key][1], givenAssets[indexCarousel][key][2]))
// }

// // Execute .addHtml() on each asset one by one.
// assets.forEach(asset => asset.addHtml());

let assets = [];
let indexCarousel = 0;

function changeIndex(index) {
  
indexCarousel= index;
  if (indexCarousel == 0) {
    indexCarousel + index;
    for (const key in givenAssets[0]) {
      assets.push(new Asset(key, givenAssets[0][key][0], givenAssets[0][key][1], givenAssets[0][key][2]))
    }

    // Execute .addHtml() on each asset one by one.
    assets.forEach(asset => asset.addHtml());

  }
  if (indexCarousel == 1) {
    indexCarousel + index;
    for (const key in givenAssets[1]) {
      assets.push(new Asset(key, givenAssets[1][key][0], givenAssets[1][key][1], givenAssets[1][key][2]))
    }

    // Execute .addHtml() on each asset one by one.
    assets.forEach(asset => asset.addHtml());

  }
  if (indexCarousel == 2) {
    indexCarousel + index;
    for (const key in givenAssets[2]) {
      assets.push(new Asset(key, givenAssets[2][key][0], givenAssets[2][key][1], givenAssets[2][key][2]))
    }

    // Execute .addHtml() on each asset one by one.
    assets.forEach(asset => asset.addHtml());

  }
  if (indexCarousel == 3) {
    indexCarousel + index;
    for (const key in givenAssets[3]) {
      assets.push(new Asset(key, givenAssets[3][key][0], givenAssets[3][key][1], givenAssets[3][key][2]))
    }

    // Execute .addHtml() on each asset one by one.
    assets.forEach(asset => asset.addHtml());

  }


}