var header = document.querySelector('header[class="AppHeader"]');
if (!header) {
    header = document.getElementById("repository-container-header");
}

var public = document.head.querySelector('meta[name="octolytics-dimension-repository_public"]');
if ('content' in public && public.content) {
    header.style.boxShadow = "0 0 5em darkred";
}
