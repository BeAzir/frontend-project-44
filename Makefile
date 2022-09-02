install: #Установить зависимости 
	npm ci
brain-games: # install programm
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint
