function browserHistory(object, array) {
    array.forEach(element => {
        let [command, program] = element.split(' ');

        if (command === "Open") {
            openTab(command, program);
        } else if (command === "Close") {
            closeTab(command, program);
        } else {
            clearObject();
        }
    });

    console.log(object["Browser Name"]);
    console.log(`Open Tabs: ${object["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${object["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${object["Browser Logs"].join(', ')}`);

    function openTab(command, program) {
        object["Open Tabs"].push(program);

        browerLogs(command, program);
    }

    function closeTab(command, program) {
        if (object["Open Tabs"].includes(program)) {
            let index = object["Open Tabs"].indexOf(program);
            object["Open Tabs"].splice(index, 1);
            object["Recently Closed"].push(program);

            browerLogs(command, program);
        }
    }

    function browerLogs(command, program) {
        object["Browser Logs"].push(`${command} ${program}`);
    }

    function clearObject() {
        object["Open Tabs"] = [];
        object["Recently Closed"] = [];
        object["Browser Logs"] = [];
    }
}

browserHistory(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);

browserHistory(
    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);