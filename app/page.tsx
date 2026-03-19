import { redirect } from 'next/navigation';

// This repo is deprecated. Redirect all traffic to the canonical portfolio.
export default function Home() {
  redirect('https://gdanielschillinger.com');
}
