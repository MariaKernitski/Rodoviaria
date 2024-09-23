import conn from "../conn.js";
import passenger from "./passageiros_model.js";
import veiculo from "./veículos_model.js";

const Schema = conn.Schema;

const viagemSchema = new Schema({
    destino: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    horárioPartida: {
        type: Number,
        required: true
    },
    rota: {
        type: String,
        required: true
    }
})

const viagem = conn.model("Viagem", viagemSchema);

export default viagem;