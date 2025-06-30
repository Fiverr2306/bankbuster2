
import Link from 'next/link'
import { Home, Mail, Shield, FileText } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-bb-deep-blue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded bg-white flex items-center justify-center">
                <Home className="h-5 w-5 text-bb-deep-blue" />
              </div>
              <span className="text-xl font-bold font-poppins">BankBuster.net</span>
            </div>
            <p className="text-sm text-blue-200 mb-4">
              Professional mortgage consulting service helping consumers save thousands on their home loans.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4" />
              <a href="mailto:chuck@bankbuster.net" className="hover:text-blue-200 transition-colors">
                chuck@bankbuster.net
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mortgage-fees" className="hover:text-blue-200 transition-colors">
                  Mortgage Fees Analysis
                </Link>
              </li>
              <li>
                <Link href="/rate-locks" className="hover:text-blue-200 transition-colors">
                  Interest Rate Strategy
                </Link>
              </li>
              <li>
                <Link href="/credit-repair" className="hover:text-blue-200 transition-colors">
                  Credit Protection
                </Link>
              </li>
              <li>
                <Link href="/turned-down" className="hover:text-blue-200 transition-colors">
                  Mortgage Recovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-blue-200 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:text-blue-200 transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Security & Privacy</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Secure Document Upload</span>
              </li>
              <li className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>GLBA Compliant</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-blue-900/30 rounded-lg">
              <p className="text-xs text-blue-200">
                All documents are processed securely and confidentially. We never share your information.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-sm text-blue-200">
            © 2025 BankBuster.net. Professional mortgage consulting services.
          </p>
        </div>
      </div>
    </footer>
  )
}
