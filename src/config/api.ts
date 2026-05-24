/**
 * Discipl Fitness – API Configuration
 */

const API_CONFIG = {
  // Local development
  LOCAL_URL: 'http://10.0.2.2:8000/api/v1',  // Android emulator
  LOCAL_URL_IOS: 'http://localhost:8000/api/v1',

  // Production (Render)
  PRODUCTION_URL: 'https://discipl-backend-python.onrender.com/api/v1',

  // Timeouts
  TIMEOUT: 15000,
};

// Toggle this for local vs production
export const BASE_URL = __DEV__
  ? API_CONFIG.LOCAL_URL
  : API_CONFIG.PRODUCTION_URL;

export default API_CONFIG;
