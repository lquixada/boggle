.PHONY: android-build android-eject android-start build build-analyze build-client build-server deploy-major deploy-minor deploy-patch electron-build electron-start flameon ios-build ios-eject ios-start lambda-deploy lambda-start lint-staged start test test-jest test-lint test-codecov web-dev web-prod

# Shortcuts
all: web-dev

build: web-build

eject: native-eject

lint: test-lint

start: web-prod

test: test-jest test-lint

# Example make deploy release=patch
deploy:
	npm version $(release) && git push --follow-tags


# Tests
test-jest:
	npx jest --coverage

test-lint:
	npx standard

test-codecov:
	npx codecov

# Profiling
flameon:
	./tasks/flame


# Platforms

## Native

native-eject:
	npx react-native eject

native-start:
	npx react-native start --config ../../../../rn-cli.config.js

### Android
android-build:
	npx react-native run-android

android-start: native-start

### iOS
ios-build:
	npx react-native run-ios

ios-start: native-start

## Web

node_modules: package.json
	npm install && /usr/bin/touch node_modules

web: node_modules
	npx webpack-cli -p --env.prod --config webpack.config.client.js && \
	npx babel -D src -d web && \
  /usr/bin/touch web

web-build-analyze: node_modules
	./tasks/analyze

web-dev: node_modules
	npx nodemon ./src/app.js

web-prod: web
	NODE_ENV=production node ./web/app.js

## Desktop
electron-build:
	./tasks/electron-build

electron-start:
	NODE_ENV=development npx electron-forge start

## Docker
docker-build: web
	docker build -t boggle .

docker-start:
	docker run -p 3000:3000 boggle

## AWS Lambda
lambda-deploy: web
	npx serverless deploy -v

lambda-start:
	npx serverless offline

lint-staged:
	npx lint-staged

