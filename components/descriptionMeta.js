import React, { useState } from 'react'
import { QUERY_ALLMETADATA } from '../components/gql/query'
import { useMutation } from "@apollo/react-hooks"
import { UPDATE_FORADMIN } from './gql/mutation'

function descriptionMeta({ Metadata }) {
    const [updateForAdmin] = useMutation(UPDATE_FORADMIN, {
        onCompleted: data => {
            console.log(data)
        },
        refetchQueries: [{ query: QUERY_ALLMETADATA }]
    })


    const verifile = async e => {

        if (!Metadata.status) {
            await updateForAdmin({
                variables: {
                    id: Metadata.id,
                    status: true,
                }
            })
        } else {
            await updateForAdmin({
                variables: {
                    id: Metadata.id,
                    status: false,
                }
            })
        }
    }

    return (
        <div>

            <div className="min-w-screen bg-gray-100">
                <div className="container mx-auto pt-2">
                    <div className=" z-10 flex items-baseline justify-between p-2 border-b border-black">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">ข้อมูลส่วนตัว</h1>
                    </div>
                    <div className="md:flex no-wrap md:-mx-2 " key={Metadata.id}>
                        <div className="w-full md:w-3/12 md:mx-2 pt-5">
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img className="h-auto min-w-30 mx-auto "
                                        src={Metadata.image}
                                    />
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{Metadata.userName}</h1>
                            </div>
                            <div className="my-4"></div>
                        </div>
                        <div className="w-full md:w-3/12 md:mx-2 pt-5">
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img className="h-auto min-w-30 mx-auto "
                                        src={Metadata.idCardIm}
                                    />
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">บัตรประชาชน</h1>
                            </div>
                            <div className="my-4"></div>
                        </div>
                        <div className="w-full md:w-3/12 md:mx-2 pt-5">
                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img className="h-auto min-w-30 mx-auto "
                                        src={Metadata.driverlicenseIm}
                                    />
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">ใบขับขี่</h1>
                            </div>
                            <div className="my-4"></div>
                        </div>

                        <div className="w-full md:w-9/12 mx-2 h-64 pt-5">

                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span className="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">ข้อมูลส่วนตัว</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">

                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">ชื่อ-สกุล</div>
                                            <div className="px-4 py-2">{Metadata.userName}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email.</div>
                                            <div className="px-4 py-2">
                                                <a className="text-blue-800" href="mailto:jane@example.com">{Metadata.user.email}</a>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">เพศ</div>
                                            <div className="px-4 py-2">{Metadata.gender}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">รหัสประชาชน</div>
                                            <div className="px-4 py-2">{Metadata.idCard}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">วันเกิด</div>
                                            <div className="px-4 py-2">{Metadata.dateOfBirth}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">รหัสใบขับขี่</div>
                                            <div className="px-4 py-2">{Metadata.driverlicense}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-4"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-end px-5">
                {Metadata.status === true?
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        style={{ width: "30%" }}
                        onClick={verifile}>
                        ระงับผู้ใช้ชั่วคราว
                    </button>
                    :
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        style={{ width: "20%" }}
                        onClick={verifile}>
                        ยื่นยันตัวตน
                    </button>}
            </div>
        </div>
    )
}

export default descriptionMeta
