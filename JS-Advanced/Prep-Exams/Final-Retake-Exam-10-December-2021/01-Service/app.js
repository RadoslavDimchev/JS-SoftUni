window.addEventListener('load', solve);

function solve() {
    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');

    const type = document.getElementById('type-product');
    const description = document.getElementById('description');
    const name = document.getElementById('client-name');
    const phone = document.getElementById('client-phone');

    const sendBtn = document.querySelector('button[type="submit"]');
    sendBtn.addEventListener('click', sendForm);

    const clearBtn = document.getElementsByClassName('clear-btn')[0];
    clearBtn.addEventListener('click', () => {
        Array
            .from(completedOrders.querySelectorAll('.container'))
            .forEach(c => c.remove());
    });

    function sendForm(e) {
        e.preventDefault();

        const typeValue = type.value;
        const descriptionValue = description.value;
        const nameValue = name.value;
        const phoneValue = phone.value;

        if (!descriptionValue || !nameValue || !phoneValue) {
            return;
        }

        const div = generateElement('div', receivedOrders, null, 'container');
        generateElement('h2', div, `Product type for repair: ${typeValue}`);
        generateElement('h3', div, `Client information: ${nameValue}, ${phoneValue}`);
        generateElement('h4', div, `Description of the problem: ${descriptionValue}`);

        const startBtn = generateElement('button', div, 'Start repair', 'start-btn');
        startBtn.addEventListener('click', () => {
            startBtn.setAttribute('disabled', true);
            finishBtn.removeAttribute('disabled');
        });

        const finishBtn = generateElement('button', div, 'Finish repair', 'finish-btn');
        finishBtn.setAttribute('disabled', true);
        finishBtn.addEventListener('click', () => {
            completedOrders.appendChild(div);
            startBtn.remove();
            finishBtn.remove();
        });

        description.value = '';
        name.value = '';
        phone.value = '';
    }

    function generateElement(elementToCreate, parent, textContent, className) {
        const element = document.createElement(elementToCreate);
        if (textContent) {
            element.textContent = textContent;
        }
        if (className) {
            element.className = className;
        }
        parent.appendChild(element);
        return element;
    }
}