function openTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.style.display = 'none';
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';

    // Add active class to the clicked tab
    document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');
}