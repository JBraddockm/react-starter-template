module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', '**/*.css', '**/*.scss'],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh', 'simple-import-sort', 'no-relative-import-paths'],
	rules: {
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-no-target-blank': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'no-relative-import-paths/no-relative-import-paths': [
			'warn',
			{ 'allowSameFolder': true, 'rootDir': 'src', 'prefix': '@' },
		],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
	},
	'overrides': [
		{
			'files': ['*.js', '*.jsx', '*.ts', '*.tsx'],
			'rules': {
				'linebreak-style': ['error', 'unix'],
				// override "simple-import-sort" config
				'simple-import-sort/imports': [
					'error',
					{
						'groups': [
							// Packages `react` related packages come first.
							['^react', '^@?\\w'],
							// Internal packages.
							['^(@|components)(/.*|$)'],
							// Side effect imports.
							['^\\u0000'],
							// Parent imports. Put `..` last.
							['^\\.\\.(?!/?$)', '^\\.\\./?$'],
							// Other relative imports. Put same-folder imports and `.` last.
							['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
							// Style imports.
							['^.+\\.?(css)$'],
						],
					},
				],
			},
		},
	],
};
