.PHONY: android-build android-eject android-start build build-analyze build-client build-server deploy-major deploy-minor deploy-patch electron-build electron-start flameon ios-build ios-eject ios-start lambda-deploy lambda-start lint-staged start test test-jest test-lint test-codecov web-build web-dev web-prod

all: web-dev

android-build:
	react-native run-android

android-eject:
	react-native eject

android-start:
	react-native start --config ../../../../rn-cli.config.js

build: web-build

build-analyze:
	./tasks/analyze

build-client:
	npx webpack-cli -p --env.prod --config webpack.config.client.js

build-server:
	npx babel -D src -d web

deploy-major:
	npm version major && git push --follow-tags

deploy-minor:
	npm version minor && git push --follow-tags

deploy-patch:
	npm version patch && git push --follow-tags

electron-build:
	./tasks/electron-build

electron-start:
	NODE_ENV=development npx electron-forge start

flameon:
	./tasks/flame

ios-build:
	npx react-native run-ios

ios-eject:
	npx react-native eject

ios-start:
	npx react-native start --config ../../../../rn-cli.config.js

lambda-deploy: web-build
	npx serverless deploy -v

lambda-start:
	npx serverless offline

lint-staged:
	npx lint-staged

start: web-prod

test: test-jest test-lint

test-jest:
	npx jest --coverage

test-lint:
	npx standard

test-codecov:
	npx codecov

web-build: build-server build-client

web-dev:
	npx nodemon --config nodemon.dev.json ./src/app.js

web-prod:
	npx nodemon ./web/app.js
