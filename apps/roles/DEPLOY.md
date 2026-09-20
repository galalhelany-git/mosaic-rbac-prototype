# Deploy the Roles app to Vercel

The Roles frontend is an independent Vercel deployment target inside the Mosaic monorepo. Its build includes only:

- `@mosaic-ds/tokens`
- `@mosaic-ds/react`
- `@mosaic-ds/roles-app`

Storybook is not part of the deployment build.

## Vercel project settings

1. Import the repository into Vercel.
2. Set **Root Directory** to `apps/roles`.
3. Keep **Include source files outside of the Root Directory in the Build Step** enabled so Vercel can access `packages/react` and `packages/tokens`.
4. Vercel reads the remaining settings from `apps/roles/vercel.json`:
   - Framework: Vite
   - Build command: `pnpm -w build:roles`
   - Output directory: `dist`
5. Deploy.

The SPA rewrite in `vercel.json` ensures direct navigation continues to load `index.html`.

## Local production verification

From the monorepo root:

```sh
pnpm build:roles
```

The deployable output is generated in `apps/roles/dist`.
