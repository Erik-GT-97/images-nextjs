import DB from '@database'

const allAnya = async (request, response) => {
    const db = new DB()

    const data = await db.getAllAnya()
    response.status(200).json(data)
}

export default allAnya