copyButton.onclick = () => {
    newURL.select();

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(newURL.value)
            .then(() => {
               
                console.log("Link copied to clipboard.");
            })
            .catch((error) => {
               
                console.error("Failed to copy Link to clipboard:", error);
            });
    } else {
     
        console.error("Clipboard API not available.");
    }
};