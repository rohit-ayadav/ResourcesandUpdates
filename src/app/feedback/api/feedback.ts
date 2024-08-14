import { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '/src/app/feedback/config/database';
import User from '../../models/User';
import Feedback from '../../models/Feedback';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { name, email, whatsapp_number, feedbackType, message } = req.body;

            await sequelize.sync();

            let user = await User.findOne({ where: { email } });

            if (!user) {
                user = await User.create({
                    name,
                    email,
                    whatsapp_number,
                    password_hash: 'placeholder', // Adjust this according to your actual authentication
                });
            }

            await Feedback.create({
                type: feedbackType,
                message,
                user_id: user.id,
            });

            res.status(200).json({ message: 'Thank you for your feedback! Redirecting to the homepage...' });

        } catch (error) {
            console.error('Error submitting feedback:', error);
            res.status(500).json({ error: 'Something went wrong!' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
