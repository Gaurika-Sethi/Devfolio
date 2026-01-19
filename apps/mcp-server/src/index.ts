import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

async function main() {
  const server = new Server(
    {
      name: 'devpilot-mcp',
      version: '0.1.0',
    },
    {
      capabilities: {},
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error('DevPilot MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
