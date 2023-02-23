import TelegramBot from 'telegram-bot-api';

export default async function handler(req, res) {
    const { phone, message } = req.body;

    const api = new TelegramBot({
        token: '6177932992:AAEXmJTyF7sEN0S7cUdxlBz5SVgCjRd-ohU',
    });

    const chatId = '1771427558';

    const text = `Phone: ${phone} Message: ${message}`;

    try {
        await api.sendMessage({
            chat_id: chatId,
            text: text,
        });
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send message' });
    }
}