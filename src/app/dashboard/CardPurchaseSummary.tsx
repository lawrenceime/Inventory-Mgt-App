import { useGetDashboardMetricsQuery } from '@/state/api'
import React from 'react'

const CardPurchaseSummary = () => {
    const { data  , isLoading } = useGetDashboardMetricsQuery()

    const purchaseData =  data?.purchaseSummary || []
    
  return (
    <div className="flex flex-col justify-between shadow-md rounded-2xl row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500">
      {
        isLoading ?   (
          <div className='m-5'>LOading...</div>
        ):(
          <>
           {/* HEADER */}
           <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Purchase Summary
            </h2>
            <hr />
          </div>
            {/* BODY */}
            <div className='mb-4 mt-7 px-7'>

            </div>
          </>
        )
      }
    </div>
  )
}

export default CardPurchaseSummary