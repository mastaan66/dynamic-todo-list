const list = document.createElement('ul');
const html = document.querySelector('html');
const items = [];
document.body.appendChild(list);

function strikeThrough(text) {
    return text
        .split('')
        .map(char => char + '\u0336')
        .join('')
}

add = function () {
    
    const element = prompt('What content do you want the list item to have?');
    if (element == null) return;
    items.push(element);
    const listItem = document.createElement('li');
    listItem.textContent = element;
    list.appendChild(listItem);


    listItem.onclick = function (e) {
        e.stopPropagation();
        this.textContent = strikeThrough(element);
    }
    console.log(items)
}