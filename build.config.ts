import { defineBuildConfig } from 'unbuild';
import UnpluginTypia from '@ryoppippi/unplugin-typia/rollup';

export default defineBuildConfig([
	{
		sourcemap: true,
		declaration: true,
		hooks: {
			'rollup:options': function (_, options) {
				if (Array.isArray(options.plugins)) {
					options.plugins.unshift(UnpluginTypia());
				}
			},
		},
	},
]);
