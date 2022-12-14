const container = document.querySelector('.container');

(function getPost() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    
    request.addEventListener('load', () => {
        const response = JSON.parse(request.responseText);
        pushResponse(response);
    });
    
    request.send();
})();

function pushResponse(response) {
    const fragment = document.createDocumentFragment();
    response.forEach((elem, i) => {
        const card = document.createElement('div');
        card.classList.add('card', 'text-center');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-center');
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = elem.username;
        const cardTextAbout = document.createElement('p');
        cardTextAbout.classList.add('card-text');
        cardTitle.style.display = 'inline';
        cardTitle.style.cursor = 'pointer';

        cardTitle.addEventListener('click', () => {
            cardTextAbout.classList.toggle('active');
            if (cardTextAbout.classList.contains('active')) {
                for (let key in elem) {
                    if (typeof(elem[key]) === 'object') {
                        for (let value of Object.values(elem[key])) {
                            if (typeof(value) === 'object') {
                                for (let value2 of Object.values(value)) {
                                    cardTextAbout.append(`${key}: ${value2} `);
                                }
                            } else {
                                cardTextAbout.append(`${key}: ${value} `);
                            }
                        }
                    } else {
                        cardTextAbout.append(`${key}: ${elem[key]}, `);
                    }
                }
                card.appendChild(cardTextAbout);
            } else {
                cardTextAbout.textContent = '';
            }
        });

        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}
