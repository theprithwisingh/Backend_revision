const fs = require('fs');

// File path
const filePath = 'index.txte';

// Open the file
fs.open(filePath, 'r', (err, fileDescriptor) => {
  if (err) {
    console.error('Error opening file:', err);
    return;
  }

  // Read the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    console.log('File content:', data);

    // Write to the file
    const newData = data + '\nAppended content.';
    fs.writeFile(filePath, newData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log('Content appended successfully.');

      // Close the file
      fs.close(fileDescriptor, (err) => {
        if (err) {
          console.error('Error closing file:', err);
          return;
        }
        console.log('File closed successfully.');
      });
    });
  });
});
