
const tables = document.querySelectorAll('table');

tables.forEach(table => {
    const rows = table.querySelectorAll('tr:not(:first-child)'); 
    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = '#FF9800'; 
        });
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = ''; 
        });
    });
});