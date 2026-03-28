# Environment Variables Setup

## Local Development

1. **Create `.env` file in root directory:**
```bash
cp .env.example .env
```

2. **Update `.env` with your actual values:**
```
# Database
DATABASE_URL=postgresql://postgres.fxotjnegfapfatvngvej:vivek123jha870@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres

# Node Environment
NODE_ENV=development

# Vite Configuration
VITE_PORT=5000
VITE_API_URL=/api
VITE_BACKEND_URL=http://localhost:3001
```

3. **Run locally:**
```bash
pnpm install
pnpm dev
```

The `.env` file is in `.gitignore` - it won't be committed to GitHub.

---

## Deployment on Vercel / Railway / Render

1. **Go to your hosting platform**
2. **Add Environment Variables in Project Settings:**
   - `DATABASE_URL` = your Supabase PostgreSQL connection string
   - `NODE_ENV` = production

**Example Supabase Connection String:**
```
postgresql://postgres.fxotjnegfapfatvngvej:vivek123jha870@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres
```

---

## Environment Variables Reference

| Variable | Required | Default | Purpose |
|----------|----------|---------|---------|
| `DATABASE_URL` | Yes (if using PostgreSQL) | - | Supabase/PostgreSQL connection string |
| `NODE_ENV` | No | development | Environment mode (development/production) |
| `PORT` | No | 3001 (dev), 5000 (prod) | Backend server port |
| `VITE_PORT` | No | 5000 | Frontend Vite server port |
| `VITE_API_URL` | No | /api | Frontend API endpoint |
| `VITE_BACKEND_URL` | No | http://localhost:3001 | Backend URL for frontend |

---

## Database Setup

### Using Supabase (Recommended)
- Connection string: `DATABASE_URL` environment variable
- Automatically creates tables on first run
- Automatically migrates from SQLite if exists

### Using Local SQLite
- If `DATABASE_URL` is not set, defaults to SQLite
- Database file: `story.db`
- Good for local development without external DB

---

## How It Works

The code automatically detects the environment:
- **If `DATABASE_URL` is set** → Uses PostgreSQL (Supabase)
- **If `DATABASE_URL` is NOT set** → Falls back to SQLite (local development)

This means:
- ✅ Local development works without any external database
- ✅ Production uses Supabase via environment variable
- ✅ No code changes needed, just set the variable
