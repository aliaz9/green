import React from "react"

export default function SearchBar() {

    return (

        <div>

            <div className="flex justify-between py-3 px-6 bg-gray-50 border-b">

                <input
                    type="text"
                    name="search"
                    placeholder="BUSCAR"
                    className="px-2 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500"
                />

            </div>



        <div class="relative bg-gray-900 p-2 rounded border-2 border-blue-300">
            <svg class="h-5 w-5 absolute left-0 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd">
                    </path>
            </svg>
            <input type="text" placeholder="Search..." class="ml-6 bg-transparent" />
        </div>
        </div>

    )
}
