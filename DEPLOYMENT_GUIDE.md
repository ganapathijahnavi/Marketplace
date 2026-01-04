# Netlify Deployment Guide

## Prerequisites
- GitHub account (for connecting repository)
- Netlify account (free tier available)
- Backend API deployed and accessible

## Step 1: Prepare Your Repository

1. Ensure all files are committed to Git
2. Push your code to GitHub:
```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

## Step 2: Connect to Netlify

### Option A: Using Netlify UI (Recommended)
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "New site from Git"
3. Choose GitHub and authorize Netlify
4. Select your Marketplace repository
5. Configure build settings:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/build`
6. Click "Deploy site"

### Option B: Using Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Navigate to project directory
cd c:\Users\JANU\Marketplace

# Deploy
netlify deploy
```

## Step 3: Configure Environment Variables

1. Go to your Netlify Site Settings
2. Navigate to "Build & deploy" > "Environment"
3. Add these environment variables:

```
REACT_APP_API_URL = https://your-backend-api.com
REACT_APP_ENV = production
```

## Step 4: Update API Endpoints

Update your axios/fetch calls to use the environment variable:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5100';

// Use in API calls
axios.get(`${API_URL}/api/endpoint`)
```

## Step 5: Deploy Backend (if needed)

Your backend should be deployed separately. Options:
- **Heroku** (free tier deprecated)
- **Railway**
- **Render**
- **AWS** (EC2, Lambda)
- **Azure** (App Service)
- **DigitalOcean**

Update `REACT_APP_API_URL` to your deployed backend URL.

## Step 6: Post-Deployment

### Test Your Site
1. Visit your Netlify URL
2. Test all routes and features
3. Check browser console for errors (F12)
4. Test API connectivity

### Enable Automatic Deploys
- Automatic deploys from Git are enabled by default
- Any push to your main branch triggers a new build

## Step 7: Custom Domain (Optional)

1. Go to Site Settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to update DNS records
4. Enable automatic HTTPS

## Troubleshooting

### Build Fails
- Check build logs in Netlify Dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in package.json

### Routes Not Working
- The `netlify.toml` file handles React Router redirects
- Make sure the file is in your project root

### API Calls Failing
- Check that `REACT_APP_API_URL` environment variable is set
- Verify backend is accessible from the browser
- Check for CORS issues in backend

### Page Shows Blank
- Check browser console for JavaScript errors
- Verify all imports are correct
- Clear browser cache and restart

## File Structure After Deployment

```
Marketplace/
├── client/               # React frontend (deployed to Netlify)
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── build/           # Generated after npm run build
├── server/              # Node.js backend (deploy separately)
├── netlify.toml         # Netlify configuration
└── .env.example         # Environment variables template
```

## Environment Variables Summary

| Variable | Location | Purpose |
|----------|----------|---------|
| `REACT_APP_API_URL` | Netlify Dashboard | Backend API endpoint |
| `REACT_APP_ENV` | Netlify Dashboard | Environment flag (production/development) |
| `MONGO_URI` | Backend server | Database connection string |
| `PORT` | Backend server | Server port |

## Resources

- [Netlify Documentation](https://docs.netlify.com)
- [React Router on Netlify](https://docs.netlify.com/routing/overview/)
- [Environment Variables in Netlify](https://docs.netlify.com/environment-variables/overview/)
- [Netlify Troubleshooting](https://docs.netlify.com/troubleshooting/troubleshooting-tips/)
