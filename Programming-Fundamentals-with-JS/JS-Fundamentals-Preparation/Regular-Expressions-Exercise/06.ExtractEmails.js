function extractEmails(input) {
    const pattern =
        /(?<!\S)[A-Za-z0-9]+([\.\-\_]*[A-Za-z0-9]+)*@[A-Za-z]+([\.\-\_]*[A-Za-z]+)*\.[A-Za-z]+/g;

    const match = input.match(pattern);

    match.forEach(el => console.log(el));
}

extractEmails(`Please contact us at: support@github.com.`);
extractEmails(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`);
extractEmails(`Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.`);