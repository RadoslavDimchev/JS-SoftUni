window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);

    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.getElementsByClassName('total-price')[0];

    function add(event) {
        event.preventDefault();

        const modelValue = model.value;
        const yearValue = Number(year.value);
        const descriptionValue = description.value;
        const priceValue = Number(price.value);

        if (!modelValue || yearValue <= 0 || !descriptionValue || priceValue <= 0) {
            return;
        }

        const trInfo = genElement('tr', furnitureList);
        trInfo.className = 'info';

        genElement('td', trInfo, modelValue);
        genElement('td', trInfo, priceValue.toFixed(2));

        const tdButtons = genElement('td', trInfo);

        const moreBtn = genElement('button', tdButtons, 'More Info');
        moreBtn.className = 'moreBtn';
        moreBtn.addEventListener('click', more);

        const buyBtn = genElement('button', tdButtons, 'Buy it');
        buyBtn.className = 'buyBtn';
        buyBtn.addEventListener('click', buy);

        const trHide = genElement('tr', furnitureList);
        trHide.className = 'hide';

        genElement('td', trHide, `Year: ${yearValue}`);
        const tdWithColspan = genElement('td', trHide, `Description: ${descriptionValue}`);
        tdWithColspan.setAttribute('colspan', 3);

        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';

        function more() {
            if (moreBtn.textContent === 'More Info') {
                moreBtn.textContent = 'Less Info';
                trHide.style.display = 'contents';
            } else {
                moreBtn.textContent = 'More Info';
                trHide.style.display = 'none';
            }
        }

        function buy() {
            trInfo.remove();
            trHide.remove();
            const totalPriceValue = Number(document.getElementsByClassName('total-price')[0].textContent);
            totalPrice.textContent = (totalPriceValue + priceValue).toFixed(2);
        }
    }

    function genElement(tag, parent, content) {
        const element = document.createElement(tag);
        if (content) {
            element.textContent = content;
        }
        parent.appendChild(element);
        return element;
    }
}