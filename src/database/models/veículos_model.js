import conn from "../conn.js";

const Schema = conn.Schema;

const veiculoSchema = new Schema({
    capacidade : {
        type: Number,
        required: true
    },
})

const veiculo = conn.model("Veiculo", veiculoSchema);

export default veiculo;