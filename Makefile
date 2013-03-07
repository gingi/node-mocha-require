MOCHA     = ./node_modules/.bin/mocha
MOCHAOPTS = --require should

all: test

test:
	@ $(MOCHA) $(MOCHAOPTS)

.PHONY: all test