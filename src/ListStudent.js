import React from 'react'
import { useQuery } from 'react-query'

const ListStudent = () => {
  const { data, isLoading } = useQuery({
    queryKey: "students",
    queryFn: async () => {
      const response = await fetch("https://660cc0403a0766e85dbe91c0.mockapi.io/api/v1/student")
      return await response.json();
    }
  })


  if (!isLoading)
    return (
      <div style={{ height: "70vh", backgroundColor: "", margin: "130px 70px", borderRadius: "10px" }}>

        <table style={{ width: "100%", padding: "20px" }}>

          <thead style={{ fontSize: "1.8rem", fontWeight: "100", }}>

            <tr>
              <th style={{ borderBottom: "solid 1px black" }}>ID</th>
              <th style={{ borderBottom: "solid 1px black" }}>Name</th>
              <th style={{ borderBottom: "solid 1px black" }}>Email</th>
              <th style={{ borderBottom: "solid 1px black" }}>Phone</th>
            </tr>
          </thead>
          <div style={{ height: "20px" }}></div>
          <tbody>

            {data.map((student) => {
              return (
                <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  return <div></div>
}

export default ListStudent