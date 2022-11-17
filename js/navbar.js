const wrapper = document.querySelector('#wrapper');

fetch('../views/navbar.html', {'Content-Type': 'text:html'})
.then((promise) => {
    return promise.text();
})
.then((html) => {
    let nav = document.createElement('nav');
    nav.innerHTML = html;
    wrapper.prepend(nav);
});