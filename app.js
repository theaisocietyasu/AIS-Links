const shareButtons = document.querySelectorAll('.tile-share-button')

async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    try {
        await navigator.clipboard.writeText(link)
        alert("Link Copied to Clipboard!\n" + link)
    } catch(err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))

