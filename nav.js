export const navItems = [
    {
        title: 'Hem',
        id: 1,
        link: './index.html'
    },
    {
        title: 'Behandlingar',
        id: 2,
        link: './behandlingar/index.html'
    },
    {
        title: 'Om oss',
        id: 3,
        link: './omOss/index.html'
    },
    {
        title: 'Boka tid',
        id: 5,
        link: './väljTjänst/index.html'
    }
];

export function renderNav(depth = 0) {
    const navBar = document.getElementById('navigation');

    if (!navBar) return;

    let level = "";
    if (depth > 0) level = "../".repeat(depth);
    const currentPath = location.pathname;

   
        navBar.innerHTML = navItems.map(page => {
        const href = level + page.link;
        const linkPath = new URL(href, location.href).pathname;
        const activeLink = linkPath === currentPath;
        navBar.classList.add('active');

         return `
        <li>
        <a href="${href}" class="${activeLink ? 'active' : ''}">${page.title}</a>
        </li>
        `;
    }).join('');
}