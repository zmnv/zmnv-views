const menu = require('./console-menu');
const exec = require('child_process').exec;

const titleHeader = '\n\x1b[91m◈\x1b[0m\x1b[92m◈\x1b[0m\x1b[94m◈\x1b[0m Gallery generator';
console.log(titleHeader);

menu([
    { hotkey: '1', title: 'npm run dev      Developer Mode' },
    { hotkey: '2', title: 'npm run build    Just build gallery' },
    { hotkey: '3', title: 'npm run prod     Presentation', selected: true },
    { separator: true },
    { hotkey: '4', title: 'Cleaner...', cascade: true },
    { hotkey: '?', title: 'Help' },
], {
    border: true,
}).then(item => {
    if(item && item.cascade) {
        return menu([
            { hotkey: 'a', title: 'Clear All: Build & Images', selected: true },
            { hotkey: 'b', title: 'Clear only /build/ folder' },
            { hotkey: 'c', title: 'Clear only /images/ folder'},
        ], {
            border: true,
        });
    } else {
        return item;
    }
}).then(item => {
    if (item) {
        // console.log('You chose: ' + JSON.stringify(item));
        if(item.hotkey === '1') execDevelopment();
        if(item.hotkey === '2') execBuild();
        if(item.hotkey === '3') execProduction();
        if(item.hotkey === 'a') execCleanAll();
        if(item.hotkey === 'b') execCleanBuild();
        if(item.hotkey === 'c') execCleanImages();
    } else {
        console.log('You cancelled the menu.');
    }
});

function execProduction() {
    const doProduction = exec('npm run prod');

    doProduction.stdout.on('data', function(data) {
        console.log(data); 
    });
}

function execDevelopment() {
    const doProduction = exec('npm run dev');

    doProduction.stdout.on('data', function(data) {
        console.log(data); 
    });
}

function execBuild() {
    const doProduction = exec('npm run build');

    doProduction.stdout.on('data', function(data) {
        console.log(data); 
    });
}

function execCleanAll() {
    const doProduction = exec('npm run clean');

    doProduction.stdout.on('data', function(data) {
        console.log(data); 
    });
}

function execCleanBuild() {
    const doProduction = exec('gulp clean:build');

    doProduction.stdout.on('data', function(data) {
        console.log(data); 
    });
}

function execCleanImages() {
    const doProduction = exec('gulp clean:images');

    doProduction.stdout.on('data', function(data) {
        console.log(data); 
    });
}
