    // Function to copy code to clipboard
    function copyToClipboard(button) {
        var codeBlock = button.closest('pre').querySelector('code');
        var text = codeBlock.innerText || codeBlock.textContent;

        // Create a temporary textarea to hold the code text
        var textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text to clipboard
        document.execCommand('copy');
        document.body.removeChild(textarea);

        // Change button text to indicate success
        button.innerText = 'Copied!';
        setTimeout(function() {
            button.innerText = 'Copy'; // Reset button text after a short delay
        }, 2000);
    }
