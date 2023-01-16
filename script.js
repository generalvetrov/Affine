const alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//const alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];
const input = document.querySelector('#inp');
const mainDiv = document.querySelector('#result');



const affineEncrypt = (e) => {
    const inputText = e.target.value.toLowerCase();
    let encryptStr = '';
    
    for(letter of inputText) {
        if (alphabet.includes(letter)) {
            const x = alphabet.indexOf(letter);
            const encryptIndex = (3 * x + 4) % 26;

            encryptStr += alphabet[encryptIndex];
        }
    }

    e.target.value = '';

    return encryptStr;
}


const affineDecrypt = (e) => {
    const inputText = e.target.value.toLowerCase();
    let decryptStr = '';
    
    for(letter of inputText) {
        if (alphabet.includes(letter)) {
            const x = alphabet.indexOf(letter);
            const decryptIndex = 9 * (x + 26 - 4) % 26;

            decryptStr += alphabet[decryptIndex];
        }
    }

    e.target.value = '';

    return decryptStr;
}



const sw = document.querySelector('.switch');
sw.setAttribute('checked', 'false');

function changeCheckbox() {
    return sw.setAttribute(`checked`, `${sw.getAttribute('checked') === 'false' ? 'true' : 'false'}`);
}



input.addEventListener('keypress', (e) => {
    
    if (e.key === 'Enter') {
        const h2 = document.createElement('h2');

        if (sw.getAttribute('checked') === 'false') {
            h2.innerText = affineEncrypt(e);
        } else {
            h2.innerText = affineDecrypt(e);
        }  
        
        if (mainDiv.children.length > 0) {
            mainDiv.querySelector('h2').innerText = h2.innerText;
        } else {
            mainDiv.appendChild(h2);
        }
    }
})

