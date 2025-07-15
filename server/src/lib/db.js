import mongoose from "mongoose"

export const Conn = async() => {try {
    const dbcon = await mongoose.connect(process.env.DB)
    console.log("db is connected!")

} catch (error) {
    console.log("db is not connected",error)   
}
}