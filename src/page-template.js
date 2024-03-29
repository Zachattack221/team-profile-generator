// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="col-4">
        <div class="card">
            <div class="card-header bg-primary">
                <h2>${manager.getName()}</h2>
                <h3>
                    <i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}
                </h3>
            </div>
            <div>
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            ID: ${manager.getId()}
                        </li>
                        <li class="list-group-item">
                            Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                        </li>
                        <li class="list-group-item">
                            Office number: ${manager.getOfficeNumber()}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="col-4">
        <div class="card">
            <div class="card-header bg-primary">
                <h2>${engineer.getName()}</h2>
                <h3>
                    <i class="fas fa-glasses mr-2"></i>${engineer.getRole()}
                </h3>
            </div>
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    </li>
                    <li class="list-group-item">
                        GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank"
                            rel="noopener noreferrer">${engineer.getGithub()}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
        <div class="col-4">
        <div class="card">
            <div class="card-header bg-primary">
                <h2>${intern.getName()}</h2>
                <h3>
                    <i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}
                </h3>
            </div>
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
        `;
    };

// Combines generated team, filters and pushes together Manager, Engineer, and Intern components 
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    </head>
    <body>
    <div class="jumbotron bg-warning">
        <header class="row">
            <h1 class="display-4 col-12 text-center text-black">My Team</h1>
        </header>
    </div>
        <main class="container">
        <div class="row d-flex justify-content-center">
            ${generateTeam(team)}
            </div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
</html>
    `;
};
