function ImageCard(pathName) {
    const imgTag = `<img src="${pathName}" class="vg-imageCard__image" />\n`;
    const aTag = innerElement => `<a href="${pathName}" class="vg-imageCard__link" target="_blank">${innerElement}</a>`;

    const fileName = pathName.split('/');

    return `
        <div class="col-12 col-sm-4 col-lg-3 mar-b-48">
            <div class="vg-imageCard">
                <div class="vg-imageCard__filename mar-b-8">${fileName[fileName.length-1]}</div>
                ${aTag(imgTag)}
            </div>
        </div>\n
    `
}

// console.log(ImageCard('privet/poka/prive.jpeg'));


let template = '';

function Template(inputArray) {

  template += '<div class="vg-container"><div class="row">';
  
  inputArray.forEach(element => {
    if (element['type'] !== 'directory') {
      template += ImageCard(element['path']);
    } else {
      // console.log('DIRECTORY ' + element['name']);
      template += `<div class="row vg-container__inside">\n`;
      template += `<div class="col-12"><h2 class="mar-b-32">${element['name']}</h2><div>\n`;
      Template(element['children']);
      template += `</div>\n`;
    }
  });

  template += '</div></div>';

  return template;
}

module.exports = Template;
