const path = require('path')

export const uploadFileDetails = async (directoryPath: string) => {
    const filePath = path.join(__dirname, directoryPath)
    const remoteFilePath = await browser.uploadFile(filePath)

    return remoteFilePath;
}

