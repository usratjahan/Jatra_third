import React, { useState } from 'react';

const SignUp = ({ onSwitchToSignin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-white">Create Account</h2>
        <p className="text-gray-400 text-sm mt-1">Join the Jatra community today</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">First Name</label>
          <input
            type="text"
            placeholder="John"
            className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Last Name</label>
          <input
            type="text"
            placeholder="Doe"
            className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Community</label>
        <select className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors">
          <option value="">Select community</option>
          <option value="family">Family</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="combined">Combined</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Min. 8 characters"
            className="w-full px-4 py-3 bg-gray-800 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 active:scale-95 mt-2"
      >
        Create Account
      </button>

      <p className="text-center text-sm text-gray-400">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToSignin}
          className="text-green-400 hover:text-green-300 font-medium transition-colors"
        >
          Sign In
        </button>
      </p>
    </form>
  );
};

export default SignUp;
