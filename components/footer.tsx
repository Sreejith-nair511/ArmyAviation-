export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-8 md:py-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="space-y-4 text-center md:text-left">
            <div>
              <p className="font-serif font-bold text-lg mb-1">© {currentYear} N. Sasidharan</p>
              <p className="text-gray-100">Subedar Major (Airframe)</p>
              <p className="text-gray-100">Indian Army — Aviation Professional</p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-300">
                30 Years of Disciplined Aviation Maintenance, Leadership & Operational Excellence
              </p>
            </div>

            <div className="pt-4 text-xs text-gray-400">
              <p>Bangalore, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
