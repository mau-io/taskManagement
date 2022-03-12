const generateId = () => {
    const id = Math.random().toString(36).substring(2, 9);
    return id;
}

const defaultData = [
    {
        title: "title 1",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
        id: 1
    }
]

const elements = localStorage.getItem('data') 
    ? JSON.parse(localStorage.getItem('data')) 
    : defaultData;


const updateLocalStorage = () => {
    localStorage.setItem('data', JSON.stringify(elements));
}

const deleteElement = (id) => {
    const index = elements.findIndex(element => element.id === id);
    if (index !== -1) {
        elements.splice(index, 1);
    }
}

const createCard = ({title, details, id}) => {
    const app = document.getElementsByClassName('titles')[0];
    const card = document.createElement('div');

    // set id
    card.setAttribute('id', id);

    card.innerHTML = `
        <div class="title">
            <h2> ${title} </h2>
            <span class="close">X</span> 
            <p> ${details} </p>
        </div>
    `;
    // add event listener to the close button
    card
        .getElementsByClassName('close')[0]
        .addEventListener('click', () => {
            
            // remove the card from the elements by id atributes
            deleteElement(id);

            // update localStorage
            updateLocalStorage();

            // remove the card from the DOM
            card.remove();

            console.log(elements);
    });

    app.appendChild(card);
}



const addCard = () => {
    // get "input[name=title]" element
    let title = document.getElementsByName('title')[0]?.value;
    // get "input[name=details]" element
    let details = document.getElementsByName('details')[0]?.value;

    //if has title
    if (title.length > 0) {
        title = title
    }
    // doesnt have title    
    else {
        title = "N/A"
    }

    if (details.length > 0) {
        details = details
    } else {
        details = "N/A"
    }


    const card = {
        title,
        details,
        id: generateId()
    }

    // add card to the elements array
    elements.push(card);

    // update localStorage
    updateLocalStorage();
    
    // create the card in the DOM
    createCard(card);
}

const button = document.getElementsByClassName('submit')[0];

button.addEventListener('click', (e) => {
    e.preventDefault();
    addCard();
})

for(element of elements) {
    createCard(element);
}