const { contextBridge, ipcRenderer, dialog } = require('electron')

contextBridge.exposeInMainWorld(
    'bridgeAPI',
    {
        openFile: () =>{
            ipcRenderer.send('main:open-file')
        },
        openFolder: ()=>{
            ipcRenderer.send('main:open-folder')
        },
        incrementCount:()=>{
            ipcRenderer.send('main:test',{})
            //ipcRenderer.removeAllListeners('main:test')
        },
    }
)

contextBridge.exposeInMainWorld(
    'API',
    {
        incrementCount:()=>{
            ipcRenderer.send('main:test',{})
            //ipcRenderer.removeAllListeners('main:test')
        },
        receiveCount: (channel:any, func:any) =>{
            let validChannels = ["preload:test"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender` 
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
)


ipcRenderer.on('preload:open-file', (event, arg) => {
    console.log('preload:open-file')
    //@ts-expect-error
    document.getElementById('hello').innerHTML = arg
})

// ipcRenderer.on('preload:test', (event, arg)=>{
//     console.log('this is preload3')
//     //dialog.showErrorBox('Hello', "This is a test")
//     //@ts-expect-error
//     document.getElementById('hello').innerHTML = "dasdsdsds5gh45g5"
// })

ipcRenderer.on('preload:open-folder', (event, arg)=>{
    console.log(arg)
})