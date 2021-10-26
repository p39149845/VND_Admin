import React,{ useState } from 'react'
import Modal from 'react-modal'
import DescriptionMeta from './descriptionMeta'
Modal.setAppElement('#__next')

function MetadataItem({Metadata}) {
   
    const [modalOpen, setModalOpen] = useState(false)
    const modalIsOpen = () => {
        setModalOpen(!modalOpen)
    }
    return (
        <div className="bg-white divide-y divide-gray-200">

            <div className="flex flex-row md:grid md:grid-cols-12 overflow-x-auto" key={Metadata.id} >
                <div className="px-6 py-4 whitespace-nowrap md:col-span-2">
                    <div className="flex items-center">
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                {Metadata.userName}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-2">
                    {Metadata.gender}
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-2">
                    {Metadata.dateOfBirth}
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-2">
                    {Metadata.idCard}
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-1">
                    {Metadata.driverlicense}
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
                        <DescriptionMeta key={Metadata.id} Metadata={Metadata} />
                    </div>
                </Modal>
            </div>
        </div>




    )
}

export default MetadataItem
