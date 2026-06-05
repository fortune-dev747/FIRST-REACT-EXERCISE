import { useState } from 'react'

export function LoginFOrm() {
        const [showPassword, setShowPassword] = useState(false);

        function toggleShowPassword() {
          setShowPassword(!showPassword);
        }
        return (
          <>
            <div>
              <input 
               className="email-input"
                type="email" 
                placeholder="Email" 
              />
            </div>
            <div>
              <input 
               className="password-input"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <button 
               onClick={toggleShowPassword}
               >{showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button 
             className="login-button">
             Login
            </button>
            <button 
              className="signup-button">
              Sign Up
            </button>
          </>
        );
      }