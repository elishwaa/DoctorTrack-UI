import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { StatusBadge } from "./StatusBadge";

export default function DoctorTable({ doctors, onEdit, onChangeStatus, onDelete }) {
  return (
    <div className="border rounded-xl bg-white overflow-hidden shadow-sm">
      <div className="max-h-125 overflow-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 sticky top-0 z-10 border-b">
            <tr>
              <th className="p-4">Doctor</th>
              <th className="p-4">License No</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {doctors.map((doc: { id: Key | null | undefined; status: string; fullName: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; specialization: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; licenseNumber: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
              <tr key={doc.id} className={doc.status === 'Expired' ? 'bg-red-100' : ''}>
                <td className="p-4">
                  <div className="font-bold">{doc.fullName}</div>
                  <div className="text-xs text-gray-500">{doc.specialization}</div>
                </td>
                <td className="p-4 font-mono text-sm text-gray-600">{doc.licenseNumber}</td>
                <td className="p-4">
                  <button 
                    onClick={() => onChangeStatus(doc.id, doc.status)}
                    className="hover:opacity-80 transition"
                  >
                    <StatusBadge status={doc.status} />
                  </button>
                </td>
                <td className="p-4 text-right space-x-3">
                  <button onClick={() => onEdit(doc)} className="text-blue-600 text-sm">Edit Profile</button>
                  <button onClick={() => onDelete(doc.id)} className="text-red-500 text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}