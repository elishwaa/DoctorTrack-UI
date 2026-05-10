"use client";
import { useState, useEffect, useCallback } from 'react';
import { doctorService } from '@/services/doctorService';
import DoctorTable from '@/components/doctors/DoctorTable';
import DoctorForm from '@/components/doctors/DoctorForm';

export default function DoctorPage() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  
  // Modals state
  const [formModal, setFormModal] = useState<{ open: boolean; data: any } | null>(null);
  const [statusModal, setStatusModal] = useState<{ id: string; current: string } | null>(null);

  const loadData = useCallback(async () => {
    const data = await doctorService.getAll(search, status);
    setDoctors(data);
  }, [search, status]);

  useEffect(() => { loadData(); }, [loadData]);

  // Update Status Logic
  const handleStatusUpdate = async (newStatus: string) => {
    if (statusModal) {
      await doctorService.updateStatus(statusModal.id, newStatus);
      setStatusModal(null);
      loadData();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Doctor Track</h1>
        <button onClick={() => setFormModal({ open: true, data: null })} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">
          + Add Doctor
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input placeholder="Search..." className="flex-1 border p-3 rounded-xl" onChange={e => setSearch(e.target.value)} />
      </div>

      <DoctorTable 
        doctors={doctors} 
        onEdit={(doc) => setFormModal({ open: true, data: doc })} 
        onChangeStatus={(id, current) => setStatusModal({ id, current })}
        onDelete={(id) => { if(confirm("Soft delete?")) doctorService.delete(id).then(loadData); }} 
      />

      {/* Profile Edit Modal (NO STATUS FIELD) */}
      {formModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">{formModal.data ? 'Edit Profile' : 'New Doctor'}</h2>
            <DoctorForm 
              initialData={formModal.data} 
              showStatusField={false} // We pass a prop to hide status
              onSubmit={async (data) => {
                formModal.data ? await doctorService.update(formModal.data.id, data) : await doctorService.create(data);
                setFormModal(null);
                loadData();
              }} 
              onCancel={() => setFormModal(null)} 
            />
          </div>
        </div>
      )}

      {/* Specific Status Change Modal */}
      {statusModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-80 shadow-2xl">
            <h2 className="font-bold mb-4">Change Status</h2>
            <div className="flex flex-col gap-2">
              {['Active', 'Suspended', 'Expired'].map((s) => (
                <button
                  key={s}
                  onClick={() => handleStatusUpdate(s)}
                  className={`p-2 rounded-lg border text-sm ${statusModal.current === s ? 'bg-blue-50 border-blue-500 font-bold' : 'hover:bg-gray-50'}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <button onClick={() => setStatusModal(null)} className="w-full mt-4 text-gray-500 text-sm">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}