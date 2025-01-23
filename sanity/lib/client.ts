import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

// Fetch the token from environment variables
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,  // Set to false for authenticated requests
  token,  // Pass the token here for authenticated operations
});

