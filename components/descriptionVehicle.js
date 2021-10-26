import React, { useState } from 'react'
import { RatingView } from 'react-simple-star-rating'

function descriptionVehicle({ Vehicle }) {
    console.log(Vehicle.metadata)
    var Star = 0
    var lengthStar = Vehicle.user.review.length
    for (var i = 0; i < lengthStar; i++) {
        Star = Vehicle.user.review[i].star + Star
    }
    var avgStar = Star / lengthStar

    var StarV = 0
    var lengthStarV = 0
    for (var i = 0; i < lengthStar; i++) {
        if (Vehicle.user.review[i].Vehicle.id === Vehicle.id) {
            StarV = Vehicle.user.review[i].starVehicle + StarV
            lengthStarV++
        }
    }
    var avgStarV = StarV / lengthStarV
    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5  mx-auto">
                    <div className="md:grid md:grid-cols-10 py-8">
                        <div className="md:col-span-5 ">
                            <img
                                alt="ecommerce"
                                className=" w-full object-cover object-center rounded border border-gray-200"
                                src={Vehicle.imageUrl[0]} />
                            <div className="md:col-span-5 bg-red-300">
                                {/* /////////////// */}
                            </div>
                        </div>
                        <div className="md:col-span-1 ">
                        </div>
                        <div className="md:col-span-4 ">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">รายละเอียดรถ</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{Vehicle.description}</h1>
                            <div className="flex mb-2 md:grid md:grid-cols-3">
                                <span className="text-gray-600 ml-3 md:col-span-1">คะแนนคนขับรถ :</span>
                                <span className="flex items-center md:col-span-1">
                                    <RatingView ratingValue={avgStar} fillColor='red' />
                                </span>
                                <span className="text-gray-600 ml-3 md:col-span-1">{lengthStar} รีวิว</span>
                            </div>
                            <div className="flex mb-2 md:grid md:grid-cols-3">
                                <span className="text-gray-600 ml-3 md:col-span-1">คะแนนรถ :</span>
                                <span className="flex items-center md:col-span-1">
                                    <RatingView ratingValue={avgStarV} fillColor='red' />
                                </span>
                                <span className="text-gray-600 ml-3 md:col-span-1">{lengthStarV} รีวิว</span>
                            </div>

                            <div className="flex mt-4 items-center pb-5 border-b-2 border-gray-200 mb-5 ">
                            <div>
                                <p className="leading-relaxed">ชื่อ : {Vehicle.user.metadata[0].userName}</p>
                                <p className="leading-relaxed">เพศ : {Vehicle.user.metadata[0].gender}</p>
                                <p className="leading-relaxed">จังหวัดที่ให้บริการ : {Vehicle.country}</p>
                                <p className="leading-relaxed">จำนวนที่นั่ง : {Vehicle.numberPeople}</p>
                                <div className='border-1 p-3 rounded-md mt-2' >
                                    {Vehicle.tv ?
                                        <span >TV : มี </span>
                                        :
                                        null
                                    }
                                    {Vehicle.karaoke ?
                                        <p >คาราโอเกะ : มี</p>
                                        :
                                        null
                                    }
                                    {Vehicle.gps ?
                                        <p >Gps :  มี</p>
                                        :
                                        null
                                    }
                                    {Vehicle.foodDrink ?
                                        <p >อาหารและเครื่องดืม :  มี</p>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </div>

                            <div className="flex">
                                {/* <span className="title-font font-medium text-2xl text-gray-900">{useForm.cost} บาท</span> */}
                                {/* <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">จองรถ</button> */}
                                {/* <button
                                onClick={() =>
                                    setconfirmDialog({
                                        isOpen: true,
                                        title: "คุณต้องการจองรถตู้คันนี้หรือไม่?",
                                        subTitle: "กรุณาตรวจสอบรายละเอียดให้ครบถ้วน",
                                        onConfirm: () => {
                                            handleRequest()
                                        }
                                    })
                                }
                                className="flex ml-auto text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">จองรถ
                            </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Notification
            notify={notify}
            setnotify={setnotify}
        />
        <ConfirmDialog
            confirmDialog={confirmDialog}
            setconfirmDialog={setconfirmDialog}
        /> */}
        </div>
    )
}

export default descriptionVehicle
