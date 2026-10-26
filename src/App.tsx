import {lazy,Suspense} from 'react';
import {Navigate,Route,Routes} from 'react-router-dom';
import {StoreProvider} from './store';
import {AppLayout} from './ui';
const Dashboard=lazy(()=>import('./pages/Dashboard'));
const Employees=lazy(()=>import('./pages/People').then(m=>({default:m.Employees})));
const Profile=lazy(()=>import('./pages/People').then(m=>({default:m.Profile})));
const Attendance=lazy(()=>import('./pages/Operations').then(m=>({default:m.Attendance})));
const Leave=lazy(()=>import('./pages/Operations').then(m=>({default:m.Leave})));
const Learning=lazy(()=>import('./pages/Talent').then(m=>({default:m.Learning})));
const Performance=lazy(()=>import('./pages/Talent').then(m=>({default:m.Performance})));
const Recruitment=lazy(()=>import('./pages/Talent').then(m=>({default:m.Recruitment})));
const Payroll=lazy(()=>import('./pages/Admin').then(m=>({default:m.Payroll})));
const Reports=lazy(()=>import('./pages/Admin').then(m=>({default:m.Reports})));
const Notifications=lazy(()=>import('./pages/Admin').then(m=>({default:m.Notifications})));
const Settings=lazy(()=>import('./pages/Admin').then(m=>({default:m.Settings})));
const Auth=lazy(()=>import('./pages/Auth'));
export default function App(){return <StoreProvider><Suspense fallback={<div className="page-loading" role="status">Loading Workforce360…</div>}><Routes><Route path="/" element={<Navigate to="/dashboard" replace/>}/><Route element={<AppLayout/>}><Route path="/dashboard" element={<Dashboard/>}/><Route path="/employees" element={<Employees/>}/><Route path="/employees/:employeeId" element={<Profile/>}/><Route path="/attendance" element={<Attendance/>}/><Route path="/leave" element={<Leave/>}/><Route path="/learning" element={<Learning/>}/><Route path="/performance" element={<Performance/>}/><Route path="/payroll" element={<Payroll/>}/><Route path="/recruitment" element={<Recruitment/>}/><Route path="/reports" element={<Reports/>}/><Route path="/notifications" element={<Notifications/>}/><Route path="/settings" element={<Settings/>}/></Route>{['/login','/forgot-password','/verify-identity','/reset-password','/auth-success'].map(path=><Route key={path} path={path} element={<Auth/>}/>)}<Route path="*" element={<Navigate to="/dashboard" replace/>}/></Routes></Suspense></StoreProvider>}
