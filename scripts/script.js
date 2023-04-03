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
            }
        });


        colorInput.addEventListener('change', () => {
            console.log('color input changed');

            const colorValue = colorInput.value;
            console.log(colorValue);
            console.log(svgShirt.querySelector('path'));
            svgShirt.querySelector('path').setAttribute('style', ('fill:' + colorValue));

        });

        const shirtText = document.createElement('p');
        const TextInput = document.querySelector('form input[type="text"]');

        TextInput.addEventListener('input', (e) => {
            shirtText.textContent = e.target.value;
            document.querySelector('.design>main>section').appendChild(shirtText);
        });


        const sizeFieldset = form.querySelector('fieldset:nth-of-type(1)');
        const genderFieldset = form.querySelector('fieldset:nth-of-type(2)');

        form.addEventListener('submit', (event) => {
            if (!isRadioButtonChecked(sizeFieldset)) {
                alert('Selecteer een maat');
                event.preventDefault();
            }

            if (!isRadioButtonChecked(genderFieldset)) {
                alert('Selecteer een model');
                event.preventDefault();
            }
        });

        function isRadioButtonChecked(fieldset) {
            const radioButtons = fieldset.querySelectorAll('input[type="radio"]');
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    return true;
                }
            }
            return false;
        }
        break;


    case '/overview.html':
        console.log('overview');

        const svg = document.querySelector('svg');

        // Get form data from localStorage
        const color = localStorage.getItem('color');
        const size = localStorage.getItem('size');
        const gender = localStorage.getItem('gender');
        const savedText = localStorage.getItem('text');
        const savedImage = localStorage.getItem('image');

        if (savedText) {
            const textElement = document.createElement('p');
            textElement.innerText = savedText;
            document.querySelector('.overview>main>div>section:first-of-type>section:first-of-type').appendChild(textElement);
        }

        if (savedImage) {
            const imageElement = document.createElement('img');
            imageElement.src = savedImage;
            document.querySelector('.overview>main>div>section:first-of-type>section:first-of-type').appendChild(imageElement);
        }

        if (color) {
            svg.querySelector('path').setAttribute('fill', color);
        }

        // Set form data to overview page
        document.querySelector('.overview>main>div>section>section:nth-of-type(2)>p:first-of-type').innerHTML = 'Kleur : ' + color;
        document.querySelector('.overview>main>div>section>section:nth-of-type(2)>p:nth-of-type(2)').innerHTML = 'Maat : ' + size;
        document.querySelector('.overview>main>div>section>section:nth-of-type(2)>p:nth-of-type(3)').innerHTML = 'Model : ' + gender;


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