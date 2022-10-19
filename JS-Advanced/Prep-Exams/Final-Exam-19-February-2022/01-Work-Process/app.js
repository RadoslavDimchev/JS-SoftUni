function solve() {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const addWorkerBtn = document.getElementById('add-worker');
    addWorkerBtn.addEventListener('click', addWorker);

    const tbody = document.getElementById('tbody');
    const sum = document.getElementById('sum');
    let sumValue = 0;

    function addWorker(event) {
        event.preventDefault();

        const fnameValue = fname.value;
        const lnameValue = lname.value;
        const emailValue = email.value;
        const birthValue = birth.value;
        const positionValue = position.value;
        const salaryValue = salary.value;

        if (!fnameValue || !lnameValue || !emailValue
            || !birthValue || !positionValue || !salaryValue) {
            return;
        }

        const tr = genElement('tr', tbody);
        genElement('td', tr, fnameValue);
        genElement('td', tr, lnameValue);
        genElement('td', tr, emailValue);
        genElement('td', tr, birthValue);
        genElement('td', tr, positionValue);
        genElement('td', tr, salaryValue);

        const td = genElement('td', tr);
        const firedBtn = genElement('button', td, 'Fired', 'fired');
        firedBtn.addEventListener('click', fired);
        const editBtn = genElement('button', td, 'Edit', 'edit');
        editBtn.addEventListener('click', edit);

        sumValue += Number(salaryValue);
        sum.textContent = sumValue.toFixed(2);

        fname.value = '';
        lname.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';

        function edit() {
            tr.remove();

            fname.value = fnameValue;
            lname.value = lnameValue;
            email.value = emailValue;
            birth.value = birthValue;
            position.value = positionValue;
            salary.value = salaryValue;

            sumValue -= Number(salaryValue);
            sum.textContent = sumValue.toFixed(2);
        }

        function fired() {
            tr.remove();
            sumValue -= Number(salaryValue);
            sum.textContent = sumValue.toFixed(2);
        }
    }

    function genElement(tag, parent, content, className) {
        const element = document.createElement(tag);
        if (content) {
            element.textContent = content;
        }
        if (className) {
            element.className = className;
        }
        parent.appendChild(element);
        return element;
    }
}
solve();