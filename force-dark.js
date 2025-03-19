// Immediately force dark theme
(function() {
    // Set dark theme classes
    document.documentElement.classList.add('color-theme-2');
    document.documentElement.dataset.theme = 'dark';
    document.body.classList.add('color-theme-2');
    
    // Set theme in localStorage
    localStorage.setItem('theme', '2');
    
    // Override any theme switching functions
    window.addEventListener('DOMContentLoaded', function() {
        if (typeof gitbook !== 'undefined' && gitbook.fontsettings) {
            // Override the theme setting function
            var originalSetTheme = gitbook.fontsettings.setTheme;
            gitbook.fontsettings.setTheme = function(theme) {
                originalSetTheme.call(this, 'night');
            };
            
            // Force night theme after page changes
            gitbook.events.on('page.change', function() {
                document.documentElement.classList.add('color-theme-2');
                document.body.classList.add('color-theme-2');
                gitbook.fontsettings.setTheme('night');
            });
        }
    });
    
    // Add dark theme styles
    var style = document.createElement('style');
    style.textContent = `
        body, html, .book, .book-summary, .book-body, .page-wrapper {
            background-color: #1c1f2b !important;
            color: #e3e5eb !important;
        }
        .book-summary {
            background-color: #272a3a !important;
            border-right: 1px solid #3e4466 !important;
        }
        .markdown-section h1, .markdown-section h2, .markdown-section h3,
        .markdown-section h4, .markdown-section h5, .markdown-section h6 {
            color: #ffffff !important;
        }
    `;
    document.head.appendChild(style);
})();
