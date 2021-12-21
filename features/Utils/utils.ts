import fs from 'fs'


class FolderUtils{
    deleteDirectory(path){
        fs.rmdirSync(path,{recursive:true})
    }
}
export default new FolderUtils


/*export const deleteDirectory = (path:string) =>{
    fs.rmdirSync(path,{recursive:true})
}
*/