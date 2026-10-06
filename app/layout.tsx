import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'OYLAN — учебная мастерская',description:'Методики осознанного обучения с ИИ: собственная попытка, подсказка и проверка понимания.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
