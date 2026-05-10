const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:44355/api';

export const doctorService = {
  // GET: Fetches doctors using the Search and Filter parameters
  async getAll(search?: string, status?: string) {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (status) params.append('status', status);

    const res = await fetch(`${API_URL}/doctor?${params.toString()}`, {
      cache: 'no-store' // Ensures fresh data for the management module
    });
    if (!res.ok) throw new Error('Failed to fetch doctors');
    return res.json();
  },

  async getById(id: string) {
    const res = await fetch(`${API_URL}/doctor/${id}`);
    if (!res.ok) throw new Error('Doctor not found');
    return res.json();
  },

  async create(data: unknown) {
    const res = await fetch(`${API_URL}/doctor`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  async update(id: string, data: unknown) {
    const res = await fetch(`${API_URL}/doctor/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },
  
  async updateStatus(id: string, status: string) {
    const res = await fetch(`${API_URL}/doctor/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(status),
    });
    return res.json();
  },

  async delete(id: string) {
    const res = await fetch(`${API_URL}/doctor/${id}`, {
      method: 'DELETE',
    });
    return res.ok;
  }
};