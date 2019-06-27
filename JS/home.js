window.addEventListener('load', () => {


    // Big T parallax effect on scroll
    // Get references for big T's
    const firstBigT = document.querySelector('#what-is-it .big-t-el')
    const secondBigT = document.querySelector('#pricing .big-t-el')
    // Initialize multiplier var
    let multiplier = 0
    // Add scroll event listener
    this.addEventListener('scroll', e => {
        // console.log(this.scrollY)
        if (window.scrollY < 1000) {
            multiplier = 0.1 * this.scrollY
            firstBigT.setAttribute('style', `transform: translateY(${multiplier}px)`)
        } else if (window.scrollY > 2800) {
            multiplier = 0.1 * (this.scrollY - 2800)
            secondBigT.setAttribute('style', `transform: translateY(${multiplier}px)`)
        }
    })

    document.querySelector('.carousel-item img').addEventListener('dragstart', e => {
        e.preventDefault()
    })

})