#!/usr/bin/env bun

import path from 'node:path';
import UnpluginTypia from '@ryoppippi/unplugin-typia/bun';
import { $ } from 'bun';
import isolatedDecl from 'bun-plugin-isolated-decl';
import { consola } from 'consola';

import pj from './package.json';

const outdir = 'dist';

if (import.meta.main) {
	await $`rm -rf ${outdir}`;

	consola.info('Building...');
	await Bun.build({
		entrypoints: ['src/index.ts'],
		outdir,
		target: 'node',
		minify: true,
		splitting: false,
		external: Object.keys(pj.dependencies),
		plugins: [
			UnpluginTypia({ cache: false }),
			isolatedDecl(),
		],
	});

	consola.success('Build completed');
}
