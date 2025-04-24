const Project = require("../models/Project");

const Projects = async(req , res) => {
     console.log("Server is Running - Fetching Projects");
    try {
        const result = await Project.find();
        return res.status(200).json(result); // Send the result as JSON with a 200 status
    } catch (error) {
        console.error("Error fetching projects:", error);
        return res.status(500).json({ message: "Failed to fetch projects" });
    }
}
module.exports = {
     Projects
};
