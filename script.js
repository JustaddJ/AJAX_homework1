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
    const fragment1 = document.createDocumentFragment();
    response.forEach((elem, i) => {
        const card = document.createElement('div');
        card.classList.add('card', 'text-center');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-center');
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = elem.username;
        // const cardAbout = document.createElement('div');
        // cardAbout.classList.add('card');
        // const cardBodyAbout = document.createElement('div');
        // cardBodyAbout.classList.add('card-body', 'text-center');
        const cardTextAbout = document.createElement('p');
        cardTextAbout.classList.add('card-text');
        
        
        


        


        cardTitle.style.display = 'inline';
        cardTitle.style.cursor = 'pointer';

        cardTitle.addEventListener('click', () => {
            cardTextAbout.classList.toggle('active');
            if (cardTextAbout.classList.contains('active')) {
                // const namesArray = Object.entries(elem);
                
                for (let key in elem) {
                    
                    if (typeof(elem[key]) === 'object') {
                        for (let value of Object.values(elem[key])) {
                            
                            if (typeof(value) === 'object') {
                                for (let value2 of Object.values(value)) {
                                    
                                    cardTextAbout.append(`${key}: ${value2}, `);
                                }
                            } else {
                                cardTextAbout.append(`${key}: ${value}, `);
                            }
                            
                        }
                        // cardTextAbout.append(`${key}: ${[key].value} `);
                    } else {
                        cardTextAbout.append(`${key}: ${elem[key]}, `);
                    }
                }
                // cardTextAbout.textContent = ;
                card.appendChild(cardTextAbout);
            } else {
                cardTextAbout.textContent = '';
            }
        });

        
        

        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        fragment.appendChild(card);

        // getFullInfo(cardTitle); 
    });
    container.appendChild(fragment);
    // console.log(cardTitle)

       
}

// function getFullInfo(elem) {
   

//     // console.log(response)

//     elem.addEventListener('click', () => {
//         for (let key in item) {
//             console.log(key)
//         }
//     });


// }

