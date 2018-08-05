const currentDate = require('../js-helpers/currentDate');

function ViewsHeader(title, css) {
    const titlePlaceholder = 'Выбрать';
    return `
<!DOCTYPE html>
<html lang="ru" >
    <head>
        <title>${currentDate(true)} – ${titlePlaceholder}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="${css}" rel="stylesheet" />
    </head>
    <body>
        <div class="vg-header container-width-max pad-t-64 mar-b-48">
            <h1 class="vg-header__title">${currentDate(true)}</h1>
            <div class="vg-header__dateModify">↓</div>
        </div>
`;
}

module.exports = ViewsHeader;
