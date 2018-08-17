'use strict';

const fs = require('fs');
const currentDate = require('../js-helpers/currentDate');

const buttonsMenu = () => {
    const view = `
        <div class="vg-toolbar">
            <button class="vg-button vg-button__copy-to-clipboard" data-clipboard-text="Вы пытались скопировать, но не вышло...">Скопировать ссылку</button>
            <button class="vg-button vg-button_danger" onClick="clearAll()">Сбросить</button>
        </div>
    `;
    return !process.env.LAYOUT && process.env.LAYOUT !== 'CLEAR' ? view : '';
}

function ViewsHeader(title, css) {
    const pageTitle = '';

    return `
<!DOCTYPE html>
<html lang="ru" >
    <head>
        <title>${currentDate(true)} – ${title || pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="${css}" rel="stylesheet" />
    </head>
    <body>
        ${buttonsMenu()}
        <div class="vg-header container-width-max pad-t-64 mar-b-48">
            <div id="target" class="vg-header__dateModify">${currentDate(true)}</div>
            <h1 class="vg-header__title">${title || pageTitle}</h1>
            <div class="vg-header__dateModify">↓</div>
        </div>
`;
}

module.exports = ViewsHeader;
