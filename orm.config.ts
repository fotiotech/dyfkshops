import './envConfig.ts'
 
export default defineConfig({
  dbCredentials: {
    connectionString: process.env.MONGODB_URL!,
  },
})