"use client";
import { useState } from 'react';

export default function DoctorForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || '',
    email: initialData?.email || '',
    specialization: initialData?.specialization || '',
    licenseNumber: initialData?.licenseNumber || '',
    licenseExpiryDate: initialData?.licenseExpiryDate?.split('T')[0] || '',
    status: initialData?.status || 'Active'
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name *</label>
        <input required className="w-full border p-2 rounded mt-1" value={formData.fullName}
          onChange={e => setFormData({...formData, fullName: e.target.value})} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">License Number *</label>
          <input required disabled={!!initialData} className="w-full border p-2 rounded mt-1 disabled:bg-gray-100" 
            value={formData.licenseNumber} onChange={e => setFormData({...formData, licenseNumber: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date *</label>
          <input type="date" required className="w-full border p-2 rounded mt-1" 
            value={formData.licenseExpiryDate} onChange={e => setFormData({...formData, licenseExpiryDate: e.target.value})} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Specialization</label>
        <input className="w-full border p-2 rounded mt-1" value={formData.specialization}
          onChange={e => setFormData({...formData, specialization: e.target.value})} />
      </div>
      
      <div className="flex justify-end gap-3 pt-4 border-t">
        <button type="button" onClick={onCancel} className="text-gray-500 hover:underline">Cancel</button>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">Save Record</button>
      </div>
    </form>
  );
}