import DB from '@database'

const allElizabeth = async (request, response) => {
    const db = new DB()

    const data = await db.getAllElizabeth()
    response.status(200).json(data)
}

export default allElizabeth