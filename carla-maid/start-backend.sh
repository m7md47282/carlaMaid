#!/bin/bash

# Carla Maid Backend Startup Script
echo "🚀 Starting Carla Maid Backend..."

# Set environment variables
export NODE_ENV="development"
export PORT="4000"

# SkipCash API Keys (using the actual keys provided)
export SKIPCASH_SANDBOX_API_KEY="288d604d-03b6-4c66-821e-0a82a3fd2cc8"
export SKIPCASH_SANDBOX_SECRET_KEY="Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbSf7yw6DO6NV51dbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw=="

# Production keys (same as sandbox for now, update when you get production keys)
export SKIPCASH_API_KEY="288d604d-03b6-4c66-821e-0a82a3fd2cc8"
export SKIPCASH_SECRET_KEY="Og9vDBQbBFHg/dwxkQjFCcLYogMDq4hLOF0OPsuRDY+OrLp/BPWMoCvsf1EDW41N8QTqoJHFhpclF/+bMR8Gwjyy2n0ZBNKuk8TO6LSpA2+JTWRM3ODl3LuX1nSFHRVnHJ1h0+ojevQqA8U/FzgCu88S+HhdZ1zq1GeWvka9MM8y8arkLwo0oLCf4IPAcH6olU8EKWrgcIymL6spNmRYRqfiLEzFWIQAjNJa2PH/spkK8c0brTae9jzbSf7yw6DO6NV51dbC5Td+BqWEjOmDphtQ3XSfqaj5fIjkGjjd58tnP6uQELF08Q5uZqGno8fWxZi+B6Wz9Z6Zr3y7cr19VTpRA2+RGOSVNzdaMnc7EL6ryFxmXUg+dSU37gBffAzn8fAIe2KJJdGnsSUkM8Z82E6Yj2KPi/Tw/wrYZMwuXNROwlIilIt9tds8PCdlFgPD1wiH8q9om/kIcarLuoVXn71nF65BT3/PhAOEhKyrxLaiqwZg+8xZdbCHzFQNYefcYuDRzflWzPRp3oWX1L9bPw=="

echo "📋 Environment Configuration:"
echo "  - NODE_ENV: $NODE_ENV"
echo "  - PORT: $PORT"
echo "  - SKIPCASH_SANDBOX_API_KEY: ${SKIPCASH_SANDBOX_API_KEY:0:10}..."
echo "  - SKIPCASH_SANDBOX_SECRET_KEY: ${SKIPCASH_SANDBOX_SECRET_KEY:0:10}..."

echo ""
echo "🔧 Starting standalone server..."
echo "📊 API will be available at: http://localhost:$PORT"
echo ""

# Start the server
node standalone-server.js 