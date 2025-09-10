// 数字千分位处理函数解析

// 原函数实现
function toThousand2(num) {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

console.log("===== 数字千分位处理函数解析 =====");

// 注意：原函数存在潜在问题 - 如果传入的是数字类型而非字符串，会导致错误
// 让我们先修复这个问题，并添加详细注释
function toThousandFixed(num) {
  // 确保输入是字符串类型
  const numStr = String(num);
  
  // 使用正则表达式进行千分位处理
  // 正则表达式详解：\B(?=(\d{3})+(?!\d))/g
  // 1. \B - 匹配非单词边界位置（避免在数字开头添加逗号）
  // 2. (?=...) - 正向前瞻断言，检查当前位置后面的内容
  // 3. (\d{3})+ - 匹配一个或多个连续的3位数字
  // 4. (?!\d) - 负向前瞻断言，确保这些3位数字后面不再有其他数字
  // 5. /g - 全局匹配模式
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 测试用例
console.log("\n测试用例:");
console.log("1. 基本整数:", toThousandFixed(1234));           // 预期: 1,234
console.log("2. 多位整数:", toThousandFixed(1234567));        // 预期: 1,234,567
console.log("3. 恰好3位:", toThousandFixed(123));             // 预期: 123 (不会添加逗号)
console.log("4. 带小数点:", toThousandFixed(12345.678));      // 预期: 12,345.678
console.log("5. 字符串类型:", toThousandFixed('123456'));     // 预期: 123,456
console.log("6. 负数:", toThousandFixed(-1234567));          // 预期: -1,234,567
console.log("7. 零:", toThousandFixed(0));                   // 预期: 0
console.log("8. 科学计数法:", toThousandFixed(1e6));         // 预期: 1,000,000

console.log("\n===== 正则表达式工作原理解析 =====");
console.log("\n正则表达式 /\\B(?=(\\d{3})+(?!\\d))/g 是如何工作的？");
console.log("\n让我们以数字 1234567 为例，一步步分析匹配过程：");
console.log("1. 首先，我们将数字转换为字符串: '1234567'");
console.log("2. 正则表达式从左到右扫描字符串，寻找符合条件的位置");
console.log("3. 对于位置 1 (在 '1' 和 '2' 之间):");
console.log("   - 检查是否是非单词边界 (\B)：是");
console.log("   - 检查后面是否有一个或多个3位数字，且后面没有其他数字:");
console.log("     - 从位置1开始，后面的数字是 '234567'");
console.log("     - 可以分成 '234' 和 '567' 两个3位组");
console.log("     - 这两个组后面确实没有其他数字");
console.log("   - 所以位置1符合条件，会在此处插入逗号");
console.log("4. 对于位置 4 (在 '4' 和 '5' 之间):");
console.log("   - 检查是否是非单词边界 (\B)：是");
console.log("   - 检查后面是否有一个或多个3位数字，且后面没有其他数字:");
console.log("     - 从位置4开始，后面的数字是 '567'");
console.log("     - 可以分成一个3位组 '567'");
console.log("     - 这个组后面确实没有其他数字");
console.log("   - 所以位置4也符合条件，会在此处插入逗号");
console.log("5. 其他位置都不符合条件，最终结果为 '1,234,567'");

console.log("\n===== 扩展知识 =====");
console.log("\n为什么使用 \B 而不是其他字符？");
console.log("- \B 匹配非单词边界，确保不会在数字的最开头添加逗号");
console.log("- 如果使用普通字符或其他边界匹配，可能会导致在不需要的位置添加逗号");

console.log("\n处理小数点的情况:");
console.log("- 正则表达式只会匹配小数点前的整数部分");
console.log("- 这是因为 (?!\\d) 会确保在最后一组3位数字后没有其他数字");
console.log("- 而小数点不属于数字，所以会停止匹配");

console.log("\n处理负数的情况:");
console.log("- 负号会被视为字符串的一部分");
console.log("- 由于负号和第一个数字之间是单词边界，所以不会在负号后添加逗号");

console.log("\n原函数的问题与修复:");
console.log("1. 原函数直接调用 num.replace()，但如果 num 是数字类型会出错");
console.log("2. 修复方法是先使用 String(num) 将输入转换为字符串类型");
console.log("3. 这样函数可以接受数字或字符串类型的输入");