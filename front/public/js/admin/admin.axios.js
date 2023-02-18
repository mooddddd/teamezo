const request = axios.create({
    baseURL: "http://localhost:3000/admin",
    withCredentials: true,
})

export default request