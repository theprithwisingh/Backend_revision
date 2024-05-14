const fs = require('fs');
const path = require('path');

// Function to read a file
const readFile = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File content of ${filePath}:`);
        console.log(data);
    });
};

// Function to create a file
const createFile = (filePath, content) => {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${filePath} created successfully!`);
    });
};

// Function to update a file
const updateFile = (filePath, newContent) => {
    fs.appendFile(filePath, newContent, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${filePath} updated successfully!`);
    });
};

// Function to delete a file
const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${filePath} deleted successfully!`);
    });
};

// Function to rename a file
const renameFile = (filePath, newFilePath) => {
    fs.rename(filePath, newFilePath, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${filePath} renamed to ${newFilePath} successfully!`);
    });
};

// Usage
const fileName = 'example.txt';
const filePath = path.join(__dirname, fileName);

// Create a file
createFile(filePath, 'Hello, this is a sample file content.\n');

// Read a file
readFile(filePath);

// Update a file
updateFile(filePath, 'This is the updated content.\n');

// Delete a file
deleteFile(filePath);

// Rename a file
const newFileName = 'new_example.txt';
const newFilePath = path.join(__dirname, newFileName);
renameFile(filePath, newFilePath);
