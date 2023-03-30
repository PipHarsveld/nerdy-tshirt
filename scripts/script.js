// Switch to case on url
var path = window.location.pathname;

console.log(path);

switch (path) {
    case '/':
        console.log('Home');
        break;


    case '/design.html':
        const form = document.querySelector('form');
        const colorInput = document.querySelector('form input[type="color"]');
        const fileInput = document.querySelector('form input[type="file"]');
        const image = document.createElement('img');
        const svgShirt = document.querySelector('svg');

        fileInput.addEventListener('change', (event) => {
            console.log('file input changed');
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                console.log(reader.result);
                image.src = reader.result;
                image.alt = 'uploaded image';
                image.classList.add('uploaded-image');
                document.querySelector('.design>main>section:first-of-type').appendChild(image);
                localStorage.setItem('image', reader.result);
            });

            if (event.target.files && event.target.files[0]) {
                reader.readAsDataURL(event.target.files[0]);
            }1
        });

/****************************************************************************************************************/
/*                              WERKT NIET MAAK IK SNAP NIET WAAROM, HELP                                       */
/****************************************************************************************************************/
        colorInput.addEventListener('change', () => {
            console.log('color input changed');

            const colorValue = colorInput.value;
            console.log(colorValue);
            console.log(svgShirt.querySelector('path'));
            svgShirt.querySelector('path').setAttribute('fill', colorValue);

        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Get form values
            const color = document.querySelector('#color').value;
            const size = document.querySelector('#size').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const text = document.querySelector('#text').value;

            // Save form data to localStorage
            localStorage.setItem('color', color);
            localStorage.setItem('size', size);
            localStorage.setItem('gender', gender);
            localStorage.setItem('text', text);

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
        const savedImage = localStorage.getItem('image');

        const imageElement = document.createElement('img');

        imageElement.src = savedImage;

        document.querySelector('.overview>main>section>section:first-of-type').appendChild(imageElement);


        // Set form data to overview page
        document.querySelector('main>section>p:first-of-type').innerHTML = 'Kleur : ' + color;
        document.querySelector('main>section>p:nth-of-type(2)').innerHTML = 'Maat : ' + size;
        document.querySelector('main>section>p:nth-of-type(3)').innerHTML = 'Model : ' + gender;

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