import React from "react"

export const Button =({ childern } : {childern: React.ReactNode}) =>{
    return(
        <button>
        {childern}
        </button>
    )
}