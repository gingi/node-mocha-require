MOCHA     = ./node_modules/.bin/mocha
MOCHAOPTS = --require should

all: test

init:
	@ npm install

test: init
	@ $(MOCHA) $(MOCHAOPTS)

.PHONY: all test