const makePage = data => {
    const outputArray = data.map(property => {
        const {role, name, id, email, extra} = property;
        return `
        <div class="card m-2">
            <div class="card-header bg-info text-white p-3">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-title">${role}</h6>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">EMAIL: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">${extra}</li>
                </ul>
            </div>
        </div>
        `;
    });

    return outputArray.join('\n');
}

module.exports = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>TEAM PROFILE</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                    <div class="col-12 bg-dark text-white py-3 mb-4">
                        <h1 class="text-center">TEAM PROFILE</h1>
                    </div>
            </div>
            <div class="row">
                <div class="col-12 justify-content-center d-flex flex-wrap p-3">
                    ${makePage(data)}
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </body>
    </html>
    `;
}

// exporting two functions using shorthand property names
// module.exports = { 
//     writeFile, 
//     copyFile 
// };