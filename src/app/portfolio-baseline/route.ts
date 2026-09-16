import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';

/**
 * Temporary visual baseline for the incremental migration. The original
 * portfolio remains the source of truth until its native React replacement
 * has been visually verified route by route.
 */
export async function GET() {
  const html = await readFile(join(process.cwd(), 'index.html'), 'utf8');

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
