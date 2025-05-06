import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link href="/" className="text-blue-500 hover:underline">Home</Link>
      <Link href="/about" className="text-blue-500 hover:underline">About</Link>
      <Link href="/blog" className="text-blue-500 hover:underline">Blog</Link>
      <Link href="/contact" className="text-blue-500 hover:underline">Contact</Link>
      <Link href="/features" className="text-blue-500 hover:underline">Features</Link>
      <Link href="/licenses" className="text-blue-500 hover:underline">Licenses</Link>
      <Link href="/pricing" className="text-blue-500 hover:underline">Pricing</Link>
      <Link href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>
      <Link href="/terms-of-service" className="text-blue-500 hover:underline">Terms of Service</Link>
    </nav>
  );
};

export default Navbar;