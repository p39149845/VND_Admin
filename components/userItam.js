import React, { useState } from 'react'
import Modal from 'react-modal'
import DescriptionMeta from './descriptionMeta'
Modal.setAppElement('#__next')

function UserItem({ User }) {

    const [modalOpen, setModalOpen] = useState(false)
    const modalIsOpen = () => {
        setModalOpen(!modalOpen)
    }
    console.log(User)
    return (
        <div className="bg-white divide-y divide-gray-200">

            <div className="flex flex-row md:grid md:grid-cols-3 overflow-x-auto" key={User.id} >
                <div className="px-6 py-4 whitespace-nowrap md:col-span-1">
                    <div className="flex items-center">
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                {User.name}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-1">
                    {User.email}
                </div>

                {User.status === true ?
                    <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-1">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            คนขับ
                        </span>
                    </div>
                    : <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:col-span-1">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            ผู้โดยสาร
                        </span>
                    </div>
                }
            </div>
        </div>




    )
}

export default UserItem
