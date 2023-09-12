import axios from "axios";

const host = process.env.REACT_APP_HOST_NAME;

export const getList = async (channel) => {

    try {
        const data = await axios.get(
            `${host}/${channel}`
        )

        return data
    } catch(error) {
        console.log(error)
    }
}