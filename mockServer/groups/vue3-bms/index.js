const baseApi = "/vue3Bms"
const { object_in_array } = require("../../templates")
module.exports = [
    {
        path: `${baseApi}/user`,
        format: object_in_array,
    },
    {
        path: `${baseApi}/user2`,
        format: object_in_array,
    }
]