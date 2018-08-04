function ViewsHeader(title, css) {
    return `
<!DOCTYPE html>
<html lang="ru" >
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="${css}" rel="stylesheet" />
    </head>
    <body>
        <div class="container-width-min pad-t-64 mar-b-48">
            <h1 class="vg-header__title">${title}</h1>
            <div class="vg-header__dateModify">24 янв 2019 в 24:21</div>
        </div>
`;
}

module.exports = ViewsHeader;
