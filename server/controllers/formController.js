import Form from "../models/formModel.js";

const createAForm = async (req, res) => {
    try {
        const { formBanner, formName, formDescription, formElements } = req.body;
        const newForm = {
            formBanner: formBanner,
            formName: formName,
            formDescription: formDescription,
            formElements: formElements,
        };

        const form = await new Form(newForm);
        form.save();
        res.status(200).json({ message: "Form Created", form: form });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};


const getAllForms = async (req, res) => {
    try {
        const forms = await Form.find({});
        res.status(200).json({ message: "Form Fetched", forms: forms });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const getFormById = async (req, res) => {
    try {
        const id = req.params.id;
        const form = await Form.findOne({ _id: id });
        res.status(200).json({ message: "Form Fetched", form: form });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export {
    getAllForms,
    createAForm,
    getFormById
}