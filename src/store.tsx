import React,{createContext,useContext,useEffect,useState} from 'react';
import {Candidate,Course,Employee,initialCandidates,initialLeave,initialNotices,LeaveRequest,Notice,courses,employees} from './data';
type Store={employees:Employee[];setEmployees:React.Dispatch<React.SetStateAction<Employee[]>>;leave:LeaveRequest[];setLeave:React.Dispatch<React.SetStateAction<LeaveRequest[]>>;notices:Notice[];setNotices:React.Dispatch<React.SetStateAction<Notice[]>>;candidates:Candidate[];setCandidates:React.Dispatch<React.SetStateAction<Candidate[]>>;courses:Course[];setCourses:React.Dispatch<React.SetStateAction<Course[]>>;checkedIn:boolean;setCheckedIn:React.Dispatch<React.SetStateAction<boolean>>;toast:string;notify:(message:string)=>void;reset:()=>void};
const Context=createContext<Store|null>(null);
function useSaved<T>(key:string,initial:T):[T,React.Dispatch<React.SetStateAction<T>>]{const [value,setValue]=useState<T>(()=>{try {const raw=localStorage.getItem(key);return raw?JSON.parse(raw) as T:initial}catch{return initial}});useEffect(()=>{localStorage.setItem(key,JSON.stringify(value))},[key,value]);return [value,setValue]}
export function StoreProvider({children}:{children:React.ReactNode}){
 const [employeeList,setEmployees]=useSaved('w360-employees',employees);const [leave,setLeave]=useSaved('w360-leave',initialLeave);const [notices,setNotices]=useSaved('w360-notices',initialNotices);const [candidates,setCandidates]=useSaved('w360-candidates',initialCandidates);const [courseList,setCourses]=useSaved('w360-courses',courses);const [checkedIn,setCheckedIn]=useSaved('w360-checkin',false);const [toast,setToast]=useState('');
 const notify=(message:string)=>{setToast(message);window.setTimeout(()=>setToast(''),3800)};
 const reset=()=>{setEmployees(employees);setLeave(initialLeave);setNotices(initialNotices);setCandidates(initialCandidates);setCourses(courses);setCheckedIn(false);notify('Demo data restored')};
 return <Context.Provider value={{employees:employeeList,setEmployees,leave,setLeave,notices,setNotices,candidates,setCandidates,courses:courseList,setCourses,checkedIn,setCheckedIn,toast,notify,reset}}>{children}{toast&&<div className="toast" role="status">{toast}</div>}</Context.Provider>
}
export const useStore=()=>{const value=useContext(Context);if(!value)throw Error('Store provider missing');return value};
