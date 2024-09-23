import veiculo from "../../database/models/veículos_model.js";

const store = async (req, res) => {
  try {
    await veiculo.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
    try {
        const content = await veiculo.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        const content = await veiculo.findById(req.params.id).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        await veiculo.findByIdAndUpdate(req.params.id).exec()
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res) => {
    try {
        await veiculo.findByIdAndDelete(req.params.id).exec()
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
