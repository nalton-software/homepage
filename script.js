const projectsContainer = document.getElementById("projects-container");

function htmlToElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstChild;
}

function externLink(faIcon, link) {
    return `<a class="fab fa-${faIcon} fa-2x" href="${link}" target="_blank"></a>`
}

// data exepects:
// {
//    name: name of project show as a h1 (string)
//    id: id of the element used to link with hashtag (string)
//    githubLink: link of the github repo (string/optional)
//    link: link of the project (string)
//    description: description of the project in html markup (string)
//    image: url of the image next to project (string)
// }
function addProject(data) {
    let extraLinksHtml = "";

    if (data.githubLink) {
        extraLinksHtml += externLink("github", data.githubLink);
    }

    const lightColor = projectsContainer.childElementCount % 2 == 0;

    // prettier-ignore
    const article = htmlToElement(`
        <article class="project ${lightColor ? "light-left" : "dark-right"}" id="${data.id}">
            <div class="content-container">
                <h2>${data.name}</h2>

                ${extraLinksHtml}

                <a href="${data.link}" class="website-link" target="_blank">
                    ${data.link}
                    <i class="fas fa-external-link-alt"></i>
                </a>

                <div class="description">
                    ${data.description}
                </div>
            </div>

            <img src="${data.image}" alt="Screenshot of ${data.name}">
        </article>
    `);

    projectsContainer.appendChild(article);
}

projects.forEach(addProject);
new ScrollPrompt();