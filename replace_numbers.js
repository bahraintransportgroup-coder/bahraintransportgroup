const fs = require('fs');
const path = require('path');

const dir = 'f:\\Bahrain Taxi';

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace wa.me links
    content = content.replace(/966569487569/g, '966569487569');

    // Replace display text +966 569487569
    content = content.replace(/\+92\s*317\s*624\s*3861/g, '+966 569487569');

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
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.txt') || file.endsWith('.js') || file.endsWith('.json')) {
                replaceInFile(file);
            }
        }
    }
}

walk(dir);
