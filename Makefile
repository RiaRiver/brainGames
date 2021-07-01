install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx --node-options=--experimental-vm-modules jest --colors
