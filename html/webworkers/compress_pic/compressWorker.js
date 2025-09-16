self.onmessage = async function (e) {
  const { imgData, quality } = e.data
  // console.log(imgData, quality,'-----------');

  try {
    // blob 二进制
    // 压缩准备: base64 -> fetch -> blob -> bitmap
    const bitmap = await createImageBitmap(
      await (await fetch(imgData)).blob()
    )
    
    // html5 canvas 画布  位图时少取一些像素
    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height)
    // 在画之前, 得到画画的句柄 2d
    const ctx = canvas.getContext('2d')
    // 从左上角开始画出来
    ctx.drawImage(bitmap, 0, 0)
    // canvas -> blob
    const compressedBlob = await canvas.convertToBlob(
      {
        type: 'image/jpeg',
        quality
      }
    )
    const reader = new FileReader();
    reader.onloadend = () => {
      self.postMessage({
        success: true,
        imgData: reader.result
      })
    }

    reader.readAsDataURL(compressedBlob)
  } catch (err) {
    console.error('压缩图片时出错:', err);
    self.postMessage({
      success: false,
      error: err.message
    })
  }
}