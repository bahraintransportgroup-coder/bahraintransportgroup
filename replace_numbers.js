const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Latitude 7420\\Downloads\\Bahrain Taxi';

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace wa.me links
    content = content.replace(/13073464572/g, '923176243861');

    // Replace display text +1 (307) 346-4572
    content = content.replace(/\+1\s*\(307\)\s*346-4572/g, '+92 317 624 3861');

    // Replace seo text +1-307-346-4572
    content = content.replace(/\+1-307-346-4572/g, '+92-317-624-3861');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated', filePath);
    }
}

function walk(currDir) {
    const list = fs.readdirSync(currDir);
    for (let file of list) {
        file = path.join(currDir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('.next')) {
                walk(file);
            }
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.txt')) {
                replaceInFile(file);
            }
        }
    }
}

walk(dir);
