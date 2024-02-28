import axios from "axios"
import { redirect } from "react-router-dom"

export const action = async({params}) => {
    try {
        await axios.delete(`/articles/${params.id}`)
    } catch (error) {
        throw error
    }
    return redirect('/dashboard/all-articles')

}