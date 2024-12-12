import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">BE THE FIRST TO KNOW</h2>
            <p className="mb-4">Sign up for updates from mettā muse.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="flex-1 px-4 py-2 rounded bg-transparent border border-white"
                aria-label="Enter your email"
              />
              <button
                className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
                aria-label="Subscribe to newsletter"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>

          {/* Currency Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">CURRENCY</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">USD</span>
            </div>
            <p className="text-sm">
              Transactions will be completed in Euros, and a currency reference is available on hover.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-center text-sm">
            Copyright © 2024 mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
