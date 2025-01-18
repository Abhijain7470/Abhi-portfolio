document.querySelector('.hamburger').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    // Toggle sidebar visibility
    sidebar.classList.toggle('sidebargo');

    // Adjust layout
    if (sidebar.classList.contains('sidebargo')) {
        container.style.gridTemplateColumns = '0 1fr'; // Sidebar hidden
    } else {
        container.style.gridTemplateColumns = '250px 1fr'; // Sidebar visible
    }
});
