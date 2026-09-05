import type {Metadata} from 'next'; import './globals.css'; import Header from '@/components/Header'; import Footer from '@/components/Footer';
export const metadata:Metadata={title:{default:'Zelela Trading PLC | Consulting & Advisory',template:'%s | Zelela Trading PLC'},description:'Professional consulting, public health research, enterprise development, institutional advisory, and financial and compliance services in Ethiopia and East Africa.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
