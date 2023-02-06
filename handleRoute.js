const users = [];

const handleUsers = (req, res, next) => {
    res.write("<h1>User List</h1>");
    res.write("<ul>");
    users.forEach((user) => {
        res.write(`<li> ${user} </li>`)
    })
    res.write("</ul>")
    res.write("<br><a href='/'>Back to landing page</a>")
    res.end();
}

const handleLanding = (req, res, next) => {
    res.write("<h1>Landing Page</h1>");
    res.write("<h3>Create User Form</h3>")
    res.write("<form method='POST' action='/create-user'>")
    res.write("<input type='text' name='user'><button type='submit'>Submit</button>")
    res.write("</form>")
    res.write("<br><a href='/users'>Go to users page</a>")
    res.end();
}

const handleCreateUser = (req, res, next) => {
    const body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    })
    req.on("end", () => {
        const bodyParser = Buffer.concat(body).toString();
        const user = bodyParser.split("=")[1].replaceAll("+", " ");
        users.push(user);
        console.log(`new user is ${user}`);
    })
    res.redirect(302,'/users')
}

module.exports = { handleUsers, handleCreateUser, handleLanding, users }