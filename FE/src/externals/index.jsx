import { useEffect } from 'react';

const ExternalLibrary = () => {

    useEffect(()=>{
        if (typeof window !== "undefined"){
            const jsFiles = [
                'https://unpkg.com/react@17/umd/react.production.min.js',
                'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
                'https://unpkg.com/@ant-design/charts@1.0.5/dist/charts.min.js',
                //Use organization chart, flowchart, capital flow chart, indentation tree chart to use
                'https://unpkg.com/@ant-design/charts@1.0.5/dist/charts_g6.min.js',
            ];
            // Make sure it only gets included once.
            if (!document.getElementById("externalLibraryAdded")){
                const hidden = document.createElement('input')
                hidden.type = 'hidden'
                hidden.id = 'externalLibraryAdded' 
                jsFiles.forEach((js, i)=>{
                    const script = document.createElement('script');
                    script.id=`externalLibrary-${i}`
                    script.type = 'text/javascript';
                    script.src = js; 
                    // Call some function from the library when it loads.
                    script.onload = function() {                    
                        console.log("Loaded")
                    };
                    document.getElementsByTagName("head")[0].appendChild(script);
                })
                document.getElementsByTagName("body")[0].appendChild(hidden)
            }
            
        }
    }, []);

    return null;

}  
 
export default ExternalLibrary;