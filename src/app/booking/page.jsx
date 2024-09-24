'use client'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Booking = () => {
    const [booking, setBooking] = useState([]);
    const session = useSession();
    const email = session?.data?.user?.email;

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:3000/booking/api/${email}`)
                .then(res => res.json())
                .then(data => setBooking(data.result));
        }
    }, [email]);

    const handleDelete = async (id) => {
        const resp = await fetch(`http://localhost:3000/booking/api/delete-booking/${id}`, {
            method: 'DELETE',
        });
         Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Delete Success",
                showConfirmButton: false,
                timer: 1500
              });

        // Update the booking state after deleting
        if (resp.ok) {
            setBooking(booking.filter(item => item.id !== id));
           
        }
    };

    return (
        <table className="min-w-full divide-y divide-gray-200 container mx-auto">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {booking.map((item, index) => (
                    <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                            <button onClick={() => handleDelete(item?._id)} className="text-red-600 hover:text-red-900 ml-4">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Booking;
