class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.online = false;
  }

  get online() {
    return this._online;
  }

  set online(value) {
    this._online = value;

    if (this.divTitle) {
      this.divTitle.className = this._online ? 'title online' : 'title';
    }
  }

  render(id) {
    this.article = document.createElement('article');
    document.getElementById(id).appendChild(this.article);

    this.divTitle = document.createElement('div');
    this.divTitle.className = this.online ? 'title online' : 'title';
    this.divTitle.textContent = this.firstName + ' ' + this.lastName;
    this.article.appendChild(this.divTitle);

    this.toggleButton = document.createElement('button');
    this.toggleButton.innerHTML = '&#8505;';
    this.divTitle.appendChild(this.toggleButton);

    this.divInfo = document.createElement('div');
    this.divInfo.className = 'info';
    this.divInfo.style.display = 'none';
    this.article.appendChild(this.divInfo);

    this.spanPhone = document.createElement('span');
    this.spanPhone.textContent = '&phone; ' + this.phone;
    this.divInfo.appendChild(this.spanPhone);

    this.spanEmail = document.createElement('span');
    this.spanEmail.innerHTML = '&#9993; ' + this.email;
    this.divInfo.appendChild(this.spanEmail);

    this.toggleButton.addEventListener('click', () => {
      this.divInfo.style.display = this.divInfo.style.display === 'none' ? 'block' : 'none';
    });
  }
}

let contacts = [
  new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
  new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
  new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com')
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
