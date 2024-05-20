//createFile
const createFile = () => {
    const fileName = document.getElementById('fileName').value;
    const content = document.getElementById('content').value;
    try {
        localStorage.setItem(fileName, content);
        showMessage(`File '${fileName}' created successfully.`);
        // clearInputs();
    } catch (err) {
        showMessage('Error creating file: ' + err.message);
    }
};

//readFile
const readFile = () => {
    const fileName = document.getElementById('fileName').value;
    const content = localStorage.getItem(fileName);
    if (content) {
        document.getElementById('content').value = content;
        showMessage(`Content of file '${fileName}':`);
    } else {
        showMessage(`File '${fileName}' not found.`);
    }
};

//updateFile
const updateFile = () => {
    const fileName = document.getElementById('fileName').value;
    const content = document.getElementById('content').value;
    if (localStorage.getItem(fileName)) {
        try {
            localStorage.setItem(fileName, content);
            showMessage(`File '${fileName}' updated successfully.`);
            // clearInputs();
            createFileCard(fileName, content);
        } catch (err) {
            showMessage('Error updating file: ' + err.message);
        }
    } else {
        showMessage(`File '${fileName}' not found.`);
    }
};


//deleteFile
const deleteFile = () => {
    const fileName = document.getElementById('fileName').value;
    if (localStorage.getItem(fileName)) {
        try {
            localStorage.removeItem(fileName);
            showMessage(`File '${fileName}' deleted successfully.`);
            clearInputs();
            removeFileCard(fileName);
        } 
        catch(err) {
            showMessage('Error deleting file: ' + err.message);
        }
    } 
    else{
        showMessage(`File '${fileName}' not found.`);
    }
 };
 
 const removeFileCard = (fileName) => {
    const fileCards = document.getElementsByClassName('file-card');
    for (let i = 0; i < fileCards.length; i++) {
        if (fileCards[i].querySelector('h3').textContent === fileName) {
            fileCards[i].remove();
            break;
        }
    }
 };
 
const clearInputs = () => {
    document.getElementById('fileName').value = '';
    document.getElementById('content').value = '';
};

const createFileCard = (fileName, content) => {
    const card = document.createElement('div');
    card.classList.add('file-card');
    card.innerHTML = `
        <h3>${fileName}</h3>
        <p>${content}</p>
    `;
    document.body.appendChild(card);
};

const showMessage = (message) => {
    document.getElementById('message').textContent = message;
};
