// If we can't guarantee global state, don't fake it: fail instead.
let globalEnv = null;
// Use window (web)/self (web worker)/global (node) as appropriate
if (typeof window !== 'undefined') {
	globalEnv = window;
} else if (typeof self !== 'undefined') {
	globalEnv = self;
} else if (typeof global !== 'undefined') {
	globalEnv = global;
}

export { globalEnv };
