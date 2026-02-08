const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const certDir = path.join(__dirname, '../public/certificates');

fs.readdir(certDir, (err, files) => {
    if (err) {
        console.error("Could not list directory", err);
        process.exit(1);
    }

    console.log(`Scanning directory: ${certDir}`);
    console.log(`Files found:`, files);
    const pdfFiles = files.filter(f => f.toLowerCase().endsWith('.pdf'));

    if (pdfFiles.length === 0) {
        console.log("No PDF files found.");
        return;
    }

    console.log(`Found ${pdfFiles.length} PDF files. Processing...\n`);

    pdfFiles.forEach(file => {
        const filePath = path.join(certDir, file);
        const dataBuffer = fs.readFileSync(filePath);

        pdf(dataBuffer).then(function (data) {
            // PDF text
            const text = data.text.trim();
            // Try to find the title - usually the first few lines, or lines containing "completed", "certificate", etc.
            // Forage certificates usually have "Certificate of Completion" and then the course name.

            // Let's just print the first 300 characters to be safe
            const snippet = text.substring(0, 500).replace(/\n/g, ' ');

            console.log(`File: ${file}`);
            console.log(`Text Preview: ${snippet}`);
            console.log('-'.repeat(50));
        }).catch(err => {
            console.error(`Error parsing ${file}:`, err);
        });
    });
});
