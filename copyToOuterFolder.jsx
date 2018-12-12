//Supposed situation is like this:
//Many photo files (ex. jpeg) are separated in folders according to the  section, topics, etc.
//represented by numbers
//Operators want to pick up them all out of the folders and don't want to do manually/ 

//Change these vars when use.
var start =1;
var end = 25;
var folderNameStr = "c:/tes/ph0/";//Folder of original files

for(num = start; num<end; num++){
//前ゼロ対策
if(num<10){
	nstr="00"+num;
}else if(num<100 && num>=10){
	nstr="0"+num;
}else nstr=num+"";

//ph0/nstr/  ph1までは既存のフォルダ名
var srcFolderName= folderNameStr + nstr+"/";
var fnameStr = folderNameStr +nstr+"ph";

//ファイルを階層外に複写
for(j=1; j<9; j++){
	srcFilename = srcFolderName+j+".jpg";
	dstFilename = fnameStr+j+".jpg";
	srcFileObj = new File(srcFilename);
	if(srcFileObj.exists){
		dstFileObj = new File(dstFilename);
		srcFileObj.copy(dstFileObj);
	}
}
}