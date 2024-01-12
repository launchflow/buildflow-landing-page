import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const buildflowTheme: CustomThemeConfig = {
	name: 'buildflow-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #1065FF
		'--color-primary-50': '219 232 255', // #dbe8ff
		'--color-primary-100': '207 224 255', // #cfe0ff
		'--color-primary-200': '195 217 255', // #c3d9ff
		'--color-primary-300': '159 193 255', // #9fc1ff
		'--color-primary-400': '88 147 255', // #5893ff
		'--color-primary-500': '16 101 255', // #1065FF
		'--color-primary-600': '14 91 230', // #0e5be6
		'--color-primary-700': '12 76 191', // #0c4cbf
		'--color-primary-800': '10 61 153', // #0a3d99
		'--color-primary-900': '8 49 125', // #08317d
		// secondary | #04ABF2
		'--color-secondary-50': '217 242 253', // #d9f2fd
		'--color-secondary-100': '205 238 252', // #cdeefc
		'--color-secondary-200': '192 234 252', // #c0eafc
		'--color-secondary-300': '155 221 250', // #9bddfa
		'--color-secondary-400': '79 196 246', // #4fc4f6
		'--color-secondary-500': '4 171 242', // #04ABF2
		'--color-secondary-600': '4 154 218', // #049ada
		'--color-secondary-700': '3 128 182', // #0380b6
		'--color-secondary-800': '2 103 145', // #026791
		'--color-secondary-900': '2 84 119', // #025477
		// tertiary | #3DDBFF
		'--color-tertiary-50': '226 250 255', // #e2faff
		'--color-tertiary-100': '216 248 255', // #d8f8ff
		'--color-tertiary-200': '207 246 255', // #cff6ff
		'--color-tertiary-300': '177 241 255', // #b1f1ff
		'--color-tertiary-400': '119 230 255', // #77e6ff
		'--color-tertiary-500': '61 219 255', // #3DDBFF
		'--color-tertiary-600': '55 197 230', // #37c5e6
		'--color-tertiary-700': '46 164 191', // #2ea4bf
		'--color-tertiary-800': '37 131 153', // #258399
		'--color-tertiary-900': '30 107 125', // #1e6b7d
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #495a8f
		'--color-surface-50': '228 230 238', // #e4e6ee
		'--color-surface-100': '219 222 233', // #dbdee9
		'--color-surface-200': '210 214 227', // #d2d6e3
		'--color-surface-300': '182 189 210', // #b6bdd2
		'--color-surface-400': '128 140 177', // #808cb1
		'--color-surface-500': '73 90 143', // #495a8f
		'--color-surface-600': '66 81 129', // #425181
		'--color-surface-700': '55 68 107', // #37446b
		'--color-surface-800': '44 54 86', // #2c3656
		'--color-surface-900': '36 44 70' // #242c46
	}
};
