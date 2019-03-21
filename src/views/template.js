const ENV = require('../../environment');

function ImageCard(fileName, name) {
    const imgFolder = 'images';
    const imgTag = `<img src="${imgFolder}/${fileName}" class="vg-imageCard__image" />\n`;
    const aTag = innerElement => `<a target="_blank" href="${imgFolder}/${fileName}" class="vg-imageCard__link">${innerElement}</a>`;

    // const fileName = pathName.split('/');
    // const tempId = fileName[fileName.length-1];
    const tempId = Math.random().toString(32).substr(2);

    const checkBoxesFileName = /*html*/`
              <label class="control control-checkbox">
                <input type="checkbox" data-tempid="${tempId}" />
                ${name}
                <div class="control_indicator"></div>
              </label>
    `

    return /*html*/`
        <div class="col-12 col-sm-4 col-lg-3 mar-b-48">
            <div class="vg-imageCard" data-tempid="${tempId}">

              ${process.env.LAYOUT && 
                process.env.LAYOUT === 'CHECKS' ? 
                checkBoxesFileName : '<div class="mar-b-8">'+name+'</div>' }
          
              ${aTag(imgTag)}
            </div>
        </div>\n
    `
}

// console.log(ImageCard('privet/poka/prive.jpeg'));

// Я не помню, почему это сделано так. Обдумать.
let template = '';

function Template(inputArray) {
  inputArray.forEach(element => {
    if (element['type'] !== 'directory') {
      // console.log('FILE ' + element['path']);

      const publicPathFile = element['path'].split(`${ENV.currentPath}/`);
      template += ImageCard(publicPathFile[1], element['name']);
    } else {
      // console.log('DIRECTORY ' + element['name']);

      template += /*html*/`<div class="col-12"><h2 class="mar-b-32">${element['name']}</h2></div>\n`;
      Template(element['children']);
    }
  });
  // template += '</div>';
  return template;
}

module.exports = Template;
