import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import path from 'path';
import openFolderIcon from '../../icons/openFolder.svg';
import icon from '../../icons/iconTransparent.svg';

const NavBar = () =>{
  const history = useHistory();
  //console.log("history: ", history);
  // const sacrificeToTheTSGods:any=[]

  const [newData, setNewData] = useState<any[]>([]);
  const [testProp, setTestProp] = useState("");
  const [status, setStatus] = useState("");
  const [failValue, setFailValue] = useState("");
  const [fileName, setFileName] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [filePath, setFilePath] = useState("");
  
  const handleClick = () => {
  //@ts-expect-error
    API.incrementCount();

    //@ts-expect-error
    API.receiveCount("preload:test", (data) => {
      console.log(`Received ${data} from main process`);
      
  });
  }

  const handleClickOpenFile = () =>{
    //@ts-expect-error
    bridgeAPI.openFile();  
  }
  // let ourData : { fileName: string, filePath: string, fileResults: { end: undefined, failValue: string, start: undefined, status: string, testProp: string } }[];
  // let newData:any = null
  const handleClickOpenFolder = () =>{
    
    //@ts-expect-error
    bridgeAPI.openFolder();

    // / data: { fileName: string, filePath: string, fileResults: { end: bool, failValue: string, start: bool, status: string, testProp: string } }[]
    //@ts-expect-error
    bridgeAPI.receiveData('preload:open-folder', (data: any)=>{
      console.log('data: ', data);
<<<<<<< HEAD
      const unstringifiedData: any = data
=======
      setNewData(data)
      // const unstringifiedData:any= data
>>>>>>> ef11595b2ad5cd13403f1f051299fdd1b3e1f2da
      
      // setTestProp(unstringifiedData[0].fileResults.testProp)
      // setStatus(unstringifiedData[0].fileResults.status)
      // setFailValue(unstringifiedData[0].fileResults.failValue)
      // setFileName(unstringifiedData[0].fileName)
      // setStart(unstringifiedData[0].fileResults.start)
      // setEnd(unstringifiedData[0].fileResults.end)
      // setFilePath(unstringifiedData[0].filePath)
      // ourData = data
    });

  }

  const handleClickForTestResults = useCallback((event: any, testRes: any) => {
   


  }, []);

  useEffect(() => {
    // setTestResult(ourData)
    // window.addEventListener('click', handleClickForTestResults);
  }, [ newData]);
  //newData[i].fileResults.status==='fail' || newData[i].fileResults.status ==='fail by default'

  const conditional = [];
  for(let i = 0; i<newData.length; i++){
    conditional.push(
      <div className="w-full p-3">
        {/* lg:h-32 border border-gray-other*/}
        <div className="flex flex-col rounded overflow-auto h-auto border border-transparent border-shadow shadow-lg p-3 hover:bg-blueGray-500 hover:border-gray-darkest">
          <div><strong>Test: </strong>{newData[i].fileResults.testProp}</div> 
          <div className={newData[i].fileResults.status.includes('pass') ? "text-green-700" : "text-red-700"}><strong>Status: </strong>{newData[i].fileResults.status}</div>
          {newData[i].fileResults.status.includes('fail') && <div><strong>Issue: </strong>{`${newData[i].fileResults.testProp} is set to ${newData[i].fileResults.failValue}`}</div>}
          <div><strong>File Name: </strong>{newData[i].fileName}</div>
          {newData[i].fileResults.start>0 && <div><strong>Start: </strong>{newData[i].fileResults.start}</div>}
          {newData[i].fileResults.end>0 && <div><strong>End: </strong>{newData[i].fileResults.end}</div>}
          <div><strong>File Path: </strong>{newData[i].filePath}</div>
          <br></br>
        </div>
    </div>)
  }




  return(
    <div>
      
<<<<<<< HEAD

      <div className="inline-flex">
        {/* "sm:container sm :mx-auto px-4 overflow-contain border-double border-4 border-peach-light" */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 overflow-contain border-double border-4 border-peach-light" id="results">
         <div><button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" id='open-folder' onClick={handleClickOpenFolder}><img className="fill-current w-4 h-4 mr-2" src="/Users/Rosio/Desktop/code/codesmithCode/projects/production-project/electron-security-app/catsnake-electron-security/src/icons/open-folder-with-document.svg"/><span>Run Tests</span></button></div>
         <div className="col-span-2">
           <div><strong>Test: </strong>{testProp}</div>
            <div><strong>Status: </strong>{status}</div>
            {failValue && <div><strong>Issue: </strong>{failValue}</div>}
            <div><strong>File Name: </strong>{fileName}</div>
            {start>0 && <div><strong>Start: </strong>{start}</div>}
            {end>0 && <div><strong>End: </strong>{end}</div>}
            <div><strong>File Path: </strong>{filePath}</div>
=======
      {/* "sm:container sm :mx-auto px-4 overflow-contain border-double border-4 border-peach-light" */}
      {/* "/Users/Rosio/Desktop/code/codesmithCode/projects/production-project/electron-security-app/catsnake-electron-security/src/icons/open-folder-with-document.svg" */}
      {/* grid grid-cols-7 md:grid-cols-7 gap-4 */}
      <div className="grid grid-cols-2" id="results">
        <div className="justify-self-start"><button className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" id='open-folder' onClick={handleClickOpenFolder}>
          <img className="fill-current w-4 h-4 mr-2" src={openFolderIcon}/>
          <span>Run Tests</span></button>
>>>>>>> ef11595b2ad5cd13403f1f051299fdd1b3e1f2da
        </div>
        <div className="justify-self-end">
          <img className="object-right-top h-16" src={icon}/>
        </div>
       
        
      </div>
      <div className='col-span-6'>{conditional}</div>
    </div>
    
  )
}

export default withRouter(NavBar);