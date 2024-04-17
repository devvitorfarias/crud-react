import { useState } from "react"
import './index.css'

const AddCustomer = () => {

    const [customerData, setCustomerData] = useState({
        companyName: '',
        phoneNumber: '',
        address: '',
        website: ''
    })
    const [dummyData, setDummyData] = useState()

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setCustomerData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()

        setDummyData(prevState => {
            return [
                ...prevState, customerData
            ]
        })
    }
    return (
        <div>
            <h1 className="title">Add New Customer</h1>
            <form onSubmit={handleFormSubmit} className="container">
                <div className="company-info">
                    <input
                        name="companyName"
                        value={customerData.companyName}
                        onChange={handleFormChange}
                        placeholder="Company Name"
                        type="text" />
                    <input
                        name="phoneNumber"
                        value={customerData.phoneNumber}
                        onChange={handleFormChange}
                        placeholder="Phone Number"
                        type="text" />
                    <input
                        name="address"
                        value={customerData.address}
                        onChange={handleFormChange}
                        placeholder="Address"
                        type="text" />
                    <input
                        name="website"
                        value={customerData.website}
                        onChange={handleFormChange}
                        placeholder="Website"
                        type="text" />
                    <button>Submit</button>
                </div>
            </form>
            
                {dummyData && dummyData.map((customer) => (
                    <div >
                        <p>Company Name: {customer.companyName}</p>
                        <p>Phone Number: {customer.phoneNumber}</p>
                        <p>Address: {customer.address}</p>
                        <p>Website: {customer.website}</p>
                        <hr />
                    </div>
                ))}
        </div>
    );
}

export default AddCustomer