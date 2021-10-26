import React, { useState, useContext } from 'react'
import { useQuery } from "@apollo/react-hooks"
import { QUERY_ALLUSER } from '../components/gql/query'
import UserItem from './userItam'

function numberVehicle() {

    const { data, loading, error } = useQuery(QUERY_ALLUSER)
    if (loading) return <p>Loading...</p>
    return (
        <div className="bg-gray-100 min-h-screen">
        <div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" z-10 flex items-baseline justify-between pt-10 pb-6 border-b border-gray-200">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">รายการจองรถ</h1>
            </div>
  
            <section aria-labelledby="products-heading" className="pt-6 pb-24 ">
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-x-8 gap-y-10 min-w-screen">
                <div className="lg:col-span-1"></div>
                <div className="lg:col-span-8">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
                    <div className="flex flex-col">
                      <div className="flex flex-row md:grid md:grid-cols-3 rounded-md bg-blue-500 text-white">
                        <div className="px-6 py-4 whitespace-nowrap md:col-span-1">
                        ชื่อ
                        </div>
                        <div className="px-6 py-4 whitespace-nowrap md:col-span-1">
                          Email
                        </div>
                        <div className="px-6 py-4 whitespace-nowrap md:col-span-1">
                          สถานะ
                        </div>
                      </div>
  
                      {data && data.allUser
                      .map(User => (
  
                        <UserItem User={User} key={User.id} />
  
                      ))}
  
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1"></div>
              </div>
  
            </section>
          </main>
        </div>
      </div>
    )
}

export default numberVehicle
