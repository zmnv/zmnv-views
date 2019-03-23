const fs = require('fs');

const keck = fs.existsSync(process.env.ZMNV_VIEWS_DEPLOY);
console.log('проверяю:', process.env.ZMNV_VIEWS_DEPLOY)
console.log('найдено?', keck);
