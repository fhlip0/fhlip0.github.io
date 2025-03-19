// Immediately force dark theme and disable theme switching
(function() {
    // AGGRESSIVE IMMEDIATE APPLICATION - don't wait for anything
    document.documentElement.classList.add('color-theme-2');
    document.documentElement.classList.remove('color-theme-0', 'color-theme-1');
    document.documentElement.dataset.theme = 'dark';
    
    if (document.body) {
        document.body.classList.add('color-theme-2');
        document.body.classList.remove('color-theme-0', 'color-theme-1');
    }
    
    // Forcefully override theme in storage
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', '2');
    }
    
    // Function to force dark theme
    function forceDarkTheme() {
        // Force color-theme-2 class on key elements
        var elements = [
            'html', 'body', '.book', '.book-summary', '.book-header',
            '.book-body', '.page-wrapper', '.page-inner'
        ];
        
        elements.forEach(function(selector) {
            var els = document.querySelectorAll(selector);
            els.forEach(function(el) {
                el.classList.remove('color-theme-0', 'color-theme-1');
                el.classList.add('color-theme-2');
                
                // Also apply inline styles to ensure dark theme
                el.style.backgroundColor = '#1c1f2b';
                el.style.color = '#e3e5eb';
            });
        });
        
        // Completely disable theme buttons by removing them
        document.querySelectorAll('.buttons[data-type="theme"]').forEach(function(el) {
            el.parentNode.removeChild(el);
        });
        
        // Hide the entire font settings dropdown
        document.querySelectorAll('#font-settings-wrapper, #font-settings-dropdown').forEach(function(el) {
            if (el) {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
            }
        });
        
        // Forcefully override theme in GitBook if loaded
        if (typeof gitbook !== 'undefined' && gitbook.state && gitbook.state.$book) {
            gitbook.state.$book.removeClass('color-theme-0 color-theme-1');
            gitbook.state.$book.addClass('color-theme-2');
        }
    }
    
    // Apply dark theme IMMEDIATELY
    forceDarkTheme();
    
    // Apply again when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        forceDarkTheme();
        setTimeout(forceDarkTheme, 100);
        setTimeout(forceDarkTheme, 500);
    });
    
    // Also run when window loads
    window.addEventListener('load', function() {
        forceDarkTheme();
        setTimeout(forceDarkTheme, 100);
        setTimeout(forceDarkTheme, 500);
    });
    
    // Override GitBook theme settings
    if (typeof window.gitbook !== 'undefined') {
        // Override the theme switching function before it's called
        window.gitbook.fontsettings = window.gitbook.fontsettings || {};
        window.gitbook.fontsettings.setTheme = function(theme) {
            theme = 2; // Force night theme (2)
            
            if (window.gitbook.state && window.gitbook.state.$book) {
                window.gitbook.state.$book.removeClass('color-theme-0 color-theme-1');
                window.gitbook.state.$book.addClass('color-theme-2');
            }
            
            document.documentElement.classList.remove('color-theme-0', 'color-theme-1');
            document.documentElement.classList.add('color-theme-2');
            
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('theme', '2');
            }
        };
    }
    
    // Continuously ensure dark theme (might be excessive but will guarantee dark mode)
    setInterval(forceDarkTheme, 1000);
    
    // Add dark theme styles with !important to override everything
    var style = document.createElement('style');
    style.textContent = `
        body, html, .book, .book-summary, .book-body, .page-wrapper, .markdown-section {
            background-color: #1c1f2b !important;
            color: #e3e5eb !important;
        }
        
        /* Dark sidebar */
        .book-summary {
            background-color: #272a3a !important;
            border-right: 1px solid #3e4466 !important;
        }
        
        /* Dark header text */
        .markdown-section h1, .markdown-section h2, .markdown-section h3,
        .markdown-section h4, .markdown-section h5, .markdown-section h6 {
            color: #ffffff !important;
        }
        
        /* Hide theme buttons completely */
        .buttons[data-type="theme"] {
            display: none !important;
            visibility: hidden !important;
        }
        
        /* Hide font settings dropdown completely */
        #font-settings-wrapper, #font-settings-dropdown, 
        .dropdown-menu[aria-labelledby="font-settings-button"] {
            display: none !important;
            visibility: hidden !important;
        }
        
        /* Additional dark mode styling for various GitBook elements */
        .navigation-prev, .navigation-next,
        .book-header a, .book-header .btn,
        .markdown-section a {
            color: #3eb1d0 !important;
        }
        
        /* Dark links in sidebar */
        .book-summary ul.summary li a {
            color: #c0c3cc !important;
        }
        
        .book-summary ul.summary li a:hover {
            color: #ffffff !important;
            background-color: #2f3447 !important;
        }
        
        /* Code blocks */
        .markdown-section pre, .markdown-section code {
            background-color: #2d3143 !important;
            color: #e3e5eb !important;
        }
    `;
    document.head.appendChild(style);
})();
