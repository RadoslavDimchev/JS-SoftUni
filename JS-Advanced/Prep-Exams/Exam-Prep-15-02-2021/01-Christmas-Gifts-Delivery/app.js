function solution() {
    const [giftsList, sentGifts, discardedGifts] =
        document.querySelectorAll('section ul');
    const gift = document.querySelector('.card div input');
    const addBtn = document.querySelector('.card div button');
    addBtn.addEventListener('click', add);

    function add() {
        const li = genElement('li', giftsList, gift.value);
        li.className = gift;

        const sendBtn = genElement('button', li, 'Send');
        sendBtn.id = 'sendButton';
        sendBtn.addEventListener('click', send);

        const discardBtn = genElement('button', li, 'Discard');
        discardBtn.id = 'discardButton';
        discardBtn.addEventListener('click', discard);

        gift.value = '';

        Array
            .from(giftsList.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(e => giftsList.appendChild(e));

        function send() {
            sentGifts.appendChild(li);
            sendBtn.remove();
            discardBtn.remove();
        }

        function discard() {
            discardedGifts.appendChild(li);
            sendBtn.remove();
            discardBtn.remove();
        }
    }

    function genElement(tag, parent, textContent) {
        const element = document.createElement(tag);
        element.textContent = textContent;
        parent.appendChild(element);
        return element;
    }
}