import conn from "../conn.js";

const Schema = conn.Schema;

const passengerSchema = new Schema({
    nome : {
        type: String,
        minLength: 3,
        required: true
    },
    cpf : {
        type: Number,
        minLength: 11,
        maxLength: 11
    }
})

const passenger = conn.model("Passenger", passengerSchema);

export default passenger;