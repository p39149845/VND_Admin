import React from 'react'
import Link from 'next/link'

function analysis() {
    return (
        <div>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className=" z-10 flex items-baseline justify-between pt-10 pb-6 border-b border-gray-200">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">รายการจองรถ</h1>
                </div>
                <div class="grid grid-cols-3 gap-4 px-10 pt-5">
                    {/* Header */}

                    <Link href="/analysis/noVerifiedDriver">
                        <button className="bg-yellow-400 h-30 col-span-2 rounded-md text-7xl text-white">
                            Waiting for Verifiy
                        </button>
                    </Link>
                    <Link href="/analysis/verifiedDriver">
                        <button className="bg-green-400 h-40 rounded-md text-7xl text-white">
                            <h2> All Profile</h2>

                        </button>
                    </Link>

                    <Link href="/analysis/numberUser">
                        <button className="bg-blue-400 h-40 rounded-md text-7xl text-white">
                            <h2> User</h2>

                        </button>
                    </Link>
                    <Link href="/analysis/numberVehicle">
                        <button className="bg-yellow-500 h-40 rounded-md text-7xl text-white">
                            <h2>Vehicle </h2>

                        </button>
                    </Link>
                    <Link href="/analysis/numberRequest">
                        <button className="bg-red-400 h-40 rounded-md text-7xl text-white">
                            <h2> Request</h2>

                        </button>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default analysis
