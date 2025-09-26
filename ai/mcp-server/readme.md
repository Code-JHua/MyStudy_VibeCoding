# MCP 用来做什么?
  - 一套规则(协议), 是 AI 客户端和 AI 服务端之间的通信协议. 他规定了 AI 客户端和 AI 服务端一定要按照一套标准来传输
    1. 前端的效能工具的开发
    2. 面试亮点

# 前置知识
  - 通讯方式
    1. stdio 标准输入输出
      优点: 通讯效率高, 简洁
      缺点: 只能在本地使用
  - 通讯格式: JSON-RPC
    1. 是一种轻量级的远程过程调用协议, 基于 JSON 格式.
    2. 它定义了客户端如何调用服务端的方法, 以及服务端如何响应客户端的请求.
    request 示例:
    ```json
    {
      "jsonrpc": "2.0",
      "method": "add",
      "params": [2, 3],
      "id": 1
    }
    ```
    response 示例:
    ```json
    {
      "jsonrpc": "2.0",
      "result": 5,
      "id": 1
    }
    ```

- 客户端向服务端以 stdio(stdin) 的方式请求, 必须要按照 JSON-RPC 协议来传递请求.
- 服务端向客户端以 stdio(stdout) 的方式响应, 必须要按照 JSON-RPC 协议来传递响应.
这种约定就叫协议.

# MCP 服务的开发
1. 技术层面
2. 使用场景

- request 示例:
  ```json
  {
    "jsonrpc": "2.0",
    "method": "initialize",
    "params": {
      "protocolVersion": "2025-06-18",
      "capabilities": {
        "roots": {
          "listChanged": true
        },
        "sampling": {},
        "elicitation": {}
      },
      "clientInfo": {
        "name": "MCP Client",
        "version": "1.0.0",
        "title": "Example Client"
      }
    },
    "id": 1
  }
  ```
- response 示例:
    ```json
    {
      "jsonrpc": "2.0",
      "result": {
        "protocolVersion": "2025-06-18",
        "capabilities": {
          "logging": {},
          "prompts": {
            "listChanged": true
          },
          "resources": {
            "subscribe": true,
            "listChanged": true
          },
          "tools": {
            "listChanged": true
          }
        },
        "resources": {
          "subscribe": true,
          "listChanged": true
        },
        "tools": {
          "listChanged": true
        }
      },
      "serverInfo": { 
        "name": "ExampleServer",
        "version": "1.0.0",
        "title": "Example Server"
      },
      "instructions": "Optional instructions for the client",
      "id": 1
    }
    ```

- 工具发现: 客户端可以通过 `tools/list` 方法来发现服务端提供的工具.
客户端得先知道服务端有哪些工具, 才能调用服务端的工具.


# 请你介绍一下 MCP 和 FunctionCall 有什么区别?
  - MCP 就是在 JSON-RPC 协议的基础上，定义了一套规则，用于 AI 客户端和 AI 服务端之间的通信。
  - FunctionCall 是 MCP 协议中的一种工具调用方式，用于调用服务端的工具。