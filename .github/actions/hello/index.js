const core = require("@actions/core");
const github = require("@actions/github");

try {
    //throw(new Error("some error message"));
    core.debug("Debug message");
    core.warning("Warning message");
    core.error("Error message");

    const name = core.getInput("who-to-greet");
    core.setSecret("name");
    console.log("Hello ${name}");

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    core.startGroup("Logging github object");
    core.endGroup();

    core.exportVariable("HELLO", "hello");
    console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
    core.setFailed(error.message);
}
