import dataElizabeth from './dataElizabeth'
import dataAnya from './dataAnya'

class Database{
    constructor ()

    async getAllElizabeth(){
        await randomDelay()
        return dataElizabeth
    }
    async getAllAnya(){
        await randomDelay()
        return dataAnya
    }
}

const randomDelay = () => {
    new Promise((resolve) => {
        const max = 350
        const min = 100
        const delay = Math.floor(Math.random()* (max-min + 1)) + min

        setTimeout(resolve, delay)
    })
}

export default Database