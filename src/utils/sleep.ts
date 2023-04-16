export default async function sleep(millisec: number): Promise<void> {
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now()
    } while (currentDate - date < millisec)
}
