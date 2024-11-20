"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const stringCalculator_1 = require("./stringCalculator");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// API endpoint for String Calculator
app.post("/calculate", (req, res) => {
    const { input } = req.body;
    try {
        const result = (0, stringCalculator_1.add)(input);
        res.json({ result });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
