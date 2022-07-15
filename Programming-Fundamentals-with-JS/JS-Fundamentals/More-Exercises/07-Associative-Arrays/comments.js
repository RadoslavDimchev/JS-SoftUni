function comments(input = []) {
    // create collections to store data
    const articles = {};
    const usersList = [];
    const articlesList = [];

    // parse input
    for (const command of input) {
        const tokens = command.split(' ');

        const addToList = (list) => list.push(tokens.pop());

        if (tokens[0] === 'user') {
            // add user to the users list
            addToList(usersList);
        } else if (tokens[0] === 'article') {
            // add article to the articles list
            addToList(articlesList);
        } else {
            // save article, user, title and content 
            saveInfo(tokens);
        }
    }

    sortAndPrint();

    function saveInfo(tokens) {
        // get the elements from command
        const username = tokens.shift();
        tokens = tokens.join(' ').split(': ');

        const article = tokens
            .shift()
            .split(' ')
            .pop();

        const [title, content] = tokens
            .join(' ')
            .split(', ');

        // check if elements exist
        if (usersList.includes(username) && articlesList.includes(article)) {

            // add elements
            if (!articles.hasOwnProperty(article)) {
                articles[article] = [];
            }

            articles[article].push({ username, title, content });
        }
    }

    function sortAndPrint() {
        // sort articles by count of comments
        const sortedArticles = Object.entries(articles)
            .sort((a, b) => b[1].length - a[1].length);

        for (const [article, data] of sortedArticles) {
            // print article
            console.log(`Comments on ${article}`);

            // sort users in ascending and print them
            data.sort((a, b) => a.username.localeCompare(b.username))
                .forEach(obj => console.log(
                    `--- From user ${obj.username}: ${obj.title} - ${obj.content}`
                ));
        }
    }
}

comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping',
    'user someUser', 'user uSeR4', 'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);
comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby', 'article Steven', 'user Liam', 'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);

// second solution using RegExp    

/* function comments(input = []) {
    // create collections to store data
    const articles = {};
    const usersList = [];
    const articlesList = [];

    // parse input
    for (const command of input) {
        const tokens = command.split(' ');

        const addToList = (list) => list.push(tokens.pop());

        if (tokens[0] === 'user') {
            // add user to the users list
            addToList(usersList);
        } else if (tokens[0] === 'article') {
            // add article to the articles list
            addToList(articlesList);
        } else {
            // save article, user, title and content 
            saveInfo(command);
        }
    }

    sortAndPrint();

    function saveInfo(command) {
        // get the elements from command
        const pattern =
            /(?<user>\w+) [a-z]+ [a-z]+ (?<article>\w+): (?<title>[\w+ ]+), (?<content>[\w+ ]+)/g;
        const match = pattern.exec(command);

        if (match) {
            const username = match.groups.user;
            const article = match.groups.article;
            const title = match.groups.title;
            const content = match.groups.content;

            // check if elements exist
            if (usersList.includes(username) && articlesList.includes(article)) {

                // add elements
                if (!articles.hasOwnProperty(article)) {
                    articles[article] = [];
                }

                articles[article].push({ username, title, content });
            }
        }
    }

    function sortAndPrint() {
        // sort articles by count of comments
        const sortedArticles = Object.entries(articles)
            .sort((a, b) => b[1].length - a[1].length);

        for (const [article, data] of sortedArticles) {
            // print article
            console.log(`Comments on ${article}`);

            // sort users in ascending and print them
            data.sort((a, b) => a.username.localeCompare(b.username))
                .forEach(obj => console.log(
                    `--- From user ${obj.username}: ${obj.title} - ${obj.content}`
                ));
        }
    }
} */