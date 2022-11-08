onLoad();
async function onLoad() {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  const response = await fetch('http://localhost:3030/data/furniture');
  if (!response.ok) {
    const error = await response.json();
    alert(error.message);
  }
  const data = await response.json();

  data.forEach(el => tbody.innerHTML += `
  <tr>
  <td>
      <img src="${el.img}">
  </td>
  <td>
      <p>${el.name}</p>
  </td>
  <td>
      <p>${el.price}</p>
  </td>
  <td>
      <p>${el.factor}</p>
  </td>
  <td>
      <input type="checkbox" />
  </td>
</tr>
`);
}