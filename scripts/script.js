// Switch to case on url

var path = window.location.pathname;

console.log(path);

switch (path) {
    case '/':
        console.log('Home');
        break;
    case '/designing.html':
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Get form values
            const color = document.querySelector('#color').value;
            const size = document.querySelector('#size').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const text = document.querySelector('#text').value;
            const image = document.querySelector('#image').value;

            // Save form data to localStorage
            localStorage.setItem('color', color);
            localStorage.setItem('size', size);
            localStorage.setItem('gender', gender);
            localStorage.setItem('text', text);
            localStorage.setItem('image', image);

            // Redirect to overview page
            window.location.href = form.action;
        });
        break;
    case '/overview.html':
        console.log('overview');

        const svg = document.querySelector('svg');

        // Get form data from localStorage
        const color = localStorage.getItem('color');
        const size = localStorage.getItem('size');
        const gender = localStorage.getItem('gender');
        const text = localStorage.getItem('text');
        const image = localStorage.getItem('image');

        // Set form data to overview page
        document.querySelector('main>section>p:first-of-type').innerHTML = 'Kleur : ' + color;
        document.querySelector('main>section>p:nth-of-type(2)').innerHTML = 'Maat : ' + size;
        document.querySelector('main>section>p:nth-of-type(3)').innerHTML = 'Geslacht : ' + gender;

        if (color) {
            svg.querySelector('path').setAttribute('fill', color);
          }


        break;
    case '/order.html':
        console.log('order');
        break;
    case '/confirmation.html':
        console.log('order');
        break;
    default:
        console.log('test');
        break;
}