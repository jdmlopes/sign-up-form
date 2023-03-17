const root = document.documentElement;
root.className = 'light';

document.querySelector('#theme-toggle').addEventListener('change', changeTheme);

function changeTheme(e){
    const newTheme = e.target.checked ? 'dark' : 'light';
    root.className = newTheme;
}