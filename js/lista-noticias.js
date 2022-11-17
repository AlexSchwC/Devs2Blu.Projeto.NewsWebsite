let noticias = getJsonItem('news');
const listaNoticias = document.querySelector('#lista-noticias');

const createElement = (elName) => {
    return document.createElement(elName);
};

let id = 0;
noticias.forEach(noticia => {    
    let li = createElement('li');

    li.classList.add('bg-light', 'd-flex', 'p-2', 'm-1', 'mt-5', 'border-custom');
    if (noticia.image_url) {
        let figure = createElement('figure');
        figure.classList.add('d-flex', 'align-items-center', 'm-0');
        let img = createElement('img');
        img.classList.add('img-fluid', 'me-2');
        img.style = 'max-width: 150px;';
        img.src = noticia.image_url;
        figure.append(img);
        li.append(figure);
    }

    let divText = createElement('div');
    divText.classList.add('d-flex', 'flex-column', 'justify-content-center');
    if (!noticia.image_url) {
        divText.classList.add('ms-3');
    }
    let strong = createElement('strong');
    strong.classList.add('mt-3');
    strong.innerText = noticia.title;
    let p = createElement('p');
    p.innerText = noticia.description;
    divText.append(strong);
    divText.append(p);
    li.append(divText);

    let divButtons = createElement('div');
    divButtons.classList.add('d-flex', 'flex-column', 'justify-content-center', 'mx-2');
    let buttonLeia = createElement('button');
    buttonLeia.classList.add('btn', 'btn-primary', 'm-2');
    buttonLeia.style = 'width: 110px';
    buttonLeia.innerText = 'Leia Mais';
    buttonLeia.id = `leia-${id}`;
    buttonLeia.addEventListener('click', (event) => {
        console.dir(event);
    })
    let buttonFavoritar = createElement('button');
    buttonFavoritar.classList.add('btn', 'btn-danger', 'm-2');
    buttonFavoritar.innerText = 'Favoritar';
    divButtons.append(buttonLeia);
    divButtons.append(buttonFavoritar);
    li.append(divButtons);

    listaNoticias.append(li);
    id++;
});


/* <li class="bg-light d-flex p-2 m-1 border-custom">
    <figure class="d-flex align-items-center">
        <img
        src="./images/ankhe_news_logo.png"
        alt=""
        style="max-width: 150px"
        />
    </figure>
    <div class="d-flex flex-column justify-content-center">
        <strong class="mt-3">Titulo</strong>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Blanditiis tenetur reiciendis perspiciatis id magnam in vitae,
        ipsam alias reprehenderit consectetur similique commodi
        temporibus! Dolore expedita quisquam dolorum, corrupti tempora
        porro.
        </p>
    </div>
    <div class="d-flex flex-column justify-content-center mx-2">
        <button class="btn btn-primary m-2" style="width: 110px">
        Leia mais
        </button>
        <button class="btn btn-danger m-2">Favoritar</button>
    </div>
</li> */