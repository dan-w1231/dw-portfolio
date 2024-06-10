import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Parse cookies from the request
  const cookies = cookie.parse(req.headers.cookie || '');
  let theme = 'light'; // Default theme

  // Check if the themePreference cookie exists and adjust the theme accordingly
  if (cookies.themePreference === 'dark' || cookies.themePreference === 'light') {
    theme = cookies.themePreference;
  } else {
    // Fallback to checking the Accept header for prefers-color-scheme
    const prefersDark = req.headers['accept']?.includes('prefers-color-scheme: dark');
    if (prefersDark) {
      theme = 'dark';
    }
  }

  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', `themePreference=${req.body.theme}; path=/; HttpOnly`);
    res.status(200).json({ status: 'Theme updated' });
  }

  res.status(200).json({ theme });
}