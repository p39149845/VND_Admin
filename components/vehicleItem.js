import React, { useState } from 'react'
import Modal from 'react-modal'
import DescriptionVehicle from './descriptionVehicle'
Modal.setAppElement('#__next')

function VehicleItem({ Vehicle }) {

    const [modalOpen, setModalOpen] = useState(false)
    const modalIsOpen = () => {
        setModalOpen(!modalOpen)
    }
    console.log(Vehicle)
    return (
        <div className="bg-white divide-y divide-gray-200">

            <div className="flex flex-row md:grid md:grid-cols-12 overflow-x-auto" key={Vehicle.id} >
                <div className="px-6 py-4 whitespace-nowrap md:col-span-2">
                    <div className="flex items-center">
                        <div className="image overflow-hidden">
                            <img className="h-auto min-w-30 mx-auto "
                                src={Vehicle.imageUrl}
                                alt="imageUrl"
                            />
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-2">
                    {Vehicle.country}
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-2">
                    {Vehicle.description}
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-2">
                    {Vehicle.numberPeople}
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-1">
                    {Vehicle.price}
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium md:col-span-3">
                    <button
                        onClick={modalIsOpen}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        รายละเอียด
                    </button>
                </div>
                <Modal
                    isOpen={modalOpen}
                >
                    <div className="flex flex-column min-h-screen min-w-screen text-white bg-gray-100 contain-center">
                        <button
                            className="btn btn-danger"
                            style={{

                                margin: "1vh",
                                alignSelf: "flex-start",
                            }}
                            onClick={modalIsOpen}>X
                        </button>
                        <DescriptionVehicle key={Vehicle.id} Vehicle={Vehicle} />
                    </div>
                </Modal>
            </div>
        </div>




    )
}

export default VehicleItem
