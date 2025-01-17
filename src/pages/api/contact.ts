import { NextApiRequest, NextApiResponse } from 'next';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';

// Rate limiting setup
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5 // limit each IP to 5 requests per windowMs
});

// Validation schema
const contactSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	subject: z.string().min(5),
	message: z.string().min(10),
});

// Apply rate limiting to API route
const applyRateLimit = (req: NextApiRequest, res: NextApiResponse) => {
	return new Promise((resolve, reject) => {
		limiter(req, res, (result: any) => {
			if (result instanceof Error) {
				reject(result);
			}
			resolve(result);
		});
	});
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	try {
		// Apply rate limiting
		await applyRateLimit(req, res);

		// Validate request body
		const validatedData = contactSchema.parse(req.body);

		// Here you would typically send the email or store in database
		// For now, we'll just simulate a successful submission
		await new Promise(resolve => setTimeout(resolve, 1000));

		return res.status(200).json({ message: 'Message sent successfully' });
	} catch (error) {
		if (error instanceof z.ZodError) {
			return res.status(400).json({ error: 'Invalid form data', details: error.errors });
		}

		if (error instanceof Error) {
			return res.status(429).json({ error: 'Too many requests' });
		}

		return res.status(500).json({ error: 'Internal server error' });
	}
}

export const config = {
	api: {
		externalResolver: true,
	},
};