import React, { useState } from 'react'
import Modal from 'react-modal'
import DescriptionRequest from './descriptionRequest'
import DescriptionRequest2 from './descriptionRequest2'
Modal.setAppElement('#__next')

function RequestItem({ Request }) {

    const [modalOpen, setModalOpen] = useState(false)
    const modalIsOpen = () => {
        setModalOpen(!modalOpen)
    }
    console.log(Request)
    return (
        <div className="bg-white divide-y divide-gray-200">

            <div className="flex flex-row md:grid md:grid-cols-12 overflow-x-auto" key={Request.id} >
                <div className="px-6 py-4 whitespace-nowrap md:col-span-1">
                    <div className="flex items-center">
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                {Request.user.name}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-2">
                    {Request.targetUser.metadata[0].userName}
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-2">
                    {Request.country}
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-2">
                    {Request.startDate}
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-2">
                    {Request.stopDate}
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
                        <DescriptionRequest key={Request.id} Request={Request} />
                        <DescriptionRequest2 key={Request.id} Request={Request} />
                    </div>
                </Modal>
            </div>
        </div>




    )
}

export default RequestItem
