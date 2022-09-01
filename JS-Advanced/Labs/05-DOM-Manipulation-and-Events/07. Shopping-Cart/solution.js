function solve() {
  const products = document.getElementsByClassName('shopping-cart')[0];
  const text = document.querySelector('textarea');
  const checkout = document.getElementsByClassName('checkout')[0];
  const cart = { products: new Set(), totalPrice: 0 };

  products.addEventListener('click', onClick);
  checkout.addEventListener('click', onCheckout);

  function onClick(ev) {
    if (ev.target.tagName === 'BUTTON') {
      const name = ev.target.parentElement.parentElement.children[1].children[0].textContent;
      const money = ev.target.parentElement.parentElement.children[3].textContent;

      cart.products.add(name);
      cart.totalPrice += Number(money);

      text.value += `Added ${name} for ${money} to the cart.\n`;
    }
  }

  function onCheckout() {
    text.value +=
      `You bought ${[...cart.products].join(', ')} for ${cart.totalPrice.toFixed(2)}.`;

    products.removeEventListener('click', onClick);
    checkout.removeEventListener('click', onCheckout);
  }
}