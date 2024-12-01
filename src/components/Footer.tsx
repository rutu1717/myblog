
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
    <div className="container mx-auto text-center">
      <p>
        © 2024 YourBlog. All rights reserved.
      </p>
      <div className="mt-4 space-x-4">
        <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-teal-400 transition duration-300">Terms of Service</a>
      </div>
    </div>
  </footer>
  );
}