import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import ageCalculator, { AgeFromDateString, AgeFromDate } from 'age-calculator'
import gql from 'graphql-tag'

function profile() {

    const ME = gql`
  query ME {
    user{
    id
    name
    metadata{
        id
        dateOfBirth
        gender
        idCard
        image
        driverlicense
        status
        user{
          email
          name
        }
    }
  }
  }
`
    const { data, loading, error } = useQuery(ME)

    const ageCalculator = data &&
        data.user.metadata &&
        data.user.metadata.map((metadataSet) => metadataSet.dateOfBirth);

    let ageFromString = new AgeFromDateString(ageCalculator).age;
    console.log("value from ageFromString", ageFromString);

    return (
        <div className="card-body"
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "10vh",
                border: "1px solid #CACACA",
                borderRadius: "20px",
                margin: "5%",
            }}>
            {/* Header */}
            <h1
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "5vh",
                    marginBottom: "5vh",
                }}>Profile</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "0vh",
                    width: "70%"
                }}
            >
                {data &&
                    data.user.metadata &&
                    data.user.metadata
                        .map(metadataSet =>
                        (
                            <div
                                key={metadataSet.id}
                                className="card"
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                            >
                                <div
                                    style={{
                                        width: "30%",
                                        maxHeight: "30%",
                                        margin: "5%",
                                    }}>
                                    <img
                                        src={metadataSet.image}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div
                                    style={{
                                        margin: "5%",
                                        width: "65%"
                                    }}>
                                    <p className="card-text">Email : {metadataSet.user.email}</p>
                                    <p className="card-text">ชื่อ : {metadataSet.userName}</p>
                                    <p className="card-text">
                                        อายุ : {ageFromString}
                                    </p>
                                    <p className="card-text">เพศ : {metadataSet.gender}</p>
                                    <p className="card-text">รหัสประชาชน : {metadataSet.idCard}</p>
                                    <p className="card-text">ใบทะเบียนรถ : {metadataSet.regBook}</p>
                                    <p className="card-text">ใบขับขี่ : {metadataSet.driverlicense}</p>
                                </div>
                                <button
                                    className="btn btn-outline-warning"
                                    style={{
                                        alignSelf: "flex-end",
                                        margin: "1%"
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default profile
