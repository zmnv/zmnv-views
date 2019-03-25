'use strict';

const fs = require('fs');
const currentDate = require('../js-helpers/currentDate');

const buttonsMenu = () => {
    const view = /*html*/`
        <div class="vg-toolbar">
            <button class="vg-button vg-button__copy-to-clipboard" data-clipboard-text="Вы пытались скопировать, но не вышло...">Скопировать ссылку</button>
            <button class="vg-button vg-button_danger" onClick="clearAll()">Сбросить</button>
        </div>
    `;
    return process.env.LAYOUT && process.env.LAYOUT === 'CHECKS' ? view : '';
}

function ViewsHeader(userTitle, css) {

    const currDate = currentDate(true);
    const title = userTitle || '';
    const fullTitle = `${userTitle} - ${currDate}`;
    const userDescription = process.env.ZMNV_VIEWS_DESCRIPTION;
    const description = userDescription ? `${userDescription} - ${currDate}` : currDate;
    const og_image = process.env.ZMNV_VIEWS_PREVIEW || 'https://raw.githubusercontent.com/zmnv/zmnv-views/master/zmnv-views-preview.png';
    return /*html*/`
<!DOCTYPE html>
<html lang="ru" >
    <head>
        <title>${fullTitle}</title>
        <meta name="description" content="${description}">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="og:type" content="website">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="twitter:card" content="summary">
        <meta property="twitter:title" content="${title}">
        <meta property="og:image" content="${og_image}">
        <meta property="og:image:type" content="image/png">
        <link href="${css}" rel="stylesheet" />
    </head>
    <body>
        ${buttonsMenu()}
        <div class="vg-header container-width-max pad-t-64 mar-b-48">
            <div id="target" class="vg-header__dateModify">${currentDate(true)}</div>
            <h1 class="vg-header__title">${title}</h1>
            <div class="vg-header__dateModify">↓</div>
        </div>
`;
}

module.exports = ViewsHeader;
