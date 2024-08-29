import React from 'react'
import { useGetSeatsReportQuery } from '../../features/seats/seatsApiSlice'

function Reports() {
  const {data } =useGetSeatsReportQuery();
  const reports = data?.data ;
  console.log(reports);
  return (
    <>
      {}
    </>
  )
}

export default Reports