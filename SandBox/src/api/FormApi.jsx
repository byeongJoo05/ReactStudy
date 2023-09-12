import axios from "axios";

const host = process.env.REACT_APP_HOST_NAME;

export const createForm = async (channel, reqData) => {
    console.log(reqData)
    try {
        const data = await axios.post(
            `${host}/${channel}`,
            reqData
        )

        return data
    } catch (error) {
        console.log(error)
    }
}