import express from "express";
import cors from "cors";
import { add } from "./stringCalculator";

const app = express();
app.use(cors());
app.use(express.json());

// API endpoint for String Calculator
app.post("/calculate", (req, res) => {
    const { input } = req.body;
    try {
        const result = add(input);
        res.json({ result });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
