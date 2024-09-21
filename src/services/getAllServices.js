export const getAllServices = async () => {
    const resp = await fetch('http://localhost:3000/services/seed')
    const services = resp.json()
    return services
   }
export const getServicesDetails = async (id) => {
    const resp = await fetch(`http://localhost:3000/services/api/${id}`)
    const service = await resp.json()
    return service
   }