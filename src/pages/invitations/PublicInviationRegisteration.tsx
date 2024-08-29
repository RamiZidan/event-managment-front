import React from 'react'


function PublicInviationRegisteration() {

  return (
    <>
        <table  className="grid table table-sm">
            <tr className='row ' style={{height:'5rem'  , alignItems:'center',
                color: "white",
                textAlign: "center",
                fontSize: 22,
                backgroundColor:'#6666cc'}
          
             }>

                <span
                  
                    >
                    الجلسة الحوارية لتدشين برنامج تحول القطاع الصحي
                </span>

            </tr>
            <hr/>
            <tr className='row ' style={{ alignItems:'center', color: "grey",
                    textAlign: "right",}}>

                <span>
                    {" "}
                    مرحبًا بكم في صفحة التسجيل لحضور الجلسة الحوارية لتدشين برنامج تحول القطاع الصحي، هذه الجلسة التي ستعرف بدور البرنامج في تحول القطاع الصحي في المملكة واستعراض مستهدفاته وطموحاته{" "}
                </span>
            </tr>
            <hr/>
            <tr className='row ' style={{  backgroundColor:'white', alignItems:'center', color: "grey",
                    textAlign: "right",}}>

                <span>
                    {" "}
                    التاريخ : 	الإثنين 14/3/2022م الموافق 10/08/1443هـ 
                </span>
            </tr>
            <hr/>
            <tr className='row ' style={{ alignItems:'center', color: "grey",
                    textAlign: "right",}}>

                <span>
                    {" "}
                    الوقت : 	20:00 - 21:00 مساءً 
                </span>
            </tr>
            <hr/>
            <tr className='row ' style={{ alignItems:'center', color: "grey",
                    textAlign: "right",}}>

                <span>
                    {" "}
                    الموقع : 	القاعة الرئيسية بفندق كراون بلازا في المدينة الرقمية - الرياض
                </span>
            </tr>
            <tr className='row card' style={{ alignItems:'center', color: "grey",
                    textAlign: "right",}}>

                <div className='grid'>
                    <div className='row'>   
                    <h2 style={{color:'#6666cc' , textAlign:'center'}}> سجل الآن </h2>
                    </div>
                    <div className='row'>
                        <label>اللقب 
                            <i data-isicon="true" className="icon-eye-open small "><div></div></i>

                        </label>
                        <select className='form-select select'>
                            <option value="1" >1 </option>
                        </select>
                    </div>
                    <div className='row'>
                        <label>الاسم الكامل </label>
                        <input type="text" id="invitation___name" name="invitation___name" size={20} maxLength={255} className="span12 form-control fabrikinput inputbox text" placeholder="الاسم الكامل " />
                    </div>
                    <div className='row'>
                        <label>رقم الجوال </label>
                        <input type="text" id="invitation___name" name="invitation___name" size={20} maxLength={255} className="span12 form-control fabrikinput inputbox text" placeholder="رقم الجوال " />
                    </div>
                    <div className='row'>
                        <label>البريد الإلكتروني </label>
                        <i data-isicon="true" className="icon-envelope small "></i>
                        <input type="text" id="invitation___name" name="invitation___name" size={20} maxLength={255} className="span12 form-control fabrikinput inputbox text" placeholder="البريد الإلكتروني " />
                    </div>
                    <div className='row'>
                        <label>الجهة </label>
                        <input type="text" id="invitation___name" name="invitation___name" size={20} maxLength={255} className="span12 form-control fabrikinput inputbox text" placeholder="الجهة " />
                    </div>
                    <div className='row'>
                        <label> المنصب </label>
                        <input type="text" id="invitation___name" name="invitation___name" size={20} maxLength={255} className="span12 form-control fabrikinput inputbox text" placeholder="المنصب " />
                    </div>
                    <div className='row' style={{backgroundColor:'#f5f5f5'}}>
                    <div className="fabrikActions form-actions">
                        <div className="row-fluid">
                            <div className="span4">
                                <div className="btn-group">
                                    
                                <button type="submit" className="btn btn-primary button _" name="Submit" id="fabrikSubmit_48"> إرسال</button>
                                </div>
                            </div>
                        </div>
                    </div>    

                    </div>

                </div>
            </tr>
             
          

        </table>


    </>
  )
}

export default PublicInviationRegisteration