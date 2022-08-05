const phonebook = [];

function getPhonebook() {
	return phonebook;
}

function addContact(contact) {
	phonebook.push(contact);
}

module.exports = {
	getPhonebook,
	addContact
};