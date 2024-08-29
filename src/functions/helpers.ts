import { message } from "antd";
import { isString } from "antd/es/button";
import * as XLSX from 'xlsx';

export const showErrors = (error:any)=>{
  if(error?.data?.msg?.map){
    Object.keys(error?.data?.msg)?.map((key)=>{
      message.error(error?.data?.msg[key]) ;
    })
  }
  else if((error?.data?.msg) ){
    message.error(error.data.msg);
  }  
};

export const getUser = ()=>{
  const user = JSON.parse( localStorage?.getItem('user')) ;
  return user ;
};

export function exportToExcel(columns :any[], dataSource:any[] ,fileName = String(Math.random()) + '.xlsx' ) {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet([]);
  const headers = columns.map((col:string , index: number )=> { 
      // return index != columns.length -1?  col?.title: ''
      return col?.title ;
  } );
  XLSX.utils.sheet_add_aoa(ws, [headers], { origin: 'A1' });
  const dataRows = dataSource.map((data:any , index :number)=> {
      return columns.map((col:any) => {
          if (col.key) {
              return data[col.key];
          } else if (col.render) {
              return col.render(data);
          }
          return '';
      });
  });
  XLSX.utils.sheet_add_json(ws, dataRows, { origin: 'A2', skipHeader: true });

  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');


  XLSX.writeFile(wb, fileName);
  const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



export const convertToFormData = (details:any)=>{
    let formBody : any = [];
    for (const property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody;    
}

export const getTimeString = (now:any, startTime:any) => {
    let secondPassed = 0;
    let minutePassed = 0;
    let hourPassed = 0;
    const basedHour = 1000 * 60 * 60;
    const basedMinutes = 1000 * 60;
    let result = "00:00:00";
    if (startTime != null && now != null) {
      result = "";
      const timePassed = now - startTime;
      hourPassed = Math.floor(timePassed / basedHour);
      result += hourPassed < 10 ? `0${hourPassed}:` : `${hourPassed}:`;
  
      let remainning = timePassed - hourPassed * basedHour;
      minutePassed = Math.floor(remainning / basedMinutes);
      result += minutePassed < 10 ? `0${minutePassed}:` : `${minutePassed}:`;
  
      remainning = remainning - minutePassed * basedMinutes;
      secondPassed = remainning / 1000;
      result += secondPassed < 10 ? `0${secondPassed}` : secondPassed;
    }
    return result;
};

export const getBackURL = ()=>{
  return import.meta.env.VITE_REACT_API_KEY ;
}

