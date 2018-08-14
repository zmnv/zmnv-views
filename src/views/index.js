function ImageCard(pathName) {
    const imgTag = `<img src="${pathName}" class="vg-imageCard__image" />\n`;
    const aTag = innerElement => `<a href="${pathName}" class="vg-imageCard__link">${innerElement}</a>`;

    const fileName = pathName.split('/');
    // const tempId = fileName[fileName.length-1];
    const tempId = Math.random().toString(32).substr(2);

    return `
        <div class="col-12 col-sm-4 col-lg-3 mar-b-48">
            <div class="vg-imageCard" data-tempid="${tempId}">


              <label class="control control-checkbox">
                <input type="checkbox" data-tempid="${tempId}" />
                ${fileName[fileName.length-1]}
                <div class="control_indicator"></div>
              </label>
          
              ${aTag(imgTag)}
            </div>
        </div>\n
    `
}

// console.log(ImageCard('privet/poka/prive.jpeg'));


let template = '';

function Template(inputArray) {
  inputArray.forEach(element => {
    if (element['type'] !== 'directory') {
      template += ImageCard(element['path']);
    } else {
      // console.log('DIRECTORY ' + element['name']);
      // template += `<div class="vg-container__inside">\n`;
      template += `<div class="col-12"><h2 class="mar-b-32">${element['name']}</h2></div>\n`;
      Template(element['children']);
    }
  });
  // template += '</div>';
  return template;
}

module.exports = Template;
