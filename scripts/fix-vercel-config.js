import fs from 'fs';
import path from 'path';

const configPath = path.join(process.cwd(), '.vercel/output/config.json');

if (fs.existsSync(configPath)) {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
  // Check if catch-all route already exists
  const hasCatchAll = config.routes.some(route => 
    route.src === '^/(.*)$' || route.src === '/(.*)'
  );
  
  if (!hasCatchAll) {
    // Add catch-all route at the end
    config.routes.push({
      src: '^/(.*)$',
      dest: '_render'
    });
    
    fs.writeFileSync(configPath, JSON.stringify(config, null, '\t'));
    console.log('✅ Added catch-all route to config.json');
  } else {
    console.log('✓ Catch-all route already exists');
  }
} else {
  console.error('❌ config.json not found');
  process.exit(1);
}
