"use client";

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm">
            Purdue Ranked - Compare Purdue University students based on their LinkedIn profiles
          </p>
          <p className="text-sm mt-2">
            <span className="text-[#CFAC43]">Disclaimer:</span> This site is not affiliated with Purdue University.
          </p>
          <p className="text-xs mt-4 text-gray-400">
            © {new Date().getFullYear()} Purdue Ranked
          </p>
        </div>
      </div>
    </footer>
  );
}
