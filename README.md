# NIKOLA WORLD — Interactive Portfolio

Starter project for a lightweight top-down portfolio game.

## Requirements
- Node.js 20.9+ (recommended)
- VS Code
- Internet connection for installing packages

## Run locally
1. Extract the ZIP.
2. Open the `nikola-world` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open http://localhost:3000

The game runs with local sample data. Supabase is optional until you configure it.

## Controls
- W / Arrow Up: drive forward
- S / Arrow Down: reverse
- A / Arrow Left: steer left
- D / Arrow Right: steer right
- E: interact when near a location
- ESC: close a dialog

## Included in this starter
- Next.js + TypeScript + Tailwind-free custom CSS
- Phaser 3 top-down driving game
- Small low-detail map with portfolio locations
- Interaction prompt and portfolio detail modal
- Portfolio sections populated from the supplied portfolio presentation
- Coin collecting mini-game
- Quiz modal
- Responsive layout and touch-friendly on-screen controls
- Optional Supabase client and SQL schema

## Supabase setup (optional)
1. Create a project at https://supabase.com
2. In Project Settings > API, copy the Project URL and anon/public key.
3. Copy `.env.example` to `.env.local` and fill in the values.
4. Run `supabase/schema.sql` in the Supabase SQL Editor.
5. The app will attempt to load public portfolio records. If the tables are empty or unavailable, it falls back to local sample data.

Never put a Supabase service-role key in a browser application.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository at https://vercel.com/new
3. Add the two `NEXT_PUBLIC_SUPABASE_*` environment variables if using Supabase.
4. Deploy.

## Editing your portfolio content
The starter content is in `src/data/portfolio.ts`. Edit this file to update text and links.
For a production version, add an authenticated admin dashboard and storage upload workflow. This starter intentionally does not expose admin credentials or service-role access.

## Notes
- The world is intentionally compact and 2D top-down to keep it lightweight.
- No external 3D models are required.
- Some image slots use tasteful placeholders until you upload original screenshots, artwork and certificates.
- Only add real GitHub/demo URLs when you have verified them.

## City Survival update
This version expands the map into a multi-district city with wide asphalt avenues, lane markings, blocks, trees, street scenery, and portfolio landmarks spread across the map. The player vehicle is larger and more detailed. Zombies are defeated instantly when hit by the vehicle; zombie contact drains vehicle integrity by 20 points at a time, with a damage cooldown. The vehicle starts with 100 HP. At 0 HP, an animated Game Over screen appears with Play Again and Back to Menu actions.

### Updated gameplay
- W / Arrow Up: accelerate
- S / Arrow Down: reverse
- A,D / Arrow Left,Right: steer
- E: interact with nearby portfolio landmarks
- ESC: close a portfolio dialog
- Drive into zombies to defeat them
- Avoid staying close to zombies; vehicle integrity is limited
- Collect coins throughout the city

The ZIP intentionally excludes `node_modules` and `.next`; run `npm.cmd install` once after extracting, then `npm.cmd run dev`.
