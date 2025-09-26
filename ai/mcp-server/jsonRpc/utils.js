import fs from 'fs';

export default {
  initialize() {
    return {
      protocolVersion: '2025-06-18',
      capabilities: {
        logging: {},
        roots: {
          listChanged: true
        },
        sampling: {},
        elicitation: {}
      },
      serverInfo: {
        name: 'ExampleServer',
        version: '1.0.0',
        title: 'Example Server'
      }
    }
  },
  sum(params) {
    const { a, b } = params;
    return a + b;
  },
  createFile(params) {
    const { filename, content } = params;
    try {
      fs.writeFileSync(filename, content);
      return true
    } catch (err) {
      return false
    }
  },

}
