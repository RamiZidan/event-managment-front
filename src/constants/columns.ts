

export const testColumns : any[] = [
      {
        title:'name',
        dataIndex:'name',
        key:'name'
      },
      {
        title:'email',
        dataIndex:'email',
        key:'email'
      }
];
export const checkSeatStatus = (record:any)=>{
  let status = 'فارغ';
  record?.invitation_seat?.map((invitation_seat:any)=>{
    if(invitation_seat?.status == 'active'){
      status = 'محجوز'
    }
  });
  return status ;
}
export const seatColumns:any[] = [
    {
      title:'رمز الكرسي',
      key:'code'
    },
    {
      title:'المدعو',
      render:(record:any)=>{
        if(checkSeatStatus(record) == 'محجوز')
          return record?.invitations?.[0]?.full_name
        else 
          return '';
      }
    },
    {
      title:'فئة الكرسي',
      key:'type'
    },
    {
      title:'حالة الكرسي',
      render:(record:any)=>{
        return checkSeatStatus(record);
      },
    }
]
export const privateInvitationColumns :any[] =[
  {
    title:'تاريخ الإرسال',
    render: (record:any)=>{
      return new Date(record.created_at).toLocaleDateString()
    }
  },
  {
    title:'الاسم',
    key:'full_name'
  },
  {
    title:'رقم الواتس آب',
    key:'whatsapp_number'
  },
  {
    title:'البريد الإلكتروني',
    key:'email'
  },
  {
    title:'تأكيد الحضور',
    render:(record:any)=>{
      return record?.confirmed_at ? 'نعم':'لا'
    }
  }
];

export const publicInvitationColumns :any[] =[
  {
    title:'تاريخ الإرسال',
    render: (record:any)=>{
      return new Date(record.created_at).toLocaleDateString()
    }
  },
  {
    title:'الاسم',
    key:'full_name'
  },
  {
    title:'رقم الهاتف',
    key:'phone_number'
  },
  {
    title:'البريد الإلكتروني',
    key:'email'
  },
  {
    title:'حالة الطلب',
    key:'status'
  },
  {
    title:'داخلي/خارجي',
    key:'type'
  }
];

export const employeeColumns :any[] = [
  {
    title:'اسم الموظف',
    key:'name'
  },
  {
    title:'البريد الإلكتروني',
    key:'email'
  }
]
export const surnameColumns : any[] = [
  {
    title:'اللقب',
    key:'title'
  },
  {
    title:'اللغة',
    key:'lang'
  }
]

export const allInvitationColumn :any[] = [
  {
    title:'تاريخ الإرسال',
    render: (record:any)=>{
      return new Date(record.created_at).toLocaleDateString()
    }
  },
  {
    title:'الاسم',
    key:'full_name'
  },
  {
    title:'رقم الجوال',
    render: (item:any)=>{
      return item?.phone_number ?? item?.whatsapp_number;
    }
  },
  {
    title:'البريد الإلكتروني',
    key:'email'
  },
  {
    title:'نوع الدعوة',
    render:(item:any)=>{
      return item.type == 'private' ? 'دعوة':'تسجيل';
    }
  },
  {
    title:'رمز المقعد',
    render:(item:any)=>{
      return  item?.seat?.[0]?.code ;
    }
  },
  {
    title:'الفئة',
    render:(item:any)=>{
      return item?.group?.title
    }
  },
  {
    title:'هل حضر الحفل',
    render:(item:any)=>{
      return item?.attended ? 'نعم':'لا'
    }
  }
]
export const seatHistoryColumns : any[] =[
  {
    title:'التاريخ',
    key:'created_at'
  },
  {
    title:'رمز الكرسي',
    key:'code'
  },
  {
    title:'المدعو',
    render:(item:any)=>{
      return item?.invitation?.full_name ;
    }
  },
  {
    title:'الموظف',
    render:(item:any)=>{
      return item?.user?.username 
    }
  }
]