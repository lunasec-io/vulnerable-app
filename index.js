console.log("hello world!");


const {VM} = require("vm2"); let vmInstance = new VM();

vmInstance.run(`(()=>{
			const OldError = Error;
			global.Error = {prepareStackTrace: (_, c) => c.map(c => c.getThis()).find(a => a && a.process)};
			const { stack } = new OldError();
			global.Error = OldError;
			return stack.process.mainModule;
		})()`);

