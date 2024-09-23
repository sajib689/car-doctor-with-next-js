'use client'

import { getServicesDetails } from "@/services/getAllServices";
import { useSession } from "next-auth/react";
import { useState,useEffect } from "react";
import Swal from "sweetalert2";

const Checkout = ({params}) => {
    const [service, setService] = useState({})
    const {_id,title,price} = service
    const session = useSession()
    const loadService = async () => {
        const service =await getServicesDetails(params.id)
        setService(service.result)
    }
   
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const title = form.title.value
        const price = form.price.value
        const date = form.date.value
        const booking = {id: _id, name,email,title,price,date}
        fetch('http://localhost:3000/checkout/api/new-booking' ,{
            method: 'POST',
            headers: {
            'content-type': 'application/json'
        },
            body: JSON.stringify(booking)
        })
        .then(data => {
            if(data) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(err => {
            console.error(err)
        })
    }
    useEffect( () => {
        loadService()
    },[params])
    return (
        <div>
             <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Submit Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input defaultValue={session?.data?.user?.name} type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input defaultValue={session?.data?.user?.email} type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>

                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input defaultValue={title} type="text" name="title" id="title" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input defaultValue={price} type="number" name="price" id="price" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>

                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                    <input defaultValue={new Date().getDate()} type="date" name="date" id="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                </div>

                <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                </button>
            </form>
        </div>
        </div>
    );
};

export default Checkout;