export const getAllServices = async () => {
    const resp = await fetch('http://localhost:3000/services/seed')
    const services = resp.json()
    return services
   }
export const getService = async (id) => {
    const resp = await fetch(`http://localhost:3000/services/seed/${id}`)
    const services = resp.json()
    return services
   }