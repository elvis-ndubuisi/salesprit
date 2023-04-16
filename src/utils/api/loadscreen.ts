async function loadscreen() {
    await setTimeout(() => {
        console.log("done with delay")
    }, 4000)
    return { auth: true }
}

export default loadscreen
