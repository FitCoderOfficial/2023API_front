const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'https://holyflex' : 'https://next-ecommerce-front.vercel.app';
// export const server = dev ? 'http://localhost:3000' : 'https://next-ecommerce-front.vercel.app';