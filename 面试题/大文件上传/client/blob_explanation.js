// Blob 是什么？全面解析

// Blob (Binary Large Object) 是 JavaScript 中的一个对象，用于表示二进制数据
// 它可以存储各种类型的数据，如文本、图片、音频、视频等
// Blob 通常用于处理大文件、文件上传、下载和数据传输等场景

// 一、Blob 的基本概念
// Blob 代表二进制大对象，可以包含任意格式的数据，并附带类型信息
console.log('=== Blob 基本概念 ===');

// 二、创建 Blob 对象的基本语法
// new Blob(array, options)
// array: 包含要放入 Blob 中的数据的数组
// options: 可选参数，包含 type (MIME 类型) 和 endings (行结束符处理方式)
const textBlob = new Blob(['Hello, Blob!'], { type: 'text/plain' });
console.log('文本类型的 Blob:', textBlob);
console.log('Blob 大小 (字节):', textBlob.size);
console.log('Blob MIME 类型:', textBlob.type);

// 三、Blob 的常用场景
console.log('\n=== Blob 常用场景 ===');

// 1. 文件处理与转换
// 从搜索结果中看到的音频处理示例
function createAudioBlob() {
    // 实际项目中，这里会有真实的音频数据处理
    console.log('1. 音频处理: 将二进制数据转换为 Blob 用于播放');
    // 示例: let blob = new Blob([new Uint8Array(byteArrays)], { type: 'audio/mp3' });
}

// 从搜索结果中看到的图片压缩示例
function compressImage() {
    console.log('2. 图片处理: 将图片数据转换为 Blob 并进行压缩');
    // 示例: const compressedBlob = await canvas.convertToBlob({ type: 'image/jpeg', quality: 0.8 });
}

createAudioBlob();
compressImage();

// 3. 创建可下载的文件链接
function createDownloadLink() {
    const blob = new Blob(['Blob 示例内容'], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    console.log('3. 创建下载链接: 使用 URL.createObjectURL() 生成临时 URL');
    console.log('示例 URL 格式:', url); // 实际输出会是类似 blob:http://localhost:xxx/xxxx
    
    // 使用完毕后应释放 URL 以避免内存泄漏
    URL.revokeObjectURL(url);
}

createDownloadLink();

// 4. 大文件分片上传
function chunkFileUpload() {
    console.log('4. 大文件处理: 将大文件分割成多个 Blob 进行分片上传');
    // 这正是当前项目(大文件上传)可能会使用的技术
}

chunkFileUpload();

// 四、Blob 的相关 API
console.log('\n=== Blob 相关 API ===');

// 1. slice() 方法 - 创建 Blob 的一部分
const originalBlob = new Blob(['完整的 Blob 内容'], { type: 'text/plain' });
const slicedBlob = originalBlob.slice(0, 5); // 截取前5个字符
console.log('slice() 方法: 截取 Blob 的一部分');

// 2. FileReader API - 读取 Blob 内容
function readBlobContent() {
    const blob = new Blob(['读取 Blob 内容'], { type: 'text/plain' });
    const reader = new FileReader();
    
    reader.onload = function(e) {
        console.log('FileReader API: 可以将 Blob 转换为文本、DataURL 等格式');
        // 输出: e.target.result 将包含读取的内容
    };
    
    reader.readAsText(blob); // 也可以是 readAsDataURL, readAsArrayBuffer 等
}

readBlobContent();

// 五、Blob 与其他数据类型的关系
console.log('\n=== Blob 与其他数据类型的关系 ===');
console.log('1. Blob 是 File 对象的父类');
console.log('2. ArrayBuffer 表示原始二进制数据，而 Blob 是带类型的二进制数据容器');
console.log('3. Blob URL (blob:...) 是基于 Blob 创建的临时 URL，用于访问 Blob 内容');

// 六、在大文件上传项目中的应用
console.log('\n=== 在大文件上传项目中的应用 ===');
console.log('1. 将大文件切分为多个小的 Blob 进行并行上传');
console.log('2. 通过 Blob 处理文件的分块和合并');
console.log('3. 使用 Blob 和 FileReader 进行文件校验和预览');
console.log('4. 利用 Blob URL 实现客户端的文件预览功能');

// Buffer 是什么？ - Node.js Buffer 详细解释

/**
 * Buffer 是 Node.js 中的一个核心模块，用于处理二进制数据流
 * 它是一个原始的二进制数据缓冲区，类似于整数数组，但专门用于二进制数据操作
 * 
 * Buffer 的主要特点：
 * 1. 是 Node.js 自带的全局对象，不需要额外引入
 * 2. 存储的是原始的二进制数据，而不是字符串或其他数据类型
 * 3. 可以高效地处理二进制数据，如文件读写、网络通信等
 * 4. 长度固定且不可调整，创建后就不能改变大小
 * 5. 每个元素的范围是 0 到 255（一个字节的范围）
 */