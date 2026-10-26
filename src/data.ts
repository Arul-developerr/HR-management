export type Employee = { id:string; name:string; role:string; department:string; email:string; phone:string; location:string; status:'Active'|'On Leave'|'Remote'; joined:string; initials:string; color:string; salary:number; rating:number };
export const departments=['Engineering','Marketing','Product','Human Resources','Finance','Design','Operations'];
const people:[string,string,string,string,Employee['status'],string,number,number][]=[
 ['Rahul Mehta','Software Engineer','Engineering','rahul.mehta@example.com','Active','2022-03-12',82000,4.8],
 ['Priya Sharma','Marketing Manager','Marketing','priya.sharma@example.com','Active','2021-07-08',96000,4.7],
 ['Vikram Patel','Product Designer','Design','vikram.patel@example.com','Remote','2023-01-22',76000,4.6],
 ['Ananya Singh','Frontend Developer','Engineering','ananya.singh@example.com','Active','2022-11-15',79000,4.9],
 ['Arjun Nair','HR Specialist','Human Resources','arjun.nair@example.com','Active','2020-09-04',68000,4.5],
 ['Neha Gupta','Data Analyst','Finance','neha.gupta@example.com','On Leave','2023-04-18',72000,4.4],
 ['Rohan Das','Operations Lead','Operations','rohan.das@example.com','Active','2021-02-27',90000,4.7],
 ['Isha Kapoor','UX Researcher','Design','isha.kapoor@example.com','Remote','2022-08-01',74000,4.5],
 ['Aditya Rao','Backend Engineer','Engineering','aditya.rao@example.com','Active','2023-06-12',84000,4.6],
 ['Meera Iyer','Recruitment Partner','Human Resources','meera.iyer@example.com','Active','2021-12-03',71000,4.8],
 ['Kabir Shah','Growth Strategist','Marketing','kabir.shah@example.com','Active','2024-01-14',69000,4.3],
 ['Sara Khan','Accountant','Finance','sara.khan@example.com','Active','2022-05-26',66000,4.6]
];
export const employees:Employee[]=people.map((p,i)=>({id:`EMP-${String(i+1).padStart(3,'0')}`,name:p[0],role:p[1],department:p[2],email:p[3],status:p[4],joined:p[5],salary:p[6],rating:p[7],phone:`+91 98765 ${String(43210+i*731).slice(-5)}`,location:i%3===0?'Bengaluru':i%3===1?'Chennai':'Hyderabad',initials:p[0].split(' ').map(x=>x[0]).join(''),color:['#e7e3ff','#daf4eb','#ffe9e9','#e0edff','#fff1d9'][i%5]}));
export type LeaveRequest={id:number; employeeId:string; type:string; from:string; to:string; days:number; status:'Pending'|'Approved'|'Rejected'};
export const initialLeave:LeaveRequest[]=[
 {id:1,employeeId:'EMP-002',type:'Annual Leave',from:'2026-10-28',to:'2026-10-30',days:3,status:'Pending'},
 {id:2,employeeId:'EMP-006',type:'Sick Leave',from:'2026-10-25',to:'2026-10-26',days:2,status:'Approved'},
 {id:3,employeeId:'EMP-004',type:'Casual Leave',from:'2026-11-02',to:'2026-11-03',days:2,status:'Pending'},
 {id:4,employeeId:'EMP-009',type:'Annual Leave',from:'2026-10-19',to:'2026-10-21',days:3,status:'Approved'}
];
export type Notice={id:number;title:string;detail:string;category:'Leave'|'Payroll'|'Learning'|'General';time:string;read:boolean};
export const initialNotices:Notice[]=[
 {id:1,title:'Leave request needs your approval',detail:'Priya Sharma requested 3 days of annual leave.',category:'Leave',time:'10 min ago',read:false},
 {id:2,title:'October payroll is ready for review',detail:'Review the fictional payroll summary before closing this demo cycle.',category:'Payroll',time:'1 hour ago',read:false},
 {id:3,title:'New course available',detail:'AI for Modern Workplaces is now in the learning catalog.',category:'Learning',time:'3 hours ago',read:false},
 {id:4,title:'Welcome to Workforce360',detail:'Explore the dashboard and try the simulated workflows.',category:'General',time:'Yesterday',read:true}
];
export type Course={id:number;title:string;category:string;duration:string;level:string;students:number;rating:number;progress:number};
export const courses:Course[]=[
 {id:1,title:'AI for Modern Workplaces',category:'Technology',duration:'4h 30m',level:'Intermediate',students:124, rating:4.9,progress:72},
 {id:2,title:'Effective Team Leadership',category:'Leadership',duration:'6h 15m',level:'Advanced',students:87,rating:4.8,progress:38},
 {id:3,title:'Data Driven Decisions',category:'Analytics',duration:'3h 20m',level:'Beginner',students:96,rating:4.7,progress:0},
 {id:4,title:'Communication That Connects',category:'Soft Skills',duration:'2h 45m',level:'Beginner',students:153,rating:4.9,progress:100}
];
export type Candidate={id:number;name:string;role:string;stage:'Applied'|'Screening'|'Interview'|'Offer'|'Hired';source:string;applied:string};
export const initialCandidates:Candidate[]=[
 {id:1,name:'Aarav Malhotra',role:'Senior Product Designer',stage:'Interview',source:'LinkedIn',applied:'2026-10-21'},
 {id:2,name:'Diya Menon',role:'Frontend Engineer',stage:'Screening',source:'Careers Page',applied:'2026-10-19'},
 {id:3,name:'Nikhil Bose',role:'People Partner',stage:'Applied',source:'Referral',applied:'2026-10-18'},
 {id:4,name:'Tara Desai',role:'Data Analyst',stage:'Offer',source:'LinkedIn',applied:'2026-10-15'},
 {id:5,name:'Dev Verma',role:'Frontend Engineer',stage:'Hired',source:'Careers Page',applied:'2026-10-10'}
];
export const months=['Jan','Feb','Mar','Apr','May','Jun','Jul'];
export const trend=months.map((month,i)=>({month,employees:[72,95,132,131,143,174,188][i],present:[145,86,115,166,126,164,178][i],absent:[18,23,20,65,24,39,42][i],late:[12,16,11,21,12,16,28][i],payroll:[14,15.2,15.9,16.6,17.1,17.8,18.4][i]}));
export const departmentStats=[{name:'Engineering',count:72,color:'#6956e8'},{name:'Marketing',count:45,color:'#8b78f4'},{name:'Product',count:38,color:'#b2a5ff'},{name:'HR',count:26,color:'#16a581'},{name:'Finance',count:22,color:'#f2a93b'},{name:'Other',count:45,color:'#e45665'}];
export const formatMoney=(n:number)=>`₹${n.toLocaleString('en-IN')}`;
export const person=(id:string)=>employees.find(e=>e.id===id)??employees[0];
