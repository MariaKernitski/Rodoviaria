import viagem from "../../database/models/viagem_model.js";

const store = async (req, res) => {
  try {
    await viagem.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
    try {
        const content = await viagem.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        const content = await viagem.findById(req.params.id).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        await viagem.findByIdAndUpdate(req.params.id).exec()
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res) => {
    try {
        await viagem.findByIdAndDelete(req.params.id).exec()
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

export default {
    store,
    index,
    show,
    update,
    destroy
}
