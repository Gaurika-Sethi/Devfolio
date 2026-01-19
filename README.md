## Development

### Setup

Install dependencies:

```bash
pnpm install
```

### Running

Start the development servers (web + MCP server):

```bash
pnpm dev
```

Run the FastAPI backend separately:

```bash
cd apps/api
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
