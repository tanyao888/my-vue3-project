/**
 * 图片文件转base64
 * @param {Blob} file
 * @return {*}
 */
const fileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      resolve(reader.result)
    }
    reader.onerror = () => {
      reject(reader.error)
    }
  })
}
type ImgInfo = {
  fileName?: string
  fileSize?: string | number
  fileType?: string
  fileUrl?: string
}

const fileToBlobUrl = (file: File) => {
  return new Promise<ImgInfo>((resolve) => {
    const { name = '', size = '' } = file
    const blobUrl = URL.createObjectURL(file)
    const fileType = name.substring(name.lastIndexOf('.'))
    const fileObj = {
      fileName: name,
      fileSize: size,
      fileType,
      fileUrl: blobUrl
    }
    if (blobUrl) {
      resolve(fileObj)
    } else {
      throw new Error('blob转换失败！')
    }
  })
}

export { fileToBase64, fileToBlobUrl }
