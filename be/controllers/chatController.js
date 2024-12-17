const chatController = {
    getChat: async (req, res) => {
        try {
            const chat = await chatModel.findAll();
            res.json(chat);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}