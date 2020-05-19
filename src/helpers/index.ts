//for each file
//yml 

import fs from "fs";
import path from "path";
import directoryTree from "directory-tree";

const cbItem = (props: any) => {
    console.log(props);
}

export const scanFolder = (sourceFolder: string) => {

    const tree = directoryTree(
        sourceFolder,
        {
            extensions: /\.jpg/,
            normalizePath: true,
        },
        (item: any, PATH: any, stats: any) => {
            //this will finish into the output!!!
            return cbItem({ item, PATH, stats });
        },
    );

    console.log("scanFolder -> tree", tree);
}

const outputPath = "../data/";
const extension = ".jpg";

const itemTemplate = (title: string, author: string, fileName: string) => `
-   title: ${title}
    author: ${author}
    image: ${fileName}
`

const createImagesIndex = () => {
    const folderPath = outputPath;
    const images = fs.readdirSync(folderPath).filter(fileName => {
        return path.extname(fileName).toLowerCase() === extension;
    });

    console.log(images);

    //itemTemplate

};

//scanFolder("./../data/");