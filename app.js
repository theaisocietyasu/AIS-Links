const shareButtons = document.querySelectorAll('.tile-share-button')

// let toastContainer;

// function generateToast({message}){
//     toastContainer.insertAdjacentHTML('beforeend', `p class="toast">${message}</p>`)
// }

// (function initToast() {
//     document.body.insertAdjacentHTML('afterbegin', `<div class="toast-container"></div>`)
//     toastContainer = document.querySelector('.toast-container')
// })()
// shareButtons.addEventListener('click', () => {
//     generateToast({
//         message: 'Link Copied to Clipboard!', 
//     })
// })

const bgvideo = document.querySelector('.background-video')
bgvideo.muted = "true"
bgvideo.play()


async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    try {
        await navigator.clipboard.writeText(link)
        alert("Link Copied to Cliboard!\n" + link)
    } catch(err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))

